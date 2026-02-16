import { vars } from "nativewind";

export const config = {
  light: vars({
    /* ========== Background ========== */
    "--color-background": "246 246 246", // main bg (soft gray)
    "--color-card": "255 255 255", // white cards
    "--color-card-muted": "242 241 241",

    /* ========== Primary (Blue Header Gradient) ========== */
    "--color-primary-500": "59 130 246", // blue
    "--color-primary-700": "37 99 235", // darker blue

    /* ========== Text ========== */
    "--color-text-primary": "23 23 23", // main text
    "--color-text-secondary": "115 115 115",

    /* ========== Success (Check In Green) ========== */
    "--color-success": "34 197 94",

    /* ========== Border / Outline ========== */
    "--color-border": "230 230 230",

    /* ========== Icon Background Colors ========== */
    "--color-info": "13 166 242",
    "--color-warning": "231 120 40",
    "--color-purple": "168 85 247",
    "--color-green": "16 185 129",
  }),

  dark: vars({
    /* ========== Background ========== */
    "--color-background": "17 24 39", // deep navy bg
    "--color-card": "28 41 61", // dark card
    "--color-card-muted": "35 53 80",

    /* ========== Primary (Blue Header Gradient) ========== */
    "--color-primary-500": "59 130 246",
    "--color-primary-700": "37 99 235",

    /* ========== Text ========== */
    "--color-text-primary": "245 245 245", // white text
    "--color-text-secondary": "163 163 163",

    /* ========== Success ========== */
    "--color-success": "34 197 94",

    /* ========== Border ========== */
    "--color-border": "55 65 81",

    /* ========== Icon Colors ========== */
    "--color-info": "50 180 244",
    "--color-warning": "251 149 75",
    "--color-purple": "192 132 252",
    "--color-green": "52 211 153",
  }),
};
