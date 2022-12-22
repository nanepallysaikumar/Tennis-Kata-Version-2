import { applicationConstants } from "../Constants/applicationConstants";
import {
  isPlayersScoreEqualsToZero,
  isAnyPlayerScoresGreaterThanZero,
} from "../Validators/scoreValidator";
import { scoreLookUp } from "./ScoreLookUp";

const { LOVE_All, VALUE_ZERO } = applicationConstants;

const getGameScore = (playerOneScore, playerTwoScore) => {
  if (isPlayersScoreEqualsToZero(playerOneScore, playerTwoScore)) {
    return LOVE_All;
  }

  if (isAnyPlayerScoresGreaterThanZero(playerOneScore, playerTwoScore)) {
    return `${scoreLookUp[playerOneScore]}-${scoreLookUp[playerTwoScore]}`;
  }
};

export { getGameScore };
