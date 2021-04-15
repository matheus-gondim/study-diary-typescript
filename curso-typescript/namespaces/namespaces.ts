//os namespaces são úteis para agrupar objetos e tipos relacionados logicamente.
namespace Geometria {
  export namespace Area {
    const PI = Math.PI;
    export function circunferencia(raio: number): number {
      return PI * Math.pow(raio, 2);
    }
    export function retangulo(base: number, altura: number): number {
      return base * altura;
    }
  }
}

console.log(Geometria.Area.circunferencia(10));
console.log(Geometria.Area.retangulo(10, 20));
