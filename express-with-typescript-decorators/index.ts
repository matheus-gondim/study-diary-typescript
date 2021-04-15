import { Server } from "./src/server";
import { Request, Response } from "express";
import { METHOD } from "./src/enums/method.enum";
import { routeConfig } from "./src/decorators/route-config.decorator";
import { routeLog } from "./src/decorators/route-log.decorator";
import { routesAuth } from "./src/decorators/route-auth.decorator";
import { isNotNull } from "./src/decorators/is-not-null.decorator";

export const server = new Server();

class Routes {
  @routeConfig({ method: METHOD.GET, path: "/hello" })
  public anyNameYouLike(request: Request, response: Response) {
    return "Hello World!";
  }

  @routeLog()
  @routeConfig({ method: METHOD.POST, path: "/post" })
  public async postExample(req: Request, res: Response) {
    const body = req.body;

    let timeoutId;
    try {
      return await new Promise((resolve) => {
        timeoutId = setTimeout(() => resolve("After 2 seconds"), 2000);
      });
    } catch (error) {
      timeoutId && clearTimeout(timeoutId);
      return "Some error message";
    }
  }
}

server.start();
