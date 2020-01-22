//load Util first, conact util to html!




function createMat(ROWS, COLS) {
    var mat = []
    for (var i = 0; i < ROWS; i++) {
        var row = []
        for (var j = 0; j < COLS; j++) {
            row.push('')
        }
        mat.push(row)
    }
    return mat
}



function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



function setMinesNegsCount(board, rowIdx, colIdx) {
    var cnt = 0;

    for (var i = rowIdx - 1; i <= rowIdx + 1; i++) {
        if (i < 0 || i >= board.length) continue;
        for (var j = colIdx - 1; j <= colIdx + 1; j++) {
            if (j < 0 || j >= board[0].length) continue;
            if (i === rowIdx && j === colIdx) continue;
            //console.log(board);
            // debugger
            // if (board[i][j] === LIFE) cnt++
        }
    }

    return cnt;
}


/**
 * Shuffles array in place.
//  * @param {Array} a items An array containing the items.
 */
function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}





var numbers = [4, 2, 5, 1, 3];
numbers.sort(function(a, b) {
    return a - b;
});
console.log(numbers);

// [1, 2, 3, 4, 5]


function renderCell(location, value) {
    var cellSelector = '.' + getClassName(location)
    var elCell = document.querySelector(cellSelector);
    elCell.innerHTML = value;
}



function createBoard(SIZE) {
    var board = [];

    for (var i = 0; i < SIZE; i++) {
        board[i] = [];
        for (var j = 0; j < SIZE; j++) {
            board[i][j] = Math.random() > 0.5 ? LIFE : NOLIFE;
        }
    }


    return board;
}

function renderBoard(board) {
    // console.table(board);

    var strHTML = '';
    for (var i = 0; i < board.length; i++) {
        strHTML += `<tr>`;
        for (var j = 0; j < board[0].length; j++) {
            var className = (board[i][j]) ? 'occupied' : '';
            strHTML += `<td
            class="cell-${i}-${j} ${className}"
            onclick=cellClicked(this,${i},${j})>
            ${board[i][j]}
            </td>`;
            strHTML += '<td class="' + className + '">' + board[i][j] + '</td>';
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

            if (board[i][j] === LIFE) cnt++
        }
    }

    return cnt;
}