import React from "react";
import { render } from "@testing-library/react";

import PasswordRecovery from "./password-recovery";

describe("PasswordRecovery", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<PasswordRecovery />);
    expect(baseElement).toBeTruthy();
  });
});
