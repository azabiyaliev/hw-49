const drawBoard = (number:number) => {
    let board:string = '';
    const whiteSquare = '⬜';
    const blackSquare = '⬛';
    for (let i = 0; i <= 7; i++) {
        for(let j = 0; j <= 7; j++) {
            if ((j+i) % 2 === 0) {
                board += whiteSquare;
            } else {
                board += blackSquare;
            }
        }
        board += '\n';
    }
    console.log(board);
};
drawBoard(8);
