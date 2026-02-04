import localFont from "next/font/local";

export const CalSansText = localFont({
  src: [
    { path: "./fonts/CalSansText-Light.woff2", weight: "300" },
    { path: "./fonts/CalSansText-Regular.woff2", weight: "400" },
    { path: "./fonts/CalSansText-Medium.woff2", weight: "500" },
    { path: "./fonts/CalSansText-SemiBold.woff2", weight: "600" },
    { path: "./fonts/CalSansText-Bold.woff2", weight: "700" },
  ],
  variable: "--font-cal-sans-text",
});
