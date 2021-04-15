"use strict";
// para fazer o browser interpretar os import e export
// então é preciso usar ou um empacotador de módulo JavaScript (webpack)
// ou um package (systemJS)
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const retangulo_1 = __importDefault(require("./retangulo"));
const circunferencia_1 = require("./circunferencia");
console.log(retangulo_1.default(7, 8));
console.log(circunferencia_1.areaCircunferencia(2));
//usando o padrão do commonsJS
const { digaOi } = require("./novo");
console.log(digaOi("Matheus"));
//# sourceMappingURL=modulos.js.map