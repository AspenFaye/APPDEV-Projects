//set initial value for our count variable
//hindi gagamitin const or var kasi nababago 
let count = 0;
//select the value buttons
const value = document.querySelector('#value')//papalitan natin yung span ID
const btns = document.querySelectorAll('.btn')//all kasi seselect dapat lahat ng buttons
//console.log(btns)
btns.forEach((btn) =>{
    //referencing only a single button here
    //console.log(btn)
    btn.addEventListener('click', (e) =>{ //nirereference natin yung singular button (para hindi mo maclick si increase and decrease at the same time)
        //console.log(e.currentTarget.classList)
        const styles = e.currentTarget.classList
        if(styles.contains('decrease')){
            count--
        }//decreases by 1
        else if(styles.contains('decreaseByFive')){
            count-=5
        }
        else if(styles.contains('increase')){
            count++
        }//increases by 1
        else if(styles.contains('increaseByFive')){
            count+=5
        }
        else if(styles.contains('random')){
            count=Math.floor(Math.random()*1000)-500
        }
        else{
            count = 0
        }
        //style feedback for my count variable
        if(count > 0){
            value.style.color = "green"
        }
        if(count < 0){
            value.style.color = "red"
        }
        if(count == 0){
            value.style.color = "black"
        }
        value.textContent = count
    })
})