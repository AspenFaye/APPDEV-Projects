
//1. PERSONAL INFORMATION
const btn1 = document.getElementById("btn1")//gumagamit ng const kasi hindi siya maiiba
btn1.addEventListener("click", () =>{
    //populate variables
    let name = document.getElementById("name").value
    let address = document.getElementById("address").value
    let telephone = document.getElementById("telephone").value
    let major = document.getElementById("major").value

    let x = `Hello! ${name}, I see that you are from ${address} and you are also pursuing your degree ${major} and you can be contacted using ${telephone}.`
    document.getElementById("output").innerHTML = x
    //pashortcut nanaman ni sir (CTRL+ALT+ARROW DOWN)




} )


//2. SALES PREDICTION
const btn2 = document.getElementById("btn2")
btn2.addEventListener("click", () =>{
    //populate variables
    let sales = document.getElementById("sales").value
    let real = sales*0.23
    
    let x = `Your profit that will be made from ${sales} is ${real}`
    document.getElementById("sales").innerHTML = x

} )


