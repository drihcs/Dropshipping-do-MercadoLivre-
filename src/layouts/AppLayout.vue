<template>
  <div class="app-layout">
    <aside class="sidebar">
      <nav>
        <router-link to="/" exact-active-class="active-link">Início</router-link>
        <router-link to="/api" active-class="active-link">API</router-link>
        <router-link to="/fornecedores" active-class="active-link">Fornecedores</router-link>
        <router-link to="/gerar-itens" active-class="active-link">Gerar Itens</router-link>
        <router-link to="/minha-loja" active-class="active-link">Minha Loja</router-link>
      </nav>
    </aside>

    <div class="main-content">
      <header>
        <h1>Dropshipping do Mercado Livre</h1>
      </header>

      <main>
        <router-view />
      </main>

      <footer>
        &copy; {{ new Date().getFullYear() }} Todos os direitos reservados.
      </footer>
    </div>
  </div>
</template>

<script setup>
// nenhum código aqui, por enquanto
</script>

<style scoped>
.app-layout {
  display: flex;
  min-height: 100vh;
}

.sidebar {
  width: 220px;
  background: #eee;
  padding: 1rem;
  box-shadow: 2px 0 5px rgba(0,0,0,0.1);
}

.sidebar nav {
  display: flex;
  flex-direction: column;
}

.sidebar a {
  text-decoration: none;
  padding: 0.5rem 1rem;
  color: #333;
  border-radius: 4px;
  margin-bottom: 0.5rem;
}

.sidebar a:hover {
  background-color: #ddd;
}

.active-link {
  background-color: #3490dc;
  color: white;
  font-weight: bold;
}

.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

header {
  background-color: #3490dc;
  color: white;
  padding: 1rem;
  font-size: 1.5rem;
}

main {
  flex: 1;
  padding: 1rem;
  background-color: #f9fafb;
}

footer {
  background-color: #eee;
  padding: 1rem;
  text-align: center;
}
</style>