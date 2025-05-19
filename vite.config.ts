import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()]
  // , test: {
  //   environment: "jsdom",
  //   globals: true,
  //   setupFiles: "./tests/setup.ts",
  //   exclude: [
  //     "e2e/**/*", // Exclude all e2e tests from Vitest
  //     "node_modules",
  //     "dist",
  //     ".next",
  //     ".output",
  //     "coverage"
  //   ]
  // }
})
