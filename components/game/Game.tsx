import { getNextGameState } from 'lib/getNextGameState';
import { initializeGame } from 'lib/initializeGame';
import React, { useEffect, useState } from 'react';
import styles from './game.module.css';

const x = 50;
const y = 50;

export function Game() {
    const [game, setGame] = useState<boolean[][]>(initializeGame(x, y));

    useEffect(() => {
        const x = setInterval(() => {
            setGame((s) => getNextGameState(s));
        }, 100);

        return () => {
            return clearInterval(x);
        };
    }, []);

    return (
        <div className={styles.gameContainer}>
            {game.map((rows) =>
                rows.map((tile, index) => (
                    <div
                        key={index}
                        className={`${styles.tile} ${tile ? styles.alive : ''}`}
                    />
                ))
            )}
        </div>
    );
}
