"use strict";
//os namespaces são úteis para agrupar objetos e tipos relacionados logicamente.
var Geometria;
(function (Geometria) {
    let Area;
    (function (Area) {
        const PI = Math.PI;
        function circunferencia(raio) {
            return PI * Math.pow(raio, 2);
        }
        Area.circunferencia = circunferencia;
        function retangulo(base, altura) {
            return base * altura;
        }
        Area.retangulo = retangulo;
    })(Area = Geometria.Area || (Geometria.Area = {}));
})(Geometria || (Geometria = {}));
console.log(Geometria.Area.circunferencia(10));
console.log(Geometria.Area.retangulo(10, 20));
//# sourceMappingURL=namespaces.js.map