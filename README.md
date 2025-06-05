
# 🌐 Mini SPA Dropshipping com Vue.js

Este projeto é uma Single Page Application (SPA) feita com **Vue.js** que simula um sistema de navegação para páginas de conteúdo sobre dropshipping. A navegação é gerenciada com `vue-router`, sem recarregamento da página.

## 🚀 Funcionalidades

- SPA com roteamento utilizando `vue-router`
- Páginas estáticas com conteúdo informativo sobre dropshipping
- Estilo visual moderno, responsivo e consistente
- Componentização básica com Vue

## 🛠️ Tecnologias Utilizadas

- [Vue.js 3](https://vuejs.org/)
- [Vue Router](https://router.vuejs.org/)
- HTML5 + CSS3
- Vite (para build e desenvolvimento local rápido)

## 📁 Estrutura do Projeto

```
mini-spa-dropshipping/
├── public/
│   └── index.html           # HTML principal
├── src/
│   ├── assets/              # Imagens e estilos globais
│   ├── components/          # Componentes reutilizáveis (Header, Footer, etc.)
│   ├── pages/               # Páginas do site (Início, Produtos, Sobre, Contato)
│   ├── router/              # Configuração do Vue Router
│   ├── App.vue              # Componente raiz
│   └── main.js              # Arquivo principal do Vue
├── package.json
└── README.md
```

## 📦 Instalação e Execução

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/dropshipping-do-mercadolivre.git

# Acesse o diretório
cd dropshipping-do-mercadolivre

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

Acesse a aplicação em: [http://localhost:5173](http://localhost:5173)

## 🧭 Navegação

A aplicação possui 4 rotas principais, gerenciadas via `vue-router`:

- `/` → Página inicial
- `/produtos` → Página com informações sobre produtos
- `/sobre` → Explicação sobre o conceito de dropshipping
- `/contato` → Página de contato

## 🎨 Estilo da Aplicação (CSS)

O projeto usa estilos globais simples e modernos para facilitar a leitura e navegação.

### Principais características:

- **Cores principais**: amarelo-ouro `#ffcc00` e texto escuro `#222`
- **Layout**: header fixo, main centralizado e footer fixo
- **Botões**: sem borda, arredondados e com efeito de hover

```css
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: #f7f7f7;
  color: #222;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding-bottom: 3rem;
}
```

> 🎨 Os estilos estão organizados para serem aplicados diretamente nos componentes ou no `App.vue`. A separação em componentes facilita a reutilização e manutenção.

## 📷 Demonstração

![demo](./public/demo.gif)

## 📌 Observações

- Este projeto é educativo e serve como base para SPAs simples com Vue.
- O conteúdo das páginas é fixo, sem integração com APIs por enquanto.

## 📚 Próximos Passos

- [ ] Adicionar responsividade para mobile
- [ ] Criar componentes dinâmicos
- [ ] Integrar com API (produtos ou newsletter)

## 📄 Licença

Este projeto é livre para uso educacional e pessoal.
