/// <reference types="vitest/config" />
/// <reference types="vitest" />
import { defineConfig } from 'vite';
import { extname, relative, resolve } from 'path';
import { fileURLToPath } from 'node:url';
import { glob } from 'glob';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { libInjectCss } from 'vite-plugin-lib-inject-css';

// https://vitejs.dev/config/
import path from 'node:path';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';
const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
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
      external: [
        'react',
        'react/jsx-runtime',
        'react-aria-components',
        'react-aria',
      ],
      input: createInputObject([
        'src/main.ts',
        'src/components/**/index.{ts,tsx}',
        'src/layout-primitives/**/index.{ts,tsx}',
        'src/providers/**/index.{ts,tsx}',
        'src/hooks/**/index.{ts,tsx}',
        'src/page-layouts/**/index.{ts,tsx}',
        'src/internal/**/index.{ts,tsx}',
        'src/type/**/index.{ts,tsx}',
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
      '@helpers': resolve(__dirname, './src/helpers'),
      '@hooks': resolve(__dirname, './src/hooks'),
      '@layout-primitives': resolve(__dirname, './src/layout-primitives'),
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
      include: ['src/**/*'],
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
    },
    projects: [
      {
        extends: true,
        plugins: [
          // The plugin will run tests for the stories defined in your Storybook config
          // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
          storybookTest({
            configDir: path.join(dirname, '.storybook'),
          }),
        ],
        test: {
          name: 'storybook',
          browser: {
            enabled: true,
            headless: true,
            provider: playwright({}),
            instances: [
              {
                browser: 'chromium',
              },
            ],
          },
          setupFiles: ['.storybook/vitest.setup.ts'],
        },
      },
    ],
  },
});
const ignoredPatterns = ['src/**/*.stories.tsx'];
function createInputObject(sourcePatterns: string[]) {
  let inputObject = {};
  for (const sourcePattern of sourcePatterns) {
    const additions = Object.fromEntries(glob.sync(sourcePattern, {
      ignore: ignoredPatterns
    }).map(file => [relative('src', file.slice(0, file.length - extname(file).length)), fileURLToPath(new URL(file, import.meta.url))]));
    inputObject = {
      ...inputObject,
      ...additions
    };
  }
  return inputObject;
}