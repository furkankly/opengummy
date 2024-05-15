import { camelCase, kebabCase } from "@luca/cases";
import berries from "./berries.webp";
import chamallowsChocolate from "./chamallows-chocolate.webp";
import chamallowsParty from "./chamallows-party.webp";
import chamallowsPinkWhite from "./chamallows-pink-white.webp";
import chamallowsRubino from "./chamallows-rubino.webp";
import fizzMix from "./fizz-mix.webp";
import fizzWorms from "./fizz-worms.webp";
import goldBears from "./gold-bears.webp";
import happyCola from "./happy-cola.webp";
import jellyBeans from "./jelly-beans.webp";
import kubiks from "./kubiks.webp";
import megaParty from "./mega-party.webp";
import partyMix from "./party-mix.webp";
import phantasia from "./phantasia.webp";
import sourGoldBear from "./sour-gold-bear.webp";
import starMix from "./star-mix.webp";
import tropiFrutti from "./tropi-frutti.webp";
import veggyMix from "./veggy-mix.webp";
import worms from "./worms.webp";

export function imgSrc(name: string) {
  switch (camelCase(name)) {
    case "berries":
      return berries;
    case "chamallowsChocolate":
      return chamallowsChocolate;
    case "chamallowsParty":
      return chamallowsParty;
    case "chamallowsPinkWhite":
      return chamallowsPinkWhite;
    case "chamallowsRubino":
      return chamallowsRubino;
    case "fizzMix":
      return fizzMix;
    case "fizzWorms":
      return fizzWorms;
    case "goldBears":
      return goldBears;
    case "happyCola":
      return happyCola;
    case "jellyBeans":
      return jellyBeans;
    case "kubiks":
      return kubiks;
    case "megaParty":
      return megaParty;
    case "partyMix":
      return partyMix;
    case "phantasia":
      return phantasia;
    case "sourGoldBear":
      return sourGoldBear;
    case "starMix":
      return starMix;
    case "tropiFrutti":
      return tropiFrutti;
    case "veggyMix":
      return veggyMix;
    case "worms":
      return worms;
    default:
    //noop
  }
}
