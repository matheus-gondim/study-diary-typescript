class Data {
  constructor(
    public dia: number = 1,
    public mes: number = 1,
    public ano: number = 1970
  ) {}
}

const aniversarioEsperto = new Data(3, 11, 1991);
aniversarioEsperto.dia = 4;
console.log(aniversarioEsperto);

const casamentoEsperto = new Data(); // pode omitir os "()"
casamentoEsperto.ano = 2017;
console.log(casamentoEsperto);

class Produto {
  constructor(
    public nome: string,
    public preco: number,
    public desconto: number = 0
  ) {}

  resumo(): string {
    return `${this.nome} custa R$${this.precoComDesconto()} (${
      this.desconto * 100
    }% off)`;
  }

  precoComDesconto(): number {
    return parseFloat((this.preco * (1 - this.desconto)).toFixed(2));
  }
}

const prod1 = new Produto("Caneta", 4.2);
prod1.desconto = 0.06;
console.log(prod1.resumo());

const prod2 = new Produto("Caderno", 18.8, 0.15);
console.log(prod2.resumo());

class Carro {
  private velocidadeAtual: number = 0;

  constructor(
    public marca: string,
    public modelo: string,
    private velocidadeMaxima: number = 200
  ) {}

  // protected => serve para transmitir um metodo ou atributo pro herança
  protected alterarVelocidade(delta: number): number {
    const novaVelocidade = this.velocidadeAtual + delta;
    const velocidadeValida =
      novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima;

    if (velocidadeValida) this.velocidadeAtual = novaVelocidade;
    else this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;

    return this.velocidadeAtual;
  }

  public acelerar(): number {
    return this.alterarVelocidade(5);
  }

  public frear(): number {
    return this.alterarVelocidade(-5);
  }
}

const carro1 = new Carro("Ford", "Ka", 185);
console.log(carro1.acelerar());
console.log(carro1.frear());

class Ferrari extends Carro {
  constructor(modelo: string, velocidadeMaxima: number) {
    super("Ferrari", modelo, velocidadeMaxima);
  }

  public acelerar(): number {
    return this.alterarVelocidade(20);
  }

  public frear(): number {
    return this.alterarVelocidade(-15);
  }
}

const f40 = new Ferrari("F40", 324);
console.log(f40.acelerar());
console.log(f40.frear());

// Getters & Setters
class Pessoa {
  private _idade: number = 0;

  get idade(): number {
    return this._idade;
  }

  set idade(valor: number) {
    if (valor >= 0 && valor <= 120) this._idade = valor;
  }
}

const pessoa1 = new Pessoa();
pessoa1.idade = 10;
console.log(pessoa1);

//Atributos e métodos estáticos
class Matematica {
  static PI: number = 3.1416;

  static areaCirc(raio: number): number {
    return Math.pow(raio, 2) * this.PI;
  }
}

console.log(Matematica.areaCirc(4));

// CLASS ABSTRACT
// As classes abstratas são classes básicas das quais outras classes podem ser derivadas.
// Eles não podem ser instanciados diretamente. Ao contrário de uma interface,
// uma classe abstrata pode conter detalhes de implementação para seus membros.
// Métodos marcados com abstract não contêm uma implementação e devem ser implementados em classes derivadas.

abstract class Calculo {
  protected resultado = 0;
  abstract executar(...numeros: number[]): void;

  getResultado(): number {
    return this.resultado;
  }
}

class Soma extends Calculo {
  executar(...numeros: number[]): void {
    this.resultado = numeros.reduce((acc, elm) => acc + elm);
  }
}

class Multiplicacao extends Calculo {
  executar(...numeros: number[]): void {
    this.resultado = numeros.reduce((acc, elm) => acc * elm);
  }
}

let c1: Calculo = new Soma();
c1.executar(2, 3, 4, 5);
console.log(c1.getResultado());

c1 = new Multiplicacao();
c1.executar(2, 3, 4, 5);
console.log(c1.getResultado());

// Singleton => serve para ter uma unica instancia
class Unico {
  private static instance: Unico = new Unico();
  private constructor() {}

  static getInstance(): Unico {
    return Unico.instance;
  }

  agora() {
    return new Date();
  }
}

console.log(Unico.getInstance().agora());

// readonly
class Aviao {
  public readonly modelo: string;
  constructor(modelo: string, public readonly prefixo: string) {
    this.modelo = modelo;
  }
}

const turboHrlice = new Aviao("Tu-114", "PT-ABC");
console.log(turboHrlice);
