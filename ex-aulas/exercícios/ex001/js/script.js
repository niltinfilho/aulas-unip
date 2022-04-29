function somar() {
    var n1 = Number(document.getElementById('num1').value)
    var n2 = Number(document.getElementById('num2').value)
    var resultado = n1 + n2
    /* document.getElementById('res').value = resultado */
    document.getElementById('res'). innerHTML = `A soma entre ${n1} e ${n2} é igual a ${resultado}`
}