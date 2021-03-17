import Head from 'next/head';
import Game from '../components/App/Game';
import styles from '../styles/index.module.css';

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
