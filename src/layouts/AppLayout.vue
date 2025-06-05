<template>
  <div class="app-container">
    <header>
      <button @click="toggleSidebar" class="btn-menu">☰</button>
      <h1>Dropshipping do Mercado Livre</h1>
    </header>

    <aside :class="['sidebar', { open: sidebarOpen }]">
      <nav>
        <router-link to="/" exact-active-class="active" @click.native="closeSidebar">Início</router-link>
        <router-link to="/api" active-class="active" @click.native="closeSidebar">API</router-link>
        <router-link to="/fornecedores" active-class="active" @click.native="closeSidebar">Fornecedores</router-link>
        <router-link to="/gerar-itens" active-class="active" @click.native="closeSidebar">Gerar Itens</router-link>
        <router-link to="/minha-loja" active-class="active" @click.native="closeSidebar">Minha Loja</router-link>
      </nav>
    </aside>

    <main :class="{ 'sidebar-open': sidebarOpen }" @click="closeSidebar">
      <router-view />
    </main>

    <footer>
      © 2025 Dropshipping do Mercado Livre. Todos os direitos reservados.
    </footer>
  </div>
</template>

<script>
export default {
  name: 'AppLayout',
  data() {
    return {
      sidebarOpen: false
    }
  },
  methods: {
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen;
    },
    closeSidebar() {
      this.sidebarOpen = false;
    }
  }
}
</script>

<style>
.app-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  font-family: Arial, sans-serif;
  color: #003366; /* azul escuro */
  background: #fff8dc; /* amarelo claro */
}

header {
  background: #ffdb58; /* amarelo forte */
  color: #003366;
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.btn-menu {
  font-size: 1.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  color: #003366;
}

.sidebar {
  position: fixed;
  top: 56px; /* altura do header */
  left: -220px;
  width: 200px;
  height: calc(100% - 56px);
  background: #fff5b1;
  box-shadow: 2px 0 5px rgba(0,0,0,0.1);
  transition: left 0.3s ease;
  padding: 1rem;
  overflow-y: auto;
  z-index: 1000;
}

.sidebar.open {
  left: 0;
}

.sidebar nav a {
  display: block;
  padding: 0.5rem 0.75rem;
  margin-bottom: 0.3rem;
  color: #003366;
  text-decoration: none;
  border-radius: 4px;
}

.sidebar nav a.active,
.sidebar nav a:hover {
  background: #ffd966;
  font-weight: bold;
}

main {
  margin-top: 56px;
  padding: 1rem;
  flex-grow: 1;
  transition: margin-left 0.3s ease;
}

main.sidebar-open {
  margin-left: 200px;
}

footer {
  background: #ffdb58;
  color: #003366;
  padding: 0.75rem;
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  font-size: 0.9rem;
}
</style>