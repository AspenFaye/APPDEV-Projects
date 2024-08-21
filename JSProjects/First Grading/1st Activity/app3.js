
//3. DISTANCE TRAVELLED
const btn1 = document.getElementById("btn1")//gumagamit ng const kasi hindi siya maiiba
btn1.addEventListener("click", () =>{
    //populate variables

    let car = 60
    let five = document.getElementById("five").value
    let eight = document.getElementById("eight").value
    let twelve = document.getElementById("twelve").value
    let fives = car*5
    let eights = car*8
    let twelves = car*12
    //let five = console.log(60*5);
    //let eight = console.log(60*8);
    //let twelve = console.log(60*12);

    let x = `At 5 hours, the car would have travelled ${fives} miles.
    At 8 hours, the car would have travelled ${eights} miles.
    At 12 hours, the car would have travelled ${twelves} miles.`
    document.getElementById("output").innerHTML = x

} )

