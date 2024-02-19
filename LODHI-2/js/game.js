//player Sections
const player_1 = document.querySelector('.player_1');
const player_2 = document.querySelector('.player_2');
//rolling the dice
const rollBtn = document.querySelector('.btn--roll');
//players score elements
let player1Score = document.querySelector('#p1Score');
let player2Score = document.querySelector('#p2Score');
//displaying the total number of wins of each user
let p1CurrentScore = document.getElementById('p1CurrentScore');
let p2CurrentScore = document.getElementById('p2CurrentScore');
//total wins storing in a variables
p1Wins = 0;
p2Wins = 0;
//targetscores
let player1Target = 0;
let p1Chance = 5;
let player2Target = 0;
let p2Chance = 5;
//total number of chances of each user
let p1TChances = document.querySelector("#player1chances");
p1TChances.innerHTML = `RollsLeft:${p1Chance}`;
let p2TChances = document.querySelector('#player2chances');
p2TChances.innerHTML = `Rollsleft:${p2Chance}`;
//player turn
let turn = 'player1';
//gameover
let gameOver = false;
//players Text
const player1Text = document.getElementById('p1Name');
const player2Text = document.getElementById('p2Name');
player1Text.classList.add('playerturn');//default User

//Dice Img
const diceImg = document.querySelector('.dice');
//hiding the dice by default
diceImg.classList.add('.hidden');

//rollbtn Script
function rollingDice(){
    if(!gameOver && p1Chance != 0 || p2Chance !=0)
    {
        const num = genarateNumbre();
        diceImg.src = `dice-${num}.png`;
        playerTurn(num);
    }
}
//click event Listener
rollBtn.addEventListener('click', rollingDice);

//genarating random Number 
function genarateNumbre(){
    return Math.trunc(Math.random()*6)+1;
}

function playerTurn(num){
    if(turn == 'player1'){
        // console.log(player1Score);
        player1Target += num;
        if(player1Target <=25){
            player1Score.innerHTML = player1Target;
        }
        // console.log(player1Target);
        p1Chance -=1;
        p1TChances.innerHTML = `RollsLeft:${p1Chance}`;
        player2Text.classList.add('playerturn');
        player1Text.classList.remove('playerturn');
    }
    if(turn == 'player2'){
        player2Target += num;
        if(player2Target <=25){
            player2Score.innerHTML = player2Target;
        }
        p2Chance -=1;
        p2TChances.innerHTML = `Rollsleft:${p2Chance}`;
        player2Text.classList.remove('playerturn');
        player1Text.classList.add('playerturn');
    }
    turn = turn==='player1'?'player2':'player1';
    // console.log(player1Score.innerHTML == 0)
    if(player1Score.innerHTML == 25||player2Score.innerHTML == 25||p1Chance ==0 ||p2Chance ==0){
        gameOver = true;
    }
    checkWin();
}

function playAgain(){
    player1Score.innerHTML = 0;
    player2Score.innerHTML = 0;
    player1Target = 0; 
    player2Target = 0;
    gameOver = false;
    p1Chance = 5;
    p2Chance = 5;
    p1TChances.innerHTML = 'RollsLeft:';
}
function checkWin(){
    if(p1Chance ==0 ){
        if( p2Chance == 0){
            if(player1Score.innerHTML>player2Score.innerHTML){
                p1Wins+=1;
                p1CurrentScore.textContent = p1Wins;
                console.log('playerone is the winner');
            }
            if(player2Score.innerHTML>player1Score.innerHTML){
                p2Wins +=1;
                p2CurrentScore.textContent = p2Wins;
                console.log('playertwo is the winner');
            }
            if(player1Score.innerHTML == player2Score.innerHTML){
                console.log('its tie');
            }
        }
    }
    
}
function restartGame(){
    // console.log('')
    location.reload();
}

    // Function to change the player name
function editNames() { 
    player1 = prompt("Change Player1 name");
    player2 = prompt("Change player2 name"); 

    document.getElementById('p1Name').innerHTML=player1;
    document.getElementById('p2Name').innerHTML=player2;
}

function checkWin(){
    if(p1Chance ==0 ){
        if( p2Chance == 0){
            if(player1Score.innerHTML>player2Score.innerHTML){
                p1Wins+=1;
                p1CurrentScore.textContent = p1Wins;
                window.alert('player01 is the winner 🏆');
            }
            if(player2Score.innerHTML>player1Score.innerHTML){
                p2Wins +=1;
                p2CurrentScore.textContent = p2Wins;
                window.alert('player02 is the winner 🏆');
            }
            if(player1Score.innerHTML == player2Score.innerHTML){
                window.alert("it's tie 👎");
            }
        }
    }
    
}

// old js  
// let active = 0;
// btnHold.addEventListener('click', function () {
// if (playing) {
// scores[activePlayer] += currentscore;
// document.getElementById(`score--${activePlayer}`).textContent =
// scores[activePlayer];
// if (scores[activePlayer] >= 20) {
// playing = false;
// diceEl.classList.add('hidden');
// document.getElementById(`score--${activePlayer}`).textContent = 'Win!🏆';
// switchPlayer();
// document.getElementById(`score--${activePlayer}`).textContent = 'Lost!👎';
// document
// .querySelector(`.player--${activePlayer}`)
// .classList.add('player--winner');
// active = activePlayer == 1 ? 0 : 1;
// document
// .querySelector(`.player--${active}`)
// .classList.add('player--active');
// } else {
// switchPlayer();
// }
// }
// });