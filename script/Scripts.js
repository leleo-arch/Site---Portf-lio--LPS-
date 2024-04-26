const list = document.querySelector("ul")
const mapeando = document.querySelector(".Mapear")
const mostrartudo = document.querySelector(".mostrartudo")
const beneficios = document.querySelector(".mostrarbeneficios")
const somartudo = document.querySelector(".somar-tudo")
const filtro = document.querySelector(".filtrar-tudo")
const sobre = document.querySelector(".sobrenos")

function showall(productsArray) {
    let Myli = '';
    productsArray.forEach(product => {
        Myli += `
         <li>
            <img src="${product.src}"> 
            <p>${product.name}</p>
            <p class="priceitem">$ ${product.price}</p>
            <button class='linkpage'><a href="${product.link}">Entrar</button>
            </a>
         </li>
         `;
    });

    list.innerHTML = Myli;
}

function showall2(productsArray) {
    let Myli2 = '';
    productsArray.forEach(product => {
        Myli2 += `
            
            <li class='divarray'>
            <img src="${product.src}"> 
            <h1 class ='h1array'>${product.name2}</h1>
            <p class='parray'>${product.texto}</p>
            </li>
         `;
    });

    list.innerHTML = Myli2;
}


function showall3(productsArray) {
    let Myli3 = '';
    productsArray.forEach(product => {
        Myli3 += `
            <div class='ul3'>
            <li class ='array3'>
            <h1 class ='h2array'>${product.titulo}</h1>
            <p class='parray3'>${product.name3}</p>
            </li>
            </div>
         `;
    });

    list.innerHTML = Myli3;
}

function descont() {
    const descontando = menuOptions.map(prices => {
        prices.price = prices.price * 0.9
        return prices;

    })

    showall(descontando)
}
 
function somando () {
const soma = menuOptions.reduce((acumulador, valor) => {
    if (valor.price > 0) {
        return acumulador + valor.price;
    } else {
        return acumulador;
    }
}, 0);

console.log (soma)
list.textContent = soma;

}

function filtros() {
    const filtrando = menuOptions.filter((valor) => valor.Games === true);
    list.innerHTML = filtrando;
    showall(filtrando);
    console.log(filtrando);
    return filtrando
  }


beneficios.addEventListener('click', () => showall2(Options2) ) 
sobre.addEventListener('click', () => showall3(Options3) ) 
mostrartudo.addEventListener('click', () => showall(menuOptions));
filtro.addEventListener('click', filtros)
mapeando.addEventListener('click', descont)
somartudo.addEventListener('click', somando)