import React from "react";
import { render } from "@vtex/vtex-scripts/test-utils";
import TsComponent from "./TsComponent";

test("should render the example in TypeScript", () => {
  const { getByText } = render(<TsComponent />);

  expect(getByText(/This is an example/)).toBeDefined();
});
