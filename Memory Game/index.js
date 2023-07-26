const emojis=["😊","😊","😍","😍","🐹","🐹","🐒","🐒","🍕","🍕","🍩","🍩","🌼","🌼","🌏","🌏","🌧","🌧","🐾","🐾"]
var shuf_emojis = emojis.sort(()=>(Math.random() > .5) ? 2 : -1)

document.querySelector('.reset').addEventListener('click',()=>{
    window.location.reload()
})


for(i=0;i<shuf_emojis.length;i++){
    let box = document.createElement('div')
    box.className='item'
    box.innerHTML=shuf_emojis[i]

    
    box.onclick=function(){
        this.classList.add('boxOpen')
        setTimeout(function(){
            if(document.querySelectorAll('.boxOpen').length > 1){
                if(document.querySelectorAll('.boxOpen')[0].innerHTML ==
                document.querySelectorAll('.boxOpen')[1].innerHTML){

                    document.querySelectorAll('.boxOpen')[0].classList.add('boxMatch')
                    document.querySelectorAll('.boxOpen')[1].classList.add('boxMatch')

                    document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen')
                    document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen')

                    if(document.querySelectorAll('.boxMatch').length == shuf_emojis.length)
                    alert('you win')
                }else{
                    document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen')
                    document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen')
                }
                
            }
        },500)
    }
    document.querySelector('.game').appendChild(box)
}