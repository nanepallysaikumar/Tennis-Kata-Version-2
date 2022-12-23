import {
  isAnyOfScoreGreaterThanEqualToFour,
  isAbsoluteDifferenceEqualToOne,
} from "../Validators/scoreValidator";
import { applicationConstants } from "../Constants/applicationConstants";

const { ADVANTAGE_PLAYER_ONE } = applicationConstants;

const validateCriteria = (playerOneScore, playerTwoScore) =>
  isAnyOfScoreGreaterThanEqualToFour(playerOneScore, playerTwoScore) &&
  isAbsoluteDifferenceEqualToOne(playerOneScore, playerTwoScore);

const getScoreDescription = () => ADVANTAGE_PLAYER_ONE;

const advantagePlayer = {
  isCriteriaMatched: validateCriteria,
  getScore: getScoreDescription,
};

export { advantagePlayer };
