// @ts-ignore
import {
  PaletteOptions,
  TypeBackground,
} from "@material-ui/core/styles/createPalette";

declare module "@material-ui/core/styles/createPalette" {
  interface PaletteOptions {
    overlays?: Partial<TypeBackground>;
  }
  interface Palette {
    overlays: TypeBackground;
  }
}
