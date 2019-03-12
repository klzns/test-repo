import React from "react";
import { render } from "@vtex/vtex-scripts/test-utils";
import JsComponent from "./JsComponent";

test("should render the example", () => {
  const { getByText } = render(<JsComponent />);

  expect(getByText(/This is an example/)).toBeDefined();
});
