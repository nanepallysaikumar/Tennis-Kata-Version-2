import { screen, fireEvent } from "@testing-library/react";
import { testConstants } from "../constants/TestConstants";

const { GAME_SCORE } = testConstants;

const givenPlayerone = {
  scores,
};

const givenPlayerTwo = Object.create(givenPlayerone);

function scores(times, player) {
  for (let count = 0; count < times; count++) {
    fireEvent.click(screen.getByTestId(player));
  }
}

const gameScoreShouldBe = (expected) => {
  expect(screen.getByTestId(GAME_SCORE).textContent).toEqual(expected);
};

export { givenPlayerone, givenPlayerTwo, gameScoreShouldBe };
