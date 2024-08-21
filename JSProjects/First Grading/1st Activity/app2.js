
//2. SALES PREDICTION
const btn1 = document.getElementById("btn1")//gumagamit ng const kasi hindi siya maiiba
btn1.addEventListener("click", () =>{
    //populate variables
    let sales = document.getElementById("sales").value
    let real = sales*0.23
    

    let x = `Your profit that will be made from ${sales} is ${real}`
    document.getElementById("output").innerHTML = x


} )