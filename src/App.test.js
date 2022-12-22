import { render } from "@testing-library/react";
import { testConstants } from "./Constants/TestConstants";
import { givenPlayerone, gameScoreShouldBe } from "./Test-Utils/asserts";
import App from "./App";

const { LOVE_ALL, PLAYER_ONE, FIFTEEN_LOVE, ONE } = testConstants;

beforeEach(() => {
  render(<App />);
});

test(`When the individual points of both the players is "0", then the running score should be "Love-All".`, () => {
  gameScoreShouldBe(LOVE_ALL);
});

test(`When the running point of player one is 1 and the running point of player two is 0 then the running score should be "Fifteen - Love".`, () => {
  givenPlayerone.scores(ONE, PLAYER_ONE);

  gameScoreShouldBe(FIFTEEN_LOVE);
});
