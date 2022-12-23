import { scoresLevel } from "../GameRules/SameLevel";
import { deuce } from "../GameRules/Deuce";
import { scoreDifferent } from "./ScoresDifferent";
import { advantagePlayer } from "./Advantage";

const gameRuleList = [scoresLevel, scoreDifferent, deuce, advantagePlayer];

export { gameRuleList };
