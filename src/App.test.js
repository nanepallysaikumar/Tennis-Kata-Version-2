import { render, screen, fireEvent } from "@testing-library/react";
import { testConstants } from "./Constants/TestConstants";
import App from "./App";

const { GAME_SCORE, LOVE_ALL, PLAYER_ONE, FIFTEEN_LOVE } = testConstants;

test(`When the individual points of both the players is "0", then the running score should be "Love-All".`, () => {
  render(<App />);

  expect(screen.getByTestId(GAME_SCORE).textContent).toEqual(LOVE_ALL);
});

test(`When the running point of player one is 1 and the running point of player two is 0 then the running score should be "Fifteen - Love".`, () => {
  render(<App />);
  fireEvent.click(screen.getByTestId(PLAYER_ONE));

  expect(screen.getByTestId(GAME_SCORE).textContent).toEqual(FIFTEEN_LOVE);
});
