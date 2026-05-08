# Engenharia de Interface — Aula 09

Projeto prático da disciplina **Engenharia de Interface (HTML5/CSS3)**, desenvolvido na Aula 09. Implementa os componentes principais de uma página web — Navbar, Cards e Footer — seguindo a arquitetura **ITCSS** com nomenclatura **BEM** e **CSS Custom Properties**.

## Objetivo

Construir uma página de "Disciplinas do Semestre" com:

- Navbar responsiva com hamburger menu animado
- Grade de cards com variante destaque
- Footer com grid de colunas
- Tokens de design centralizados em `variables.css`

## Tecnologias

- HTML5 semântico
- CSS3 (Custom Properties, Flexbox, Grid, Media Queries)
- JavaScript puro (ES6+)
- Google Fonts: Inter (400, 500, 700) e Poppins (700)

## Estrutura de Pastas

```
├── index.html
├── css/
│   ├── variables.css          # Tokens: cores, tipografia, espaçamento, sombras
│   ├── reset.css              # Normalização de estilos
│   ├── base.css               # Estilos base (body, headings, links)
│   ├── layout.css             # Container, grid responsivo de cards
│   ├── utilities.css          # Classes utilitárias
│   └── components/
│       ├── navbar.css         # Navbar fixa + hamburger + scroll
│       ├── card.css           # Card padrão e variante featured
│       ├── footer.css         # Footer com grid de colunas
│       └── btn.css            # Botões: primary, outline, ghost
└── js/
    └── main.js                # Hamburger toggle, scroll, ano do copyright
```

A ordem dos `<link>` no HTML segue a cascata ITCSS: **settings → generic → base → layout → components → utilities**.

## Como Executar

1. Abra a pasta no **VS Code**
2. Clique em **Go Live** (extensão Live Server) ou abra o `index.html` diretamente no navegador

Não há dependências externas nem etapa de build.

## Componentes

### Navbar

- Fixa no topo (`position: fixed`)
- Logo + links de navegação + botão CTA
- Em telas menores que 768px: links ficam ocultos e o botão hamburger aparece
- Hamburger animado com três linhas que viram um "X" ao abrir
- Fecha com clique fora, clique em um link ou tecla `Escape`
- Ao rolar mais de 80px, recebe a classe `.header--scrolled` que intensifica a sombra

### Cards

- Grid responsivo: 1 coluna (mobile) → 2 colunas (≥ 768px) → 3 colunas (≥ 1200px)
- Hover eleva o card com `transform: translateY` e sombra maior
- Variante `.card--featured`: fundo degradê, header colorido e badge "Destaque" — ocupa 2 colunas no desktop
- Cada card exibe: ícone, título, descrição, tags e barra de progresso

### Footer

- Fundo escuro (`#111827`)
- Grid de 4 colunas em desktop, 2 em tablet e 1 em mobile
- Colunas: Marca, Disciplinas, Recursos e Contato
- Ano do copyright gerado automaticamente via JavaScript

### Botões (desafio extra)

Três variantes controladas por CSS Custom Properties locais:

| Classe          | Aparência                        |
|-----------------|----------------------------------|
| `.btn--primary` | Fundo azul, texto branco         |
| `.btn--outline` | Borda azul, fundo transparente   |
| `.btn--ghost`   | Sem borda, fundo ao hover        |

Todos possuem estado `:focus-visible` com outline visível para acessibilidade.

## CSS Custom Properties

Todos os tokens ficam em `css/variables.css` dentro do seletor `:root`. Para verificar no DevTools:

```js
getComputedStyle(document.documentElement).getPropertyValue('--color-primary-500')
// retorna "#2E75B6"
```

## Professor

Jeofton Costa — Engenharia de Interface, 2026
