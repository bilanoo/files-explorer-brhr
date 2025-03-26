import { render, screen } from "@testing-library/react";
import { Header } from "./Header";

describe("Header", () => {
  it("should display the logo", () => {
    render(<Header />);

    expect(screen.getByTestId("bright-hr-logo")).toBeInTheDocument();
    expect(screen.getByText("0800 470 2432")).toBeInTheDocument();
  });
});
