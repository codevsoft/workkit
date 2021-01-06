import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "@emotion/styled";

export interface Todo {
  title: string;
}

const StyledApp = styled.div`
  font-family: sans-serif;
  min-width: 300px;
  max-width: 600px;
  margin: 50px auto;
`;

export function App(): React.ReactElement<Record<string, unknown>> {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    axios.get("/api/todos").then(({ data }) => setTodos(data));
  }, []);

  return (
    <StyledApp>
      <header className="flex">
        <h1>Welcome to workkit!</h1>
      </header>
      <main>
        <h1>Todos</h1>
        <ul>
          {todos.map((t) => (
            <li className={"todo"}>{t.title}</li>
          ))}
        </ul>
      </main>
    </StyledApp>
  );
}

export default App;
