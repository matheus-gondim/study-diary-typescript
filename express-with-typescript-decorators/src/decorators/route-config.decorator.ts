import { RouteConfigProps } from "../interfaces/route-config-props.interface";
import { server } from "../../index";
import { Request, Response } from "express";
import { MethodDecoratorParam } from "../types/method-decorator-param.type";

export function routeConfig({
  method,
  path,
}: RouteConfigProps): MethodDecorator {
  return function (...{ ...param }: MethodDecoratorParam): void {
    const response = async (req: Request, res: Response) => {
      try {
        const original = await param[2].value(req, res);
        res.status(200).json(original);
      } catch (error) {
        res.status(500).json({
          message: "Some error occurred",
          error: error.message,
          stack: error.stack,
        });
      }
    };

    server.app[method](path, response);
  };
}
