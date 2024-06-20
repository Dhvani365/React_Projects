import React, {useState} from 'react'
import './board.css'
import Square from './square'

const tictactoe = () => {
    // Keep Track of Turn
    const [Oturn, setNextTurn] = useState(true);
    // Array that maintains state of each cell - 'X', 'O', or null
    const [squares, setSquares] = useState(Array(9).fill(null));

    //Handling click event for each cell
    function handleClick(i) {
        const nextSquares = squares.slice();
    
        // If the square is already filled or there's a winner, do nothing
        if (nextSquares[i] || checkWinner(nextSquares)) {
            return;
        }
    
        // Assign current player's symbol based on turn
        nextSquares[i] = Oturn ? "O" : "X";
        setSquares(nextSquares);
        // Switch turns
        setNextTurn(!Oturn);
        // Check for winner or tie
        // Delay checking for winner and displaying alert using setTimeout
        setTimeout(() => {
            const winner = checkWinner(nextSquares);
            if (winner) {
                let status;
                if (winner === 'X') {
                    status = "Game Over! Winner is: Player 2 (X)";
                } else if (winner === 'O') {
                    status = "Game Over! Winner is: Player 1 (O)";
                } else if (winner === 'T') {
                    status = "Game Over! It's a Tie!";
                }
                alert(status);
                resetButtonClick();
            }
        }, 0); // Using setTimeout to ensure alert is displayed after state update
    }    

    //Checking For Winner
    function checkWinner(squares){
        const lines = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ] 

        for(let i=0; i<lines.length; i++){
            let [a,b,c] = lines[i];
            if(squares[a] && squares[a] == squares[b] && squares[a] == squares[c]){
                return squares[a];
            }
        }

        // Check if all squares are filled (no null values left)
        if (squares.every(square => square !== null)) {
            return 'T'; // Return 'T' indicating a tie
        }

        return null; // Return null when there's no winner or tie yet
    }

    //Handling Reset Button Click
    function resetButtonClick(){
        setSquares(Array(9).fill(null));
        setNextTurn(true);
    }
    return(
        <>
            <div className='body'>
                {/* Defining Heading */}
                <div className='heading'> <span>Tic Tac Toe</span> Game </div>

                {/* Making Board */}
                <div className='board grid grid-rows-3'>
                    <div className="board-row row-auto">
                        <div className='col'>
                            <Square value={squares[0]} setOnClick={()=>handleClick(0)}/>
                        </div>
                        <div className='col'>
                            <Square value={squares[1]} setOnClick={()=>handleClick(1)}/>
                        </div>
                        <div className='col'>
                            <Square value={squares[2]} setOnClick={()=>handleClick(2)}/>
                        </div>                        
                    </div>
                    <div className="board-row row-auto">
                        <div className='col'>
                            <Square value={squares[3]} setOnClick={()=>handleClick(3)}/>
                        </div>
                        <div className='col'>
                            <Square value={squares[4]} setOnClick={()=>handleClick(4)}/>
                        </div>
                        <div className='col'>
                            <Square value={squares[5]} setOnClick={()=>handleClick(5)}/>
                        </div>                        
                    </div>
                    <div className="board-row row-auto">
                        <div className='col'>
                            <Square value={squares[6]} setOnClick={()=>handleClick(6)}/>
                        </div>
                        <div className='col'>
                            <Square value={squares[7]} setOnClick={()=>handleClick(7)}/>
                        </div>
                        <div className='col'>
                            <Square value={squares[8]} setOnClick={()=>handleClick(8)}/>
                        </div>                        
                    </div>
                </div>

                {/* Providing Button */}
                <div className="container" style={{marginTop: '50px', marginLeft: 'auto'}}>
                    <button className="resetBtn" onClick={resetButtonClick}>Reset Game</button>
                </div>
            </div>            
        </>    
    )
}

export default tictactoe