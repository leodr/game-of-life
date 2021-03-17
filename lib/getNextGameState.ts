function getAliveNeighborCount(
    game: boolean[][],
    x: number,
    y: number
): number {
    const neighborList = [];

    neighborList.push(game[x - 1]?.[y - 1]);
    neighborList.push(game[x - 1]?.[y]);
    neighborList.push(game[x - 1]?.[y + 1]);
    neighborList.push(game[x]?.[y - 1]);
    neighborList.push(game[x]?.[y + 1]);
    neighborList.push(game[x + 1]?.[y - 1]);
    neighborList.push(game[x + 1]?.[y]);
    neighborList.push(game[x + 1]?.[y + 1]);

    return neighborList.reduce((acc, e) => (e ? acc + 1 : acc), 0);
}

export function getNextGameState(currentState: boolean[][]): boolean[][] {
    const newState: boolean[][] = [];

    for (let x = 0; x < currentState.length; x++) {
        for (let y = 0; y < currentState[x].length; y++) {
            if (newState[x] !== undefined) {
                newState[x].push(false);
            } else {
                newState[x] = [false];
            }
        }
    }

    for (let x = 0; x < currentState.length; x++) {
        for (let y = 0; y < currentState[x].length; y++) {
            const currentCell = currentState[x][y];
            const aliveNeighbors = getAliveNeighborCount(currentState, x, y);

            if (currentCell) {
                if (aliveNeighbors >= 2 && aliveNeighbors <= 3) {
                    newState[x][y] = true;
                }
            } else {
                if (aliveNeighbors === 3) {
                    newState[x][y] = true;
                }
            }
        }
    }

    return newState;
}
