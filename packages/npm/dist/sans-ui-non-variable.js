import localFont from "next/font/local";

export const CalSansUINonVariable = localFont({
  src: [
    { path: "./fonts/CalSansUI-Light.woff2", weight: "300" },
    { path: "./fonts/CalSansUI-Regular.woff2", weight: "400" },
    { path: "./fonts/CalSansUI-Medium.woff2", weight: "500" },
    { path: "./fonts/CalSansUI-SemiBold.woff2", weight: "600" },
    { path: "./fonts/CalSansUI-Bold.woff2", weight: "700" },
  ],
  variable: "--font-cal-sans-ui-non-variable",
});
