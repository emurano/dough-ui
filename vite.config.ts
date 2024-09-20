/// <reference types="vitest" />
import { defineConfig } from 'vite';
import { extname, relative, resolve } from 'path';
import { fileURLToPath } from 'node:url';
import { glob } from 'glob';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { libInjectCss } from 'vite-plugin-lib-inject-css';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      tsconfigPath: './tsconfig.app.json',
      include: ['src'],
      insertTypesEntry: true,
    }),
    libInjectCss(),
  ],
  build: {
    outDir: 'dist',
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      formats: ['es'],
      name: 'Dough UI',
      fileName: 'dough-ui',
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime', 'react-aria-components', 'react-aria'],
      input: createInputObject([
        'src/main.ts',
        'src/components/**/index.{ts,tsx}',
        'src/layout-primitives/**/index.{ts,tsx}',
        'src/providers/**/index.{ts,tsx}',
        'src/hooks/**/index.{ts,tsx}',
        'src/page-layouts/**/index.{ts,tsx}',
        'src/internal/**/index.{ts,tsx}',
      ]),

      output: {
        assetFileNames: 'assets/[name][extname]',
        entryFileNames: '[name].js',
      },
    },
  },

  assetsInclude: ['**/*.woff'],

  resolve: {
    alias: {
      '@src': resolve(__dirname, './src'),
      '@components': resolve(__dirname, './src/components'),
      '@hooks': resolve(__dirname, './src/hooks'),
      '@page-layouts': resolve(__dirname, './src/page-layouts'),
      '@providers': resolve(__dirname, './src/providers'),
      '@styling': resolve(__dirname, './src/styling'),
      '@type': resolve(__dirname, './src/type'),
    },
  },

  test: {
    include: ['src/**/*.test.ts', 'src/**/*.test.tsx'],
    environment: 'jsdom',
    setupFiles: './src/test/setup-tests.ts',
    globals: true,
    coverage: {
      provider: 'istanbul',
      include: [
        'src/**/*',
      ],
      exclude: [
        './src/**/*.stories.ts',
        './src/**/*.stories.tsx',
        './src/**/*.test.ts',
        './src/**/*.test.tsx',
        '**/*/__tests__',
        '**/*/__stories__',
        './src/stories/**/*',
        './src/type/**/*',
      ],

    }
  }
});

const ignoredPatterns = ['src/**/*.stories.tsx'];

function createInputObject(sourcePatterns: string[]) {
  let inputObject = {};

  for (const sourcePattern of sourcePatterns) {
    const additions = Object.fromEntries(
      glob
        .sync(sourcePattern, { ignore: ignoredPatterns })
        .map((file) => [
          relative(
            'src',
            file.slice(0, file.length - extname(file).length)
          ),
          fileURLToPath(new URL(file, import.meta.url)),
        ])
    );
    inputObject = { ...inputObject, ...additions };
  }

  return inputObject;
}
