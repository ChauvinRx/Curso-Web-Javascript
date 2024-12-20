const peso1 = 1.0
const peso2 = Number('2.0') 

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.971

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) // '2' representa a quantidade de casas decimais
console.log(media.toString())
console.log(media.toString(2)) // resultado em binário
console.log(typeof media)

//observações sobre números em Javascript:
console.log()
console.log( 7 / 0) // qualquer divisão por 0 não gera um erro e sim um 'infinito'
console.log("10" / 2) // Js pode reconhecer uma string como sendo um número e realizar a operação
console.log('show!' * 2) //não multiplica a string(ex: show! show!)
console.log(0.1 + 0.7) // não tem uma precisão exata por conta de fazer uma execução mais rápida
//console.log(10.toString()) um número só pode utilizar o 'toString' se estiver dentro de aspas " "
console.log((10.345).toFixed(2)) //dentro do parênteses tem como chamar a função sem precisar das aspas " "