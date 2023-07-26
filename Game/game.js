const rends=document.querySelectorAll('.rend');
const rndId=document.querySelector('.bl');
const score=document.getElementById('score');
const timer=document.getElementById('timer');
let Number;
let count=0;
let time=60;
function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min)) + min; // You can remove the Math.floor if you don't want it to be an integer
}
function rndm(){
    
    
     rends.forEach(box => {    
        box.classList.remove('bl');
      });
      
    var theRandomNumber = randomNum(1,9);
    document.getElementById(theRandomNumber).classList.add('bl');
    Number= document.getElementById(theRandomNumber).id;
   
}
let hrt;
function reaptRend(){
    hrt= setInterval(rndm,500);
}
function timee(){
    if(time==0){
        clearInterval(hrt);
        alert('Game Over!! , your Score  is '+count);
return;
    }
    time--;
    timer.textContent=time;
}
setInterval(timee,800);
rends.forEach(scoreUp => {    
    scoreUp.addEventListener('mousedown',()=>{
        if(scoreUp.id==Number){
           count++;
           score.textContent=count;
       


        }
    })
  });
reaptRend();