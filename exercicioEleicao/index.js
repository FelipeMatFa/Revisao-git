// Criar algoritmo que verifica a idade e valide a necessidade de uma pessoa de votar
// Não possui idade
// Obrigatório
// Facultativo

// Declarações
const nome = "Felipe";
let idade = 40;

// Desenvolvimento
if (idade >= 18 && idade <= 70){
    console.log(`${nome} é obrigado a votar pois seu voto é obrigatório`);
} else if (idade >= 16 && idade < 18 || idade > 70){
    console.log(`${nome} não é obrigado a votar pois seu voto ser facultativo`);
} else if (idade < 16){
    console.log(`${nome} não têm idade para votar`);
}

// Informar o nome e a classificação de obrigatoridade de votar

// 18 e 70 obrigatorio

// 16 a 17 facultativo