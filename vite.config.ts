import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, './src') },
      { find: '@lib', replacement: path.resolve(__dirname, './src/lib') },
      {
        find: '@modules',
        replacement: path.resolve(__dirname, './src/modules')
      },
      { find: '@pages', replacement: path.resolve(__dirname, './src/pages') },
      { find: '@common', replacement: path.resolve(__dirname, './src/common') },
      {
        find: '@constants',
        replacement: path.resolve(__dirname, './src/constants')
      },
      {
        find: '@layouts',
        replacement: path.resolve(__dirname, './src/layouts')
      },
      {
        find: '@navigator',
        replacement: path.resolve(__dirname, './src/navigator')
      }
    ]
  }
})
