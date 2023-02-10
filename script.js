// ----- MODEL -----
const appPicture = document.getElementById("appPicture")

const map = [    
    ["A1","A2","A3","A4"],
    ["B1", "" ,"B3", "" ],
    ["C1","C2","C3", "" ]
];

var currentRoom = [0,0]; //[up-down,right-left]
var currentExitAmount = 0;
var currentRoomName = map[currentRoom[0]][currentRoom[1]];
var currentGoldAmount = 0;
var currentHealthAmount = 100;



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
            currentExitAmount ++;
    }
    else{

    }
    //south
    if (currentRoom[0]<map.length -1 && map[currentRoom[0]+1][currentRoom[1]]!=""){
        appPicture.innerHTML += /*html*/`
        <img class="south-exit" src="assets/dungeon/south.png"/>
        `;
        currentExitAmount ++;
    }
    else{

    }
    //west
    if (currentRoom[1]>0 && map[currentRoom[0]][currentRoom[1]-1]!=""){
        appPicture.innerHTML += /*html*/`
        <img class="west-exit" src="assets/dungeon/west.png"/>
        `;
        currentExitAmount ++;
    }
    else{

    }
    //east
    if (currentRoom[1]<map[currentRoom[0]].length -1 && map[currentRoom[0]][currentRoom[1]+1]!=""){
        appPicture.innerHTML += /*html*/`
        <img class="east-exit" src="assets/dungeon/east.png"/>
        `;
        currentExitAmount ++;
    }
    else{

    }
}

renderText()
function renderText(){
    appText.innerHTML += /*html*/`
    You are in room ${currentRoomName}. <br>The room has ${currentExitAmount} exits. <br>Choose one to proceed.
        `;
}


//always show 4 digits in statsmenu (0001, 0011, 0111, 1111)
if (currentGoldAmount >= 0 && currentGoldAmount < 10) {
    currentGoldAmount = "000" + currentGoldAmount;
} else if (currentGoldAmount >= 10 && currentGoldAmount < 100) {
    currentGoldAmount = "00" + currentGoldAmount;
} else if (currentGoldAmount >= 100 && currentGoldAmount < 1000) {
    currentGoldAmount = "0" + currentGoldAmount;
}

if (currentHealthAmount >= 0 && currentHealthAmount < 10) {
    currentHealthAmount = "00" + currentHealthAmount;
} else if (currentHealthAmount >= 10 && currentHealthAmount < 100) {
    currentHealthAmount = "0" + currentHealthAmount;
}

renderStats()
function renderStats(){
    appStats.innerHTML += /*html*/`
        <div id="appStats">
            <div class="stats-container">
                <img class="gold-coin-stats" src="assets/stats_menu/gold_coin_0.png"/>
                <span class="text-stats-gold">${currentGoldAmount}</span>
            </div>
            <div class="stats-container">
                <img class="health-stats" src="assets/stats_menu/health_100.png"/>
                <span class="text-stats-health">${currentHealthAmount}</span>
            </div>
        </div>
        `;
}



// ----- CONTROLLER -----
