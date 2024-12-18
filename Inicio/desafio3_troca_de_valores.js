let a = 7;
let b = 94;
console.log(a, b);

let x = a //nova variavel criada para armazenar o valor de 'a'

a = b;
b = x;
console.log(a, b);
console.log(" ");
//ou de forma simplificada a troca pode ser executada por colchetes:
let A = 15;
let B = 34;
console.log(A, B);

[A, B] = [B, A];
console.log(A, B);