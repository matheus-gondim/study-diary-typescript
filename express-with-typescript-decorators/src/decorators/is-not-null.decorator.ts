export function isNotNull() {
  return function (target: any, key: string | symbol) {
    Object.defineProperty(target, key, {
      get: function () {
        return this.valor;
      },
      set: function (newValor: string) {
        if (newValor) this.valor = newValor;
        else throw new Error(`Campo ${key.toString()} é obrigatório`);
      },
      enumerable: true,
      configurable: true,
    });
  };
}
