"use strict"

function printTree(loops) {
    let tree = ""
    for (let i = 0; i < loops; i++) {
        tree += "<br> \n";
        for (let j = 0; j <= i; j++) {
            tree += "*"
        }
    }
    console.log(tree);
    return tree;
}
document.getElementById('output').innerHTML = printTree(5)