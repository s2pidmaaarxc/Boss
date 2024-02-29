const container = document.querySelector(".container");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const play = document.getElementById("play");
 
   function playMusic() {
      const audio = new Audio("./src/pasilyo.mp4");
     audio.play()
   }
   play.addEventListener("click", playMusic);

yesBtn.addEventListener("click",() => {
  question.innerHTML = "I love you more po!";
  gif.src = "./src/love.gif";
});

noBtn.addEventListener("mouseover",changePosition);
 function changePosition() {
  
  const randomX = Math.floor(Math.random() * 500)+1;
  const randomY = Math.floor(Math.random() * 500)+1;
  
  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
  
  gif.src = "./src/sad.gif";
  question.innerHTML = "Di moko love? :<";
 }