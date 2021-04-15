import "reflect-metadata";

function logParamTypes(target: any, key: string) {
  var types = Reflect.metadata(key, target);
  console.log(types);
}

class Foo {}
interface IFoo {}

class Demo {
  @logParamTypes
  name?: string;
}

const demo = new Demo();
demo.name = "Matheus";
console.log(demo);
