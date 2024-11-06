import React, {useState} from "react"
import Login from "./Login"

//contained na siya sa (props), no need to specify na (item, name, price)
export default function Shop(props) {
    //these are arrays of objects being passed to ShopItems
    let ShopItems = props.items
    const [cart, setCart] = useState([])

    function AddItem(item){
        setCart(c => [...c, item])
    }

    //function renderItems()
    //graphing our components into functional components (whatever that means)
    const renderItems = () => {
        return(
            ShopItems.map((item) => {
                return(
                    <>
                    <li key = {item.id} > {item.name}</li>
                    <p>Price per piece: ${item.price}</p>
                    <button onClick = {() => AddItem(item)}>Add to Cart!</button>
                    </>
                )
            })
        )
    }

    //function to render the items for the cart
    const renderCart =()=>{
        return(
            cart.map((item)=>{
                return(
                    <>
                        <li key={item.id}>{item.name}</li>
                        <p>Price per piece: ${item.price}</p>
                        <br />
                    </>
                )
            })
        )
    }

    if(props.isLoggedIn === false){
        return <Login />
    }
    else{
        return(
            <>
                <h4>This is the shop: </h4>
                <ul>{renderItems()}</ul>
                <h4>This is our Cart Items: </h4>
                {cart.length > 0 ? (<ul>{renderCart()}</ul>): (<p>There are no items in the cart!</p>)}
            </>
        )
    }
}