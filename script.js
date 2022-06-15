var easyBtn = document.getElementById("easy");
var normalBtn = document.getElementById('normal');
var hardBtn = document.getElementById('hard');

function randomNumber(a, b) {
    return Math.floor(Math.random() *(b - a + 1)) + a
}


function easyMode() {
    // para parar as outras funçoes \\

    

    var number1 = randomNumber(2,10)
    var number2 = randomNumber(2,10)

    
    texto.textContent = `${number1} x ${number2}:`;
    
    var NovoInput = document.getElementById('resposta');
    NovoInput.style.visibility = 'visible'


    function btnStop() {
        easyBtn.removeEventListener('click', easyMode);
        normalBtn.removeEventListener('click', normalMode);
        hardBtn.removeEventListener('click', hardMode);
    }

    setTimeout(calculo, 8000);
    setTimeout(btnStop, 0001);
    

    function reiniciar() {
        texto.textContent = 'vamos tentar novamente'
        
        easyBtn.addEventListener('click',easyMode);
        normalBtn.addEventListener('click',normalMode);
        hardBtn.addEventListener('click',hardMode);
    }

    function calculo()  {
        conta = number1 * number2

        if(resposta.value == conta) {
            texto.textContent = 'Parabens voce acertou'
        }
        else {
            texto.textContent = 'Resposta errada'
        }
        setTimeout(reiniciar,5000)
    }

}

function normalMode() {
    // para parar as outras funçoes \\
    clearInterval(calculo,reiniciar)
    

    var number1 = randomNumber(2,12)
    var number2 = randomNumber(2,12)

    
    texto.textContent = `${number1} x ${number2}:`;
    
    var NovoInput = document.getElementById('resposta');
    NovoInput.style.visibility = 'visible'

    function btnStop() {
        easyBtn.removeEventListener('click', easyMode);
        normalBtn.removeEventListener('click', normalMode);
        hardBtn.removeEventListener('click', hardMode);
    }

    setTimeout(calculo, 5000);
    setTimeout(btnStop, 0001);
    

    function reiniciar() {
        texto.textContent = 'vamos tentar novamente'

        easyBtn.addEventListener('click',easyMode);
        normalBtn.addEventListener('click',normalMode);
        hardBtn.addEventListener('click',hardMode);
    }

    function calculo()  {
        conta = number1 * number2

        if(resposta.value == conta) {
            texto.textContent = 'Parabens voce acertou'
        }
        else {
            texto.textContent = 'Resposta errada'
        }
        setTimeout(reiniciar,5000)
    }
}

function hardMode() {

    // para parar as outras funçoes \\
    clearInterval(calculo,reiniciar)
   

    var number1 = randomNumber(2,10)
    var number2 = randomNumber(2,10)

    
    texto.textContent = `${number1} x ${number2}:`;
    
    var NovoInput = document.getElementById('resposta');
    NovoInput.style.visibility = 'visible'

    function btnStop() {
        easyBtn.removeEventListener('click', easyMode);
        normalBtn.removeEventListener('click', normalMode);
        hardBtn.removeEventListener('click', hardMode);
    }

    setTimeout(calculo, 3500);
    setTimeout(btnStop, 0001);
    

    function reiniciar() {
        texto.textContent = 'vamos tentar novamente'

        easyBtn.addEventListener('click',easyMode);
        normalBtn.addEventListener('click',normalMode);
        hardBtn.addEventListener('click',hardMode);
    }

    function calculo()  {
        conta = number1 * number2

        if(resposta.value == conta) {
            texto.textContent = 'Parabens voce acertou'
        }
        else {
            texto.textContent = 'Resposta errada'
        }
        setTimeout(reiniciar,5000)
    }
}

easyBtn.addEventListener('click',easyMode);
normalBtn.addEventListener('click',normalMode);
hardBtn.addEventListener('click',hardMode);