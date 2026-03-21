import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [
    react({
      include: ['**/*.js', '**/*.jsx']
    })
  ],
  esbuild: {
    jsx: 'react-jsx'
  },
  build: {
    lib: {
      entry: './src/index.jsx',
      name: 'App',
      fileName: 'js/app',
      cssFileName: 'styles'
    },
    outDir: '../plugin/assets',
    rollupOptions: {
      output: {
        assetFileNames: assetInfo => {
          if (assetInfo.name?.endsWith('.css')) {
            return 'styles.css'
          }
          return assetInfo.name
        }
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
