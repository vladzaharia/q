import { Injectable } from '@angular/core';

import { QLogo } from '../components/q.logo.component';

@Injectable()
export class QLogoService {
  getAllLogos(theme?: string): QLogo[] {
    if (theme === "white") {
      return DEFAULT_LOGOS_WHITE
    }

    return DEFAULT_LOGOS;
  }

  getLogo(color: string, theme?: string): QLogo {
    if (theme === "white") {
      return DEFAULT_LOGOS_WHITE.filter((logo: QLogo) => { return logo.colorName === color; })[0];
    }
    
    return DEFAULT_LOGOS.filter((logo: QLogo) => { return logo.colorName === color; })[0];
  }
}

export const DEFAULT_LOGO: QLogo = { colorName: "defualt", circleColor: "#FFFFFF", dotColor: "#FFFFFF" };

const DEFAULT_LOGOS: QLogo[] = [
    { colorName: "black", circleColor: "#000000", dotColor: "#000000" },
    { colorName: "grey", circleColor: "#181818", dotColor: "#808285" },
    { colorName: "blue", circleColor: "#0a4468", dotColor: "#188bc5" },
    { colorName: "green", circleColor: "#196734", dotColor: "#4cb749" },
    { colorName: "phs", circleColor: "#00463c", dotColor: "#f4ec54" }
]

const DEFAULT_LOGOS_WHITE: QLogo[] = [
    { colorName: "black", circleColor: "#FFFFFF", dotColor: "#FFFFFF" },
    { colorName: "grey", circleColor: "#FFFFFF", dotColor: "#808285" },
    { colorName: "blue", circleColor: "#FFFFFF", dotColor: "#188bc5" },
    { colorName: "green", circleColor: "#FFFFFF", dotColor: "#4cb749" },
    { colorName: "phs", circleColor: "#FFFFFF", dotColor: "#f4ec54" }
]