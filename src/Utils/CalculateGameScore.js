import { applicationConstants } from "../Constants/applicationConstants";
import {
  isPlayersScoreEqualsToZero,
  isAnyPlayerScoresGreaterThanZero,
  isPlayersScoresNotEqual,
  isPlayersScoresEqual,
} from "../Validators/scoreValidator";
import { scoreLookUp } from "./ScoreLookUp";

const { LOVE_All } = applicationConstants;

const getGameScore = (playerOneScore, playerTwoScore) => {
  if (isPlayersScoreEqualsToZero(playerOneScore, playerTwoScore)) {
    return LOVE_All;
  }

  if (
    isPlayersScoresNotEqual(playerOneScore, playerTwoScore) &&
    isAnyPlayerScoresGreaterThanZero(playerOneScore, playerTwoScore)
  ) {
    return `${scoreLookUp[playerOneScore]}-${scoreLookUp[playerTwoScore]}`;
  }

  if (isPlayersScoresEqual(playerOneScore, playerTwoScore)) {
    return `${scoreLookUp[playerOneScore]}-All`;
  }
};

export { getGameScore };
