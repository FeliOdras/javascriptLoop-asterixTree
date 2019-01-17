"use strict"

function printAsterixTree() {
    const asterix = '*';
    for (let i = 1; i < 6; i++) {
        let asterixTree = asterix + asterix;
        console.log(asterixTree);
    }
}
printAsterixTree()