const initializeGame = (xSize: number, ySize: number): boolean[][] => {
    const game = new Array(xSize).fill(new Array(ySize).fill(false));

    return game.map(e => e.map(() => Math.random() < 0.2));
};

export default initializeGame;
