const colors = ["It is not death that a man should fear, but he should fear never beginning to live. - Marcus Aurelius",
"The wise man is not swayed by flattery or praise. -Panaetius",
 "If I lack awareness, then why should I care what happens to me when I am dead? - Diogenes",
  "Follow where reasons leads. - Zeno of Citium",
   "Ignorant men differ from beasts only in their figure. - Cleanthes",
    "Cease to hope, and you will cease to fear. - Hecato",]
    
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

