import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("should display the heading", () => {
    render(<App />);

    expect(screen.getByText("0800 470 2432")).toBeInTheDocument();
  });
});
