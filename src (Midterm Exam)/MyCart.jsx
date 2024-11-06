import React, {useState} from "react";

export default function MyCart(){
    const [items, setItems] = useState([""])

    function handleAddItem(){
        const newItem = document.getElementById("itemInput").value;
        setItems(g => [...g, newItem])

        document.getElementById("itemInput").value = "";
    }
    
    return(
        <>
        <div>
            <h2>Add to Cart: </h2>
            <ul>
                {items.map((item, index) => <li key = {index}>{item}</li>)}
            </ul>
            <input type="text" name="itemInput" id="itemInput" />
            <button type="button" onClick={handleAddItem}>Add Item to your Cart</button>
        </div>
        </>
    )
}