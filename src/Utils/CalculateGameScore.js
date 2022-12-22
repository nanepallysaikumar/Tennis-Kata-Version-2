import { gameRuleList } from "../GameRules";

const getGameScore = (playerOneScore, playerTwoScore) => {
  for (const rule of gameRuleList) {
    if (rule.isCriteriaMatched(playerOneScore, playerTwoScore)) {
      return rule.getScore(playerOneScore, playerTwoScore);
    }
  }
};

export { getGameScore };
