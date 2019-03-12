import React from "react";
import { render } from "@vtex/vtex-scripts/test-utils";
import CssComponent from "./CssComponent";

test("should render the example", () => {
  const { container, debug } = render(<CssComponent />);

  debug();

  //expect(getByText(/This is an example/)).toBeDefined();
});
