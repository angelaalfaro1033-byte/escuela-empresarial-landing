import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import viteImagemin from 'vite-plugin-imagemin'

export default defineConfig({
  plugins: [
    // Required plugins
    react(),
    tailwindcss(),

    // Image optimization (solo afecta build)
    viteImagemin({
      mozjpeg: {
        quality: 70, // JPG compression (60–75 recomendado)
      },
      pngquant: {
        quality: [0.6, 0.8],
      },
      optipng: {
        optimizationLevel: 7,
      },
      gifsicle: {
        optimizationLevel: 3,
      },
    }),
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  assetsInclude: ['**/*.svg', '**/*.csv'],
})