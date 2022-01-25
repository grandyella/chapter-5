class Pemain {
    constructor(props) {
        let { name, info, index } = props;
        this.name = name;
        this.info = info;
        this.index = index;
    }
}

class Manusia extends Pemain {
    constructor(props) {
        super(props);
    }
}

class Komputer extends Pemain {
    constructor(props) {
        super(props);
    }
}

class Game {
    constructor(props) {
        let { tampilanStatus, player1, player2 } = props;
        this.tampilanStatus = tampilanStatus;
        this.player1 = player1;
        this.player2 = player2;
    }

    Mulai() {
        if (computer.info[0].style.backgroundColor == "gray" || computer.info[1].style.backgroundColor == "gray" || computer.info[2].style.backgroundColor == "gray") {
            for (let i = 0; i < 3; i++) {
                player1.info[i].style.backgroundColor = "#AE876B";
                computer.info[i].style.backgroundColor = "#AE876B";
            }
            this.tampilanStatus.innerHTML = `<p class="versus">VS</p>`;
        } else {
            let timesRun = 0;
            let indexBefore = 0;
            let intervalGenerator = setInterval(() => {
                this.player2.index = Math.floor(Math.random() * 3);
                this.player2.info[this.player2.index];
                if (timesRun > 0) {
                    this.player2.info[indexBefore];
                }
                indexBefore = this.player2.index;
                timesRun += 1;
                if (timesRun == 2) {
                    clearInterval(intervalGenerator);
                    this.player2.info[this.player2.index].style.backgroundColor = "gray";
                    timesRun = 0;
                }
            }, 2);
            setTimeout(() => {
                this.Pemenang(this.player1.index, this.player2.index);
            }, 350);
        }
    }

    Pemenang(player1, player2) {
        const menang = "PLAYER 1\nWIN!";
        const kalah = "COM\nWIN!";
        const seri = "DRAW";
        if (player1 == 0 && player2 == 2) {
            this.tampilanStatus.innerHTML = `<p class="status">${menang}</p>`;
        } else if (player1 == 2 && player2 == 0) {
            this.tampilanStatus.innerHTML = `<p class="status">${kalah}</p>`;
        } else if (player1 > player2) {
            this.tampilanStatus.innerHTML = `<p class="status">${menang}</p>`;
        } else if (player1 < player2) {
            this.tampilanStatus.innerHTML = `<p class="status">${kalah}</p>`;
        } else {
            this.tampilanStatus.innerHTML = `<p class="status">${seri}</p>`;
        }
    }
}

const player1 = new Manusia({
    name: "Player 1",
    info: document.getElementsByClassName("inputPlayer"),
});

const computer = new Komputer({
    name: "Computer",
    info: document.getElementsByClassName("Computerr"),
});

const game1 = new Game({
    tampilanStatus: document.getElementById("versus"),
    player1: player1,
    player2: computer,
});

// MAIN PROGRAM
let pickStatus = false;

// ASSATSTATSATASTATSATTSATSATSTATAS
const refreshButton = () => {
    if (!pickStatus) {
        alert("Pick your sign!");
    } else {
        game1.Mulai();
    }
};

const playerCard = (card) => {
    player1.index = card;
    game1.tampilanStatus.innerHTML = `<p class="versus">VS</p>`;
    for (let i = 0; i < 3; i++) {
        computer.info[i].style.backgroundColor = "#AE876B";
    }
    player1.info[card].style.backgroundColor = "gray";
    for (let i = 0; i < 3; i++) {
        if (i !== card) {
            player1.info[i].style.backgroundColor = "#AE876B";
        }
    }
    pickStatus = true;
    game1.Mulai();
};