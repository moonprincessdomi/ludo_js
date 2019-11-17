
/*Element mean element id*/

function loadElement(element, sectionName) {
    let newElement = document.createElement('div');
    newElement.id = (element);
    document.getElementById(sectionName).appendChild(newElement);
    return newElement;
}

/*DICE ROLL FUNCTION*/

function diceRoll() {
    /*DELETE RECENT DICEEYE*/
    while (document.getElementById("dice").hasChildNodes()) {
        document.getElementById("dice").removeChild(document.getElementById("dice").firstChild);
    }
    let dice_value = Math.floor((Math.random() * 6) + 1);
    console.log(dice_value);
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
}

const PLAYERS = ["green", "red", "yellow", "blue"];

function loadBoard() {
    console.log("aaa");
    // for(let i= 1; i <=30; i++){
    //     document.getElementById(i).style.gridArea = "field"+ i;
    // }
    document.getElementById("loader").style.display="none";
    document.getElementById("gameboard").style.display="grid";
    document.getElementById("score").style.display = "flex";
    document.getElementById("diceroll").style.display = "flex";
    const childBoards = document.getElementById("gameboard").getElementsByTagName("div");
    for(let i = 0; i <childBoards.length;i++){
        let childBoard = childBoards[i];
        childBoard.style.gridArea = childBoard.id;
        //console.log(childBoard.id);
        //console.log(childBoard.style.gridArea);
    }

    

    // const pawns = {};
    // PLAYERS.forEach(color => {
    //     pawns[color] = [];
    //     for(let i =1; i <=4; i++){
    //         pawns[color].push(document.getElementById(`pawn${color}${i}`));
    //     }
    // });
}


function Start(){
    console.log("start");
    const pawns = PLAYERS.reduce((prev, color) => {
        prev[color] = [];
        for(let i =1; i <=4; i++){
            prev[color].push(document.getElementById(`pawn${color}${i}`));
            let newpawn = document.createElement("div");
            newpawn.id = `mpawn${color}${i}`;
            newpawn.className = `pawn ${color}field`;
            newpawn.style.gridArea = `pawn${color}${i}`;
            document.getElementById("gameboard").appendChild(newpawn);
        }
        return prev;
    }, {});
}

var Init;

function InitStart(){
    document.getElementById("loader").style.display = "block";
    document.getElementById("gameboard").style.display = "none";
    document.getElementById("diceroll").style.display = "none";
    document.getElementById("score").style.display = "none";
    Init =  setTimeout(loadBoard,3000);
}

document.getElementsByTagName("body")[0].onload = InitStart;
document.getElementById("roll").onclick = diceRoll;
document.getElementById("newgame").onclick = Start;
