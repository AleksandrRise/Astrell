import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default ({ mode }: any) => {
  process.env = {...process.env, ...loadEnv(mode, process.cwd())};

  const API_URL = `${process.env.APP_BACKEND_BASEURL ?? 'http://localhost:3000'}`;

  return defineConfig({
    plugins: [react(), tailwindcss()],
    server: {
      host: true,
      strictPort: true,
      port: 5173,
      proxy: {
        '/api': {
          target: API_URL,
          changeOrigin: true
        },
      },
    }
  })
}
