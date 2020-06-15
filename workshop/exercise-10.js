// Q10
// Write a loop that makes seven calls to console.log to output the following triangle:
// #
// ##
// ###
// ####
// #####
// ######
// #######

let row = '';

for (let i = 1; i <= 7; i++) {
    row = `${row}#`;
    console.log(row);
}