function calcularmedia(a, b, c){
    let resultado = (a + b + c)/3;
    return resultado;
}

function calcularexame(nota){
    let resultado = 10 - nota;
    return resultado;
}


$('#inputOla').click(
    function(){
        calculo =
        {
            'a':document.getElementById('inputA').value,
            'b':document.getElementById('inputB').value,
            'c':document.getElementById('inputC').value
        }
        //let media = ( parseInt(calculo.a) + parseInt(calculo.b) + parseInt(calculo.c)) /3;
        //let exm = (10 - media);
        let media = calcularmedia(
            parseInt(calculo.a),
            parseInt(calculo.b), 
            parseInt(calculo.c)
        );
        if 
        (media >= 7) {
        alert('Você foi aprovado');
         } else {
            alert('Você esta de recuperação, você precisa de ' + calcularexame(media));
         }

}
)
