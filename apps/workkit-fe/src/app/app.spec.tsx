import React from "react";
import { render, screen } from "@testing-library/react";
import { rest } from "msw";
import "@testing-library/jest-dom/extend-expect";

import App, { Todo } from "./app";

const todos: Todo[] = [{ title: "Todo 1" }, { title: "Todo 2" }];

export const handlers = [
  // Handles a GET /user request
  rest.get("/api/todos", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(todos));
  }),
];

describe("App", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<App />);

    expect(baseElement).toBeTruthy();
  });

  it("should render the correct title", () => {
    render(<App />);
    expect(screen.getByText("Welcome to workkit!")).toBeTruthy();
  });
});
