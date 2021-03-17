import { Game } from 'components/game/Game';
import Head from 'next/head';
import styles from 'styles/index.module.css';

export default function Index() {
    return (
        <>
            <Head>
                <title>React Game of Life</title>
            </Head>
            <div className={styles.root}>
                <Game />
            </div>
        </>
    );
}
