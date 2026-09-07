# Site Vert Genèse

## O que editar
Praticamente tudo o que muda no dia a dia está em **dados.js**:
publicações, patentes, matérias na mídia, equipe, produtos e contato.
Para acrescentar um item, copie um bloco `{ ... }` inteiro, cole embaixo
e troque o texto. As páginas se montam sozinhas a partir dessa lista.

O menu fica em **site.js**, na lista `MENU` (primeiras linhas).
As cores e o layout ficam em **estilo.css**.

## Fotos
Coloque os arquivos na pasta `imagens/` e informe o caminho no campo
`img`, por exemplo: `img:"imagens/mfc-arroz.jpg"`.

## Publicar no GitHub Pages
1. Crie um repositório novo (pode ser público).
2. Envie todos estes arquivos para a raiz do repositório.
3. Settings > Pages > Source: `Deploy from a branch`, branch `main`, pasta `/ (root)`.
4. O site sai no ar em `https://SEUUSUARIO.github.io/NOMEDOREPO/`.
5. Para usar domínio próprio: Settings > Pages > Custom domain, e aponte o
   DNS do domínio para o GitHub Pages conforme a instrução exibida ali.

## Para atualizar depois
Abra o arquivo `dados.js` pelo próprio site do GitHub, clique no lápis,
edite, confirme. Em cerca de um minuto o site no ar já está atualizado.

## Ver antes de publicar
Abra `index.html` com dois cliques. Funciona offline, sem servidor.
