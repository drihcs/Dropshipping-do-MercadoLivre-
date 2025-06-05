<template>
  <aside class="sidebar">
    <div class="sidebar-header">
      <h2>Menu</h2>
    </div>
    <nav class="sidebar-nav">
      <router-link to="/" exact-active-class="active-link" class="nav-link" exact>Início</router-link>
      <router-link to="/api" active-class="active-link" class="nav-link">API</router-link>
      <router-link to="/fornecedores" active-class="active-link" class="nav-link">Fornecedores</router-link>
      <router-link to="/gerar-itens" active-class="active-link" class="nav-link">Gerar Itens</router-link>
      <router-link to="/minha-loja" active-class="active-link" class="nav-link">Minha Loja</router-link>
    </nav>
  </aside>
</template>

<script setup>
// Sem lógica extra no momento
</script>

<style scoped>
.sidebar {
  width: 250px;
  background-color: #ffffff;
  box-shadow: 2px 0 5px rgba(0,0,0,0.1);
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
}

.sidebar-header {
  padding: 1rem;
  border-bottom: 1px solid #ddd;
}

.sidebar-header h2 {
  margin: 0;
  font-size: 1.25rem;
  font-weight: bold;
}

.sidebar-nav {
  flex-grow: 1;
  overflow-y: auto;
  padding: 1rem 0;
}

.nav-link {
  display: block;
  padding: 0.75rem 1rem;
  color: #333;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.2s ease;
  margin: 0 1rem 0.25rem 1rem;
}

.nav-link:hover {
  background-color: #e0f0ff;
}

.active-link {
  background-color: #bae0ff;
  font-weight: 600;
  color: #0057b7;
  text-decoration: none;
}
</style>