import React from "react";
import { render } from "@vtex/test-tools/react";
import TsComponent from "./TsComponent";

test("should render the example in TypeScript", () => {
  const { getByText } = render(<TsComponent />);

  expect(getByText(/This is an example/)).toBeDefined();
});
