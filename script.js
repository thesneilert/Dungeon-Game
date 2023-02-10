// ----- MODEL -----
const appPicture = document.getElementById("appPicture")

var currentRoom = [1,0]

const map = [
    ["a1","a2","a3","a4"],
    ["b1","","b3",""],
    ["c1","c2","b3",""]
]


// ----- VIEW -----
//rendering the background
renderDungeonBg()
function renderDungeonBg(){
    appPicture.innerHTML = /*html*/`
    <img src="assets/dungeon/dungeon.png">
    `;
}

//rendering the exits
renderExit()
function renderExit(){
    //north
    if (map[currentRoom[0]-1][currentRoom[1]]!="" && currentRoom[0]>0){
        appPicture.innerHTML += /*html*/`
            <img class="north-exit" src="assets/dungeon/north.png">
            `;
    }
    else{

    }
    //south
    if (map[currentRoom[0]+1][currentRoom[1]]!="" && currentRoom[0]<map.length){
        appPicture.innerHTML += /*html*/`
        <img class="south-exit" src="assets/dungeon/south.png">
        `;
    }
    else{

    }
    //west
    if (map[currentRoom[0]][currentRoom[1]-1]!=""){
        appPicture.innerHTML += /*html*/`
        <img class="west-exit" src="assets/dungeon/west.png">
        `;
    }
    else{

    }
    //east
    if (map[currentRoom[0]][currentRoom[1]+1]!=""){
        appPicture.innerHTML += /*html*/`
        <img class="east-exit" src="assets/dungeon/east.png">
        `;
    }
    else{

    }
}


// ----- CONTROLLER -----