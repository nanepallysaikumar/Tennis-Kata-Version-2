import { applicationConstants } from "../Constants/applicationConstants";
import {
  isPlayersScoreEqualsToZero,
  isAnyPlayerScoresGreaterThanZero,
  isPlayersScoresNotEqual,
  isPlayersScoresEqual,
  isPlayersScoresLessThanThree,
  isPlayersScoresGreaterThanAndEqualToThree,
} from "../Validators/scoreValidator";
import { scoreLookUp } from "./ScoreLookUp";

const { LOVE_All, DEUCE } = applicationConstants;

const getGameScore = (playerOneScore, playerTwoScore) => {
  if (
    isPlayersScoresNotEqual(playerOneScore, playerTwoScore) &&
    isAnyPlayerScoresGreaterThanZero(playerOneScore, playerTwoScore)
  ) {
    return `${scoreLookUp[playerOneScore]}-${scoreLookUp[playerTwoScore]}`;
  }

  if (
    isPlayersScoresLessThanThree(playerOneScore, playerTwoScore) &&
    isPlayersScoresEqual(playerOneScore, playerTwoScore)
  ) {
    return `${scoreLookUp[playerOneScore]}-All`;
  }

  if (
    isPlayersScoresGreaterThanAndEqualToThree(playerOneScore, playerTwoScore)
  ) {
    return DEUCE;
  }
};

export { getGameScore };
