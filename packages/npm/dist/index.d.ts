interface NextFont {
  className: string;
  style: { fontFamily: string; fontWeight?: number | string; fontStyle?: string };
  variable: string;
}

declare module "cal-sans-ui/font" {
  export const CalSansUI: NextFont;
  export const CalSansUINonVariable: NextFont;
  export const CalSansText: NextFont;
}

declare module "cal-sans-ui/font/ui" {
  export const CalSansUI: NextFont;
}

declare module "cal-sans-ui/font/ui-non-variable" {
  export const CalSansUINonVariable: NextFont;
}

declare module "cal-sans-ui/font/text" {
  export const CalSansText: NextFont;
}
