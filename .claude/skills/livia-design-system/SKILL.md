---
name: livia-design-system
description: Padrões de estilo, design tokens e convenções de Tailwind CSS v4 do livia-portfolio. Use sempre que estiver criando, editando ou revisando JSX/TSX, classes utilitárias, ou o index.css deste projeto. Garante que cores, fontes, breakpoints, glass effects e componentes reutilizáveis sigam o sistema centralizado em vez de valores soltos ou style={{}} inline.
---

# Livia Portfolio — Design System

Sistema de estilos do projeto. Tailwind v4 com tokens em `@theme` e utilities/components customizados em [src/index.css](../../../src/index.css). Tudo que esta skill descreve está implementado nesse arquivo — use-o como referência viva.

## Estrutura de pastas do projeto

```
src/
├── assets/                  # imagens estáticas (png, svg)
├── components/ui/           # componentes genéricos reutilizáveis (Menu, NavItem, SocialLinks…)
├── hooks/                   # hooks customizados (useFadeIn, useSnapScroll, useMenuState)
├── lib/utils.ts             # cn(), scrollToSection()
├── pages/Landing/           # página raiz — só monta layout + useSnapScroll
├── sections/
│   ├── home/                # Hero — HeroBackground + HeroCard
│   ├── about/               # About — AboutHighlights + AboutDecorativeBox
│   ├── portfolio/           # Portfolio — PortfolioCarousel + CarouselSectionBlock + …
│   └── contact/             # Contact — ContactInfo + ContactForm + ContactFooter
└── index.css                # design system (tokens, utilities, components)
```

Cada seção segue o padrão:
```
sections/<nome>/
├── <Nome>.tsx          # componente raiz da seção
├── index.ts            # re-export default
└── components/
    ├── <Sub>.tsx       # sub-componente
    └── index.ts        # re-export dos sub-componentes
```

Novo componente genérico → `components/ui/`. Nova seção → `sections/<nome>/` com essa mesma estrutura.

## Regra zero: leia o index.css antes de inventar

Antes de criar qualquer estilo novo, abra [src/index.css](../../../src/index.css) e procure se já existe um token, utility ou componente. Se existir, reutilize. Se não existir e o estilo aparecer em mais de um lugar, **crie no `index.css` primeiro** e depois consuma — não duplique.

## Tokens disponíveis

### Cores (use as classes Tailwind, nunca o hex)

| Token | Classe Tailwind |
|---|---|
| `--color-livia-navy-blue` (#294155) | `text-livia-navy-blue`, `bg-livia-navy-blue`, `border-livia-navy-blue` |
| `--color-livia-turquoise` (#3a9dab) | `text-livia-turquoise`, `bg-livia-turquoise`, etc |
| `--color-livia-dark-coral` (#d0493a) | `text-livia-dark-coral`, etc |
| `--color-livia-mustard` (#d99f2b) | `text-livia-mustard`, etc |
| `--color-livia-copper` (#cd6d32) | `text-livia-copper`, etc |
| `--color-background` (#ffffff) | `bg-background` |
| `--color-foreground` (#294155) | `text-foreground` |

**Nunca** use `#294155`, `#3a9dab`, etc hard-coded. Se precisar de uma variante de opacidade, use `text-livia-turquoise/70`, `bg-livia-navy-blue/15` etc.

### Fontes

Há duas fontes no projeto:

- **Playfair Display** → títulos, citações, destaques editoriais
- **Montserrat** → corpo, navegação, labels, botões, tudo que não é título

Acesse via:

- `font-serif` → Playfair Display (ou `--font-playfair`)
- `font-sans` → Montserrat (ou `--font-montserrat`)

`<h1>`/`<h2>`/`<h3>`/`<h4>` já recebem `font-serif` automaticamente via base layer — só sobrescreva se realmente precisar.

**Não use** `font-montserrat` / `font-playfair` diretamente. Use os roles (`font-sans` / `font-serif`).

### Breakpoints (sempre via token, nunca em px arbitrários)

| Token | Valor | Quando |
|---|---|---|
| `sm` | 600px | celular largo |
| `md` | 768px | tablet vertical |
| `nav` | 820px | switch desktop ↔ mobile do menu |
| `lg` | 900px | layouts 2-col → 1-col |
| `xl` | 1200px | container wide |

**Use** `max-sm:`, `max-md:`, `max-lg:`, `max-nav:`. **Não use** `max-[820px]:`, `max-[768px]:`, etc.

### Containers

- `max-w-page` → 1200px (seções principais)
- `max-w-content` → 1100px (Contact e similares)

Não escreva `max-w-[1200px]` em vários lugares.

## Animação fade-in por scroll

Todo elemento que deve aparecer ao entrar na viewport usa o hook `useFadeIn` de [src/hooks/useFadeIn.ts](../../../src/hooks/useFadeIn.ts):

```tsx
import { useFadeIn } from "../../hooks/useFadeIn.js";

function MySection() {
  const ref = useFadeIn();
  return <div ref={ref} className="fade-in">...</div>;
}
```

As classes `fade-in` e `fade-visible` estão definidas em `index.css` — não redefina em componentes. Valores válidos:
- `fade-in` → estado inicial (invisível, deslocado 28px para baixo)
- `fade-visible` → estado final (visível, sem deslocamento) — adicionada automaticamente pelo hook

O hook observa o elemento dentro do container `#scroll-container`. O threshold padrão é `0.01` (suficiente para trigger quase imediato). Passe um valor maior (`0.3`) se quiser que o elemento fique mais visível antes de animar.

## Animações do hero (entrada + decorativas)

Além do fade-in por scroll, existe a família `hero-*` definida em [src/index.css](../../../src/index.css). São classes utilitárias diretas (não dependem de hook) — aplique no `className`. **Não redefina esses keyframes em componentes.** Todas já são desligadas automaticamente sob `prefers-reduced-motion: reduce`.

| Classe | Efeito | Onde usar |
|---|---|---|
| `hero-rise` | Entrada: sobe 24px + fade-in, uma vez (`forwards`) | Elementos que aparecem na carga do Hero |
| `hero-color-cycle` | A paleta da marca (turquesa → mostarda → cobre → coral) corre pelo texto, em loop. Recorta no texto (`background-clip`) | Destacar **uma palavra** — usado no "Ballai" do Hero e reusado em About/Contact |
| `hero-float` | Flutuação vertical suave em loop; respeita `--rot` para manter rotação | SVGs/ícones decorativos ao redor do título |
| `hero-spin` | Rotação 360° lenta e infinita (22s) | O selo circular giratório ("PORTFOLIO • 2026") |

**Stagger de entrada** — para escalonar vários `hero-rise`, use `style={{ animationDelay: "0.2s" }}` (essa é a exceção legítima ao "sem `style` inline": é valor de timing, não estilo estático):

```tsx
<h1 className="hero-rise" style={{ animationDelay: "0.2s" }}>…</h1>
```

**Destaque de palavra com a paleta** — `hero-color-cycle` é a forma canônica de fazer uma palavra "brilhar" com as cores da marca, dentro de um título. Em texto que normalmente não é itálico, combine com `not-italic` se precisar:

```tsx
<span className="hero-color-cycle italic">Ballai</span>
<em className="not-italic hero-color-cycle">trabalhar</em>
```

**Rotação decorativa** — passe o ângulo de repouso via CSS var, não via `rotate-*`, para o `hero-float` preservá-lo no loop:

```tsx
<svg className="hero-float" style={{ ["--rot" as string]: "12deg" }}>…</svg>
```

`hero-rise` também pode ser disparada inline como animação Tailwind arbitrária quando você precisa de uma duração diferente (ex.: feedback de formulário): `animate-[hero-rise_0.35s_ease-out_both]`.

## Utilities customizadas (`@utility`)

Estas existem em [src/index.css](../../../src/index.css). Reuse antes de criar `style={{}}`:

| Utility | Uso |
|---|---|
| `glass-nav` | Nav fixo desktop, blur 16px sobre navy 70% |
| `glass-mobile` | Drawer mobile, blur 12px sobre navy 50% |
| `glass-card` | Card padrão sobre fundo escuro |
| `glass-card-accent` | Card com borda turquesa (ênfase) |
| `glass-tag` | Pill com borda turquesa, fundo branco translúcido |
| `glass-social` | Botão social com borda branca translúcida |
| `glass-field` | Inputs e textareas |
| `glass-form` | Card grande do formulário |
| `tag-turquoise` | Fundo + borda turquesa (combina com `tag-pill`) |
| `hero-overlay` | Gradient escurecido sobre o hero |

Se você se encontrar escrevendo `color-mix(in srgb, ...)` em um JSX, **pare** — isso é sinal de que precisa virar uma utility no `index.css`.

## Componentes reutilizáveis (`@layer components`)

| Classe | Uso |
|---|---|
| `text-eyebrow` | Pequeno label uppercase turquesa acima do título de seção |
| `text-section-title` | `<h2>` de seção, `clamp(2rem, 3vw, 3rem)` |
| `text-body` | Parágrafo padrão (`text-[0.97rem]`, leading-1.8) |
| `text-quote` | Citação em itálico Playfair |
| `tag-pill` | Pill base (combina com `tag-turquoise`, `glass-tag`, etc) |
| `btn-primary` | Botão arredondado com hover lift |
| `btn-pill-cta` | CTA pill branca com texto uppercase turquesa + ícone circular; hover inverte cores e sobe 3px (ex.: "Sobre mim" do Hero) |
| `btn-pill-cta__icon` | A bolinha turquesa do ícone dentro do `btn-pill-cta`; inverte sozinha no `:hover` do pai |

`btn-pill-cta` espera o texto seguido de um `<span class="btn-pill-cta__icon">` com um ícone dentro:

```tsx
import { IoArrowDown } from "react-icons/io5";

<a href="#about" className="btn-pill-cta">
  Sobre mim
  <span className="btn-pill-cta__icon" aria-hidden="true">
    <IoArrowDown className="w-4 h-4" />
  </span>
</a>
```

## Ícones

A biblioteca de ícones do projeto é **`react-icons/io5`** (Ionicons 5). É a única fonte de ícones — não traga outro pacote (`lucide`, `heroicons`, etc) nem cole SVG de ícone solto quando já houver equivalente no `io5`.

```tsx
import { IoArrowDown, IoSparkles } from "react-icons/io5";

<IoArrowDown className="w-4 h-4 text-livia-turquoise" />
```

- Tamanho e cor sempre por classe Tailwind (`w-4 h-4`, `text-livia-*`), nunca via props `size`/`color`.
- Ícone puramente decorativo → `aria-hidden="true"`. Ícone que carrega significado sozinho → dê um `aria-label`.
- Para tipar um ícone passado por prop/dado, use `IconType`:

```tsx
import type { IconType } from "react-icons";

type Skill = { label: string; icon: IconType };
```

Ícones em uso pelo projeto (não reinvente): `IoArrowDown`, `IoSparkles`, `IoChevronBack`, `IoChevronForward`, `IoClose`, `IoPaperPlane`, `IoCheckmarkCircle`, `IoAlertCircle`.

### A estrela `✦` (motivo decorativo)

O caractere `✦` (U+2726, "black four pointed star") é o ornamento de marca recorrente — separadores entre disciplinas, acento do eyebrow, detalhe do selo. É **texto**, não ícone `io5`: estilize com classes de cor e tamanho da paleta.

```tsx
<span className="text-livia-mustard text-xl" aria-hidden="true">✦</span>
```

Use as cores da marca (`text-livia-mustard`, `text-livia-dark-coral`, `text-livia-copper`) e sempre `aria-hidden="true"` — é decorativo.

## Padrões de código

### NÃO faça `style={{}}` inline para algo que Tailwind resolve

```tsx
// ❌ Errado
<div style={{ borderRadius: "16px", padding: "14px 16px" }} />

// ✅ Certo
<div className="rounded-2xl px-4 py-3.5" />
```

A única exceção legítima é valor **dinâmico computado em runtime** (ex.: `transform: translateX(calc(...))` baseado em estado). Mesmo assim, mantenha apenas a propriedade dinâmica em `style`, e o resto em `className`.

### NÃO use hover handlers em JS

```tsx
// ❌ Errado
onMouseEnter={(e) => e.currentTarget.style.background = "#3a9dab"}

// ✅ Certo
className="bg-livia-turquoise/10 hover:bg-livia-turquoise"
```

### Use `cn()` para className condicional

`src/lib/utils.ts` já exporta um `cn` que combina `clsx` + `tailwind-merge`. Use sempre que houver classes condicionais — evita duplicatas de classes Tailwind conflitantes.

```tsx
import { cn } from "../../lib/utils.js";

className={cn(
  "px-4 py-1.5 rounded-lg",
  isActive && "bg-white/20 backdrop-blur-md",
  className,
)}
```

### Classes longas: extraia para const no topo do arquivo

Quando o `className` ficar grande e for reusado, extraia:

```tsx
const FIELD_CLASS =
  "glass-field rounded-xl px-4 py-3 font-sans text-sm text-white ...";
```

Não crie um arquivo separado pra isso — fica no topo do componente que o usa.

### Prefira classes canônicas do Tailwind v4

| Não use | Use |
|---|---|
| `h-[2px]` | `h-0.5` |
| `aspect-[4/3]` | `aspect-4/3` |
| `bg-gradient-to-r` | `bg-linear-to-r` |
| `duration-[350ms]` | `duration-350` |
| `ease-[cubic-bezier(0.4,0,0.2,1)]` | `ease-in-out` |
| `rounded-[20px]` | `rounded-3xl` (verifique o token mais próximo) |

O linter do VS Code aponta essas — preste atenção nos warnings.

### Spacing arbitrário só quando o design exige

`px-4`, `py-3`, `gap-6` etc cobrem 95% dos casos. Use `[clamp(...)]` apenas quando o design pede tipografia/spacing fluido explicitamente (hero hero, títulos de seção).

## Quando criar algo novo

1. **Cor nova** → adicione `--color-livia-*` no `@theme` do `index.css`. Não defina cores fora dele.
2. **Glass effect novo** → vire `@utility glass-*` no `index.css`.
3. **Estilo de texto reutilizado 2+ vezes** → vire `text-*` em `@layer components`.
4. **Botão variante** → vire `btn-*` em `@layer components`, ou estenda `btn-primary` com classes adicionais.
5. **Breakpoint novo** → adicione em `--breakpoint-*` no `@theme`. Não use `max-[Npx]:`.
6. **Ícone novo** → importe de `react-icons/io5`. Não adicione outra lib nem cole SVG quando já houver no `io5`.
7. **Animação reutilizável** → vire um `@keyframes` + classe (`hero-*` ou afim) no `index.css`. Não defina keyframes dentro de componentes.

## Scroll e navegação

O scroll entre seções é gerenciado por [src/hooks/useSnapScroll.ts](../../../src/hooks/useSnapScroll.ts), que faz snap suavizado por wheel e touch. Não use `scroll-snap` CSS — o scroll é 100% controlado pelo hook.

Para navegar programaticamente entre seções (ex.: botão "Ver Portfólio"), use:

```tsx
import { scrollToSection } from "../../lib/utils.js";

scrollToSection("portfolio"); // ID da section
```

As seções usam IDs fixos: `home`, `about`, `portfolio`, `contact`. Não renomeie sem atualizar o hook de snap.

## Checklist antes de fechar uma edição

- [ ] Sem `style={{}}` que poderia ser Tailwind
- [ ] Sem `font-montserrat` / `font-playfair` (use `font-sans` / `font-serif`)
- [ ] Sem `max-[Npx]:` (use os tokens `sm`/`md`/`lg`/`nav`)
- [ ] Sem cores hex hard-coded
- [ ] Sem `color-mix(...)` em JSX (vire utility)
- [ ] Sem hover handlers JS para algo puramente visual
- [ ] Ícones só de `react-icons/io5` (tamanho/cor por classe, decorativos com `aria-hidden`)
- [ ] Sem `@keyframes` definido dentro de componente (vire classe no `index.css`)
- [ ] `cn()` usado em qualquer className condicional
- [ ] `npm run build` passa
- [ ] `npx tsc --noEmit` passa

## Validação rápida

```bash
npm run build       # vite build — deve completar sem erro
npx tsc --noEmit    # checagem de tipos — deve sair em silêncio
```

`npm run lint` está com config quebrada no projeto (problema pré-existente, não relacionado ao design system).
