
/*Element mean element id*/

function loadElement(element, sectionName) {
    let newElement = document.createElement('div');
    newElement.id = (element);
    document.getElementById(sectionName).appendChild(newElement);
    return newElement;
}

/*MOVE PAWN*/

function movePawn(diceScore, pawn, color) {
    let startfield;

    switch (color) {
        case "green":
            startfield = 33;
            break;
        case "red":
            startfield = 23;
            break;
        case "blue":
            startfield = 3;
            break;
        case "yellow":
            startfield = 13;
            break;
    }

    let recentfield = pawn.style.gridArea.split("/");
    recentfield = recentfield[0].replace(/\s+/g, '');
    if (`m${recentfield}` === pawn.id && diceScore == 6) {
        pawn.style.gridArea = `field${startfield}`;
        return;
    }
    else if (`m${recentfield}` === pawn.id && diceScore != 6) {
        return;
    }
    else if (recentfield.startsWith(`field${color}`)) {
        recentfield = recentfield.replace('field', '');
        recentfield = Number(recentfield.replace(`${color}`, ''));

        let newfield = recentfield + diceScore;
        if (newfield > 4) {
            return;
        }
        else {
            pawn.style.gridArea = `field${color}${newfield}`;
            return;
        }
    }

    recentfield = Number(recentfield.replace('field', ''));
    let newfield = (recentfield + diceScore > 40) ? ((recentfield + diceScore) % 40) : (recentfield + diceScore);

    if (recentfield < startfield && newfield >= startfield) {
        newfield = newfield - startfield + 1;
        if (newfield > 4) {
            return;
        }
        pawn.style.gridArea = `field${color}${newfield}`;
    } else {
        pawn.style.gridArea = `field${newfield}`;
    }
}

const PLAYERS = ["green", "red", "yellow", "blue"];
let activePlayer = PLAYERS[0];

/*CHANGE PLAYER FUNCTION*/

function changePlayer(){
    for (let i=0; PLAYERS.length > i;i++){
        if(activePlayer === PLAYERS[i]){
            activePlayer = PLAYERS[(i+1)%4];
            break;
        }
    }
}

/*DICE ROLL FUNCTION*/

function diceRoll() {
    /*DELETE RECENT DICEEYE*/
    while (document.getElementById("dice").hasChildNodes()) {
        document.getElementById("dice").removeChild(document.getElementById("dice").firstChild);
    }
    let dice_value = Math.floor((Math.random() * 6) + 1);
    /*LOAD NEW DICEEYE*/

    for (let i = 1; i <= dice_value; i++) {
        let new_element = loadElement("diceeye" + i, "dice");
        new_element.className = "diceeye";
    }

    switch (dice_value) {
        case 1:
            document.getElementById("diceeye1").style.gridArea = "eye5";
            break;
        case 2:
            /*1 eye*/
            document.getElementById("diceeye1").style.gridArea = "eye1";
            /*2 eye*/
            document.getElementById("diceeye2").style.gridArea = "eye9";
            break;
        case 3:
            /*1 eye*/
            document.getElementById("diceeye1").style.gridArea = "eye1";
            /*2 eye*/
            document.getElementById("diceeye2").style.gridArea = "eye5";
            /*3 eye*/
            document.getElementById("diceeye3").style.gridArea = "eye9";
            break;
        case 4:
            /*1 eye*/
            document.getElementById("diceeye1").style.gridArea = "eye1";
            /*2 eye*/
            document.getElementById("diceeye2").style.gridArea = "eye7";
            /*3 eye*/
            document.getElementById("diceeye3").style.gridArea = "eye3";
            /*4 eye*/
            document.getElementById("diceeye4").style.gridArea = "eye9";
            break;
        case 5:
            /*1 eye*/
            document.getElementById("diceeye1").style.gridArea = "eye1";
            /*2 eye*/
            document.getElementById("diceeye2").style.gridArea = "eye7";
            /*3 eye*/
            document.getElementById("diceeye3").style.gridArea = "eye5";
            /*4 eye*/
            document.getElementById("diceeye4").style.gridArea = "eye3";
            /*5 eye*/
            document.getElementById("diceeye5").style.gridArea = "eye9";
            break;
        case 6:
            /*1 eye*/
            document.getElementById("diceeye1").style.gridArea = "eye1";
            /*2 eye*/
            document.getElementById("diceeye2").style.gridArea = "eye4";
            /*3 eye*/
            document.getElementById("diceeye3").style.gridArea = "eye7";
            /*4 eye*/
            document.getElementById("diceeye4").style.gridArea = "eye3";
            /*5 eye*/
            document.getElementById("diceeye5").style.gridArea = "eye6";
            /*6 eye*/
            document.getElementById("diceeye6").style.gridArea = "eye9";
            break;
        default:
            break;
    }
    movePawn(dice_value, document.getElementById(`mpawn${activePlayer}1`), activePlayer);
    changePlayer();
    return dice_value;
}

/* GAMEBOARD LOADING FUNCTION*/

function loadBoard() {
    //diceRoll();
    document.getElementById("loader").style.display = "none";
    document.getElementById("gameboard").style.display = "grid";
    document.getElementById("score").style.display = "flex";
    document.getElementById("diceroll").style.display = "flex";
    const childBoards = document.getElementById("gameboard").getElementsByTagName("div");
    for (let i = 0; i < childBoards.length; i++) {
        let childBoard = childBoards[i];
        childBoard.style.gridArea = childBoard.id;
    }

    // const pawns = {};
    // PLAYERS.forEach(color => {
    //     pawns[color] = [];
    //     for(let i =1; i <=4; i++){
    //         pawns[color].push(document.getElementById(`pawn${color}${i}`));
    //     }
    // });
}

/*FUNCTION START NEW GAME */

function Start() {
    const pawns = PLAYERS.reduce((prev, color) => {
        prev[color] = [];
        for (let i = 1; i <= 4; i++) {
            prev[color].push(document.getElementById(`pawn${color}${i}`));
            let newpawn = document.createElement("div");
            newpawn.id = `mpawn${color}${i}`;
            newpawn.className = `pawn ${color}field`;
            newpawn.style.gridArea = `pawn${color}${i}`;
            document.getElementById("gameboard").appendChild(newpawn);
            //console.log(document.getElementById(`mpawn${color}${i}`).style.gridArea);
        }
        return prev;
    }, {});
}

var Init;

/*INITIALIZATION FUNCTION*/

function InitStart() {
    document.getElementById("loader").style.display = "block";
    document.getElementById("gameboard").style.display = "none";
    document.getElementById("diceroll").style.display = "none";
    document.getElementById("score").style.display = "none";
    Init = setTimeout(loadBoard, 3000);
}

document.getElementsByTagName("body")[0].onload = InitStart;
document.getElementById("roll").onclick = diceRoll;
document.getElementById("newgame").onclick = Start;
