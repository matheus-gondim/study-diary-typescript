function echo(objeto: any) {
  return objeto;
}

console.log(echo("João"));
console.log(echo(27));
console.log(echo({ nome: "João", idade: 27 }));

//Usando Generics
function echoMelhor<T>(objeto: T): T {
  return objeto;
}

console.log(echoMelhor("João"));
console.log(echoMelhor<number>(27));
console.log(echoMelhor({ nome: "João", idade: 27 }));

// Generics disponíveis no Typescript
const avaliacoes: Array<number> = [10, 9.3, 7.7];
avaliacoes.push(8.4);
console.log(avaliacoes);

function imprimir<T>(args: T[]) {
  args.forEach((elem) => console.log(elem));
}
imprimir([1, 2, 3]);
imprimir<number>([1, 2, 3]);
imprimir<string>(["Ana", "Bea", "Carlos"]);

type Aluno = { nome: string; idade: number };
imprimir<Aluno>([
  { nome: "Fulano", idade: 22 },
  { nome: "Ciclano", idade: 23 },
  { nome: "Beotrano", idade: 24 },
]);

// função do tipo genérico
type Echo = <T>(data: T) => T;
const chamarEcho: Echo = echoMelhor;
console.log(chamarEcho<string>("Alguma coisa"));

// Class com Generics
abstract class OperacaoBinaria<T, R> {
  constructor(public operador1: T, public operador2: T) {}
  abstract executar(): R;
}

class SomaBinaria extends OperacaoBinaria<number, number> {
  executar() {
    return this.operador1 + this.operador2;
  }
}

console.log(new SomaBinaria(3, 4).executar());

type TipoData = {
  dia: number;
  mes: number;
  ano: number;
};

class DiferencaEntreDatas extends OperacaoBinaria<TipoData, string> {
  getTime(data: TipoData): number {
    const { dia, mes, ano } = data;
    return new Date(`${mes}/${dia}/${ano}`).getTime();
  }

  executar(): string {
    const t1 = this.getTime(this.operador1);
    const t2 = this.getTime(this.operador2);
    const diferenca = Math.abs(t1 - t2);
    const diaEmMilesegundos = 1000 * 60 * 60 * 24;
    return `${Math.ceil(diferenca / diaEmMilesegundos)} dia(s)`;
  }
}

const d1: TipoData = { dia: 1, mes: 2, ano: 2020 };
const d2: TipoData = { dia: 1, mes: 5, ano: 2022 };
console.log(new DiferencaEntreDatas(d1, d2).executar());

//<T extends number | string> => serve para restringir o tipo generic
class Fila<T extends number | string> {
  private fila: Array<T>;

  constructor(...args: T[]) {
    this.fila = args;
  }

  entrar(elem: T): void {
    this.fila.push(elem);
  }

  proximo() {
    if (this.fila.length > 0) return this.fila.shift();
    return "A fila esta vazia, não há proximo";
  }

  imprimir() {
    if (this.fila.length > 0) console.log(this.fila);
    else console.log("A fila esta vazia");
  }
}

const fila = new Fila<string>("Gui", "Pedro", "Ana", "Lu");
fila.imprimir();
fila.entrar("Rafael");
fila.imprimir();
console.log(fila.proximo());
console.log(fila.proximo());
console.log(fila.proximo());
fila.imprimir();

// Desafio do modulo

// Desafio Mapa
// Array de Objetos (Chave/Valor) -> itens
// Métodos: obter(Chave), colocar({ C, V })
// limpar(), imprimir()

type Par<C, V> = { chave: C; valor: V };

class Mapa<C, V> {
  itens: Par<C, V>[] = [];

  obter(chave: C): Par<C, V> | null {
    const result = this.itens.filter((elem) => elem.chave === chave);
    return result[0] ?? null;
  }

  colocar(par: Par<C, V>) {
    const encontrado = this.obter(par.chave);
    if (encontrado) encontrado.valor = par.valor;
    else this.itens.push(par);
  }

  limpar() {
    this.itens = [];
  }

  imprimir() {
    console.log(this.itens);
  }
}

const mapa = new Mapa<number, string>();
mapa.colocar({ chave: 1, valor: "Pedro" });
mapa.colocar({ chave: 2, valor: "Rebeca" });
mapa.colocar({ chave: 3, valor: "Maria" });
mapa.colocar({ chave: 1, valor: "Gustavo" });

console.log(mapa.obter(2));
mapa.imprimir();
mapa.limpar();
mapa.imprimir();
