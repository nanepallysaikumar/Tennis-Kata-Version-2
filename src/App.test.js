import { render } from "@testing-library/react";
import { testConstants } from "./Constants/TestConstants";
import {
  givenPlayerone,
  givenPlayerTwo,
  gameScoreShouldBe,
  givenDeuce,
} from "./Test-Utils/asserts";
import App from "./App";

const {
  LOVE_ALL,
  PLAYER_ONE,
  PLAYER_TWO,
  FIFTEEN_LOVE,
  ONE,
  TWO,
  THREE,
  THIRTY_LOVE,
  FORTY_LOVE,
  LOVE_FIFTEEN,
  LOVE_THIRTY,
  FIFTEEN_ALL,
  DEUCE,
  ADVANTAGE_PLAYER_ONE,
  ADVANTAGE_PLAYER_TWO,
  WIN_PLAYER_ONE,
  WIN_PLAYER_TWO,
} = testConstants;

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

test(`When the running point of player one is 2 and the running point of player two is 0 then the running score should be "Thirty - Love".`, () => {
  givenPlayerone.scores(TWO, PLAYER_ONE);

  gameScoreShouldBe(THIRTY_LOVE);
});

test(`When the running point of player one is 3 and the running point of player two is 0 then the running score should be "Forty - Love".`, () => {
  givenPlayerone.scores(THREE, PLAYER_ONE);

  gameScoreShouldBe(FORTY_LOVE);
});

test(`When the running point of player one is 0 and the running point of player two is 1 then the running score should be "Love-Fifteen".`, () => {
  givenPlayerone.scores(ONE, PLAYER_TWO);

  gameScoreShouldBe(LOVE_FIFTEEN);
});

test(`When the running point of player one is 0 and the running point of player two is 2 then the running score should be "Love-Thirty".`, () => {
  givenPlayerone.scores(TWO, PLAYER_TWO);

  gameScoreShouldBe(LOVE_THIRTY);
});

test(`When the running point of player one is 1 and the running point of player two is 1 then the running score should be "Fifteen-All".`, () => {
  givenPlayerone.scores(ONE, PLAYER_ONE);
  givenPlayerTwo.scores(ONE, PLAYER_TWO);

  gameScoreShouldBe(FIFTEEN_ALL);
});

test(`When the individual points of both the players is greater than or equal to 3 and the running point of player one and player two are equal then the running score should be ???Deuce???`, () => {
  givenDeuce();

  gameScoreShouldBe(DEUCE);
});

test(`When the individual points of both the players is greater than equal to 4 and the Absolute difference between running point of player 1 and player 2 is equal to 1 then the running score should be ???Advantage Player1??? if the running point of player 1 is greater than running point of player2.`, () => {
  givenDeuce();
  givenPlayerone.scores(ONE, PLAYER_ONE);

  gameScoreShouldBe(ADVANTAGE_PLAYER_ONE);
});

test(`When the individual points of both the players is greater than equal to 4 and the Absolute difference between running point of player 1 and player 2 is equal to 1 then the running score should be ???Advantage Player2??? if the running point of player 2 is greater than running point of player1.`, () => {
  givenDeuce();
  givenPlayerTwo.scores(ONE, PLAYER_TWO);

  gameScoreShouldBe(ADVANTAGE_PLAYER_TWO);
});

test(`When the individual points of both the players are greater than equal to 4 and the Absolute difference between running point of player 1 and player 2 is equal to 2 then the game should be declared Win for ???Player One??? if the running point of player 1 is greater than running point of player2.`, () => {
  givenDeuce();
  givenPlayerone.scores(TWO, PLAYER_ONE);

  gameScoreShouldBe(WIN_PLAYER_ONE);
});

test(`When the individual points of both the players are greater than equal to 4 and the Absolute difference between running point of player 1 and player 2 is equal to 2 then the game should be declared Win for ???Player Two??? if the running point of player 2 is greater than running point of player1.`, () => {
  givenDeuce();
  givenPlayerTwo.scores(TWO, PLAYER_TWO);

  gameScoreShouldBe(WIN_PLAYER_TWO);
});
