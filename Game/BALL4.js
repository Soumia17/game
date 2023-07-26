const divs =document.querySelectorAll('.cont div')
let playerTurn=1;
//function checkWin()
function checkWin(){
    for(let i=0;i<divs.length;i++){
        
    }
}
for(let i=0;i<divs.length;i++){
    divs[i].addEventListener('click',()=>{
        if(playerTurn==1 && !divs[i].classList.contains("taken")){
            divs[i].classList.add("player-One")
            divs[i].classList.add("taken")
            checkWin()
            playerTurn=2;
        }else
        if(playerTurn==2 && !divs[i].classList.contains("taken")){
            divs[i].classList.add("player-Two")
            divs[i].classList.add("taken")
            checkWin()
            playerTurn=1;
        }
    })
}