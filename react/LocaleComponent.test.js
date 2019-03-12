import React from "react";
import { render } from "@vtex/test-tools/react";
import LocaleComponent from "./LocaleComponent";

test("should render the example translated to portuguese", () => {
  const { getByText } = render(<LocaleComponent />, { locale: 'pt' });

  expect(getByText(/Exemplo/)).toBeDefined();
});
