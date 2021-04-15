"use strict";
function echo(objeto) {
    return objeto;
}
console.log(echo("João"));
console.log(echo(27));
console.log(echo({ nome: "João", idade: 27 }));
//Usando Generics
function echoMelhor(objeto) {
    return objeto;
}
console.log(echoMelhor("João"));
console.log(echoMelhor(27));
console.log(echoMelhor({ nome: "João", idade: 27 }));
// Generics disponíveis no Typescript
const avaliacoes = [10, 9.3, 7.7];
avaliacoes.push(8.4);
console.log(avaliacoes);
function imprimir(args) {
    args.forEach((elem) => console.log(elem));
}
imprimir([1, 2, 3]);
imprimir([1, 2, 3]);
imprimir(["Ana", "Bea", "Carlos"]);
imprimir([
    { nome: "Fulano", idade: 22 },
    { nome: "Ciclano", idade: 23 },
    { nome: "Beotrano", idade: 24 },
]);
const chamarEcho = echoMelhor;
console.log(chamarEcho("Alguma coisa"));
// Class com Generics
class OperacaoBinaria {
    constructor(operador1, operador2) {
        this.operador1 = operador1;
        this.operador2 = operador2;
    }
}
class SomaBinaria extends OperacaoBinaria {
    executar() {
        return this.operador1 + this.operador2;
    }
}
console.log(new SomaBinaria(3, 4).executar());
class DiferencaEntreDatas extends OperacaoBinaria {
    getTime(data) {
        const { dia, mes, ano } = data;
        return new Date(`${mes}/${dia}/${ano}`).getTime();
    }
    executar() {
        const t1 = this.getTime(this.operador1);
        const t2 = this.getTime(this.operador2);
        const diferenca = Math.abs(t1 - t2);
        const diaEmMilesegundos = 1000 * 60 * 60 * 24;
        return `${Math.ceil(diferenca / diaEmMilesegundos)} dia(s)`;
    }
}
const d1 = { dia: 1, mes: 2, ano: 2020 };
const d2 = { dia: 1, mes: 5, ano: 2022 };
console.log(new DiferencaEntreDatas(d1, d2).executar());
//<T extends number | string> => serve para restringir o tipo generic
class Fila {
    constructor(...args) {
        this.fila = args;
    }
    entrar(elem) {
        this.fila.push(elem);
    }
    proximo() {
        if (this.fila.length > 0)
            return this.fila.shift();
        return "A fila esta vazia, não há proximo";
    }
    imprimir() {
        if (this.fila.length > 0)
            console.log(this.fila);
        else
            console.log("A fila esta vazia");
    }
}
const fila = new Fila("Gui", "Pedro", "Ana", "Lu");
fila.imprimir();
fila.entrar("Rafael");
fila.imprimir();
console.log(fila.proximo());
console.log(fila.proximo());
console.log(fila.proximo());
fila.imprimir();
class Mapa {
    constructor() {
        this.itens = [];
    }
    obter(chave) {
        var _a;
        const result = this.itens.filter((elem) => elem.chave === chave);
        return (_a = result[0]) !== null && _a !== void 0 ? _a : null;
    }
    colocar(par) {
        const encontrado = this.obter(par.chave);
        if (encontrado)
            encontrado.valor = par.valor;
        else
            this.itens.push(par);
    }
    limpar() {
        this.itens = [];
    }
    imprimir() {
        console.log(this.itens);
    }
}
const mapa = new Mapa();
mapa.colocar({ chave: 1, valor: "Pedro" });
mapa.colocar({ chave: 2, valor: "Rebeca" });
mapa.colocar({ chave: 3, valor: "Maria" });
mapa.colocar({ chave: 1, valor: "Gustavo" });
console.log(mapa.obter(2));
mapa.imprimir();
mapa.limpar();
mapa.imprimir();
//# sourceMappingURL=generics.js.map