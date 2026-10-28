# Apex Track Day

Site de um clube fictício de *track day* (dias de pista em autódromo), feito com **HTML** e **Sass (SCSS)**.

## Recursos do Sass usados

| Recurso | Onde |
|---|---|
| Variáveis (cores, fontes, medidas) | `scss/_variaveis.scss` |
| Mapas (`$breakpoints`, `$categorias`) | `scss/_variaveis.scss` |
| Função própria (`rem()`) | `scss/_funcoes.scss` |
| Mixins com parâmetros e `@content` (`botao`, `flex`, `responsivo`) | `scss/_mixins.scss` |
| Placeholders + `@extend` (`%cartao`, `%titulo-corrida`) | `scss/_mixins.scss` |
| Laço `@each` gerando classes por categoria | `scss/_base.scss`, `scss/_eventos.scss` |
| Aninhamento e `&` (BEM: `.evento__data`, `.botao--primario`) | todos os partials |
| Organização em partials com `@use` | `style.scss` |

## Estrutura

```
Projeto-Sass/
├── index.html
├── style.scss        ← arquivo principal (junta os partials)
├── style.css         ← gerado pelo Sass
└── scss/
    ├── _variaveis.scss
    ├── _funcoes.scss
    ├── _mixins.scss
    ├── _base.scss
    ├── _header.scss
    ├── _hero.scss
    ├── _eventos.scss
    ├── _planos.scss
    └── _footer.scss
```

## Como rodar

```bash
npm install
npm run sass   # observa o style.scss e gera o style.css
```

Depois é só abrir o `index.html` no navegador.
