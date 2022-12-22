import {
  isPlayersScoresGreaterThanAndEqualToThree,
  isPlayersScoresEqual,
} from "../Validators/scoreValidator";
import { applicationConstants } from "../Constants/applicationConstants";

const { DEUCE } = applicationConstants;

const validateCriteria = (playerOneScore, playerTwoScore) =>
  isPlayersScoresEqual(playerOneScore, playerTwoScore) &&
  isPlayersScoresGreaterThanAndEqualToThree(playerOneScore, playerTwoScore);

const getScoreDescription = () => DEUCE;

const deuce = {
  isCriteriaMatched: validateCriteria,
  getScore: getScoreDescription,
};

export { deuce };
