import { Config } from "@stencil/core";
import { sass } from "@stencil/sass";
import { postcss } from "@stencil-community/postcss";
import autoprefixer from "autoprefixer";

export const config: Config = {
  namespace: "abg",
  hashedFileNameLength: 10,
  plugins: [
    sass(),
    postcss({
      plugins: [autoprefixer()],
    }),
  ],
  outputTargets: [
    {
      type: "dist",
      dir: "build",
      esmLoaderPath: "loader",
    },
  ],
};
