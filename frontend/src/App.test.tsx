import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the landing page", () => {
  render(<App />);
  const searchInput = screen.getByRole("textbox");
  const searchButton = screen.getByRole("button");
  const logo = screen.getByAltText("logo");

  expect(searchInput).toBeInTheDocument();
  expect(searchButton).toBeInTheDocument();
  expect(logo).toBeInTheDocument();
});
