import { applicationConstants } from "../Constants/applicationConstants";
import { isPlayersScoreEqualsToZero } from "../Validators/scoreValidator";
import { scoreLookUp } from "./ScoreLookUp";

const { LOVE_All, VALUE_ONE, VALUE_TWO, LOVE_FIFTEEN, LOVE_THIRTY } =
  applicationConstants;

const getGameScore = (playerOneScore, playerTwoScore) => {
  if (isPlayersScoreEqualsToZero(playerOneScore, playerTwoScore)) {
    return LOVE_All;
  }

  if (playerOneScore > 0) {
    return `${scoreLookUp[playerOneScore]}-Love`;
  }

  if (playerTwoScore === VALUE_ONE) {
    return LOVE_FIFTEEN;
  }

  if (playerTwoScore === VALUE_TWO) {
    return LOVE_THIRTY;
  }
};

export { getGameScore };
