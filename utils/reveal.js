function cellsRevealed(grid,x,y,nonmines) {
    let show=[];
    show.push(grid[x][y])
    while(grid.length!=0)
    {
        let one=show.pop()
        if(!one)
        break;
        let i=one.x;
        // console.log(one.x);
        let j=one.y;
        // console.log(one.y);
        if(one.revealed===false)
        {
            nonmines--;
            one.revealed=true;
        }
        if(one.value!=0)
        {
            break;
        }
        //top left
        if(i>0 && j>0 && grid[i-1][j-1].value===0 && !grid[i-1][j-1].revealed){
            show.push(grid[i-1][j-1])
        }
        //bottom right
        if(i<grid.length-1 && j<grid[0].length-1 && grid[i+1][j+1].value===0 && !grid[i+1][j+1].revealed ){
            show.push(grid[i+1][j+1])
        }
        //top right
        if(
            i>0 && j<grid[0].length-1 && grid[i-1][j+1].value===0 &&  !grid[i-1][j+1].revealed){
            show.push(grid[i-1][j+1]);
        }
        //bottom left
        if(
            i<grid.length-1 && j>0 && grid[i+1][j-1].value===0 && !grid[i+1][j-1].revealed){
            show.push(grid[i+1][j-1]);
        }
        //top
        if(i>0 && grid[i-1][j].value===0 && !grid[i-1][j].revealed){
            show.push(grid[i-1][j]);
        }
        //right
        if( j<grid[0].length-1 && grid[i][j+1].value===0 && !grid[i][j+1].revealed){
            show.push(grid[i][j+1]);
        }
        if( j>0 && grid[i][j-1].value===0 && !grid[i][j-1].revealed){
            show.push(grid[i][j-1]);
        }


        // start revealing the cells

        if (i > 0 && j > 0 && !grid[i - 1][j - 1].revealed) {
            //Top Left Reveal
            grid[i - 1][j - 1].revealed = true;
            nonmines--;
          }
          if (j > 0 && !grid[i][j - 1].revealed) {
            // Left Reveal
            grid[i][j - 1].revealed = true;
            nonmines--;
          }
          if ( i < grid.length - 1 && j > 0 && !grid[i + 1][j - 1].revealed ) {
            //Bottom Left Reveal
            grid[i + 1][j - 1].revealed = true;
            nonmines--;
          }
          if (i > 0 && !grid[i - 1][j].revealed) {
            //Top Reveal
            grid[i - 1][j].revealed = true;
            nonmines--;
          }
          if (i < grid.length - 1 && !grid[i + 1][j].revealed) {
            // Bottom Reveal
            grid[i + 1][j].revealed = true;
            nonmines--;
          }
      
          if ( i > 0 && j < grid[0].length - 1 && !grid[i - 1][j + 1].revealed ) {
            // Top Right Reveal
            grid[i - 1][j + 1].revealed = true;
            nonmines--;
          }
      
          if (j < grid[0].length - 1 && !grid[i][j + 1].revealed) {
            //Right Reveal
            grid[i][j + 1].revealed = true;
            nonmines--;
          }
      
          if ( i < grid.length - 1 && j < grid[0].length - 1 && !grid[i + 1][j + 1].revealed ) {
            // Bottom Right Reveal
            grid[i + 1][j + 1].revealed = true;
            nonmines--;
          }
    
    }
    return {grid,nonmines};
}
//test
export default cellsRevealed;