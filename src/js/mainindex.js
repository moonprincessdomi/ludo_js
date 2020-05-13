/*OPEN CREATE ROOM POPUP FUNCTION*/
function openCreateRoomPopup(){
    modal.style.display = "block";
    // return new Promise((resolve, reject) => {
    //     document.getElementById("privateroomyes").onclick = e => resolve(1);
    //     document.getElementById("privateroomno").onclick = e => resolve(2);
    //     document.getElementById("createroombutton").onclick = e => resolve(3);
    // });
}

function toGameSite(){
    console.log("here");
    window.location = 'index.html';
}

var modal = document.getElementById("createroom");

document.getElementById("createnewgame").onclick = openCreateRoomPopup;
document.getElementById("createroombutton").onclick = toGameSite;