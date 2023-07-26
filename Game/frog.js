const way =document.querySelectorAll('.grid div')
const frog=document.querySelector('.frog')
let cuirrentindx=76
const moveRit=document.querySelectorAll('.moveRit')
const moveLft=document.querySelectorAll('.moveLft')
const carRit=document.querySelectorAll('.carRit')
const carLft=document.querySelectorAll('.carLft')

// function move frog

function moveFrog(e){
    way[cuirrentindx].classList.remove('frog')
    switch(e.key){
        
        case 'ArrowLeft':
          if(cuirrentindx% 9!==0) cuirrentindx-=1
          break
          case 'ArrowRight':
          if(cuirrentindx %9< 8) cuirrentindx+=1
          break
          case 'ArrowUp':
          if(cuirrentindx -9>=0) cuirrentindx-=9
          break
          case 'ArrowDown':
          if(cuirrentindx+9< 81) cuirrentindx+=9
          break

    }

    way[cuirrentindx].classList.add('frog')
}
//listner to move frog
window.addEventListener('keydown',moveFrog)

//function fove left right
let i
function MoveRit(){
for(i=0;i<moveRit.length;i++){
    if(moveRit[i].classList.contains('L1')){
        moveRit[i].classList.remove('L1')
        moveRit[i].classList.add('L2')
    }else
    if(moveRit[i].classList.contains('L2')){
        moveRit[i].classList.remove('L2')
        moveRit[i].classList.add('L3')
    }else
    if(moveRit[i].classList.contains('L3')){
        moveRit[i].classList.remove('L3')
        moveRit[i].classList.add('L4')
    }else
    if(moveRit[i].classList.contains('L4')){
        moveRit[i].classList.remove('L4')
        moveRit[i].classList.add('L5')
    }else
    if(moveRit[i].classList.contains('L5')){
        moveRit[i].classList.remove('L5')
        moveRit[i].classList.add('L1')
    }

}
}
//function move Rigth 
function MoveLft(){
    for(i=0;i<moveLft.length;i++){
        if(moveLft[i].classList.contains('L1')){
            moveLft[i].classList.remove('L1')
            moveLft[i].classList.add('L5')
        }else
        if(moveLft[i].classList.contains('L2')){
            moveLft[i].classList.remove('L2')
            moveLft[i].classList.add('L1')
        }else
        if(moveLft[i].classList.contains('L3')){
            moveLft[i].classList.remove('L3')
            moveLft[i].classList.add('L2')
        }else
        if(moveLft[i].classList.contains('L4')){
            moveLft[i].classList.remove('L4')
            moveLft[i].classList.add('L3')
        }else
        if(moveLft[i].classList.contains('L5')){
            moveLft[i].classList.remove('L5')
            moveLft[i].classList.add('L4')
        }
    
    }
    }

    //functon move car to rit
    function MoveCarRit(){
        for(i=0;i<carRit.length;i++){
            if(carRit[i].classList.contains('C1')){
                carRit[i].classList.remove('C1')
                carRit[i].classList.add('C2')
            }else
            if(carRit[i].classList.contains('C2')){
                carRit[i].classList.remove('C2')
                carRit[i].classList.add('C3')
            }else
            if(carRit[i].classList.contains('C3')){
                carRit[i].classList.remove('C3')
                carRit[i].classList.add('C1')
          
                
        
            }}
    }
    //function MoveCarToLft
    function MoveCarRLft(){
        for(i=0;i<carLft.length;i++){
            if(carLft[i].classList.contains('C1')){
                carLft[i].classList.remove('C1')
                carLft[i].classList.add('C3')
            }else
            if(carLft[i].classList.contains('C2')){
                carLft[i].classList.remove('C2')
                carLft[i].classList.add('C1')
            }else
            if(carLft[i].classList.contains('C3')){
                carLft[i].classList.remove('C3')
                carLft[i].classList.add('C2')
          
                
        
            }}
    }
    //function lose

    function loseWin(){
   
    if(way[cuirrentindx].classList.contains('C1')  ||
    way[cuirrentindx].classList.contains('L4') ||
    way[cuirrentindx].classList.contains('L5') 
    ){
        document.querySelector('.lostWIN').textContent="Ooops!! you lose"
        clearInterval(timerid)
        window.removeEventListener('keydown',moveFrog)
    
   }
   if(way[cuirrentindx].classList.contains('finesh') ){
    document.querySelector('.lostWIN').textContent="You wiiin !"
    clearInterval(timerid)
    window.removeEventListener('keydown',moveFrog)
   }
    }
    //function moveWAYS && check 
    function move(){
        MoveRit()
        MoveLft()
        MoveCarRit()
        MoveCarRLft()
       
    }
    let timerid
    timerid=setInterval(move,1000)
    setInterval( loseWin,1)