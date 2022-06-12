import * as game from "./2p.js"

function random() {
    return Math.random() * 2 - 1
}

function randommatrix(shape) {
    let ret = [];

    for (let i = 0; i < shape[0]; i++) {
        let row = [];

        for (let j = 0; j < shape[1]; j++) {
            row.push(random());
        }

        ret.push(row);
    }

    return ret
}

class Bot {
    constructor() {
        this.m0 = randommatrix([9, 9]);
    }

    run(input) {
        let step1 = [];

        for (let row = 0; row < this.m0.length; row++) {
            step1.push(this.m0[row].map(function(value, index) {
                return value * input[index]
            }))
        }

        let step2 = [];

        for (let row = 0; row < step1.length; row++) {
            step2.push(step1[row].reduce(function(previous, current) {
                return previous + current
            }, 0))
        }

        let modded = step2.filter(function(value, index) {
            return (input[index] == 0)
        })

        console.log(modded[4])

        console.log(modded)
        
        game.click(step2.indexOf(modded.reduce(function(previous, current) {
            return Math.max(previous, current)
        }, -Infinity)), true);
    }
}

let bot1 = new Bot();
game.setonmove(function() {
    bot1.run(game.vals);
    console.log(game.vals);
})