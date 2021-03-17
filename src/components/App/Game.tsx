import React, { useEffect, useState } from 'react';
import getNextGameState from '../../logic/getNextGameState';
import initializeGame from '../../logic/initializeGame';
import styles from './game.module.css';

const x = 50;
const y = 50;

const Game = () => {
    const [game, setGame] = useState<boolean[][]>(initializeGame(x, y));

    useEffect(() => {
        const x = setInterval(() => {
            setGame((s) => getNextGameState(s));
        }, 100);

        return () => clearInterval(x);
    });

    return (
        <div className={styles.gameContainer}>
            {game.map((e) =>
                e.map((e, i) => (
                    <div
                        key={i}
                        className={`${styles.tile} ${e ? styles.alive : ''}`}
                    />
                ))
            )}
        </div>
    );
};

export default Game;
