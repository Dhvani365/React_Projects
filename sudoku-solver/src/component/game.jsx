import React, { useState } from 'react';
import './game.css';

const initial = [
    [-1, 5, -1, 9, -1, -1, -1, -1, -1],
    [8, -1, -1, -1, 4, -1, 3, -1, 7],
    [-1, -1, -1, 2, 8, -1, 1, 9, -1],
    [5, 3, 8, 6, -1, 7, 9, 4, -1],
    [-1, 2, -1, 3, -1, 1, -1, -1, -1],
    [1, -1, 9, 8, -1, 4, 6, 2, 3],
    [9, -1, 7, 4, -1, -1, -1, -1, -1],
    [-1, 4, 5, -1, -1, -1, 2, -1, 9],
    [-1, -1, -1, -1, 3, -1, -1, 7, -1]
];

const Sudokuboard = () => {
    const [sudokuArr, setSudokuArr] = useState(getDeepCopy(initial));
    const [selectedRow, setSelectedRow] = useState(null);
    const [selectedCol, setSelectedCol] = useState(null);
    const [wrongCells, setWrongCells] = useState([-1,-1]);

    function getDeepCopy(arr) {
        return JSON.parse(JSON.stringify(arr));
    }

    function onInputChange(e, row, col) {
        const val = parseInt(e.target.value) || -1;
        const grid = getDeepCopy(sudokuArr);
        if (val === -1 || (val >= 1 && val <= 9)) {
            grid[row][col] = val;
            if(!checkCol(grid, col, val) || !checkRow(grid, row, val) || !checkBox(grid, row, col, val)){
                setWrongCells([row,col]);
            }            
        }
        setSudokuArr(grid);
    }

    function restart() {
        setSudokuArr(getDeepCopy(initial));
        setSelectedRow(null);
        setSelectedCol(null);
        setWrongCells([-1,-1]);
    }

    function handleCellClick(row, col) {
        setSelectedRow(row);
        setSelectedCol(col);
    }

    function compareSudoku(currSudoku, solvedSudoku) {
        let isComplete = true, isSolvable=true;

        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                if (currSudoku[i][j] !== solvedSudoku[i][j]) {
                    if (currSudoku[i][j] !== -1) {
                        setWrongCells([i,j]);
                        isSolvable=false;
                    }
                    isComplete = false;
                }
            }
        }
        return { isComplete, isSolvable};
    }

    function checkSudoku() {
        let sudoku = getDeepCopy(initial);
        solver(sudoku);
        const { isComplete, isSolvable } = compareSudoku(sudokuArr, sudoku);
        
        if (isComplete) {
            alert("Congratulations!! You have solved Sudoku Successfully!");
        } else if (isSolvable) {
            alert("Please Complete the Fills!");
        } else {
            alert("Wrong Fill!! Please Try Again!");
            restart();
        }
    }

    function checkCorrect(grid, row, col, num) {
        if (checkRow(grid, row, num) && checkCol(grid, col, num) && checkBox(grid, row, col, num)) {
            return true;
        }
        return false;
    }

    function checkRow(grid, row, num) {
        return grid[row].indexOf(num) === -1;
    }

    function checkCol(grid, col, num) {
        return grid.map(row => row[col]).indexOf(num) === -1;
    }

    function checkBox(grid, row, col, num) {
        let boxArr = [],
            rowStart = row - (row % 3),
            colStart = col - (col % 3);
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                boxArr.push(grid[rowStart + i][colStart + j]);
            }
        }
        return boxArr.indexOf(num) === -1;
    }

    function getNext(row, col) {
        return col !== 8 ? [row, col + 1] : row !== 8 ? [row + 1, 0] : [0, 0];
    }

    function solver(grid, row = 0, col = 0) {
        if (grid[row][col] !== -1) {
            let isLast = row >= 8 && col >= 8;
            if (!isLast) {
                let [newRow, newCol] = getNext(row, col);
                return solver(grid, newRow, newCol);
            }
        }
        for (let num = 1; num <= 9; num++) {
            if (checkCorrect(grid, row, col, num)) {
                grid[row][col] = num;
                let [newRow, newCol] = getNext(row, col);
                if (!newRow && !newCol) {
                    return true;
                }
                if (solver(grid, newRow, newCol)) {
                    return true;
                }
            }
        }
        grid[row][col] = -1;
        return false;
    }

    function solveSudoku() {
        let sudoku = getDeepCopy(initial);
        solver(sudoku);
        setSudokuArr(sudoku);
        setWrongCells([-1,-1]); // Clear wrong cells after solving
    }

    return (
        <div className='container'>
            <div className='heading'>
                <h1>Sudoku Solver</h1>
            </div>
            <div className='board'>
                <table>
                    <tbody>
                        {sudokuArr.map((rowArr, row) => (
                            <tr key={row}>
                                {rowArr.map((cell, col) => (
                                    <td
                                        key={col}
                                        className={`cell ${
                                            selectedRow === row || selectedCol === col ? 'highlight' : ''
                                        } ${row % 3 === 2 && row !== 8 ? 'bottom-border' : ''} ${col % 3 === 2 && col !== 8 ? 'right-border' : ''} ${
                                            cell === -1 ? 'empty-cell' : ''
                                        } ${wrongCells[0] === row && wrongCells[1] === col ?'bottom-border' : ''}`}
                                    >
                                        <input
                                            onChange={(e) => onInputChange(e, row, col)}
                                            value={cell === -1 ? '' : cell}
                                            className='cellInput'
                                            disabled={initial[row][col] !== -1}
                                            onClick={() => handleCellClick(row, col)}
                                        />
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className='options'>
                <button onClick={restart}>Restart Game</button>
                <button onClick={checkSudoku}>Check Result</button>
                <button onClick={solveSudoku}>Solve Game</button>
            </div>
        </div>
    );
};

export default Sudokuboard;
