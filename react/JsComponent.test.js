import React from "react";
import { render } from "@vtex/test-tools/react";
import JsComponent from "./JsComponent";

test("should render the example", () => {
  const { getByText } = render(<JsComponent />);

  expect(getByText(/This is an example/)).toBeDefined();
});
