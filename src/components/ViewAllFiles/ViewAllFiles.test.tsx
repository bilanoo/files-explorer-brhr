import { render, screen } from "@testing-library/react";
import { ViewAllFiles } from "./ViewAllFiles";

describe("ViewAllFiles", () => {
  it("should display the list of files", () => {
    render(
      <ViewAllFiles
        data={[
          {
            image: "./assets/pdf-file-type.svg",
            type: "pdf",
            name: "Employee Handbook",
            added: "2017-01-06",
          },
          {
            image: "./assets/pdf-file-type.svg",
            type: "pdf",
            name: "Public Holiday policy",
            added: "2016-12-06",
          },
          {
            image: "./assets/folder-icon.svg",
            type: "folder",
            name: "Expenses",
            files: [
              {
                image: "./assets/doc-file-type.svg",
                type: "doc",
                name: "Expenses claim form",
                added: "2017-05-02",
              },
              {
                image: "./assets/doc-file-type.svg",
                type: "doc",
                name: "Fuel allowances",
                added: "2017-05-03",
              },
            ],
          },
          {
            image: "./assets/csv-file-type.svg",
            type: "csv",
            name: "Cost centres",
            added: "2016-08-12",
          },
        ]}
      />
    );

    expect(screen.getByText("Employee Handbook")).toBeInTheDocument();
    expect(screen.getByText("Public Holiday policy")).toBeInTheDocument();
    expect(screen.getByText("folder")).toBeInTheDocument();
  });
});
