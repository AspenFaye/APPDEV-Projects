
//7. MALE AND FEMALE
const btn1 = document.getElementById("btn1")
btn1.addEventListener("click", () =>{
    //populate variables
    let males = document.getElementById("males").value
    let females = document.getElementById("females").value
    let classes = parseInt(males)+parseInt(females)
    let percentageMale = (males/classes)*100
    let percentageFemale = (females/classes)*100

    let x = `The percentage of males is ${percentageMale} while the percentage of females is ${percentageFemale}`
    document.getElementById("output").innerHTML = x


} )