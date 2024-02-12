const sudokuBoards = {
    easy: [
        [
            [0, 2, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 6, 0, 0, 0, 0, 3],
            [0, 7, 4, 0, 8, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 3, 0, 0, 2],
            [0, 8, 0, 0, 4, 0, 0, 1, 0],
            [6, 0, 0, 5, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 0, 7, 8, 0],
            [5, 0, 0, 0, 0, 9, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 4, 0]
        ],
        
        [
            [0, 3, 0, 0, 0, 8, 0, 4, 0],
            [0, 1, 0, 0, 9, 0, 5, 0, 0],
            [0, 0, 2, 3, 0, 5, 9, 0, 0],
            [0, 5, 0, 8, 0, 6, 0, 0, 7],
            [0, 0, 6, 0, 0, 0, 3, 0, 0],
            [3, 0, 0, 5, 0, 7, 0, 6, 0],
            [0, 0, 9, 4, 0, 2, 8, 0, 0],
            [0, 0, 1, 0, 6, 0, 0, 9, 0],
            [0, 6, 0, 7, 0, 0, 0, 5, 0]

        ],
    ],
    medium: [
        [
            [0, 0, 0, 0, 0, 7, 4, 6, 0],
            [4, 0, 0, 0, 0, 6, 0, 0, 0],
            [0, 0, 7, 3, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 2, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 5, 0],
            [0, 4, 0, 0, 0, 0, 0, 3, 0],
            [2, 0, 0, 0, 1, 0, 0, 0, 8],
            [0, 0, 0, 0, 9, 0, 0, 0, 0],
            [0, 8, 0, 0, 0, 0, 5, 0, 7]
             
        ],

        [
            [0, 0, 0, 6, 0, 0, 4, 0, 0],
            [7, 0, 0, 0, 0, 3, 6, 0, 0],
            [0, 0, 0, 0, 9, 1, 0, 8, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 5, 0, 1, 8, 0, 0, 0, 3],
            [0, 0, 0, 3, 0, 6, 0, 4, 5],
            [0, 4, 0, 2, 0, 0, 0, 6, 0],
            [9, 0, 3, 0, 0, 0, 0, 0, 0],
            [0, 2, 0, 0, 0, 0, 1, 0, 0]

        ],
        
    ],
    hard: [
        [
            [0, 0, 5, 3, 0, 0, 0, 0, 0],
            [8, 0, 0, 0, 0, 0, 0, 2, 0],
            [0, 7, 0, 0, 1, 0, 5, 0, 0],
            [4, 0, 0, 0, 0, 5, 3, 0, 0],
            [0, 1, 0, 0, 7, 0, 0, 0, 6],
            [0, 0, 3, 2, 0, 0, 0, 8, 0],
            [0, 6, 0, 5, 0, 0, 0, 0, 9],
            [0, 0, 4, 0, 0, 0, 0, 3, 0],
            [0, 0, 0, 0, 0, 9, 7, 0, 0]

         ],

        [
            [0, 2, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 6, 0, 0, 0, 0, 3],
            [0, 7, 4, 0, 8, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 3, 0, 0, 2],
            [0, 8, 0, 0, 4, 0, 0, 1, 0],
            [6, 0, 0, 5, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 0, 7, 8, 0],
            [5, 0, 0, 0, 0, 9, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 4, 0]

         ]
    ]
};


function createSudokuBoard(level, index) {
    const selectedBoard = sudokuBoards[level][index];
    const container = document.getElementById("sudoku-container");
    container.innerHTML = ''; 

    const table = document.createElement("table");
    for (let i = 0; i < 9; i++) {
        const row = document.createElement("tr");
        for (let j = 0; j < 9; j++) {
            const cell = document.createElement("td");
            cell.textContent = selectedBoard[i][j];
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    container.appendChild(table);
}


function startGame() {
    const levelSelect = document.getElementById("level-select");
    const selectedLevel = levelSelect.value;
    const randomIndex = Math.floor(Math.random() * sudokuBoards[selectedLevel].length);
    createSudokuBoard(selectedLevel, randomIndex);
}

startGame();
