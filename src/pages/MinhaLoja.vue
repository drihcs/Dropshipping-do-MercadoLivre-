<template>
  <div>
    <h2 class="text-2xl font-bold mb-4">Minha Loja</h2>
    <button @click="abrirFormulario" class="bg-green-500 text-white px-4 py-2 rounded mb-4">Adicionar Produto</button>
    <div v-if="mostrarFormulario" class="mb-4">
      <input v-model="form.nome" placeholder="Nome" class="border p-2 mr-2" />
      <input v-model="form.preco" placeholder="Preço" class="border p-2 mr-2" />
      <input v-model="form.estoque" placeholder="Estoque" class="border p-2 mr-2" />
      <button @click="salvarProduto" class="bg-blue-500 text-white px-4 py-1 rounded">Salvar</button>
    </div>

    <table class="w-full text-left border">
      <thead>
        <tr class="bg-gray-100">
          <th class="p-2">Nome</th>
          <th class="p-2">Preço</th>
          <th class="p-2">Estoque</th>
          <th class="p-2">Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="produto in produtos" :key="produto.id">
          <td class="p-2">{{ produto.nome }}</td>
          <td class="p-2">R$ {{ produto.preco }}</td>
          <td class="p-2">{{ produto.estoque }}</td>
          <td class="p-2">
            <button @click="editarProduto(produto)" class="bg-yellow-400 text-white px-2 py-1 rounded mr-2">Editar</button>
            <button @click="excluirProduto(produto.id)" class="bg-red-500 text-white px-2 py-1 rounded">Excluir</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
