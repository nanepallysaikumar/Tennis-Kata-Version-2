import {
  isAnyOfScoreGreaterThanEqualToFour,
  isAbsoluteDifferenceEqualToOne,
} from "../Validators/scoreValidator";
import { applicationConstants } from "../Constants/applicationConstants";

const { ADVANTAGE_PLAYER_ONE, ADVANTAGE_PLAYER_TWO } = applicationConstants;

const validateCriteria = (playerOneScore, playerTwoScore) =>
  isAnyOfScoreGreaterThanEqualToFour(playerOneScore, playerTwoScore) &&
  isAbsoluteDifferenceEqualToOne(playerOneScore, playerTwoScore);

const getAdvantagePalyerName = (playerOneScore, playerTwoScore) =>
  playerOneScore > playerTwoScore ? ADVANTAGE_PLAYER_ONE : ADVANTAGE_PLAYER_TWO;

const getScoreDescription = (playerOneScore, playerTwoScore) =>
  getAdvantagePalyerName(playerOneScore, playerTwoScore);

const advantagePlayer = {
  isCriteriaMatched: validateCriteria,
  getScore: getScoreDescription,
};

export { advantagePlayer };
