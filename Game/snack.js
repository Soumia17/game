const divs=document.querySelectorAll('.grid div')

cuirentSnackPoss=0;
let rendomPoss=28
//automove snak
// function autoMoveSnack(){
    
//     if(cuirentSnackPoss%20<19){
//         divs[cuirentSnackPoss].classList.remove('snack')
//         cuirentSnackPoss+=1
//         divs[cuirentSnackPoss].classList.add('snack')
//     }else{
//         divs[cuirentSnackPoss].classList.remove('snack')
//         cuirentSnackPoss=0;
//     }
    
// }

//rendom aple
function randomNum() {
    divs[rendomPoss].classList.remove('apple')
    do{
      rendomPoss= Math.floor(Math.random() * (400)) + 0
    }while(divs[rendomPoss].classList.contains('snack'))
    divs[rendomPoss].classList.add('apple')
	
}
//move snack

function MoveSnack(e){
    divs[cuirentSnackPoss].classList.remove('snack')
    switch(e.key){
        
        case 'ArrowLeft':
          if(cuirentSnackPoss% 20!==0) {
           if(divs[cuirentSnackPoss])
            cuirentSnackPoss-=1
            eat()
          }
          

          break
          case 'ArrowRight':
          if(cuirentSnackPoss %20< 19){
            
            cuirentSnackPoss+=1
            eat()
          } 
          break
          case 'ArrowUp':
          if(cuirentSnackPoss -20>=0) {
           
            cuirentSnackPoss-=20
            eat()
          }
          break
          case 'ArrowDown':
          if(cuirentSnackPoss+20< 400) {
            
            cuirentSnackPoss+=20
            eat()
          }
          break

    }

    divs[cuirentSnackPoss].classList.add('snack')
}
window.addEventListener('keydown',MoveSnack)
//check to eat
let snackBody= []
snackBody.push(cuirentSnackPoss)
let i
let hie=20
function eat(){
    
    if(divs[cuirentSnackPoss].classList.contains('apple')){
     
      for(i=0;i<divs.length;i++){
        if(divs[i+1].classList.contains('snack')){
          divs[i].classList.add('snack')
          snackBody.push(i)
        }
      }
      randomNum() 
        divs[cuirentSnackPoss].classList.remove('apple')
   
   
        hie+=20        
    }
   
}