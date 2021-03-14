let time = 8;
let currentWord;
let interID;
let wordIdx;
let score = 0;
let reward = 5;

function terminateGame(){
  clearInterval(interID);
  $(".game__input").attr("disabled", "true");
  $(".game__terminated span").text(score);
  $(".game__terminated").css("visibility", "visible");
  $(".resetBtn").css("visibility", "visible");
}

function decreTime(){
  time -= 1;
  
  const timerText = 
        time < 10 ? `0${time}` : `${time}`;
  
  $(".game__timer").text(timerText)
  
  if(time == 0){
    terminateGame()
  }
}

function refreshWord(){
  wordIdx = parseInt(Math.random() * words.length);
  currentWord = words[wordIdx]
  $(".game__word").text(words[wordIdx])
}

function compareWord(){
  const typedWord = $(".game__input").val();

  if(currentWord == typedWord){
    time += reward;
    score++;
    $(".game__input").val("");
    $(".game__score span").text(score);
    refreshWord()
    
    if(score % 2 == 0 && reward > 1){
      reward -= 1;
    }
    
  }
}

function gameStart(){
  $('.ingame').show();
  $('.ready').hide();
  $(".game__terminated").css("visibility", "hidden");
  $(".resetBtn").css("visibility", "hidden");
  interID = setInterval(decreTime, 1000);
  refreshWord()
}

function gameReset(){
  time = 8;
  $(".game__input").removeAttr("disabled");
  $(".game__terminated").css("visibility", "hidden");
  $(".resetBtn").css("visibility", "hidden");
  interID = setInterval(decreTime, 1000);
  refreshWord()
}

$(document).ready(function(){
  $(".startBtn").click(gameStart);
  $(".resetBtn").click(gameReset);
  $(".game__input").keyup(function(e){
    compareWord();
  })
})