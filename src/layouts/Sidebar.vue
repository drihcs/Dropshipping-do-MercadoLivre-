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

<script setup></script>

<style scoped>
.sidebar {
  width: 250px;
  background-color: #ffffff;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  z-index: 10;
}

.sidebar-header {
  padding: 1rem;
  border-bottom: 1px solid #ddd;
}

.sidebar-header h2 {
  margin: 0;
  font-size: 1.25rem;
}

.sidebar-nav {
  flex-grow: 1;
  overflow-y: auto;
  padding-top: 1rem;
}

.nav-link {
  display: block;
  padding: 0.75rem 1rem;
  color: #333;
  text-decoration: none;
  border-radius: 4px;
  margin: 0 1rem 0.25rem 1rem;
}

.nav-link:hover {
  background-color: #f0f8ff;
}

.active-link {
  background-color: #d0ebff;
  font-weight: bold;
  color: #004a99;
}
</style>