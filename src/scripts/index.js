// /* Desenvolva sua lógica aqui ... */

import { products, categories } from "./productsData.js";

function renderButtons() {
  const buttonsContainer = document.querySelector('.buttons-list');

  categories.forEach((category) => {
    const li = document.createElement('li');
    const button = document.createElement('button');
    button.textContent = category;

    button.classList.add('botao-categoria');
    li.appendChild(button);
    buttonsContainer.appendChild(li);
  });
}

function createCard(product) {
  const card = document.createElement("div");
    card.classList.add("card");
  
    const img = document.createElement("img");
    img.src = product.img;
  
    const bandAndYear = document.createElement("p");
    bandAndYear.textContent = `${product.band} - ${product.year}`;
  
    const title = document.createElement("h2");
    title.textContent = product.title;
  
    const priceButtonContainer = document.createElement("span");
    const price = document.createElement("p");
    price.textContent = `R$ ${product.price.toFixed(2)}`;
  
    const buyButton = document.createElement("button");
    buyButton.classList.add('btn-comprar');
    buyButton.textContent = "Comprar";
  
    priceButtonContainer.appendChild(price);
    priceButtonContainer.appendChild(buyButton);
  
    card.appendChild(img);
    card.appendChild(bandAndYear);
    card.appendChild(title);
    card.appendChild(priceButtonContainer);
  
    return card;
}

function renderCards(filteredProducts = products) {
  const cardsContainer = document.getElementById("cardsContainer");
  cardsContainer.innerHTML = ""; 

  filteredProducts.forEach(product => {
    const card = createCard(product);
    cardsContainer.appendChild(card);
  });
}

function adicionarEventosDeFiltragem() {
  const botoesCategorias = document.querySelectorAll('.botao-categoria');
  const inputPreco = document.getElementById('inputPreco');
  const paragrafoPreco = document.getElementById('paragrafoPreco');
  
  inputPreco.addEventListener('input', () => {

    if (inputPreco === document.activeElement) {
      const novoValorPreco = parseFloat(inputPreco.value);
      paragrafoPreco.textContent = `Até R$ ${novoValorPreco.toFixed(2)}`;
  
      
      const categoriaSelecionada = document.querySelector('.botao-categoria.selecionado');
      let produtosFiltradosPorPreco = products.filter(
        produto => produto.price <= novoValorPreco
      );
  
      if (categoriaSelecionada && categoriaSelecionada.textContent !== 'Todos') {
        produtosFiltradosPorPreco = produtosFiltradosPorPreco.filter(
          produto => produto.category === categories.indexOf(categoriaSelecionada.textContent)
        );
      }
  
      renderCards(produtosFiltradosPorPreco);
    }
  });

  botoesCategorias.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
      const categoriaSelecionada = categories[indice];


      botoesCategorias.forEach(b => b.classList.remove('selecionado'));
      botao.classList.add('selecionado');

     
      const produtosFiltradosPorCategoria = categoriaSelecionada === 'Todos'
        ? products
        : products.filter(produto => produto.category === indice);

      renderCards(produtosFiltradosPorCategoria);
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderButtons();
  renderCards();
  adicionarEventosDeFiltragem();
});
