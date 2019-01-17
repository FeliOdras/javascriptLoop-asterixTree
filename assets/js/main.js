"use strict"

function printTree(loops) {
    let tree = "*"
    for (let i = 1; i < loops; i++) {
        tree += '<br>';
        for (let j = 0; j <= i; j++) {
            tree += "*"
        }
    }
    return tree;
}
document.getElementById('output').innerHTML = printTree(5)