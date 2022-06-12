export let player = 1;
export let buttons = [];
export let vals = [];

export let winner;

export let onmove;
export function setonmove(to) {
    onmove = to;
}

export function click(id, bot = false) {
    if (vals[id] == 0 && winner == undefined) {
        vals[id] = player;
        buttons[id].style.backgroundColor = (player == 1) ? "red" : "green";
    
        if ([0, 1, 2].every(num => vals[num] === player)) {
            winner = player;
        }
        if ([0, 4, 8].every(num => vals[num] === player)) {
            winner = player;
        }
        if ([0, 3, 6].every(num => vals[num] === player)) {
            winner = player;
        }
        
        if ([2, 4, 6].every(num => vals[num] === player)) {
            winner = player;
        }
        
        if ([6, 7, 8].every(num => vals[num] === player)) {
            winner = player;
        }
        if ([2, 5, 8].every(num => vals[num] === player)) {
            winner = player;
        }
        
        if ([1, 4, 7].every(num => vals[num] === player)) {
            winner = player;
        }
        if ([3, 4, 5].every(num => vals[num] === player)) {
            winner = player;
        }

        player *= -1;

        if (!bot) onmove();
    }
}

for (let y = 0; y < 3; y++) {
    for (let x = 0; x < 3; x++) {
        let button = document.createElement("button");

        button.onclick = function() {
            click(x + y * 3);
        };

        button.style.position = "absolute";
        button.style.width = "200px";
        button.style.height = "200px";
        button.style.top = (y * 200).toString() + "px";
        button.style.left = (x * 200).toString() + "px";

        document.body.appendChild(button);
        buttons.push(button);
        vals.push(0);
    }
}