"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = __importDefault(require("node-fetch"));
// let & const
let seraQuePode = "?";
console.log(seraQuePode);
let estaFrio = true;
if (estaFrio) {
    let acao = "Colocar o casaco!";
    console.log(acao);
}
const cpf = "123.456.000-99";
// cpf = '789.101.132-78'
console.log(cpf);
var segredo = "externo!";
function revelar() {
    const segredo = "interno";
    console.log(segredo);
}
revelar();
console.log(segredo);
// Arrow Function
function somar(n1, n2) {
    return n1 + n2;
}
console.log(somar(2, 2));
const subtrair = (n1, n2) => n1 - n2;
console.log(subtrair(2, 3));
const saudacao = () => console.log("Olá!");
saudacao();
const falarCom = (pessoa) => console.log("Ola " + pessoa);
falarCom("João");
// this
// function normalComThis() {
//     console.log(this)
// }
// normalComThis()
// const normalComThisEspecial = normalComThis
//     .bind({ nome: 'Ana' }) //bind => cria uma nova função que, quando chamada, tem sua palavra-chave this definida com o valor fornecido
// normalComThisEspecial()
// // this???
// console.log(this)
// const arrowComThis = () => console.log(this)
// arrowComThis()
// const arrowComThisEspecial = arrowComThis
//     .bind({ nome: 'Ana' })
// arrowComThisEspecial()
// Parâmetros padrão
function contagemRegressiva(inicio = 5, fim = inicio - 5) {
    console.log(inicio);
    while (inicio > fim) {
        inicio--;
        console.log(inicio);
    }
    console.log("Fim!");
}
contagemRegressiva();
contagemRegressiva(3);
// Spread => permite que um objeto iterável, como um array ou string, seja expandida em locais onde zero ou mais argumento
const numbers = [1, 10, 99, -5, 200, 1034];
console.log(Math.max(...numbers));
const turmaA = ["João", "Maria", "Fernanda"];
const turmaB = ["Fernando", ...turmaA, "Miguel", "Lorena"];
console.log(turmaB);
// Rest => permite representar um número indefinido de argumentos como um array.
// quando há outro parametro na função ele deve ser o primeiro elemento
const retornarArray = (a, ...args) => [a, ...args];
const numeros = retornarArray(1, 2, 4, 5, 6, 345, 623);
console.log(numeros);
// Rest & Spread (Tupla)
const tupla = [1, "abc", false];
const tuplaParam1 = (a, b, c) => console.log(`1) ${a} ${b} ${c}`);
tuplaParam1(...tupla);
function tuplaParam2(...params) {
    console.log(Array.isArray(params));
    console.log(`2) ${params[0]} ${params[1]} ${params[2]}`);
}
tuplaParam2(...tupla);
// Destructuring (array)
const caracteristicas = ["Motor Zetec 1.8", 2020];
const [motor, ano] = caracteristicas;
console.log({ motor }, { ano });
// Destructuring (objeto)
const item = {
    nome: "SSD 480GB",
    preco: 200,
    caracteristicas: { w: "Importado" },
};
const { nome: nomeItem, preco: precoItem, caracteristicas: { w: wItem }, } = item;
console.log({ nomeItem }, { precoItem }, { wItem });
//Template String
const usuarioID = "SuporteCod3r";
const notificacoes = "19";
const boasVindas = `
Boas vindas ${usuarioID},
Notificações: ${parseInt(notificacoes) > 9 ? "+9" : notificacoes}
`;
console.log(boasVindas);
// Desafios
// Exercicio 01
const dobro = (valor) => valor * 2;
console.log(dobro(10));
// Exercicio 02
const dizerOla = (nome = "Pessoa") => console.log("Ola, " + nome);
dizerOla();
dizerOla("Anna");
// Exercicio 03
const nums = [-3, 33, 38, 5];
console.log(Math.min(...nums));
// Exercicio 04
const array = [55, 20];
array.push(...nums);
console.log(array);
// Exercicio 05
const notas = [8.5, 6.3, 9.4];
const [nota1, nota2, nota3] = notas;
console.log({ nota1 }, { nota2 }, { nota3 });
// Exercicio 06
const cientista = { primeiroNome: "Will", experiencia: 12 };
const { primeiroNome, experiencia } = cientista;
console.log({ primeiroNome }, { experiencia });
// Callback
function esperar3s(callback) {
    setTimeout(() => {
        callback("3s depois...");
    }, 3000);
}
esperar3s(function (resultado) {
    console.log(resultado);
});
// Promise
function esperar3sPromise() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("3s depois promise..."), 3000);
    });
}
esperar3sPromise().then((dado) => console.log(dado));
node_fetch_1.default(" https://swapi.dev/api/people/1")
    .then((res) => res.json())
    .then((personagem) => personagem.films)
    .then((films) => node_fetch_1.default(films[0]))
    .then((resFilm) => resFilm.json())
    .then(({ title }) => console.log(title))
    .catch(console.log);
//# sourceMappingURL=ecmascript.js.map