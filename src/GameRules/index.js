import { scoresLevel } from "../GameRules/SameLevel";
import { deuce } from "../GameRules/Deuce";
import { scoreDifferent } from "./ScoresDifferent";

const gameRuleList = [scoresLevel, scoreDifferent, deuce];

export { gameRuleList };
