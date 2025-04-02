import { fireEvent, render, screen } from "@testing-library/react";
import { Filter } from "./Filter";

describe("Filter", () => {
  it("should test the search input field", () => {
    render(<Filter />);
    const input = screen.getByLabelText("filter");
    fireEvent.change(input, { target: { value: "Dolly" } });
    expect(input.value).toBe("Dolly");
  });
});
