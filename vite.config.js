import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3000,       // Porta padrão do dev server (pode mudar)
    open: true        // Abre o navegador automaticamente ao iniciar
  },
  resolve: {
    alias: {
      '@': '/src'     // Alias para facilitar importações (ex: import X from '@/components/X.vue')
    }
  }
});
