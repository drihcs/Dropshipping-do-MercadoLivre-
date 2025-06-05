<template>
  <section>
    <h2>Dashboard de Fornecedores</h2>
    <p>Gerencie seus fornecedores aqui.</p>

    <table class="fornecedores-table">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Contato</th>
          <th>Email</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="fornecedor in fornecedores" :key="fornecedor.id">
          <td>{{ fornecedor.nome }}</td>
          <td>{{ fornecedor.contato }}</td>
          <td>{{ fornecedor.email }}</td>
          <td :class="fornecedor.status === 'Ativo' ? 'ativo' : 'inativo'">{{ fornecedor.status }}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
export default {
  name: 'Fornecedores',
  data() {
    return {
      fornecedores: [
        { id: 1, nome: 'Fornecedor A', contato: '(11) 99999-1111', email: 'contato@fornecedorA.com', status: 'Ativo' },
        { id: 2, nome: 'Fornecedor B', contato: '(21) 98888-2222', email: 'contato@fornecedorB.com', status: 'Inativo' },
        { id: 3, nome: 'Fornecedor C', contato: '(31) 97777-3333', email: 'contato@fornecedorC.com', status: 'Ativo' },
      ]
    }
  }
}
</script>

<style scoped>
.fornecedores-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
}

.fornecedores-table th,
.fornecedores-table td {
  border: 1px solid #ffd966;
  padding: 0.5rem 1rem;
  text-align: left;
}

.fornecedores-table th {
  background-color: #ffdb58;
}

.ativo {
  color: green;
  font-weight: bold;
}

.inativo {
  color: red;
  font-weight: bold;
}
</style>