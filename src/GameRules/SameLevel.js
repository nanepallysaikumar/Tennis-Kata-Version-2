import { scoreLookUp } from "../Utils/ScorelookUp";
import {
  isPlayersScoresEqual,
  isPlayersScoresLessThanThree,
} from "../Validators/scoreValidator";

const validateCriteria = (playerOneScore, playerTwoScore) =>
  isPlayersScoresEqual(playerOneScore, playerTwoScore) &&
  isPlayersScoresLessThanThree(playerOneScore, playerTwoScore);

const getScoreDescription = (playerScore) => `${scoreLookUp[playerScore]}-All`;

const scoresLevel = {
  isCriteriaMatched: validateCriteria,
  getScore: getScoreDescription,
};

export { scoresLevel };
