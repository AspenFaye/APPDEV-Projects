
//4. MILES-PER-GALLON
const btn1 = document.getElementById("btn1")
btn1.addEventListener("click", () =>{
    //populate variables
    let miles = document.getElementById("miles").value
    let gas = document.getElementById("gas").value
    let mpg = miles/gas
    

    let x = `Your MPG is ${mpg}`
    document.getElementById("output").innerHTML = x


} )