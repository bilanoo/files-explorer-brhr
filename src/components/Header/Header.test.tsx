import { render, screen } from "@testing-library/react";
import { Header } from "./Header";

describe("Header", () => {
  it("should display the logo", () => {
    render(<Header />);

    expect(screen.getAllByTestId("bright-hr-logo")[0]).toBeInTheDocument();
    expect(screen.getByText("0800 470 2432")).toBeInTheDocument();
  });
});
