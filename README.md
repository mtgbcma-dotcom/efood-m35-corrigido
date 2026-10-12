# efood — M35 EBAC: banner e rodapé

Projeto React com Styled Components e React Router, corrigido a partir do repositório existente:
https://github.com/mtgbcma-dotcom/efood-m35-independente

## Correções

- O banner do restaurante usa uma fotografia como fundo e textos HTML visíveis para a categoria e o nome, com cor branca e as fontes de peso 100 e 900.
- O rodapé é um componente HTML com logo, navegação social, três ícones SVG e parágrafo selecionável. Está presente nas duas páginas.
- As capturas completas do banner e do rodapé foram retiradas dos assets.
- O cabeçalho do perfil se adapta a telas pequenas.
- A navegação inicia cada página no topo.
- A fonte Roboto é empacotada no build; não depende do Google Fonts durante a visita.
- O carrinho mantém os itens ao navegar e recarregar. Dados inválidos no armazenamento não derrubam a página.

## Executar

```bash
npm ci
npm start
```

## Verificar e construir

```bash
npm test
npm run build
```

Os testes verificam a estrutura HTML das páginas, o banner, o rodapé, as regras CSS responsivas e o fluxo do carrinho (adicionar, navegar, recarregar e remover). São testes de DOM e CSS; não substituem a comparação visual em um navegador.

## Publicação

- Framework: Vite
- Comando de instalação: `npm ci`
- Comando de build: `npm run build`
- Diretório de saída: `dist`
- O `vercel.json` permite abrir e atualizar diretamente `/restaurante/2`.

O procedimento para atualizar o projeto existente e reenviar os dois links está em **ENTREGA_M35.md**.

## Referência e limite de verificação

Figma informado:
https://www.figma.com/file/JjduV2Tg713TzYUUsees8b/efood?node-id=0-1

A leitura automática desse Figma não foi liberada pela integração, que exigiu permissão de edição. As correções usam os componentes, fotos, padrões e referências já presentes no projeto. A comparação visual direta com o arquivo Figma continua pendente.
