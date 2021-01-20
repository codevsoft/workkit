import React from "react";
import { render } from "@testing-library/react";

import SelectLanguage from "./select-language";

describe("SelectLanguage", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<SelectLanguage />);
    expect(baseElement).toBeTruthy();
  });
});
