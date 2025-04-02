import { fireEvent, render, screen } from "@testing-library/react";
import { FolderCard } from "./FolderCard";

describe("FolderCard", () => {
  it("should toggle the arrow icon based on the user click", () => {
    let isExpanded = false;
    const handleOnClick = () => {
      isExpanded = !isExpanded;
    };
    render(
      <FolderCard
        image="dummy"
        title="Handbook"
        type="folder"
        date="01-04-2025"
        isExpanded={isExpanded}
        onClick={handleOnClick}
      />
    );
    const imgElement = screen.getByAltText("folder dropdown icon");

    expect(imgElement).toHaveAttribute("alt", "folder dropdown icon");
    fireEvent.click(screen.getByTestId("dropdown-icon"));
    expect(imgElement).toHaveAttribute("alt", "close folder icon");
  });
});
