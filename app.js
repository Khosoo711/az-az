// Тоглогчийн ээлжийг хадгалах хувьсагч нэгдүгээр тоглогч 0, хоёрдугаар тоглогч 1;
var ActivePlayer = 1;

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
document.querySelector(".btn-roll").addEventListener("click", function() {
  var Dice = Math.floor(Math.random() * 6) + 1;
  dicedom.style.display = "block";
  dicedom.src = "dice-" + Dice + ".png";
  //   alert("Шоо буулаа:" + Dice);
});

console.log("Шоо ингэж буулаа:" + Dice);
