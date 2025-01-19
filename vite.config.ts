import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/MADII-ADMIN/', // GitHub Pages의 서브 디렉토리 경로
})