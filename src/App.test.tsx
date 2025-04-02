import * as dataJsonModule from "./data.json";

jest.mock("./data.json", () => ({
  __esModule: true,
  default: [
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
  ],
}));

import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("should display the no results found page if the user searches for a file that does not exist", () => {
    render(<App />);
    const input = screen.getByLabelText("filter") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "Dolly" } });
    expect(input.value).toBe("Dolly");
    fireEvent.click(screen.getAllByRole("button")[0]);
    expect(screen.getByAltText("no results found")).toBeInTheDocument();
    expect(screen.getByText("No results found")).toBeInTheDocument();
  });
});
