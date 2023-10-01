function inserir(num_opr) {
    document.querySelector('#result').innerHTML += num_opr;
}

function apagar() {
    let res = document.querySelector('#result').innerHTML;
    document.querySelector('#result').innerHTML = res.substring(0, res.length - 1)
}

function limpar() {
    document.querySelector('#result').innerHTML = "";
}

function calcular() {
    let res = document.querySelector('#result').innerHTML;
    if(res) {
        document.querySelector('#result').innerHTML = eval(res);
    } else {
        document.querySelector('#result').innerHTML = "Nenhum comando";
    }
}