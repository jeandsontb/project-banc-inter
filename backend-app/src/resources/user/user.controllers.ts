import { Request, Response } from "express";
import UserService from "./user.service";

export class UserController {
  async signin(request: Request, response: Response) {

    const {email, password} = request.body;
    const userService = new UserService();
    const users = await userService.signin({email, password});
    return response.status(200).send(users)
  }

  async signup(request: Request, response: Response) {
    const userService = new UserService();
    const user = await userService.signup(request.body);
    return response.status(200).send(user);
  }

  async me (request: Request, response: Response) {
    const userService = new UserService();
    const user = await userService.me(request.user);
    return response.status(201).send(user)
  }
}