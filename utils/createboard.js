function Createboard(row,col,nmines) {
    let board=[]
    const mineloc=[];
    for (let x=0;x<row;x++){
        let row=[]
        for (let y = 0; y < col; y++) {
            let cell={
                value:0,
                revealed: false, 
                x: x,
                y :y,
                flagged :false
            }
            row.push(cell)
        }
        board.push(row)
    }
    // place mines
    let minecount=0;
    while(minecount<nmines)
    {
        let x=random(0,row-1);
        let y=random(0,col-1);
        if(board[x][y].value===0)
        {
            board[x][y].value="m";
            mineloc.push([x,y]);
            minecount++;
        }
    }
    for (let x=0;x<row;x++){
        for(y=0;y<col;y++){
            if(board[x][y].value==="m")
            {
                //top
                if(x>0 && board[x-1][y].value != "m"){
                    board[x-1][y].value++
                }
                //bottom
                if(x<row-1 && board[x+1][y].value != "m"){
                    board[x+1][y].value++
                }
                //left
                if(y>0 && board[x][y-1].value != "m"){
                    board[x][y-1].value++
                }
                //right
                if(y<col-1 && board[x][y+1].value != "m"){
                    board[x][y+1].value++
                }
                //top right
                if(x>0 && y<col-1 && board[x-1][y+1].value != "m"){
                    board[x-1][y+1].value++
                }
                //top left
                if(x>0 && y>0 && board[x-1][y-1].value != "m"){
                    board[x-1][y-1].value++
                }
                //bottom left
                if(x<row-1 && y>0 && board[x+1][y-1].value != "m"){
                    board[x+1][y-1].value++
                }
                //bottom right
                if(x<row-1 && y<col-1 && board[x+1][y+1].value != "m"){
                    board[x+1][y+1].value++
                }

            }
        }
    }
    return {board,mineloc};
}
function random(min=0,max)
{
    return Math.floor(Math.random()*(max-min+1)+min)
}
export default Createboard;