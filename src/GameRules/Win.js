import {
  isAnyOfScoreGreaterThanEqualToFour,
  isAbsoluteDifferenceEqualToTwo,
} from "../Validators/scoreValidator";

import { applicationConstants } from "../Constants/applicationConstants";

const { WIN_PLAYER_ONE } = applicationConstants;

const validateCriteria = (playerOneScore, playerTwoScore) =>
  isAnyOfScoreGreaterThanEqualToFour(playerOneScore, playerTwoScore) &&
  isAbsoluteDifferenceEqualToTwo(playerOneScore, playerTwoScore);

const getScoreDescription = () => WIN_PLAYER_ONE;

const winPlayerOne = {
  isCriteriaMatched: validateCriteria,
  getScore: getScoreDescription,
};

export { winPlayerOne };
