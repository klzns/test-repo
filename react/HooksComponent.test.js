import React from "react";
import { render, fireEvent, act } from "@vtex/test-tools/react";
import HooksComponent from "./HooksComponent";

test("should handle component with hooks", () => {
  const { getByText } = render(<HooksComponent />);

  expect(getByText(/0 clicks/)).toBeDefined();
});

test("should change state on click", () => {
  const { getByText } = render(<HooksComponent />);

  const button = getByText(/Count/)

  act(() => { fireEvent.click(button) })

  expect(getByText(/1 clicks/)).toBeDefined();
})
