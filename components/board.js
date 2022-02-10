import React,{useState,useEffect} from "react";
import CreateBoard from '../utils/CreateBoard';
import cellsRevealed from "../utils/reveal";
import Cell from "./cell";
function Board() {
    const [grid,setGrid]=useState([]);
    const [nonmines,setNonmine]=useState(0)
    const stylegrid={
        display : 'flex',
        flexDirection : 'row',

    }
    
    useEffect(()=>{
        freshBoard();
    },[]);
    function freshBoard(){
        const newBoard= CreateBoard(10,10,20);
        setNonmine(10*10-20)
        setGrid(newBoard.board);
        }
    const updateFlag =(e,x,y) =>{
        e.preventDefault();
        let newGrid=JSON.parse(JSON.stringify(grid))
        if (newGrid[x][y].revealed===false)
        {if(newGrid[x][y].flagged==true)
        {
            newGrid[x][y].flagged=false;
        }
        else{   
        newGrid[x][y].flagged=true;
        }
    }
        console.log(newGrid[x][y])
        setGrid(newGrid);
    }
    const revealCell=(x,y)=>{
        let newGrid=JSON.parse(JSON.stringify(grid))
        if(!newGrid[x][y].flagged && newGrid[x][y].revealed === false)
        {if(newGrid[x][y].value==="m")
        {
            alert("clicked on mine")
            newGrid[x][y].revealed=true;
            setGrid(newGrid)
        }
        else{
            // newGrid[x][y].revealed=true
            let revealedboard=cellsRevealed(newGrid,x,y,nonmines)
            setGrid(revealedboard.grid)
            setNonmine(revealedboard.nonmines)
            // setGrid(newGrid)
        }}
    }
    return (
        <div className="parent" onContextMenu={e=>e.preventDefault()}>
            <div style={{textAlign: "center", color: "red"}}>non mines: {nonmines}</div>
            <br/>
            <br/>
            {grid.map(singlerow=>{
                return (
                    <div style={stylegrid} key={singlerow.x}>
                        {singlerow.map(singlecol=>{
                                return <Cell details={singlecol} key ={singlecol.y} updateFlag={updateFlag} revealCell={revealCell}/>
                        })}
                    </div>
                )
            })}
        </div>
    ) 

}
export default Board; 

