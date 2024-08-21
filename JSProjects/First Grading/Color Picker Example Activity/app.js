const colors = ["green", "red", "rgba(133, 122, 200)", "f15025"]
const btn = document.getElementById("btn")
const color = document.querySelector(".color") //to reference yung colors natin AND to change the text of our query values

//FUNCTION to change the colors of the Background
btn.addEventListener("click", () =>{
    //target the body from the HTML
    console.log(document.body)
    const randomNumber = getRandomNumber()
    document.body.style.backgroundColor = colors[randomNumber] //to reference the background color of our body
    color.textContent = colors[randomNumber]
})

getRandomNumber = () =>{
    //for generating a random number...
    return Math.floor(Math.random() * colors.length)
}