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

document.addEventListener('keydown', (e) => {
    let numsopr = "1 2 3 4 5 6 7 8 9 0 + - * / ."
    if (numsopr.includes(`${e.key}`)) {
        inserir(`${e.key}`)
    } else if ("=" == e.key || "Enter" == e.key) {
        calcular()
    } else if (e.key == "Backspace") {
        apagar()
    }
})