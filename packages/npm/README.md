# @calcom/cal-sans-ui

Cal Sans UI and Cal Sans Text typefaces for [Cal.com](https://cal.com), as an npm package for Next.js and any app that can import CSS.

## Install

```bash
npm i @calcom/cal-sans-ui
```

**Next.js:** peer dependency Next.js 13.2+

## How to import

**Next.js (App Router):**

```tsx
import { CalSansUI } from "@calcom/cal-sans-ui/ui";
import { CalSansText } from "@calcom/cal-sans-ui/text";
// or: import { CalSansUI, CalSansText } from "@calcom/cal-sans-ui";
```

**Any other app (Vite, CRA, etc.):**

```tsx
import "@calcom/cal-sans-ui/ui.css";
import "@calcom/cal-sans-ui/text.css";
```

Then use `font-family: "Cal Sans UI"` or `font-family: "Cal Sans Text"` in your CSS.

## Usage (Next.js App Router)

Next.js requires font loaders to be called at module scope, so you use the exported font objects directly:

```tsx
import { CalSansUI } from "@calcom/cal-sans-ui/ui";
import { CalSansText } from "@calcom/cal-sans-ui/text";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${CalSansUI.variable} ${CalSansText.variable}`}>
      <body>{children}</body>
    </html>
  );
}
```

Use the CSS variables in Tailwind or CSS:

```css
body {
  font-family: var(--font-cal-sans-text), sans-serif;
}
h1, h2 {
  font-family: var(--font-cal-sans-ui), sans-serif;
}
```

Or apply the font class directly:

```tsx
<h1 className={CalSansUI.className}>Heading</h1>
<p className={CalSansText.className}>Body text</p>
```

## Non-Next.js (Vite, CRA, etc.)

Import the CSS and use the font family names:

```ts
// In your app entry (e.g. main.tsx, App.tsx)
import "@calcom/cal-sans-ui/ui.css";
import "@calcom/cal-sans-ui/text.css";
```

```css
body {
  font-family: "Cal Sans Text", sans-serif;
}
h1, h2 {
  font-family: "Cal Sans UI", sans-serif;
}
```

For browsers that don’t support variable fonts, use the static UI CSS instead:

```ts
import "@calcom/cal-sans-ui/ui-non-variable.css";
```

## Exports

| Import | Description |
|--------|-------------|
| `@calcom/cal-sans-ui` | Next: `CalSansUI`, `CalSansUINonVariable`, `CalSansText` (all in one). |
| `@calcom/cal-sans-ui/ui` | Next: `CalSansUI` (variable). **Preferred.** |
| `@calcom/cal-sans-ui/ui-non-variable` | Next: `CalSansUINonVariable` (static UI). |
| `@calcom/cal-sans-ui/text` | Next: `CalSansText` (static). |
| `@calcom/cal-sans-ui/ui.css` | CSS: variable font, use `font-family: "Cal Sans UI"`. |
| `@calcom/cal-sans-ui/ui-non-variable.css` | CSS: static UI weights. |
| `@calcom/cal-sans-ui/text.css` | CSS: use `font-family: "Cal Sans Text"`. |

## License

SIL Open Font License 1.1. See [OFL.txt](./OFL.txt).
