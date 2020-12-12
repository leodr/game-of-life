import Head from 'next/head';
import styled from 'styled-components';
import Game from '../components/App/Game';

const Root = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
`;

export default function Index() {
    return (
        <>
            <Head>
                <title>Game of Life with React</title>
            </Head>
            <Root>
                <Game />
            </Root>
        </>
    );
}
