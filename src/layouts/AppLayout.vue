<template>
  <div class="flex">
    <!-- Sidebar -->
    <Sidebar />

    <!-- Conteúdo principal -->
    <div class="ml-64 flex flex-col min-h-screen w-full">
      <main class="flex-1 p-6 bg-gray-50">
        <router-view />
      </main>

      <!-- Footer -->
      <footer class="bg-gray-200 text-center text-sm text-gray-600 py-3 border-t">
        &copy; {{ new Date().getFullYear() }} Dropshipping do MercadoLivre. Todos os direitos reservados.
      </footer>
    </div>
  </div>
</template>

<script>
import Sidebar from "./Sidebar.vue";

export default {
  name: "AppLayout",
  components: {
    Sidebar,
  },
};
</script>

<style scoped>
</style>
