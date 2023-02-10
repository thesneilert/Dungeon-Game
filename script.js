// ----- MODEL -----
const appPicture = document.getElementById("appPicture")

var currentRoom = [1,0]

const map = [
    ["b","c","d","j"],
    ["a","ø","e",""],
    ["h","g","f",""]
]


// ----- VIEW -----
//rendering the background
renderDungeonBg()
function renderDungeonBg(){
    appPicture.innerHTML = /*html*/`
    <img src="assets/dungeon/dungeon.png"></img>
    `;
}

//rendering the exits
renderExit()
function renderExit(){
    //North
    if (map[currentRoom[0]-1][currentRoom[1]]!=""){
        appPicture.innerHTML += /*html*/`
            <img class="north-exit" src="assets/dungeon/north.png"></img>
            `;
    }
    else{

    }
    //South
    if (map[currentRoom[0]+1][currentRoom[1]]!=""){
        appPicture.innerHTML += /*html*/`
        <img class="south-exit" src="assets/dungeon/south.png"></img>
        `;
    }
    else{

    }
    //West
    if (map[currentRoom[0]][currentRoom[1]-1]!=""){
        appPicture.innerHTML += /*html*/`
        <img class="west-exit" src="assets/dungeon/west.png"></img>
        `;
    }
    else{

    }
    //East
    if (map[currentRoom[0]][currentRoom[1]+1]!=""){
        appPicture.innerHTML += /*html*/`
        <img class="east-exit" src="assets/dungeon/east.png"></img>
        `;
    }
    else{

    }
}


// ----- CONTROLLER -----