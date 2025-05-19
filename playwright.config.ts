import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: 'e2e',      // Only look for tests in "e2e/"
  // testMatch: '**/*.spec.ts', // Default; add if you want only *.spec.ts files
});
