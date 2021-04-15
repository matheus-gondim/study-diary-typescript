import { Request, Response } from "express";
import { MethodDecoratorParam } from "../types/method-decorator-param.type";

export function routesAuth(key: string): MethodDecorator {
  return function (...{ ...param }: MethodDecoratorParam) {
    const original = param[2].value;

    param[2].value = function (...args: any[]) {
      const request = args[0] as Request;
      const response = args[1] as Response;

      const headers = request.headers;

      if (headers.authorization === `Bearer ${key}`) {
        return original.apply(this, args);
      }

      response.status(403).json({ error: "Not Authorized" });
    };
  };
}
