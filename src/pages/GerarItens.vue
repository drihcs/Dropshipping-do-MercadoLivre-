<template>
  <section>
    <h2>Gerar Itens</h2>
    <form @submit.prevent="gerarItem">
      <div class="form-group">
        <label for="nome">Nome do Produto</label>
        <input id="nome" v-model="nome" required />
      </div>

      <div class="form-group">
        <label for="descricao">Descrição</label>
        <textarea id="descricao" v-model="descricao" required></textarea>
      </div>

      <div class="form-group">
        <label for="preco">Preço (R$)</label>
        <input id="preco" type="number" step="0.01" v-model.number="preco" required />
      </div>

      <button type="submit">Gerar Produto</button>
    </form>

    <div v-if="produtoGerado" class="produto-gerado">
      <h3>Produto gerado:</h3>
      <p><strong>Nome:</strong> {{ produtoGerado.nome }}</p>
      <p><strong>Descrição:</strong> {{ produtoGerado.descricao }}</p>
      <p><strong>Preço:</strong> R$ {{ produtoGerado.preco.toFixed(2) }}</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'GerarItens',
  data() {
    return {
      nome: '',
      descricao: '',
      preco: null,
      produtoGerado: null,
    };
  },
  methods: {
    gerarItem() {
      this.produtoGerado = {
        nome: this.nome,
        descricao: this.descricao,
        preco: this.preco,
      };
      // Limpar campos depois se quiser:
      this.nome = '';
      this.descricao = '';
      this.preco = null;
    }
  }
}
</script>

<style scoped>
form {
  background: #fff5b1;
  padding: 1rem;
  border-radius: 6px;
  max-width: 400px;
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.3rem;
  color: #003366;
  font-weight: bold;
}

input, textarea {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ffd966;
  border-radius: 4px;
  font-size: 1rem;
  box-sizing: border-box;
}

button {
  background: #ffd966;
  border: none;
  padding: 0.7rem 1.5rem;
  cursor: pointer;
  border-radius: 4px;
  color: #003366;
  font-weight: bold;
}

button:hover {
  background: #ffc107;
}

.produto-gerado {
  margin-top: 1.5rem;
  background: #ffffcc;
  padding: 1rem;
  border-radius: 6px;
  color: #003366;
}
</style>