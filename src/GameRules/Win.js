import {
  isAnyOfScoreGreaterThanEqualToFour,
  isAbsoluteDifferenceEqualToTwo,
} from "../Validators/scoreValidator";

import { applicationConstants } from "../Constants/applicationConstants";

const { WIN_PLAYER_ONE, WIN_PLAYER_TWO } = applicationConstants;

const validateCriteria = (playerOneScore, playerTwoScore) =>
  isAnyOfScoreGreaterThanEqualToFour(playerOneScore, playerTwoScore) &&
  isAbsoluteDifferenceEqualToTwo(playerOneScore, playerTwoScore);

const getWinnerName = (playerOneScore, playerTwoScore) =>
  playerOneScore > playerTwoScore ? WIN_PLAYER_ONE : WIN_PLAYER_TWO;

const getScoreDescription = (playerOneScore, playerTwoScore) =>
  getWinnerName(playerOneScore, playerTwoScore);

const winPlayerOne = {
  isCriteriaMatched: validateCriteria,
  getScore: getScoreDescription,
};

export { winPlayerOne };
