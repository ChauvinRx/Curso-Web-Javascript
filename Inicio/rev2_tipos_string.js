const escola = "cod3r"

console.log(escola.charAt(4)); // retorna o caractere na posição especificada
console.log(escola.charAt(5)); // se nao tiver um valor na posição retorna valor vazio ao invés de erro
console.log(escola.charCodeAt(3)); //retorna o valor do caractere de acordo com a tabela ASCI
console.log(escola.indexOf('3')); // retorna o número inidicado pela posição(3)

console.log(escola.substring(2))
console.log(escola.substring(0, 3))

console.log('Escola '.concat(escola).concat("!")) /*pega um literal(o que está nas aspas)
e concatena com variavel 'escola' e com !*/

console.log(escola.replace(3, 'e')) // pega o obejto da posição 3 e substitui pela item das " "
console.log(escola.replace(/\d/, 'e')) // substitui todos os digitos do texto pela letra 'e'
console.log(escola.replace(/\w/g, 'e')) /* substitui todas as letras to texto pela letra 'e'
se estiver sem o 'g' substitui somente a 1° letra do texto por 'e'*/
