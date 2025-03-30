import { render, screen } from "@testing-library/react";
import { DocumentCard } from "./DocumentCard";

describe("DocumentCard", () => {
  it("should display the file card with all the information", () => {
    render(<DocumentCard />);

    expect(screen.getByText("Employee Handbook")).toBeInTheDocument();
    expect(screen.getByText("date")).toBeInTheDocument();
    expect(screen.getByText("csv")).toBeInTheDocument();
  });
});
