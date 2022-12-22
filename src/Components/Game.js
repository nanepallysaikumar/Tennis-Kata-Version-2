import React, { useEffect, useState } from "react";
import { applicationConstants } from "../Constants/applicationConstants";
import { getGameScore } from "../Utils/CalculateGameScore";

const { GAME_SCORE } = applicationConstants;

function Game() {
  const [gameScore, setGameScore] = useState();
  const [playerOneScore] = useState(0);
  const [playerTwoScore] = useState(0);

  useEffect(() => {
    const score = getGameScore(playerOneScore, playerTwoScore);
    setGameScore(score);
  }, [playerOneScore, playerTwoScore]);

  return (
    <div>
      <p data-testid={GAME_SCORE}>{gameScore}</p>
    </div>
  );
}

export { Game };
