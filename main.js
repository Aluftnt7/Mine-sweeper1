'use strict'

console.log('good luck champ!');

const MINE = '*'
const EMPTY = ''
var gBoard = createBoard(4)

var gCell = {
    isShown: true,
}


function initGame() {
    // gBoard = createBoard(4)
    console.table(gBoard)
    renderBoard(gBoard)
}




function createBoard(size) {
    var board = []
    for (var i = 0; i < size; i++) {
        var row = []
        for (var j = 0; j < size; j++) {
            var cell = {
                isShown: true

            }
            row.push(cell)
        }
        board.push(row)

    }
    board[2][0] = MINE
    board[1][3] = MINE
    return board
}





function renderBoard(board) {
    var strHTML = '';
    for (var i = 0; i < board.length; i++) {
        strHTML += `<tr>`;
        for (var j = 0; j < board[0].length; j++) {
            var className = (board[i][j]) ? 'empty' : 'mine'
            strHTML += `<td
            class="cell-${i}-${j} ${className}"
            onclick=cellClicked(this,${i},${j})>
            ${board[i][j]}
            </td>`;
        }
        strHTML += `</tr>`;
    }

    var elBoard = document.querySelector('.board');

    elBoard.innerHTML = strHTML;
}

console.table(gBoard)



function setMinesNegsCount(board, rowIdx, colIdx) {
    var cnt = 0;

    for (var i = rowIdx - 1; i <= rowIdx + 1; i++) {
        if (i < 0 || i >= board.length) continue;
        for (var j = colIdx - 1; j <= colIdx + 1; j++) {
            if (j < 0 || j >= board[0].length) continue;
            if (i === rowIdx && j === colIdx) continue;
            if (board[i][j] === MINE) {
                cnt++

            }
        }
    }
    return cnt;
}



countMines(gBoard)

function countMines(board) {
    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board[0].length; j++) {
            // var minesCount = setMinesNegsCount(board, i, j)
            // board[i][j] = minesCount
        }
    }
    renderBoard(gBoard)
}