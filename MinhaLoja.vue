
</template>// pages/MinhaLoja.vue <template>

  <div>
    <h2 class="text-2xl font-bold mb-4">Minha Loja</h2>
    <button @click="abrirFormulario" class="bg-green-500 text-white px-4 py-2 rounded mb-4">Adicionar Produto</button><div v-if="mostrarFormulario" class="mb-4">
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
</template><script>
export default {
  data() {
    return {
      produtos: [
        { id: 1, nome: 'Produto Exemplo 1', preco: 99.9, estoque: 10 },
        { id: 2, nome: 'Produto Exemplo 2', preco: 149.9, estoque: 5 }
      ],
      mostrarFormulario: false,
      form: { id: null, nome: '', preco: '', estoque: '' }
    };
  },
  methods: {
    abrirFormulario() {
      this.mostrarFormulario = true;
      this.form = { id: null, nome: '', preco: '', estoque: '' };
    },
    salvarProduto() {
      if (!this.form.nome || !this.form.preco || !this.form.estoque) return;

      if (this.form.id) {
        const index = this.produtos.findIndex(p => p.id === this.form.id);
        if (index !== -1) this.produtos[index] = { ...this.form };
      } else {
        this.produtos.push({ ...this.form, id: Date.now() });
      }
      this.mostrarFormulario = false;
    },
    editarProduto(produto) {
      this.form = { ...produto };
      this.mostrarFormulario = true;
    },
    excluirProduto(id) {
      this.produtos = this.produtos.filter(p => p.id !== id);
    }
  }
};
</script><style scoped>
table, th, td {
  border: 1px solid #ccc;
  border-collapse: collapse;
}
</style>
