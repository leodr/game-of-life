import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import getNextGameState from '../../logic/getNextGameState';
import initializeGame from '../../logic/initializeGame';
import Tile from './Game/Tile';

const x = 50;
const y = 50;

interface GameContainerProps {
    x: number;
    y: number;
}
const GameConainer = styled.div`
    display: grid;

    @media (orientation: portrait) {
        width: 80vw;
        height: 80vw;
    }

    @media (orientation: landscape) {
        width: 80vh;
        height: 80vh;
    }

    grid-gap: 4px;
    grid-template-columns: repeat(
        ${(props: GameContainerProps) => props.x},
        1fr
    );
    grid-auto-rows: 1fr;
`;

const Game = () => {
    const [game, setGame] = useState<boolean[][]>(initializeGame(x, y));

    useEffect(() => {
        const x = setInterval(() => {
            setGame((s) => getNextGameState(s));
        }, 100);

        return () => clearInterval(x);
    });

    return (
        <GameConainer x={x} y={y}>
            {game.map((e) => e.map((e, i) => <Tile key={i} alive={e} />))}
        </GameConainer>
    );
};

export default Game;
