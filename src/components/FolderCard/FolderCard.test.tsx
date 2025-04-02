jest.mock(
  "../../../public/assets/arrow-drop-down.svg",
  () => "arrow-drop-down.svg"
);
jest.mock(
  "../../../public/assets/arrow-drop-up.svg",
  () => "arrow-drop-up.svg"
);
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
        files={[
          {
            image: "dummy",
            name: "Employee Handbook",
            type: "doc",
            added: "30-03-2025",
          },
        ]}
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
