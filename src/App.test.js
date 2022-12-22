import { render, screen } from "@testing-library/react";
import { testConstants } from "./Constants/TestConstants";
import App from "./App";

const { GAME_SCORE, LOVE_ALL } = testConstants;

test(`When the individual points of both the players is "0", then the running score should be "Love-All".`, () => {
  render(<App />);

  expect(screen.getByTestId(GAME_SCORE).textContent).toEqual(LOVE_ALL);
});
