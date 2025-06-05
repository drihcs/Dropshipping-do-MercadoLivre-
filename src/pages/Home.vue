<template>
  <section>
    <h2>Produtos em Destaque</h2>
    <div class="products-grid">
      <div class="product-card" v-for="product in products" :key="product.id">
        <img :src="product.image" :alt="product.name" />
        <h3>{{ product.name }}</h3>
        <p class="price">R$ {{ product.price.toFixed(2) }}</p>
        <button>Comprar</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      products: [
        { id: 1, name: 'Camiseta Estampada', price: 49.9, image: 'https://via.placeholder.com/150?text=Camiseta' },
        { id: 2, name: 'Fone Bluetooth', price: 89.9, image: 'https://via.placeholder.com/150?text=Fone' },
        { id: 3, name: 'Relógio Digital', price: 129.9, image: 'https://via.placeholder.com/150?text=Relógio' },
        { id: 4, name: 'Mochila Esportiva', price: 79.9, image: 'https://via.placeholder.com/150?text=Mochila' },
      ]
    }
  }
}
</script>

<style scoped>
.products-grid {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.product-card {
  background: #fff5b1;
  border: 1px solid #ffd966;
  border-radius: 8px;
  padding: 1rem;
  width: 150px;
  text-align: center;
}

.product-card img {
  width: 100%;
  height: auto;
  border-radius: 4px;
}

.price {
  color: #b35900;
  font-weight: bold;
  margin: 0.5rem 0;
}

button {
  background: #ffd966;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 4px;
  color: #003366;
  font-weight: bold;
}

button:hover {
  background: #ffc107;
}
</style>