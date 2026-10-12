import assert from 'node:assert/strict'
import test from 'node:test'
import React, { act } from 'react'
import { createRoot } from 'react-dom/client'
import { renderToStaticMarkup } from 'react-dom/server'
import { MemoryRouter } from 'react-router-dom'
import { StaticRouter } from 'react-router-dom/server.js'
import { ServerStyleSheet } from 'styled-components'
import { JSDOM } from 'jsdom'
import App from '../src/App'
import { CartProvider } from '../src/context/CartContext'
import { GlobalStyle } from '../src/styles'

const storageKey = 'efood-m35-cart'

function inspectPage(path) {
  const sheet = new ServerStyleSheet()
  try {
    const html = renderToStaticMarkup(sheet.collectStyles(
      <>
        <GlobalStyle />
        <CartProvider>
          <StaticRouter location={path}><App /></StaticRouter>
        </CartProvider>
      </>
    ))
    const doc = new JSDOM(html).window.document
    return { doc, css: sheet.getStyleTags() }
  } finally {
    sheet.seal()
  }
}

function checkFooter(doc) {
  const footer = doc.querySelector('footer')
  assert.ok(footer, 'As duas páginas precisam de um footer HTML')
  assert.equal(footer.querySelectorAll('img').length, 1, 'Somente a marca deve ser uma imagem no rodapé')
  assert.equal(footer.querySelector('img').alt, 'efood')
  assert.equal(footer.querySelector('a').getAttribute('href'), '/')
  const links = [...footer.querySelectorAll('nav a')]
  assert.deepEqual(links.map(link => link.getAttribute('aria-label')), ['Instagram', 'Facebook', 'Twitter'])
  assert.ok(links.every(link => link.querySelector('svg') && link.getAttribute('href').startsWith('https://')))
  assert.match(footer.querySelector('p').textContent, /responsabilidade pela entrega, qualidade dos produtos/)
  assert.equal(footer.querySelectorAll('img[src*="footer-figma"]').length, 0)
}

test('Home: seis restaurantes e rodapé com elementos reais', () => {
  const { doc, css } = inspectPage('/')
  assert.match(doc.querySelector('h1').textContent, /Viva experiências gastronômicas/)
  assert.equal(doc.querySelectorAll('main article').length, 6)
  assert.equal(doc.querySelectorAll('main a').length, 6)
  checkFooter(doc)
  assert.match(css, /min-height:298px/)
  assert.match(css, /max-width:480px/)
})

test('Perfil: categoria e nome são texto HTML visível, sobre uma foto', () => {
  const { doc, css } = inspectPage('/restaurante/2')
  const banner = doc.querySelector('section[aria-labelledby="restaurant-name"]')
  assert.ok(banner)
  assert.equal(banner.querySelector('h1').textContent, 'La Dolce Vita Trattoria')
  assert.equal(banner.querySelector('p').textContent, 'Italiana')
  assert.equal(banner.querySelectorAll('.sr-only').length, 0, 'O texto do banner não pode ficar escondido')
  assert.equal(banner.querySelectorAll('img').length, 0, 'O banner completo não pode ser uma captura de tela')
  assert.match(css, /background-image:url\('/)
  assert.match(css, /color:#FFFFFF/)
  assert.match(css, /height:280px/)
  assert.match(css, /font-weight:100/)
  assert.match(css, /font-weight:900/)
  assert.equal(doc.querySelectorAll('main article').length, 6)
  checkFooter(doc)
})

test('Todos os perfis válidos carregam com título visível e rodapé', () => {
  for (const id of [1, 2, 3, 4, 5, 6]) {
    const { doc } = inspectPage('/restaurante/' + id)
    const title = doc.querySelector('#restaurant-name')
    assert.ok(title?.textContent.trim())
    assert.ok(!title.classList.contains('sr-only'))
    checkFooter(doc)
  }
})

test('CSS inclui grades e ajustes para telas pequenas', () => {
  const { css } = inspectPage('/restaurante/2')
  assert.match(css, /repeat\(3,\s*minmax\(0,\s*1fr\)\)/)
  assert.match(css, /@media\s*\(max-width:\s*880px\)/)
  assert.match(css, /@media\s*\(max-width:\s*580px\)/)
  assert.match(css, /@media\s*\(max-width:\s*680px\)/)
  assert.match(css, /overflow-wrap:anywhere/)
})

test('Carrinho: adicionar, voltar, reabrir, recarregar e remover', async () => {
  const dom = new JSDOM('<div id="root"></div>', { url: 'http://localhost/restaurante/2' })
  globalThis.window = dom.window
  globalThis.document = dom.window.document
  globalThis.HTMLElement = dom.window.HTMLElement
  globalThis.IS_REACT_ACT_ENVIRONMENT = true
  let scrollCalls = 0
  window.scrollTo = () => { scrollCalls += 1 }
  let root

  const mount = async (path = '/restaurante/2') => {
    root = createRoot(document.querySelector('#root'))
    await act(async () => root.render(
      <MemoryRouter initialEntries={[path]} future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <CartProvider><GlobalStyle /><App /></CartProvider>
      </MemoryRouter>
    ))
  }
  const click = async (element) => {
    assert.ok(element, 'O controle precisa existir')
    await act(async () => element.dispatchEvent(new window.MouseEvent('click', { bubbles: true, cancelable: true })))
  }
  const close = async () => {
    await act(async () => window.dispatchEvent(new window.KeyboardEvent('keydown', { key: 'Escape', bubbles: true })))
  }
  const findButton = (text) => [...document.querySelectorAll('button')].find(button => button.textContent.includes(text))

  try {
    await mount()
    await click(findButton('Adicionar ao carrinho'))
    assert.ok(document.querySelector('[role="dialog"]'))
    assert.equal(JSON.parse(window.localStorage.getItem(storageKey)).length, 1)
    assert.match(document.querySelector('[role="dialog"]').textContent, /60,90/)
    await close()
    assert.equal(document.querySelector('[role="dialog"]'), null)
    await click([...document.querySelectorAll('a')].find(link => link.textContent === 'Restaurantes'))
    assert.match(document.querySelector('h1').textContent, /Viva experiências/)
    await click(document.querySelector('a[href="/restaurante/2"]'))
    assert.match(findButton('produto(s)').textContent, /1 produto/)
    assert.ok(scrollCalls >= 3, 'Cada navegação deve levar o visitante ao início da página')
    await act(async () => root.unmount())
    await mount()
    assert.match(findButton('produto(s)').textContent, /1 produto/, 'O carrinho deve sobreviver ao recarregamento')
    await click(findButton('produto(s)'))
    await click(document.querySelector('button[aria-label="Remover Pizza Marguerita"]'))
    assert.match(document.querySelector('[role="dialog"]').textContent, /carrinho está vazio/)
    assert.deepEqual(JSON.parse(window.localStorage.getItem(storageKey)), [])
    await close()

    await act(async () => root.unmount())
    window.localStorage.setItem(storageKey, 'null')
    await mount()
    assert.match(findButton('produto(s)').textContent, /0 produto/)
    await act(async () => root.unmount())
    window.localStorage.setItem(storageKey, '{JSON inválido')
    await mount()
    assert.match(findButton('produto(s)').textContent, /0 produto/)
    await act(async () => root.unmount())
    await mount('/restaurante/999')
    assert.match(document.querySelector('h1').textContent, /Viva experiências/)
  } finally {
    if (root) await act(async () => root.unmount())
    dom.window.close()
    delete globalThis.window
    delete globalThis.document
    delete globalThis.HTMLElement
    delete globalThis.IS_REACT_ACT_ENVIRONMENT
  }
})
