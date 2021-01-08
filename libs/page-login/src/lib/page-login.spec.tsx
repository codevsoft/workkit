import React from "react";
import { render } from "@testing-library/react";

import PageLogin from "./page-login";

describe("PageLogin", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<PageLogin />);
    expect(baseElement).toBeTruthy();
  });
});
