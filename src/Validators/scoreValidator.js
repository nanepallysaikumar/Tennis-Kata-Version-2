import { applicationConstants } from "../Constants/applicationConstants";

const { VALUE_ZERO } = applicationConstants;

const isPlayersScoreEqualsToZero = (playerOneScore, playerTwoScore) =>
  playerOneScore === VALUE_ZERO && playerTwoScore === VALUE_ZERO;

const isAnyPlayerScoresGreaterThanZero = (playerOneScore, playerTwoScore) =>
  playerOneScore > VALUE_ZERO || playerTwoScore > VALUE_ZERO;

export { isPlayersScoreEqualsToZero, isAnyPlayerScoresGreaterThanZero };
