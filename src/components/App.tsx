import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Game from './App/Game';

const GlobalStyle = createGlobalStyle`
    html { font-family: 'Inter', sans-serif; }

    @supports (font-variation-settings: normal) {
        html { font-family: 'Inter var', sans-serif; }
    }

    body {
        margin: 0;
        font-family: Inter;
        background-color: #212121;
    }
`;

const Root = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
`;

function App() {
    return (
        <>
            <Root>
                <Game />
            </Root>
            <GlobalStyle />
        </>
    );
}

export default App;
