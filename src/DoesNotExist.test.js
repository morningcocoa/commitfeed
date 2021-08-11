import React from "react";
import { render } from "@testing-library/react";

import DoesNotExist from "./DoesNotExist";

test("renders sorry", () => {
  const { getByText } = render(<DoesNotExist />);

  getByText("Sorry, but this repo does not exist!");
  getByText("Return to Home");
});
