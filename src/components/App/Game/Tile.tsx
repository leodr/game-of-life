import styled from 'styled-components';

interface props {
    alive: boolean;
}

const Tile = styled.div`
    width: 100%;
    height: 100%;

    border-radius: 2px;

    background-color: white;
    opacity: ${(props: props) => (props.alive ? '0.8' : '0.2')};
    transition: opacity 80ms;
`;

export default Tile;
