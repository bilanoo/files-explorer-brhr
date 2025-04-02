import { fireEvent, render, screen } from "@testing-library/react";
import { Filter } from "./Filter";

describe("Filter", () => {
  it("should test the search input field", () => {
    let filter = false;
    const mockSetIsFiltering = () => {
      filter = !filter;
    };
    render(
      <Filter
        data={[]}
        setFilteredData={() => jest.mock}
        setIsFiltering={mockSetIsFiltering}
      />
    );
    const input = screen.getByLabelText("filter") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "Dolly" } });
    expect(input.value).toBe("Dolly");
  });
  it("should test if the input field clears after clicking the clear icon button", () => {
    let filter = false;
    const mockSetIsFiltering = () => {
      filter = !filter;
    };
    render(
      <Filter
        data={[]}
        setFilteredData={() => jest.mock}
        setIsFiltering={mockSetIsFiltering}
      />
    );
    const input = screen.getByLabelText("filter") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "Dolly" } });
    expect(input.value).toBe("Dolly");
    fireEvent.click(screen.getAllByRole("button")[1]);
    expect(input.value).not.toBe("Dolly");
  });
});
