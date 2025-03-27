import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("should display the heading", () => {
    render(<App />);

    expect(screen.getByText("0800 470 2432")).toBeInTheDocument();
  });

  it("should test the search input field", () => {
    render(<App />);
    const input = screen.getByLabelText("Search");
    fireEvent.change(input, { target: { value: "Dolly" } });
    expect(input.value).toBe("Dolly");
  });
});
