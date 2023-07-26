let grid =document.querySelector('.grid')
let nowTodraw 

//add divs to grid

for(let i=0;i<225;i++){
    const squer=document.createElement('div')
    grid.appendChild(squer)
}

//draw alient
const squer=document.querySelectorAll('.grid div')
let alietPossition=[2,3,4,5,6,7,8,9,10,11,
                    17,18,19,20,21,22,23,24,25,26,
                    32,33,34,35,36,37,38,39,40,41]

 function drawAlient(){
    for(let i=0;i<alietPossition.length;i++){
        // if(!nowTodraw.includes(i))
        squer[alietPossition[i]].classList.add('alient')
    
    }
 }
 //removealient
 function RemoveAlient(){
    for(let i=0;i<alietPossition.length;i++){
        
        squer[alietPossition[i]].classList.remove('alient')
    
    }
 }
 
 drawAlient()
 //AddPlayer
 let playerPossition=202
 squer[playerPossition].classList.add('player')

 //movePlayer

 function movePlayer(e){
    
    squer[playerPossition].classList.remove('player')
    switch(e.key){
        case 'ArrowLeft':
            if(playerPossition %15 !=0){
                playerPossition-=1
            }


        break
        case 'ArrowRight':
            if(playerPossition %15 <14){
                playerPossition+=1
            }


        break
    }
    squer[playerPossition].classList.add('player')
 }

 document.addEventListener('keydown',movePlayer)
 //move alient
let derection=1
let goingleft=true;
let idMove

 function moveAlient(){
    RemoveAlient()
  
    if(alietPossition[0]%15 ===0 && !goingleft){
        for(let i=0;i<alietPossition.length;i++){
            // squer[alietPossition[i]].classList.remove('alient')
            alietPossition[i]+=14
            goingleft=true
            derection=1
        }
    }else
    if(alietPossition[alietPossition.length-1]%15 ===14 && goingleft){
        for(let i=0;i<alietPossition.length;i++){
            // squer[alietPossition[i]].classList.remove('alient')
            alietPossition[i]+=16
            goingleft=false
            derection=-1
        }
    }
    for(let i=0;i<alietPossition.length;i++){
        // squer[alietPossition[i]].classList.remove('alient')
        alietPossition[i]+=derection
        
    }

    for(let i=0;i<alietPossition.length;i++){
       
       
        if(alietPossition[i]==playerPossition){
            clearInterval(idMove)
        }else
        if(alietPossition[i]>squer.length){
            // alert("game over")
            clearInterval(idMove)
        }
       
            }
    drawAlient()
    
 }
 idMove=setInterval(moveAlient,100)
 //add lazer


 let layzerCurientPossition
 function layzer(e){
    
     layzerCurientPossition=playerPossition 
    function moveLazer(){
       
squer[layzerCurientPossition].classList.remove('layzer')




 if(layzerCurientPossition>=0)
 layzerCurientPossition-=15

    

 squer[layzerCurientPossition].classList.add('layzer')  

 if(squer[layzerCurientPossition].classList.contains('alient')){
    // const alint=alietPossition.indexOf(layzerCurientPossition)
    // nowTodraw.push(alint)
    squer[layzerCurientPossition].classList.remove('layzer')
}
}

    switch(e.key){
    case 'ArrowUp':  
       setInterval(moveLazer,100)
       
        break
    }
   

 }
 document.addEventListener('keydown',layzer)