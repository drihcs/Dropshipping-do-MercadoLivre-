<template>
  <div>
    <header class="header">
      <button class="toggle-btn" @click="toggleSidebar">☰</button>
      <h1>Dropshipping do Mercado Livre</h1>
    </header>

    <aside :class="['sidebar', { 'sidebar--open': sidebarOpen }]">
      <nav>
        <router-link to="/" exact-active-class="active">Início</router-link>
        <router-link to="/api" active-class="active">API</router-link>
        <router-link to="/fornecedores" active-class="active">Fornecedores</router-link>
        <router-link to="/gerar-itens" active-class="active">Gerar Itens</router-link>
        <router-link to="/minha-loja" active-class="active">Minha Loja</router-link>
      </nav>
    </aside>

    <main :class="{ 'main--shifted': sidebarOpen }">
      <router-view />
    </main>

    <footer class="footer">
      © {{ new Date().getFullYear() }} Dropshipping do Mercado Livre. Todos os direitos reservados.
    </footer>
  </div>
</template>

<script>
export default {
  name: "AppLayout",
  data() {
    return {
      sidebarOpen: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen;
    },
  },
};
</script>

<style scoped>
/* Header */
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 56px;
  background-color: #ffeb3b; /* amarelo */
  color: #1565c0; /* azul */
  display: flex;
  align-items: center;
  padding: 0 1rem;
  font-weight: bold;
  z-index: 1001;
  box-shadow: 0 1px 4px rgba(0,0,0,0.1);
}

.toggle-btn {
  background: none;
  border: none;
  font-size: 1.5rem;
  margin-right: 1rem;
  cursor: pointer;
  color: #1565c0;
}

/* Sidebar */
.sidebar {
  position: fixed;
  top: 56px; /* abaixo do header */
  left: 0;
  width: 220px;
  height: calc(100vh - 56px - 40px); /* altura total menos header e footer */
  background-color: #ffeb3b; /* amarelo */
  overflow-y: auto;
  transform: translateX(-100%);
  transition: transform 0.3s ease;
  z-index: 1000;
  padding: 1rem;
  box-shadow: 2px 0 5px rgba(0,0,0,0.1);
}

.sidebar--open {
  transform: translateX(0);
}

.sidebar nav a {
  display: block;
  padding: 0.5rem 0.75rem;
  color: #1565c0;
  text-decoration: none;
  border-radius: 4px;
  margin-bottom: 0.25rem;
  font-weight: 600;
}

.sidebar nav a.active,
.sidebar nav a:hover {
  background-color: #1565c0;
  color: #ffeb3b;
}

/* Main content */
main {
  margin-top: 56px;
  padding: 1rem 2rem; /* aumentei o padding horizontal */
  transition: margin-left 0.3s ease;
  margin-left: 0;
  min-height: calc(100vh - 56px - 40px);
}

.main--shifted {
  margin-left: 240px; /* um pouco maior que a sidebar de 220px */
}

/* Footer */
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 40px;
  background-color: #ffeb3b; /* amarelo */
  color: #1565c0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.85rem;
  font-weight: 600;
  box-shadow: 0 -1px 4px rgba(0,0,0,0.1);
  z-index: 1001;
}
</style>