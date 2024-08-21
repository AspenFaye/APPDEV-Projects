
//5. CELSIUS TO FAHRENHEIT
const btn1 = document.getElementById("btn1")
btn1.addEventListener("click", () =>{
    //populate variables
    let celsius = document.getElementById("celsius").value
    let fahrenheit = (celsius *(9/5)) + 32
    

    let x = `The converted fahrenheit is ${fahrenheit}`
    document.getElementById("output").innerHTML = x


} )