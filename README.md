# eFood — M35 (reenvio final)

Projeto React desenvolvido para o exercício M35 da EBAC, com foco em fidelidade ao layout de referência.

## Requisitos do exercício

- React
- Styled Components
- React Router DOM
- duas páginas (lista de restaurantes e perfil do restaurante)
- projeto preparado para publicação na Vercel

## Correções aplicadas no reenvio

- imagens revisadas para evitar textos/etiquetas duplicadas ou sobrepostas;
- fonte Roboto empacotada pelo projeto via `@fontsource/roboto`;
- logo e fundos do material de referência usados nas dimensões corretas;
- Home ajustada para a malha 2 colunas do Figma;
- página de restaurante ajustada para header de 163 px, hero de 280 px e grid de 3 colunas;
- carrinho lateral ajustado ao layout de referência;
- estado do carrinho movido para Context API;
- itens persistidos em `localStorage`, portanto não se perdem ao voltar para a página de restaurantes nem ao atualizar o navegador.

## Rodar localmente

```bash
npm install
npm start
```

## Build

```bash
npm run build
```

## Vercel

- Framework: Vite
- Build Command: `npm run build`
- Output Directory: `dist`
