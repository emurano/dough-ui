import { defineConfig } from 'vite';
import { extname, relative, resolve } from 'path';
import { fileURLToPath } from 'node:url';
import { glob } from 'glob';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { libInjectCss } from "vite-plugin-lib-inject-css";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts({ include: ['src'], insertTypesEntry: true, entryRoot: 'src/main.ts' }), libInjectCss()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      formats: ['es'],
      name: 'Dough UI',
      fileName: 'dough-ui',
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime'],
      input: createInputObject([
        'src/main.ts',
        'src/components/**/index.{ts,tsx}'
      ]),
      // input: Object.fromEntries(
      //   glob
      //     .sync('src/**/*.{ts,tsx}', {
      //       ignore: ['src/**/*.d.ts'],
      //     })
      //     .map((file) => [
      //       // The name of the entry point
      //       // lib/nested/foo.ts becomes nested/foo
      //       relative('src', file.slice(0, file.length - extname(file).length)),
      //       // The absolute path to the entry file
      //       // lib/nested/foo.ts becomes /project/lib/nested/foo.ts
      //       fileURLToPath(new URL(file, import.meta.url)),
      //     ])
      // ),

      output: {
        assetFileNames: 'assets/[name][extname]',
        entryFileNames: '[name].js',
      }
    },
  },
});

const ignoredPatterns = [
  'src/**/*.stories.tsx'
];

function createInputObject(sourcePatterns: string[]) {
  let inputObject = {};

  for (const sourcePattern of sourcePatterns) {
    const additions = Object.fromEntries(
      glob.sync(sourcePattern, { ignore: ignoredPatterns })
        .map((file) => [
          relative('src', file.slice(0, file.length - extname(file).length))
            .replace(/\/index$/, ''),
          fileURLToPath(new URL(file, import.meta.url)),
        ])
    );
    inputObject = { ...inputObject, ...additions };
  }

  return inputObject;
}
