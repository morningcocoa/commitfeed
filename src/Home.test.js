import React from "react";
import { render } from "@testing-library/react";

import Home from "./Home";

test("renders labels and search button", () => {
  const { getByText, getByLabelText } = render(<Home />);

  getByLabelText("Github Username");
  getByLabelText("Github Repository");
  getByText("Search");
});

test("renders initial state values", () => {
  const { getByLabelText } = render(<Home />);

  const username = getByLabelText("Github Username");
  const repository = getByLabelText("Github Repository");

  expect(username.textContent).toBe("");
  expect(repository.textContent).toBe("");
});
