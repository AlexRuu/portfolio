import { Poppins } from "next/font/google";
import { Yeseva_One } from "next/font/google";

export const poppins = Poppins({
  weight: "500",
  subsets: ["latin", "latin"],
});

export const poppins_light = Poppins({
  weight: "400",
  subsets: ["latin", "latin"],
});

export const poppins_bold = Poppins({
  weight: "600",
  subsets: ["latin", "latin"],
});

export const yeseva_one = Yeseva_One({
  weight: ["400"],
  subsets: ["latin", "cyrillic"],
});
