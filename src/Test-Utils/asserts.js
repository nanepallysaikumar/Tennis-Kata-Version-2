import { screen, fireEvent } from "@testing-library/react";
import { testConstants } from "../constants/TestConstants";

const { GAME_SCORE, THREE, PLAYER_ONE, PLAYER_TWO } = testConstants;

const givenPlayerone = {
  scores,
};

const givenPlayerTwo = Object.create(givenPlayerone);

function scores(times, player) {
  for (let count = 0; count < times; count++) {
    fireEvent.click(screen.getByTestId(player));
  }
}

function givenDeuce() {
  givenPlayerone.scores(THREE, PLAYER_ONE);
  givenPlayerTwo.scores(THREE, PLAYER_TWO);
}

const gameScoreShouldBe = (expected) => {
  expect(screen.getByTestId(GAME_SCORE).textContent).toEqual(expected);
};

export { givenPlayerone, givenPlayerTwo, gameScoreShouldBe, givenDeuce };
