import { MethodDecoratorParam } from "../types/method-decorator-param.type";

export function routeLog(): MethodDecorator {
  return function (...{ ...param }: MethodDecoratorParam) {
    const original = param[2].value;

    param[2].value = function (...args: any[]) {
      let request = args[0] as Request;

      const { url, method, body, headers } = request;

      console.log("[LOG]", {
        url,
        method,
        body,
        headers,
      });

      return original.apply(this, args);
    };
  };
}
