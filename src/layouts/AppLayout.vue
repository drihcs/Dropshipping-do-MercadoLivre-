<template>
  <div class="layout">
    <!-- Header -->
    <header class="header">
      <button @click="toggleSidebar" class="menu-button">☰ Menu</button>
      <h1>Dropshipping do MercadoLivre</h1>
    </header>

    <!-- Conteúdo principal -->
    <div class="content">
      <!-- Sidebar visível se sidebarOpen for true -->
      <Sidebar v-show="sidebarOpen" class="sidebar" />

      <!-- Área de conteúdo principal -->
      <main class="main">
        <router-view />
      </main>
    </div>

    <!-- Footer -->
    <footer class="footer">
      &copy; {{ new Date().getFullYear() }} Todos os direitos reservados.
    </footer>
  </div>
</template>

<script>
import Sidebar from './Sidebar.vue'

export default {
  name: 'AppLayout',
  components: { Sidebar },
  data() {
    return {
      sidebarOpen: false,
    }
  },
  methods: {
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen
    },
  },
}
</script>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.header {
  background-color: #004a99;
  color: white;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.menu-button {
  background: none;
  border: none;
  color: white;
  font-size: 1.25rem;
  cursor: pointer;
  margin-right: 1rem;
}

.content {
  flex: 1;
  display: flex;
}

.sidebar {
  width: 250px;
  background-color: #ffffff;
  border-right: 1px solid #ddd;
  padding: 1rem 0;
}

.main {
  flex: 1;
  padding: 24px;
  background-color: #f5f5f5;
}

.footer {
  background-color: #e9ecef;
  text-align: center;
  padding: 12px;
  font-size: 14px;
  color: #555;
  border-top: 1px solid #ccc;
}
</style>