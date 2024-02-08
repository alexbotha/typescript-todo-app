import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom"; // Import this to extend Jest matchers
import userEvent from "@testing-library/user-event";

import NewGoal from "./NewGoal";
//import App from "../App";

// describe("App component", () => {
//   test("renders heading", () => {
//     render(<App />);
//   });
// });

const newGoalProp = (
  <NewGoal handleAddGoal={(_title: string, _description: string) => void {}} />
);

describe("NewGoal Component", () => {
  test("checks button has a submit event", () => {
    render(newGoalProp);

    const Btn = screen.getByRole("button");
    expect(Btn).toHaveTextContent("Add goal");
    fireEvent.submit(Btn);
  });

  test("renders form inputs", async () => {
    const { container } = render(newGoalProp);

    const titleInput = screen.getByLabelText("Your Goal");
    //const descriptionInput = screen.getByLabelText("Description");
    expect(titleInput).toBeInTheDocument();

    expect(titleInput).toHaveValue("");

    //expect(descriptionInput).toBeInTheDocument();

    userEvent.type(titleInput, "New Title");
    //userEvent.type(descriptionInput, "New Description");

    // Wait for the state to update
    await waitFor(() => {
      // Check the current state value
      const currentState = container
        .querySelector("#title")
        ?.getAttribute("value");
      expect(currentState).toBe("New Title");
    });
  });
});
