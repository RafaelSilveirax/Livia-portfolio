# Livia Portfolio — instruções para o Copilot

## Stack

- React com JavaScript (JSX)
- Vite
- Tailwind CSS para estilização
- CSS apenas para o que não é possível fazer com Tailwind

## Estrutura de pastas

```
src/
  sections/
    [nome]/
      index.js
      [Nome].jsx
      [nome].css          → apenas se necessário
      components/         → componentes filhos desta section
        [NomeFilho].jsx
        [nome-filho].css  → apenas se necessário
  components/
    ui/                   → apenas componentes usados em 2+ sections
  App.jsx
  main.jsx
```

## Sections do projeto

- home → Hero / apresentação principal
- about → Sobre mim
- portfolio → Projetos
- clients → Clientes
- contact → Contato

## Ao criar uma nova section, sempre:

1. Criar pasta `src/sections/[nome]/`
2. Criar `[Nome].jsx` como componente orquestrador da section
3. Criar `index.js` com `export { default } from './[Nome]'`
4. Criar `[nome].css` apenas se houver estilos impossíveis de fazer com Tailwind
5. Importar o CSS no componente apenas se o arquivo existir
6. Usar Tailwind para todo o restante de estilização
7. Adicionar `id="[nome]"` na tag section para navegação âncora

## Ao criar um componente filho de uma section:

1. Criar dentro de `src/sections/[nome]/components/`
2. Componente com responsabilidade única e pequena
3. Criar `[nome-filho].css` apenas se houver estilos impossíveis de fazer com Tailwind
4. Tailwind para todo o restante de estilização
5. Props sempre desestruturadas no parâmetro

## Ao criar um componente em components/ui/:

1. Apenas se o componente for reutilizado em 2 ou mais sections
2. Criar `[Nome].jsx`
3. Tailwind para todo o estilo
4. CSS separado apenas se impossível com Tailwind
5. Props sempre desestruturadas no parâmetro

## Ao refatorar qualquer arquivo existente:

1. Ler o arquivo atual antes de qualquer mudança
2. Apresentar o plano e aguardar confirmação
3. Mover para a estrutura correta de pastas
4. Converter estilização para Tailwind, removendo CSS que pode ser substituído
5. Nunca apagar lógica existente sem confirmar

## Regras gerais

- Tailwind é o padrão — CSS só para o que o Tailwind não consegue
- Nunca usar estilos inline
- Nunca criar arquivos fora da estrutura definida
- Nunca criar componentes grandes — dividir em componentes filhos pequenos
- Sempre perguntar antes de apagar qualquer arquivo
- Commits em portuguê
