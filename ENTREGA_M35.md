# Atualizar e entregar o M35 da EBAC

Este pacote contém o projeto completo corrigido. A publicação existente é:
https://efood-m35-independente-xdqn.vercel.app/

Repositório a atualizar:
https://github.com/mtgbcma-dotcom/efood-m35-independente

## 1. Colocar os arquivos na pasta correta

Extraia o ZIP. Abra a pasta **efood-m35-independente** que foi extraída: nela devem estar `package.json`, `index.html`, `src` e `tests`.

Na cópia local do repositório existente, substitua a pasta **src inteira** pela pasta corrigida. Copie também os demais arquivos do pacote para a raiz desse repositório, incluindo `package.json`, `package-lock.json`, `index.html`, `vite.config.js`, `vercel.json`, `tests`, `README.md`, `ENTREGA_M35.md` e `.gitignore`.

O arquivo de entrada se chama exatamente **index.html**. O arquivo enviado anteriormente como `index(1).html` não deve substituir esse nome.

A pasta raiz configurada na Vercel precisa ser a pasta que contém `package.json`.

## 2. Verificar no computador

No terminal do VS Code, dentro da pasta do repositório:

```bash
npm ci
npm test
npm run build
npm start
```

Abra o endereço local mostrado pelo Vite. Confira:

1. A Home tem seis cards e rodapé com logo, três links sociais e parágrafo.
2. Em “Saiba mais” da La Dolce Vita, aparecem **Italiana** e **La Dolce Vita Trattoria** como textos selecionáveis sobre a foto.
3. O rodapé também aparece no perfil; o parágrafo pode ser selecionado e os ícones são links separados.
4. É possível adicionar um produto, fechar o carrinho com Esc, voltar para Restaurantes, abrir novamente e atualizar a página sem perder o item.
5. Em tela pequena, o cabeçalho se reorganiza e o texto permanece legível.

Compare as duas páginas com o Figma antes do reenvio. A leitura automática do Figma não foi autorizada nesta revisão; não houve validação visual direta do novo código em navegador.

## 3. Atualizar o GitHub

Dentro da cópia local do mesmo repositório, execute:

```bash
git add .
git commit -m "Corrige banner e rodape do M35 com elementos reais"
git push origin main
```

A autenticação do GitHub é feita pelo seu próprio computador. Nesta revisão foi possível ler o repositório público, mas o envio de alterações ficou bloqueado por falta de autenticação de escrita.

Abra o GitHub e confirme que o commit novo está na branch **main** e que `src/components/Footer/index.jsx` contém elementos de HTML, os ícones SVG e o texto da plataforma.

## 4. Atualizar a Vercel existente

No projeto que usa o domínio informado, confira se o repositório Git conectado é `mtgbcma-dotcom/efood-m35-independente` e se a branch de produção é `main`.

Se essa integração estiver configurada, o novo push deve iniciar a publicação. Caso a publicação não inicie, abra o projeto existente na Vercel e acione uma nova implantação a partir do commit corrigido.

Use os valores:

| Configuração | Valor |
| --- | --- |
| Framework | Vite |
| Instalação | `npm ci` |
| Build | `npm run build` |
| Saída | `dist` |

Depois de a implantação concluir, abra:
https://efood-m35-independente-xdqn.vercel.app/restaurante/2

Confirme o banner e o rodapé, recarregue a página e teste “Restaurantes” e o carrinho. Verifique a publicação em uma janela anônima para conferir os arquivos novos.

## 5. Reenviar na EBAC

Envie os dois endereços na mesma entrega:

- Repositório: https://github.com/mtgbcma-dotcom/efood-m35-independente
- Vercel: https://efood-m35-independente-xdqn.vercel.app/

Faça o reenvio depois de confirmar que esses links mostram o commit e a publicação corrigidos.

## O que foi verificado nesta revisão

- Build de produção concluído.
- Testes de DOM do banner e rodapé nas duas páginas.
- Testes dos seis perfis e das regras CSS para telas menores.
- Testes de adicionar, navegar, recarregar, remover e recuperar armazenamento inválido no carrinho.
- A atualização remota e a comparação visual final com o Figma permanecem pendentes.
