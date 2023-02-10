// ----- MODEL -----
const appPicture = document.getElementById("appPicture")

var currentRoom = [0,0]

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
    <img src="assets/dungeon/dungeon.png"/>
    `;
}

//rendering the exits
renderExit()
function renderExit(){
    //north
    if (currentRoom[0]>0 && map[currentRoom[0]-1][currentRoom[1]]!=""){
        appPicture.innerHTML += /*html*/`
            <img class="north-exit" src="assets/dungeon/north.png"/>
            `;
    }
    else{

    }
    //south
    if (currentRoom[0]<map.length -1 && map[currentRoom[0]+1][currentRoom[1]]!=""){
        appPicture.innerHTML += /*html*/`
        <img class="south-exit" src="assets/dungeon/south.png"/>
        `;
    }
    else{

    }
    //west
    if (currentRoom[1]>0 && map[currentRoom[0]][currentRoom[1]-1]!=""){
        appPicture.innerHTML += /*html*/`
        <img class="west-exit" src="assets/dungeon/west.png"/>
        `;
    }
    else{

    }
    //east
    if (currentRoom[1]<map[currentRoom[0]].length -1 && map[currentRoom[0]][currentRoom[1]+1]!=""){
        appPicture.innerHTML += /*html*/`
        <img class="east-exit" src="assets/dungeon/east.png"/>
        `;
    }
    else{

    }
}


// ----- CONTROLLER -----