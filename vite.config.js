import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  build: {
    outDir: 'dist', // Where to output build files
    emptyOutDir: true, // Clean dist before building
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        login: resolve(__dirname, 'login.html'), 
        formvalidation: resolve(__dirname, 'src/formvalidation.js'),
      },
    },
  },

  assetsInclude: ['**/*.js'],
  publicDir: 'public',

  server: {
    port: 3000,
    open: true, // Set to true if you want the browser to open on `npm run dev`
    strictPort: true, // Fail if 3000 is in use
  }
})