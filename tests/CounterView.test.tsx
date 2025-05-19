import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { CounterModel } from "../src/models/CounterModel";
import { CounterViewModel } from "../src/viewmodels/CounterViewModel";
import { CounterView } from "../src/views/CounterView";

describe("CounterView", () => {
  it("displays and updates the counter value", () => {
    const vm = new CounterViewModel(new CounterModel());
    const { getByText, getByTestId } = render(<CounterView viewModel={vm} />);

    expect(getByTestId("counter-value")).toHaveTextContent("Counter: 0");

    fireEvent.click(getByText("Increment"));
    expect(getByTestId("counter-value")).toHaveTextContent("Counter: 1");

    fireEvent.click(getByText("Decrement"));
    expect(getByTestId("counter-value")).toHaveTextContent("Counter: 0");

    fireEvent.click(getByText("Reset"));
    expect(getByTestId("counter-value")).toHaveTextContent("Counter: 0");
  });
});
