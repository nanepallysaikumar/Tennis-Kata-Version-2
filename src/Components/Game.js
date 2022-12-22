import React, { useEffect, useState } from "react";
import { applicationConstants } from "../Constants/applicationConstants";
import { getGameScore } from "../Utils/CalculateGameScore";

const { GAME_SCORE, PLAYER_ONE, VALUE_ONE, PLAYER_TWO } = applicationConstants;

function Game() {
  const [gameScore, setGameScore] = useState();
  const [playerOneScore, setPlayerOneScore] = useState(0);
  const [playerTwoScore, setPlayerTwoScore] = useState(0);

  useEffect(() => {
    const score = getGameScore(playerOneScore, playerTwoScore);
    setGameScore(score);
  }, [playerOneScore, playerTwoScore]);

  const playerOneScores = () => {
    setPlayerOneScore(playerOneScore + VALUE_ONE);
  };

  const playerTwoScores = () => {
    setPlayerTwoScore(playerTwoScore + VALUE_ONE);
  };

  return (
    <div>
      <p data-testid={GAME_SCORE}>{gameScore}</p>
      <button data-testid={PLAYER_ONE} onClick={playerOneScores}>
        Player One Scores:
      </button>
      <button data-testid={PLAYER_TWO} onClick={playerTwoScores}>
        Player One Scores:
      </button>
    </div>
  );
}

export { Game };
