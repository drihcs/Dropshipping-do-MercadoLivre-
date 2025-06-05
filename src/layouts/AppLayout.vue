<template>
  <div class="app-container">
    <header>
      <button @click="toggleSidebar" class="btn-menu">☰</button>
      <h1>Dropshipping do Mercado Livre</h1>
    </header>

    <aside :class="['sidebar', sidebarOpen ? 'open' : 'closed']">
      <nav>
        <router-link to="/" exact-active-class="active" @click.native="closeSidebar">Início</router-link>
        <router-link to="/api" active-class="active" @click.native="closeSidebar">API</router-link>
        <router-link to="/fornecedores" active-class="active" @click.native="closeSidebar">Fornecedores</router-link>
        <router-link to="/gerar-itens" active-class="active" @click.native="closeSidebar">Gerar Itens</router-link>
        <router-link to="/minha-loja" active-class="active" @click.native="closeSidebar">Minha Loja</router-link>
      </nav>
    </aside>

    <main :class="sidebarOpen ? 'sidebar-open' : 'sidebar-closed'" @click="closeSidebar">
      <router-view />
    </main>

    <footer>
      © {{ new Date().getFullYear() }} Dropshipping do Mercado Livre. Todos os direitos reservados.
    </footer>
  </div>
</template>

<script>
export default {
  name: 'AppLayout',
  data() {
    return {
      sidebarOpen: false,
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
  font-family: Arial, sans-serif;
  color: #003366;
  background: #fff8dc;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background: #ffdb58;
  color: #003366;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0 1rem;
  z-index: 1100;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
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
  top: 60px;          /* começa logo abaixo do header */
  bottom: 50px;       /* termina logo acima do footer */
  left: -220px;       /* escondida por padrão */
  width: 200px;
  background: #fff5b1;
  box-shadow: 2px 0 5px rgba(0,0,0,0.1);
  transition: left 0.3s ease;
  padding: 1rem;
  overflow-y: auto;
  z-index: 200;
}


.sidebar.open {
  left: 0;
}

.sidebar.closed {
  left: -230px;
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
  margin-top: 60px;       /* abaixo do header */
  margin-bottom: 50px;    /* acima do footer */
  padding: 1rem;
  flex-grow: 1;
  background: #fff8dc;
  transition: margin-left 0.3s ease;
  z-index: 100;
  position: relative;
}


main.sidebar-open {
  margin-left: 220px; /* espaço para sidebar aberta */
}

main.sidebar-closed {
  margin-left: 0; /* sem sidebar */
}

footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  background: #ffdb58;
  color: #003366;
  text-align: center;
  line-height: 50px;
  font-size: 0.9rem;
  box-shadow: 0 -2px 4px rgba(0,0,0,0.1);
  z-index: 1100;
}
</style>