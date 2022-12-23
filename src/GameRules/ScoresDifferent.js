import { scoreLookUp } from "../Utils/ScorelookUp";
import {
  isPlayersScoresNotEqual,
  isPlayersScoresLessThanAndEqualToThree,
} from "../Validators/scoreValidator";

const validateCriteria = (playerOneScore, playerTwoScore) =>
  isPlayersScoresNotEqual(playerOneScore, playerTwoScore) &&
  isPlayersScoresLessThanAndEqualToThree(playerOneScore, playerTwoScore);

const getScoreDescription = (playerOneScore, playerTwoScore) =>
  `${scoreLookUp[playerOneScore]}-${scoreLookUp[playerTwoScore]}`;

const scoreDifferent = {
  isCriteriaMatched: validateCriteria,
  getScore: getScoreDescription,
};

export { scoreDifferent };
