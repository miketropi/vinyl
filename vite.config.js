import { defineConfig } from "vite";

export default defineConfig({
  optimizeDeps: {
    // "three" is loaded via CDN importmap — don't pre-bundle it in dev
    exclude: ["three"],
  },
  build: {
    rollupOptions: {
      // "three" is loaded at runtime via the <script type="importmap"> in
      // index.html (from a CDN). Mark it external so the bundler leaves the
      // bare `import ... from "three"` untouched instead of trying to resolve
      // it from node_modules at build time.
      external: ["three"],
    },
  },
});
