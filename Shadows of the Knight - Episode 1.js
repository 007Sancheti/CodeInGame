/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var inputs = readline().split(' ');
const W = parseInt(inputs[0]); // width of the building.
const H = parseInt(inputs[1]); // height of the building.
const N = parseInt(readline()); // maximum number of turns before game over.
var inputs = readline().split(' ');
let X0 = parseInt(inputs[0]);
let Y0 = parseInt(inputs[1]);
let above = 0;
let left = 0;
let below = H - 1;
let right = W - 1;
// game loop
while (true) {
    const bombDir = readline(); // the direction of the bombs from batman's current location (U, UR, R, DR, D, DL, L or UL)

    // Write an action using console.log()
    // To debug: console.error('Debug messages...');
    bombDir.includes('L') && (right = X0 - 1);
    bombDir.includes('R') && (left = X0 + 1);
    bombDir.includes('U') && (below = Y0 - 1);
    bombDir.includes('D') && (above = Y0 + 1);
    X0 = Math.floor((right + left) / 2);
    Y0 = Math.floor((above + below) / 2);
    // the location of the next window Batman should jump to.
    console.log(`${X0} ${Y0}`);
}
