// peso / (altura * altura);

const nome = 'wellington';
const altura = 1.80;
const peso = 100;

const imc = peso / (altura * altura);

console.log(`o IMC de ${nome} é ${imc}`);


// SE o IMC maior ou igual a 30: Carlos você está acima do peso;
// SE o IMC menor que 29.9: Carlos você não está acima do peso;

if (imc >= 30) {
    console.log(`${nome} você esta acima do peso!`);
}
if (imc <= 29.9) {
    console.log(`${nome} você não esta acima do peso`)
}

