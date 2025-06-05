<template>
  <div class="layout-container">
    <Sidebar />

    <div class="main-content">
      <main class="main-area">
        <router-view />
      </main>

      <footer class="footer">
        &copy; {{ new Date().getFullYear() }} Dropshipping do MercadoLivre. Todos os direitos reservados.
      </footer>
    </div>
  </div>
</template>

<script>
import Sidebar from './Sidebar.vue'

export default {
  name: 'AppLayout',
  components: {
    Sidebar,
  },
}
</script>

<style scoped>
.layout-container {
  display: flex;
}

.main-content {
  margin-left: 250px;
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f8f9fa;
}

.main-area {
  flex: 1;
  padding: 24px;
}

.footer {
  text-align: center;
  padding: 12px;
  background-color: #e9ecef;
  font-size: 14px;
  color: #555;
  border-top: 1px solid #ccc;
}
</style>