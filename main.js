let newx=0 , newY = 0,startX = 0 ,startY = 0 
const card = document.getElementById('card')
const winning = document.getElementById("winning-card")
const wonCard = document.getElementById("won")

let winningCoordinate = {
    Y: winning.offsetTop,
    X : winning.offsetLeft,
}
console.log(winning)
// to handle the difference in the offset while zooming 
window.onresize = function(){
    winningCoordinate = {
        Y: winning.offsetTop,
        X : winning.offsetLeft,
    }   
    if (won){
        card.style.top = winningCoordinate.Y + 'px'
        card.style.left = winningCoordinate.X + 'px'
    }
}

let won = false;

card.addEventListener('mousedown',mouseDown)
function mouseDown (e){
    startX = e.clientX
    startY = e.clientY

    document.addEventListener("mousemove", mouseMove)   
    document.addEventListener("mouseup", mouseUp)   

}


function mouseMove(e){
    newX = startX - e.clientX
    newY = startY - e.clientY

    startX = e.clientX
    startY = e.clientY
console.log('offset before ' ,card.offsetTop)
// console.log('offset before ')
card.style.top= (card.offsetTop - newY)+"px"
card.style.left= (card.offsetLeft - newX)+"px"

console.log('offset after' ,card.offsetTop)
    if((card.offsetTop >= winningCoordinate.Y - 10 && card.offsetLeft <= winningCoordinate.Y + 10)  || ( card.offsetLeft >= winningCoordinate.X - 10 && card.offsetLeft<= winningCoordinate.X + 10)){
        won = true
        console.log(won)
        card.style.top = winningCoordinate.Y + 'px'
        card.style.left = winningCoordinate.X + 'px'
        document.removeEventListener('mousemove', mouseMove)
        wonCard.classList.add('show')
    }
}
function mouseUp(e){
    document.removeEventListener('mousemove', mouseMove)
}