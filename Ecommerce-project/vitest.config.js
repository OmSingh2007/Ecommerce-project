import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    //environment and the globals are required for components test and integration test
    environment: 'jsdom',
    globals: true,
    //and the setupFiles run the code inside the ./setupTests.js before all of our test
    setupFiles: './setupTests.js',
  }
});