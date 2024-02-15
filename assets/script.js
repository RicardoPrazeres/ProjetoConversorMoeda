const button = document.getElementById('convert-btn');
const select = document.getElementById('select-change');

const dolar = 5.2;
const euro = 5.9;

const converterValores = () => {
    const inputReais = document.getElementById('input-real').value
    const textoReal = document.getElementById('texto-real')
    const textoDolar = document.getElementById('texto-dolar')

    textoReal.innerHTML = new Intl.NumberFormat ('pt-BR',
    {style: 'currency', currency: 'BRL'}
    ).format(inputReais);

    if(select.value === 'US$ Dólar americano'){
    textoDolar.innerHTML = new Intl.NumberFormat ('en-US',
    {style: 'currency', currency: 'USD'}
    ).format(inputReais / dolar);
}

    if(select.value === "Є$ Euro"){
        textoDolar.innerHTML = new Intl.NumberFormat ('de-DE',
        {style: 'currency', currency: 'EUR'}
        ).format(inputReais / euro);
    } 
}

const mudar = () => {
    const textDolar = document.getElementById('text-dolar')
    const img   = document.getElementById('img');

    if (select.value === 'Є$ Euro') {
        textDolar.innerHTML = "Euro";
        img.src = "img/euro.svg";
    }else{
        textDolar.innerHTML = "Dólar americano";
        img.src = "img/eua.svg";
    }
    converterValores();
}

button.addEventListener('click', converterValores);
select.addEventListener('change', mudar)