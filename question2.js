var array = [1, 2, 1, 5];
var jumps = 0;
var jumpIndex = 0;
var cannotJump = true;

function getJumps(arr, startingIndex) {
    return (jumps > 0) ? jumps : -1;
}


for (var i in array) {
    if (jumpIndex < array.length || jumpIndex < 0) {
        var v = array[jumpIndex];
        jumpIndex = jumpIndex + v;
        jumps += 1;
    } else {
        cannotJump = false;
    }
}
jumps = (cannotJump) ? -1 : jumps;

console.log(jumps);