import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import Dts from "vite-plugin-dts";
import Components from "unplugin-vue-components/vite";
import AutoImport from "unplugin-auto-import/vite";

export default defineConfig({
  build: {
    lib: {
      entry: "./src/index.ts",
      name: "Uncmt",
      fileName: "index",
    },
    rollupOptions: {
      external: ["vue"],
    },
  },
  plugins: [
    Vue({
      reactivityTransform: true,
    }),
    Dts(),
    Components({
      dts: "./src/components.d.ts",
    }),
    AutoImport({
      imports: [
        "vue",
        "vue/macros",
      ],
      // dirs: [
      //   "./src/composables/*",
      // ],
      dts: "./src/auto-imports.d.ts",
    }),
  ],
});
