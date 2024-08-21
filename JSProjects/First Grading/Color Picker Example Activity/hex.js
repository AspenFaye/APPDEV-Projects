//hex characters involves 0-9, a-f
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
const btn = document.getElementById("btn")
const color = document.querySelector(".color")
btn.addEventListener("click", () =>{
    let hexColor = '#'
    //for loop na ito to get random stuff doon sa array
    for(let i = 0; i<6; i++){
        hexColor += hex[getRandomNumber()] //para every iteration, random ang makukuha
    }
    //to modify the background color naman
    color.textContent = hexColor
    document.body.style.backgroundColor = hexColor
})

//gagawa ulit random number generator
getRandomNumber = () =>{
    return Math.floor(Math.random() * hex.length)
}

