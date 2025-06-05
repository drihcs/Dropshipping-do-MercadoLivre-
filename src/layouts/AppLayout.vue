<template>
  <div>
    <header class="header">
      <button @click="toggleSidebar" class="toggle-btn">☰</button>
      <h1>Dropshipping do Mercado Livre</h1>
    </header>

    <div :class="['container', { 'sidebar-open': sidebarOpen }]">
      <aside class="sidebar">
        <nav>
          <router-link to="/" exact>Início</router-link>
          <router-link to="/api">API</router-link>
          <router-link to="/fornecedores">Fornecedores</router-link>
          <router-link to="/gerar-itens">Gerar Itens</router-link>
          <router-link to="/minha-loja">Minha Loja</router-link>
        </nav>
      </aside>

      <main class="main-content" @click="closeSidebarOnMobile">
        <router-view />
      </main>
    </div>

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
    closeSidebarOnMobile() {
      if (this.sidebarOpen && window.innerWidth < 768) {
        this.sidebarOpen = false;
      }
    },
  },
};
</script>

<style>
:root {
  --amarelo: #fff5b1;
  --azul: #004aad;
}

/* Reset básico */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body, html, #app {
  height: 100%;
  font-family: Arial, sans-serif;
  background-color: var(--amarelo);
  color: var(--azul);
}

/* Header fixo */
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 50px;
  background-color: var(--amarelo);
  border-bottom: 2px solid var(--azul);
  display: flex;
  align-items: center;
  padding: 0 16px;
  z-index: 1000;
  color: var(--azul);
}

.toggle-btn {
  font-size: 24px;
  background: none;
  border: none;
  color: var(--azul);
  cursor: pointer;
  margin-right: 16px;
}

.container {
  display: flex;
  padding-top: 50px; /* para não ficar atrás do header */
  min-height: calc(100vh - 50px - 40px); /* altura total - header - footer */
  transition: margin-left 0.3s ease;
}

/* Sidebar */
.sidebar {
  width: 220px;
  background-color: var(--amarelo);
  border-right: 2px solid var(--azul);
  height: calc(100vh - 90px); /* altura: total - header - footer */
  position: fixed;
  top: 50px;
  left: 0;
  overflow-y: auto;
  padding: 10px;
  transition: transform 0.3s ease;
  z-index: 999;
}

/* Oculta sidebar no mobile */
@media (max-width: 767px) {
  .sidebar {
    transform: translateX(-100%);
  }

  .sidebar-open .sidebar {
    transform: translateX(0);
  }
}

/* Ajusta o conteúdo principal para não ficar atrás da sidebar */
.main-content {
  flex: 1;
  margin-left: 220px;
  padding: 20px;
  transition: margin-left 0.3s ease;
}

@media (max-width: 767px) {
  .main-content {
    margin-left: 0;
  }

  .sidebar-open .main-content {
    filter: brightness(0.7);
    pointer-events: none;
  }
}

/* Footer fixo */
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 40px;
  background-color: var(--amarelo);
  border-top: 2px solid var(--azul);
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--azul);
  font-size: 14px;
  z-index: 1000;
}

/* Links da sidebar */
.sidebar nav a {
  display: block;
  padding: 10px 12px;
  margin-bottom: 6px;
  color: var(--azul);
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.2s ease;
}

.sidebar nav a.router-link-active {
  background-color: var(--azul);
  color: var(--amarelo);
  font-weight: bold;
}

.sidebar nav a:hover {
  background-color: #c0b558;
  color: var(--amarelo);
}
</style>
