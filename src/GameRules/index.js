import { scoresLevel } from "../GameRules/SameLevel";
import { deuce } from "../GameRules/Deuce";
import { scoreDifferent } from "./ScoresDifferent";
import { advantagePlayer } from "./Advantage";
import { winPlayerOne } from "./Win";

const gameRuleList = [
  scoresLevel,
  scoreDifferent,
  deuce,
  advantagePlayer,
  winPlayerOne,
];

export { gameRuleList };
