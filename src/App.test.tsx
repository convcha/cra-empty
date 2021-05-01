import { render, screen } from "@testing-library/react";
import { App } from "./App";

test("renders App", () => {
  render(<App />);
  const linkElement = screen.getByText(/cra-empty/i);
  expect(linkElement).toBeInTheDocument();
});
