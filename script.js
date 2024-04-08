document.getElementById('botaoInverter').addEventListener('click', function() {
    var textoOriginal = document.getElementById('textoOriginal').value;
    var palavras = textoOriginal.split(' ');
    var palavrasInvertidas = palavras.reverse();
    var textoInvertido = palavrasInvertidas.join(' ');
    document.getElementById('textoInvertido').value = textoInvertido;
});