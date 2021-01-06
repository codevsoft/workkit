import { Express } from "express";

interface Todo {
  title: string;
}

const todos: Todo[] = [{ title: "Todo 1" }, { title: "Todo 2" }];

export function addTodoRoutes(app: Express): void {
  app.get("/api/todos", (_, resp) => resp.send(todos));
}
