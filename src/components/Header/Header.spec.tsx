import { render, screen } from "@testing-library/react";
import { Header } from "./Header";

describe("Header", () => {
  it("should display the logo", () => {
    render(<Header />);

    expect(screen.getByAltText("bright-hr-logo")).toBeInTheDocument();
  });
});
