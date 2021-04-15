// Referente ao arquivo tsconfig.json (arquivo para compilação)
// a opção no compilador do ts 'noEmitOnError' serve bara bloquear a compilação quando o arquivo esta errado
// target => mostra para qual versão do javascript vai ser compilado
// sourceMap => faz um mapeamento do arquivo usado em produção com o arquivo de desenvolvimento
// strictNullChecks => se true, gerará um erro informando que você não garantiu a existência de uma variavel antes de tentar usa-la
// noUnusedLocals => reporta um erro quando alguma variavel não é usada localmente dentro da função
// noUnusedParameters => reporta um erro quando alguma parametro e declarado mais não é usado na função
// outDir => indica onde deve ser gerado os arquivos compilados
// outFIle => Se especificado, todos os arquivos globais (não-módulo) serão concatenados no único arquivo de saída especificado. Nota: outFile não pode ser usado a menos que module seja  None, System, ou AMD. Esta opção não pode ser usada para agrupar módulos CommonJS ou ES6.

let canal: string = "Gaveta";
let inscritos: number = 610234;

// canal = inscritos;
console.log(canal);

// function main(params: number) {
//   let a = 1;
// }
