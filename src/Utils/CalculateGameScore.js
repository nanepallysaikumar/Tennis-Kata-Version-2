import { applicationConstants } from "../Constants/applicationConstants";
import { isPlayersScoreEqualsToZero } from "../Validators/scoreValidator";

const { LOVE_All, FIFTEEN_LOVE, VALUE_ONE } = applicationConstants;

const getGameScore = (playerOneScore, playerTwoScore) => {
  if (isPlayersScoreEqualsToZero(playerOneScore, playerTwoScore)) {
    return LOVE_All;
  }

  if (playerOneScore === VALUE_ONE) {
    return FIFTEEN_LOVE;
  }
};

export { getGameScore };
