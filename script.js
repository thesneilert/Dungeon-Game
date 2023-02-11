// -------------- MODEL ---------------------------------------------------------------------------------------------------
const appPicture = document.getElementById("appPicture")
const grid = document.getElementById("grid");

const map = [    
    ["A1","A2","A3","A4"],
    ["B1", "" ,"B3", "" ],
    ["C1","C2","C3", "" ]
];

var currentRoom = [0,0]; //[up-down,right-left]
var currentRoomName = map[currentRoom[0]][currentRoom[1]];
var currentExitArray = [/*N*/false,/*S*/false,/*W*/false,/*E*/false]; //checks for exits
var exitArray = ['north', 'south', 'west', 'east'] //name the exitName
var currentExitAmount = 0;
var characterPosition = [11,0]; //[up-down,right-left]  (RN:371,0  LN:11,0  RS:371,300  LS:11,300)
var currentGoldAmount = 0;
var currentHealthAmount = 100;



// -------------- VIEW ------------------------------------------------------------------------------------------------------
//rendering the background
checkForExit()
renderDungeon()
function renderDungeon(){
    appPicture.innerHTML = /*html*/`
    <img src="assets/dungeon/dungeon.png"/>
    `;
    for (let i = 0; i < currentExitArray.length; i++){
        if (currentExitArray[i] == true){
            let exitName = exitArray[i];
            appPicture.innerHTML += /*html*/`
            <img class="${exitName}-exit" src="assets/dungeon/${exitName}.png"/>
            `;
        }
    }
}
//check what exits is available
function checkForExit(){
    //north
    if (currentRoom[0]>0 && map[currentRoom[0]-1][currentRoom[1]]!=""){
        currentExitArray[0] = true
        currentExitAmount ++;
    }
    else{
        currentExitArray[0] = false
    }
    //south
    if (currentRoom[0]<map.length -1 && map[currentRoom[0]+1][currentRoom[1]]!=""){
        currentExitArray[1] = true
        currentExitAmount ++;
    }
    else{
        currentExitArray[1] = false
    }
    //west
    if (currentRoom[1]>0 && map[currentRoom[0]][currentRoom[1]-1]!=""){
        currentExitArray[2] = true
        currentExitAmount ++;
    }
    else{
        currentExitArray[2] = false
    }
    //east
    if (currentRoom[1]<map[currentRoom[0]].length -1 && map[currentRoom[0]][currentRoom[1]+1]!=""){
        currentExitArray[3] = true
        currentExitAmount ++;
    }
    else{
        currentExitArray[3] = false
    }
}

//render the text in appText
renderText()
function renderText(){
    appText.innerHTML += /*html*/`
    You have entered a new dungeon room. <br>The room has ${currentExitAmount} exits. Choose one to proceed.
        `;
}

//render the character asset "character_south.png"
renderCharacter()
function renderCharacter(){
    grid.innerHTML += /*html*/`
    <img id="character" src="assets/character/character_south.png"/>
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

//render stats in appStats
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



// -------------- CONTROLLER ---------------------------------------------------------------------------------------------------
//Controller for moving the character with keyboard arrowkeys
characterController()
function characterController() {
    document.getElementById("character").style.top = characterPosition[1] + "px";
    document.getElementById("character").style.left = characterPosition[0] + "px";
  
    document.addEventListener("keydown", (event) => {
        if (event.key === "ArrowDown") {
        characterPosition[1] += 15;
        showDebugWindow()
      } if (event.key === "ArrowUp") {
        characterPosition[1] -= 15;
        showDebugWindow()
      } if (event.key === "ArrowLeft") {
        characterPosition[0] -= 15;
        showDebugWindow()
      } if (event.key === "ArrowRight") {
        characterPosition[0] += 15;
        showDebugWindow()
      }
  
      document.getElementById("character").style.top = characterPosition[1] + "px";
      document.getElementById("character").style.left = characterPosition[0] + "px";
    });
  }
  



// -------------- DEBUG -------------------------------------------------------------------------------------------------------
//use this to see what room your in to debug
showDebugWindow() //turn this on or off to view debug window
function showDebugWindow(){
    appDebug.innerHTML = /*html*/`
    You are in room ${currentRoomName}. <br>
    The room map array is ${currentRoom}.<br>
    The room has ${currentExitAmount} exits.<br>
    The character postion is ${characterPosition}.<br>
    <p style="font-size: 12px; color:#569459;">This window is intended for debugging <br>and is not a part of the final product.</p>
    `;
}