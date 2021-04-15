// para fazer o browser interpretar os import e export
// então é preciso usar ou um empacotador de módulo JavaScript (webpack)
// ou um package (systemJS)

import retangulo from "./retangulo";
import { areaCircunferencia as circ } from "./circunferencia";

console.log(retangulo(7, 8));
console.log(circ(2));

//usando o padrão do commonsJS
const { digaOi } = require("./novo");
console.log(digaOi("Matheus"));
