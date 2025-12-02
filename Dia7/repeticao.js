import leia from 'readline-sync';

let numero1, numero2, resultado
let continuar = true

while(continuar) {
    numero1 = leia.questionInt('Digite o primeiro numero: ')
    numero2 = leia.questionInt('Digite o segundo numero: ')
    resultado = numero1 + numero2

    console.log('A soma dos dois numeros é igual a: ' + resultado);
    console.log('*******************************');
    continuar = leia.keyInYNStrict('Quer fazer mais uma conta? ')
    console.log('O valor de continuar é: ' + continuar);
}