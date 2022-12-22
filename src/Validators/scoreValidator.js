import { applicationConstants } from "../Constants/applicationConstants";

const { VALUE_ZERO } = applicationConstants;

const isPlayersScoreEqualsToZero = (playerOneScore, playerTwoScore) =>
  playerOneScore === VALUE_ZERO && playerTwoScore === VALUE_ZERO;

const isAnyPlayerScoresGreaterThanZero = (playerOneScore, playerTwoScore) =>
  playerOneScore > VALUE_ZERO || playerTwoScore > VALUE_ZERO;

const isPlayersScoresNotEqual = (playerOneScore, playerTwoScore) =>
  playerOneScore !== playerTwoScore;

const isPlayersScoresEqual = (playerOneScore, playerTwoScore) =>
  playerOneScore === playerTwoScore;

const isPlayersScoresLessThanThree = (playerOneScore, playerTwoScore) =>
  playerOneScore < 3 && playerTwoScore < 3;

const isPlayersScoresGreaterThanAndEqualToThree = (
  playerOneScore,
  playerTwoScore
) => playerOneScore >= 3 && playerTwoScore >= 3;

export {
  isPlayersScoreEqualsToZero,
  isAnyPlayerScoresGreaterThanZero,
  isPlayersScoresNotEqual,
  isPlayersScoresEqual,
  isPlayersScoresLessThanThree,
  isPlayersScoresGreaterThanAndEqualToThree,
};
