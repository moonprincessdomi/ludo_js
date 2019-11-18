
/*Element mean element id*/

function loadElement(element, sectionName) {
    let newElement = document.createElement('div');
    newElement.id = (element);
    document.getElementById(sectionName).appendChild(newElement);
    return newElement;
}

/*MOVE PAWN*/

function movePawn(diceScore, pawn, color){
    console.log(pawn.style.gridArea);
    if(1){
        console.log("jeju");
        pawn.style.gridArea = "field33";
        console.log(pawn.style.gridArea); 
    }
    let recentfield = pawn.style.gridArea.split("/");
    console.log(recentfield);
    recentfield = Number(recentfield[0].replace('field',''));
    console.log(recentfield);
    let newfield = (recentfield + diceScore) % 40;
    console.log(newfield);
    pawn.style.gridArea = `field${newfield}`;
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
    movePawn(dice_value,document.getElementById("mpawngreen1"),"green" );
    return dice_value;
}

const PLAYERS = ["green", "red", "yellow", "blue"];

/* GAMEBOARD LOADING FUNCTION*/

function loadBoard() {
    //diceRoll();
    document.getElementById("loader").style.display="none";
    document.getElementById("gameboard").style.display="grid";
    document.getElementById("score").style.display = "flex";
    document.getElementById("diceroll").style.display = "flex";
    const childBoards = document.getElementById("gameboard").getElementsByTagName("div");
    for(let i = 0; i <childBoards.length;i++){
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

function Start(){
    const pawns = PLAYERS.reduce((prev, color) => {
        prev[color] = [];
        for(let i =1; i <=4; i++){
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
