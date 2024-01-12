function factorialFunct() {
    const resultadoFactorial = document.getElementById('factorial')
    const inputUser = parseInt(prompt('Ingrese un numero para conocer su fatorial'));
    let factorialNums = 1;

    if (inputUser === parseInt(inputUser)) {
        for (let i = 1; i <= inputUser; i++) {
            factorialNums *= i;
        } 
        resultadoFactorial.innerHTML = `El factorial de ${inputUser} es ${factorialNums}`
    }
    else {
        alert('Invalid Input')
        factorialFunct();
    }
}

factorialFunct();
