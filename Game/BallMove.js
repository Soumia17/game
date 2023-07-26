const box=document.querySelector('.box');
const blockWid=120
const blockHi=20
// const block=document.createElement('div');
// block.classList.add('block');
// box.appendChild(block);

class Poss{
    constructor(Xdir,Ydir){
        this.bottomLeft=[Xdir,Ydir]
        this.bottomRight=[Xdir+blockWid,Ydir]
        this.topLeft=[Xdir,Ydir+blockHi]
        this.topRigh=[Xdir+blockWid,Ydir+blockHi]

    }
}
// my blocks
const blocks=[
    new Poss(10,360),
    new Poss(140,360),
    new Poss(270,360),
    new Poss(400,360),
    new Poss(530,360),
    new Poss(10,310),
    new Poss(140,310),
    new Poss(270,310),
    new Poss(400,310),
    new Poss(530,310),
    new Poss(10,260),
    new Poss(140,260),
    new Poss(270,260),
    new Poss(400,260),
    new Poss(530,260)
    
]
// creat blocks
function CreatBlocks(){
    for(let i=0;i<blocks.length;i++){
        const block=document.createElement('div');
        
        block.classList.add('block');
        block.style.left=blocks[i].bottomLeft[0]+'px'
        block.style.bottom=blocks[i].bottomLeft[1]+'px'
box.appendChild(block);
    }
}

//creat user
const possUs=[260,20]
let UserCourrentPoss=possUs
const user=document.createElement('div');
user.classList.add('user');
drawUser()
box.appendChild(user);

function drawUser(){
    user.style.left=UserCourrentPoss[0]+'px'
    user.style.bottom= UserCourrentPoss[1]+'px'
}

//move user

function moveUser(e){
    switch(e.key){
        case 'ArrowLeft':
            
            if(UserCourrentPoss[0]>8){
                UserCourrentPoss[0] -=12
                drawUser()
            }
           
           break;
           case 'ArrowRight':
            
            if(UserCourrentPoss[0]<540){
                UserCourrentPoss[0] +=12
                drawUser()
            }
           
           break;

        
    }
}
document.addEventListener('keydown',moveUser)

//creat ball
const possball=[310,50]
let BallcuirrentPoss=possball
const ball=document.createElement('div');
ball.classList.add('ball');
DrawBall()
box.appendChild(ball);
//draw ball
function DrawBall() {
    ball.style.left=BallcuirrentPoss[0]+'px'
    ball.style.bottom= BallcuirrentPoss[1]+'px'  
}

//move ball

let Xmove=2
let Ymove=2
function moveBall(){
    chekInterval()
   
    BallcuirrentPoss[0]+=Xmove
    BallcuirrentPoss[1]+=Ymove
    DrawBall()
    ChekForUser()
    checkBloks()
}
//chekInterval
function chekInterval(){
    if(BallcuirrentPoss[0]>650 ){
        changeDerction()
    }else
    if( BallcuirrentPoss[1]>380){
        changeDerction()
    }else
    if( BallcuirrentPoss[0]<0){
        changeDerction()
    }else
    if(BallcuirrentPoss[1]<0){
document.querySelector('.GameOver').textContent="gameOver";
window.clearInterval(timer);
    }

}
//Check for bloks
function checkBloks(){
    for(let i=0;i<blocks.length;i++){
        if(
            BallcuirrentPoss[0]>blocks[i].bottomLeft[0] &&  BallcuirrentPoss[0]<blocks[i].bottomRight[0] && 
            BallcuirrentPoss[1]+20>blocks[i].bottomLeft[1] &&  BallcuirrentPoss[1]<blocks[i].topLeft[1] 
 
              
              ){

                  
                  const allBloks=Array.from(document.querySelectorAll('.block'))
                  allBloks[i].classList.remove('block')
                  blocks.slice(i,1)
                  changeDerction()
          }  
    }
}
//chek for user
function ChekForUser(){
    if(
      BallcuirrentPoss[0]>UserCourrentPoss[0] &&  BallcuirrentPoss[0]<UserCourrentPoss[0]+120 && 
      BallcuirrentPoss[1]>UserCourrentPoss[1] &&  BallcuirrentPoss[1]<UserCourrentPoss[1]+20
        
        ){
            changeDerction()
    }
}
//change derction
function changeDerction(){
if(Xmove===2 &&Ymove===2){
    Ymove=-2
    return
}
if(Xmove===2 &&Ymove===-2){
    Xmove=-2
    return
}if(Xmove===-2 &&Ymove===-2){
    Ymove=2
    return
}

if(Xmove===-2 &&Ymove===2){
    Xmove=2
    return
}
}

//call function
CreatBlocks()
let timer=setInterval(moveBall,30)