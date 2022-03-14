import { render, screen, fireEvent } from "@testing-library/react";

import StandCard from "../StandCard";

//add dependency for userEvent

const mockIncrementButton = jest.fn();

describe("StandCard component", () => {
  it("renders label of product", () => {
    render(<StandCard label="bamboo stand" />);
    const labelComponent = screen.getByText(/bamboo stand/i);
    expect(labelComponent).toBeInTheDocument();
  });

  it("renders label of product 2", () => {
    render(<StandCard label="black edition stand" />);
    const labelComponent = screen.getByText(/black edition stand/i);
    expect(labelComponent).toBeInTheDocument();
  });

  it("renders select reward button", () => {
    render(<StandCard title="bamboo stand" />);
    const buttonComponent = screen.getByRole("button", {
      name: /select reward/i,
    });

    expect(buttonComponent).toBeInTheDocument();
    // screen.debug()
  });

  it("renders an 64 items left", () => {
    render(<StandCard label="bamboo stand" amountLeft="64" />);
    const leftComponent = screen.getByText(/64/i);

    expect(leftComponent).toBeInTheDocument();
  });

  it("renders left", () => {
    render(<StandCard title="bamboo stand" />);
    const leftComponent = screen.getByText(/left/i);

    expect(leftComponent).toBeInTheDocument();
  });

  describe("Select reward button", () => {
    it("calls increment function when clicked", () => {
      render(
        <StandCard
          title="bamboo stand"
          amountLeft={1}
          increment={mockIncrementButton}
        />
      );

      const buttonComponent = screen.getByRole("button", {
        name: /select reward/i,
      });

      fireEvent.click(buttonComponent);
      expect(mockIncrementButton).toHaveBeenCalled();
    });

    it("when amountleft is zero, button should be unclickable", () => {
      render(
        <StandCard
          title="bamboo stand"
          amountLeft={0}
          increment={mockIncrementButton}
        />
      );

      const buttonComponent = screen.getByRole("button", {
        name: /select reward/i,
      });
      
      fireEvent.click(buttonComponent);
      expect(mockIncrementButton).not.toHaveBeenCalled();
    });
  });
});
