"use strict"

function printTree(loops) {
    let treeLine = "*"
    for (let i = 1; i < loops; i++) {
        treeLine += '<br>';
        console.log(treeLine);
        for (let j = 0; j <= i; j++) {
            treeLine += "*"
        }
    }
    return treeLine;
}
document.getElementById('output').innerHTML = printTree(5)