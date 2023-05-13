import { render, screen } from "@testing-library/react";
import Header from "../components/Header";
window.scrollTo = jest.fn();

describe("Header component", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });
  afterAll(() => {
    jest.clearAllMocks();
  });

  it("renders navbar correctly on initial load", () => {
    const mockHandleScroll = jest.fn();
    const header = render(<Header />);
    const headerElement = header.container.querySelector("#header");
    expect(headerElement).toHaveClass("site-header");
    expect(mockHandleScroll).toHaveBeenCalledTimes(0);
  });

  it("hides the navbar when scrolling down more than 200 pixels", () => {
    const mockHandleScroll = jest.fn();
    const header = render(<Header handleScroll={mockHandleScroll} />);
    mockHandleScroll();
    const headerElement = header.container.querySelector("#header");
    expect(headerElement).toHaveClass("site-header");

    // scroll down more than 200 pixels
    window.scrollTo(0, 300);

    // wait for handleScroll to update the visibility state
    setTimeout(() => {
      expect(headerElement).toHaveClass("hide");
    }, 200);
    expect(mockHandleScroll).toHaveBeenCalledTimes(1);
  });

  test("scroll up should show navbar", () => {
    const header = render(<Header />);
    const headerElement = header.container.querySelector("#header");

    // Scroll down to a position greater than 200 pixels
    window.scrollTo(0, 300);

    // Scroll back up
    window.scrollTo(0, 0);

    // Check that the header is visible
    expect(headerElement).toHaveClass("site-header");
  });
});
