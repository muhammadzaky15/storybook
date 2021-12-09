import resolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import generatePackageJson from "rollup-plugin-generate-package-json";
import postcss from "rollup-plugin-postcss";
import image from "@rollup/plugin-image";

export default {
  input: "src/index.js",
  output: {
    file: "dist/bundles/bundle.js",
    format: "cjs",
    inlineDynamicImports: true,
  },
  external: ["react", "react-dom"],
  plugins: [
    babel({
      extensions: [".jsx", ".js", ".tsx"],
      exclude: "node_modules/**",
      presets: ["@babel/preset-env", "@babel/preset-react"],
    }),
    resolve({ extensions: [".js"] }),
    commonjs(),
    generatePackageJson({
      outputFolder: "dist",
      baseContents: (pkg) => ({
        name: pkg.name,
        main: "bundles/bundle.js",
        peerDependencies: {
          react: "^16.12.0",
        },
      }),
    }),
    postcss({
      config: {
        path: "./postcss.config.js",
      },
      extensions: [".css"],
      minimize: true,
      inject: {
        insertAt: "top",
      },
      extract: true
    }),
    image(),
  ],
};
