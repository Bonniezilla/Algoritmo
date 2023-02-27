let n1 = 0;

function verificaFatorial() {
    let tracker = n1;
    n1Antecessor = n1 - 1;
    for (var i = n1; i > 1; i--) {
        tracker = tracker * n1Antecessor;
        n1--;
        n1Antecessor--;
    }
    console.log(tracker);
} 