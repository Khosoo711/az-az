// Тоглогчийн ээлжийг хадгалах хувьсагч нэгдүгээр тоглогч 0, хоёрдугаар тоглогч 1;
var ActivePlayer = 0;

// Тоглогчийн цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];

// Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore = 0;

// 1-6 ийн хооронд шооны буусан талыг хадгалах хувьсагч
var Dice = Math.floor(Math.random() * 6) + 1;
//<div class="player-score" id="score-1">72</div>
// ehleh
document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";
var dicedom = document.querySelector(".dice");
dicedom.style.display = "none";

// shoog shiddeg bolgoh...( event list ashiglav).........
document.querySelector(".btn-roll").addEventListener("click", function() {
  var Dice = Math.floor(Math.random() * 6) + 1;
  dicedom.style.display = "block";
  //   buusan shoonii toog  web dr gargah...
  dicedom.src = "dice-" + Dice + ".png";
  //   alert("Шоо буулаа:" + Dice);
  if (Dice !== 1) {
    roundScore = roundScore + Dice;
    document.getElementById("current-" + ActivePlayer).textContent = roundScore;
  } else {
    roundScore = 0;
    document.getElementById("current-" + ActivePlayer).textContent = 0;

    ActivePlayer === 0 ? (ActivePlayer = 1) : (ActivePlayer = 0);

    // ulaan tsegiig shiljuuleh
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");

    //   if(ActivePlayer === 0) {
    //       ActivePlayer = 1;

    //   }else { ActivePlayer = 0;}
    diceDom.style.display = "none";
  }
});

// console.log("Шоо ингэж буулаа:" + Dice);
