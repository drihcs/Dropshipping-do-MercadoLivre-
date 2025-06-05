<template>
  <aside>
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
.sidebar-header {
  padding: 1rem;
  border-bottom: 1px solid #ddd;
}

.sidebar-nav {
  padding: 0.5rem 0;
}

.nav-link {
  display: block;
  padding: 0.75rem 1.25rem;
  color: #333;
  text-decoration: none;
  border-radius: 4px;
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