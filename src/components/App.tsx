import React, { useEffect, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import getNextGameState from '../logic/getNextGameState';
import initializeGame from '../logic/initializeGame';
import Tile from './App/Tile';

const x = 50;
const y = 50;

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        font-family: Inter;
        background-color: #212121;
    }
`;

interface GameContainerProps {
    x: number;
    y: number;
}

const Root = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
`;

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

function App() {
    const [game, setGame] = useState<boolean[][]>(initializeGame(x, y));

    useEffect(() => {
        const x = setInterval(() => {
            setGame(s => getNextGameState(s));
        }, 100);

        return () => clearInterval(x);
    });

    return (
        <>
            <Root>
                <GameConainer x={x} y={y}>
                    {game.map(e => e.map(e => <Tile alive={e} />))}
                </GameConainer>
            </Root>
            <GlobalStyle />
        </>
    );
}

export default App;
