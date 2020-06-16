// Q11
// Write a program that creates a string that represents an 8×8 grid,
// using newline characters to separate lines. At each position of the grid
// there is either an "_" or a "#" character. The characters should form a chessboard.

// #_#_#_#_
// _#_#_#_#
// #_#_#_#_
// _#_#_#_#
// #_#_#_#_
// _#_#_#_#
// #_#_#_#_
// _#_#_#_#

let hashStart = '#_';
let underStart = '_#';
let row = '';

for (let i = 1; i <= 8; i++) {
    if (i % 2 !==0) {
        for (let j = 1; j <= 8; j++) {
            if (j % 2 !== 0) {
                row = `${row}#`;
            } else {
                row = `${row}_`;
            }
        }
    } else {
        for (let j = 1; j <= 8; j++) {
            if (j % 2 !== 0) {
                row = `${row}_`;
            } else {
                row = `${row}#`;
            }
        }
    }
    
    console.log(row);
    row = `${row}\n`;
    row = '';
}