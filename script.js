var res = document.querySelector('#res');

function insert(num_opr) {
    res.innerHTML += num_opr;
}

function clean() {
    res.innerHTML = "";
}

function retry() {
    res = document.querySelector('#res').innerHTML;
    document.querySelector('#res').innerHTML = res.substring(
    0,
    res.length-1);
}