<template>
  <div>
    <!-- Header -->
    <header class="header">
      <h1>Dropshipping do Mercado Livre</h1>
      <nav>
        <router-link to="/" exact-active-class="active-link">Início</router-link>
        <router-link to="/api" exact-active-class="active-link">API</router-link>
        <router-link to="/fornecedores" exact-active-class="active-link">Fornecedores</router-link>
        <router-link to="/gerar-itens" exact-active-class="active-link">Gerar Itens</router-link>
        <router-link to="/minha-loja" exact-active-class="active-link">Minha Loja</router-link>
      </nav>
    </header>

    <!-- Sidebar -->
    <aside class="sidebar">
      <nav>
        <router-link to="/" exact-active-class="active-link">Início</router-link>
        <router-link to="/api" exact-active-class="active-link">API</router-link>
        <router-link to="/fornecedores" exact-active-class="active-link">Fornecedores</router-link>
        <router-link to="/gerar-itens" exact-active-class="active-link">Gerar Itens</router-link>
        <router-link to="/minha-loja" exact-active-class="active-link">Minha Loja</router-link>
      </nav>
    </aside>

    <!-- Conteúdo principal -->
    <main class="main-content">
      <router-view />
    </main>

    <!-- Footer -->
    <footer class="footer">
      &copy; {{ new Date().getFullYear() }} Dropshipping do Mercado Livre. Todos os direitos reservados.
    </footer>
  </div>
</template>

<script>
export default {
  name: "AppLayout",
};
</script>

<style scoped>
/* Variáveis de cores */
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

/* Header */
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: var(--amarelo);
  color: var(--azul);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  z-index: 1100;
  font-weight: bold;
}

.header h1 {
  font-size: 1.25rem;
}

.header nav a {
  color: var(--azul);
  margin-left: 1rem;
  text-decoration: none;
  font-weight: 500;
}

.header nav a.active-link {
  text-decoration: underline;
  font-weight: 700;
}

/* Sidebar */
.sidebar {
  position: fixed;
  top: 60px; /* altura do header */
  left: 0;
  width: 220px;
  height: calc(100vh - 60px - 50px); /* tela menos header e footer */
  background-color: var(--amarelo);
  padding: 1rem;
  box-shadow: 2px 0 5px rgba(0,0,0,0.1);
  overflow-y: auto;
  z-index: 1050;
}

.sidebar nav a {
  display: block;
  color: var(--azul);
  text-decoration: none;
  padding: 0.5rem 0.75rem;
  border-radius: 4px;
  margin-bottom: 0.25rem;
  font-weight: 500;
}

.sidebar nav a.active-link {
  background-color: #e6d961;
  font-weight: 700;
  text-decoration: underline;
}

/* Main Content */
.main-content {
  margin-top: 60px; /* espaço do header */
  margin-left: 220px; /* espaço da sidebar */
  margin-bottom: 50px; /* espaço do footer */
  padding: 1.5rem;
  min-height: calc(100vh - 60px - 50px);
  background-color: #f9f9f9;
}

/* Footer */
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  height: 50px;
  width: 100%;
  background-color: #f7f2d5;
  color: var(--azul);
  text-align: center;
  line-height: 50px;
  font-size: 0.875rem;
  box-shadow: 0 -2px 4px rgba(0,0,0,0.1);
  z-index: 1100;
}
</style>
