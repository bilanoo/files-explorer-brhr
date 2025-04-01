import { render, screen } from "@testing-library/react";
import { ViewAllFiles } from "./ViewAllFiles";

describe("ViewAllFiles", () => {
  it("should display the list of files", () => {
    render(<ViewAllFiles />);

    expect(screen.getByText("Employee Handbook")).toBeInTheDocument();
    expect(screen.getByText("Public Holiday policy")).toBeInTheDocument();
    expect(screen.getByText("folder")).toBeInTheDocument();
  });
});
