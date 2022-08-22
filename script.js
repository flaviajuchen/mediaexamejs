$('#inputOla').click(
    function(){
        calculo =
        {
            'a':document.getElementById('inputA').value,
            'b':document.getElementById('inputB').value,
            'c':document.getElementById('inputC').value
        }
        let media = ( parseInt(calculo.a) + parseInt(calculo.b) + parseInt(calculo.c)) /3;
        let exm = (10 - media);
        if 
        (media >= 7) {
        alert('Você foi aprovado');
         } else {
            alert('Você esta de recuperação, você precisa de ' + exm);
         }

}
)
