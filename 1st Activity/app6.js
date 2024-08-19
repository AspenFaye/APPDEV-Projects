
//6. COOKIE CALORIES
const btn1 = document.getElementById("btn1")
btn1.addEventListener("click", () =>{
    //populate variables
    const cookiesPerBag = 40
    const servingsPerBag = 10
    const caloriesPerServing = 300
    const cookiesPerServing = cookiesPerBag/servingsPerBag
    let caloriesPerCookie = caloriesPerServing/cookiesPerServing


    let cookies = document.getElementById("cookies").value

    let caloriesFromCookies = cookies*caloriesPerCookie
    

    let x = `The total calories consume is ${caloriesFromCookies}`
    document.getElementById("output").innerHTML = x


} )