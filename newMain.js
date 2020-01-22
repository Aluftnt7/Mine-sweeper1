'use strict'

const MINE = '*'
var gBoard

var gCell = {
    isShown: false,
    isMine: true
}


function display(cell) {
    var res = ''
    if (cell.isMine) {
        res = MINE
    } else {
        res = ''
    }
    return res
}


function initGame() {
    gBoard = createBoard(4)
        // console.log(gBoard);
    display(gCell)
    renderBoard(gBoard)
    minesCount(gBoard)
}


function createBoard(size) {
    var board = []
    for (var i = 0; i < size; i++) {
        var row = []
        for (var j = 0; j < size; j++) {

            row.push(gCell)
        }
        board.push(row)

    }

    board[2][0] = display(gCell)
    board[1][3] = display(gCell)
    console.log(board);

    return board
}



function renderBoard(board) {
    // console.table(board);

    var strHTML = '';
    for (var i = 0; i < board.length; i++) {
        strHTML += `<tr>`;
        for (var j = 0; j < board[0].length; j++) {
            var className = 'cell'
            'cell';
            strHTML += `<td
            class="cell-${i}-${j} ${className}"
            onclick=cellClicked(this,${i},${j})>
            ${board[i][j]}
            </td>`;
            // strHTML += '<td class="'+ className +'">'+ board[i][j] +'</td>';
        }
        strHTML += `</tr>`;
    }

    var elBoard = document.querySelector('.board');
    elBoard.innerHTML = strHTML;
}


function setMinesNegsCount(board, rowIdx, colIdx) {
    var cnt = 0;

    for (var i = rowIdx - 1; i <= rowIdx + 1; i++) {
        if (i < 0 || i >= board.length) continue;
        for (var j = colIdx - 1; j <= colIdx + 1; j++) {
            if (j < 0 || j >= board[0].length) continue;
            if (i === rowIdx && j === colIdx) continue;
            if (board[i][j] === MINE) {
                cnt++
                // renderBoard(board)
            }
        }
    }
    // console.log(cnt);

    return cnt;
}

function minesCount(board) {

    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board[0].length; j++) {
            var minesCount = setMinesNegsCount(board, i, j);
            board[i][j] = minesCount

        }
    }

    renderBoard(board)

    console.table(gBoard)
}