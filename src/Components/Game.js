import React, { useEffect, useState } from "react";
import { applicationConstants } from "../Constants/applicationConstants";
import { getGameScore } from "../Utils/CalculateGameScore";

const { GAME_SCORE, PLAYER_ONE, VALUE_ONE } = applicationConstants;

function Game() {
  const [gameScore, setGameScore] = useState();
  const [playerOneScore, setPlayerScore] = useState(0);
  const [playerTwoScore] = useState(0);

  useEffect(() => {
    const score = getGameScore(playerOneScore, playerTwoScore);
    setGameScore(score);
  }, [playerOneScore, playerTwoScore]);

  const playerOneScores = () => {
    setPlayerScore(playerOneScore + VALUE_ONE);
  };

  return (
    <div>
      <p data-testid={GAME_SCORE}>{gameScore}</p>
      <button data-testid={PLAYER_ONE} onClick={playerOneScores}>
        Player One Scores:
      </button>
    </div>
  );
}

export { Game };
