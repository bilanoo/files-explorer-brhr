import { render, screen } from "@testing-library/react";
import { DocumentCard } from "./DocumentCard";

describe("DocumentCard", () => {
  it("should display the file card with all the information", () => {
    render(
      <DocumentCard
        image="dummy"
        title="Handbook"
        type="pdf"
        date="20-03-2025"
      />
    );

    expect(screen.getByText("Handbook")).toBeInTheDocument();
    expect(screen.getByText("20-03-2025")).toBeInTheDocument();
    expect(screen.getByText("pdf")).toBeInTheDocument();
  });
  it("should display the folder icon if the display card is a folder", () => {
    render(
      <DocumentCard
        image="dummy"
        title="Handbook"
        type="folder"
        date="20-03-2025"
      />
    );

    expect(screen.getByTestId("dropdown-icon")).toBeInTheDocument();
  });
});
