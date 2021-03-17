export function initializeGame(xSize: number, ySize: number): boolean[][] {
    const gameMap = Array(xSize).fill(Array(ySize).fill(false));

    const gameMapWithInitializedValues = gameMap.map((e) =>
        e.map(() => Math.random() < 0.2)
    );

    return gameMapWithInitializedValues;
}
