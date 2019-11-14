/* 
LUDO GAME

PROJECTS STRUCTURE
1. NEW ELEMENT APPER AS DIV TYPE
2. WHEN THE DICE IS APER, PROGRAM RANDOM DICE VALUE AND ON DICE APPER THIS NUMBER OF EYES
3. THE ROLL ELEMENT IS ALWAYS VISIBLE ON THE LEFT SITE OF DISPALY
4. BOARD APPER AS DIV, AND THE PAWN APPER AS CIRCLE DIV AND DISAPEAR WHEN ABANDOM A FIELD
*/

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



    // switch (dice_value) {
    //     case 1:
    //         document.getElementById("diceeye1").style.top = "40px";
    //         document.getElementById("diceeye1").style.left = "0px";
    //         break;
    //     case 2:
    //         /*1 eye*/
    //         document.getElementById("diceeye1").style.top = "20px";
    //         document.getElementById("diceeye1").style.left = "-10px";
    //         /*2 eye*/
    //         document.getElementById("diceeye2").style.top = "60px";
    //         document.getElementById("diceeye2").style.left = "10px";
    //         break;
    //     case 3:
    //         /*1 eye*/
    //         document.getElementById("diceeye1").style.top = "10px";
    //         document.getElementById("diceeye1").style.left = "-5px";
    //         /*2 eye*/
    //         document.getElementById("diceeye2").style.top = "40px";
    //         document.getElementById("diceeye2").style.left = "0px";
    //         /*3 eye*/
    //         document.getElementById("diceeye3").style.top = "70px";
    //         document.getElementById("diceeye3").style.left = "10px";
    //         break;
    //     case 4:
    //          /*1 eye*/
    //          document.getElementById("diceeye1").style.top = "20px";
    //          document.getElementById("diceeye1").style.left = "10px";
    //          /*2 eye*/
    //          document.getElementById("diceeye2").style.top = "60px";
    //          document.getElementById("diceeye2").style.left = "0px";
    //          /*3 eye*/
    //          document.getElementById("diceeye3").style.top = "20px";
    //          document.getElementById("diceeye3").style.left = "10px";
    //          /*4 eye*/
    //          document.getElementById("diceeye4").style.top = "60px";
    //          document.getElementById("diceeye4").style.left = "0px";
    //         break;
    //     case 5:
    //         /*1 eye*/
    //         document.getElementById("diceeye1").style.top = "10px";
    //         document.getElementById("diceeye1").style.left = "10px";
    //         /*2 eye*/
    //         document.getElementById("diceeye2").style.top = "70px";
    //         document.getElementById("diceeye2").style.left = "-10px";
    //         /*3 eye*/
    //         document.getElementById("diceeye3").style.top = "40px";
    //         document.getElementById("diceeye3").style.left = "0px";
    //         /*4 eye*/
    //         document.getElementById("diceeye4").style.top = "10px";
    //         document.getElementById("diceeye4").style.left = "10px";
    //         /*5 eye*/
    //         document.getElementById("diceeye5").style.top = "70px";
    //         document.getElementById("diceeye5").style.left = "-10px";
    //         break;
    //     case 6:
    //         /*1 eye*/
    //         document.getElementById("diceeye1").style.top = "10px";
    //         document.getElementById("diceeye1").style.left = "10px";
    //         /*2 eye*/
    //         document.getElementById("diceeye2").style.top = "40px";
    //         document.getElementById("diceeye2").style.left = "-10px";
    //         /*3 eye*/
    //         document.getElementById("diceeye3").style.top = "70px";
    //         document.getElementById("diceeye3").style.left = "-30px";
    //         /*4 eye*/
    //         document.getElementById("diceeye4").style.top = "10px";
    //         document.getElementById("diceeye4").style.left = "10px";
    //         /*5 eye*/
    //         document.getElementById("diceeye5").style.top = "40px";
    //         document.getElementById("diceeye5").style.left = "-10px";
    //         /*6 eye*/
    //         document.getElementById("diceeye6").style.top = "47px";
    //         document.getElementById("diceeye6").style.left = "30px";
    //         break;
    //     default:
    //         break;
    // }
}

document.getElementById("roll").onclick = diceRoll;
