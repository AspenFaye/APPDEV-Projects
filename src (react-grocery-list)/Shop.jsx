import React, { useState } from "react";

export default function Shop(props) {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [payment, setPayment] = useState(0);
    const [change, setChange] = useState(null);
    const ShopItems = props.items;

    // Function to add item to cart and calculate total
    function AddItem(item) {
        setCart((prevCart) => {
            const updatedCart = [...prevCart, item];
            calculateTotal(updatedCart); //Tawagin si function calculateTotal here para laging nag-uupdate
            return updatedCart;
        });
    }

    // Function to calculate the total price of items in the cart
    function calculateTotal(cart) {
        let total = 0;
        for (let i = 0; i < cart.length; i++) {
            total += cart[i].price;
        }
        setTotal(total);
    }

    // Handle payment input and calculate change
    const handlePayment = (e) => {
        const amountPaid = parseFloat(e.target.value) || 0;
        setPayment(amountPaid);
        setChange(amountPaid - total);
    };

    // Render shop items
    const renderItems = () => {
        return ShopItems.map((item) => (
            <div key={item.id}>
                <li>{item.name}</li>
                <p>Price per piece: ${item.price}</p>
                <button onClick={() => AddItem(item)}>Add to Cart!</button>
            </div>
        ));
    };

    // Render items in the cart
    const renderCart = () => {
        return cart.map((item, index) => (
            <div key={index}>
                <li>{item.name}</li>
                <p>Price per piece: ${item.price}</p>
            </div>
        ));
    };

    return (
        <>
            <h4>This is the shop:</h4>
            <ul>{renderItems()}</ul>

            <h4>Cart Items:</h4>
            {cart.length > 0 ? (
                <>
                    <ul>{renderCart()}</ul>
                    <h4>Total Price: ${total}</h4>
                    
                    {/* Payment and Receipt Section */}
                    <div className="payment-section">
                        <label>Enter Your Payment: </label>
                        <input
                            type="number"
                            value={payment}
                            onChange={handlePayment}
                            placeholder="Enter amount"
                        />
                        {change !== null && (
                            <div className="receipt">
                                <h4>Receipt</h4>
                                <ul>
                                    {cart.map((item, index) => (
                                        <li key={index}>
                                            {item.name} - ${item.price}
                                        </li>
                                    ))}
                                </ul>
                                <p>Total Price: ${total}</p>
                                <p>Amount Paid: ${payment}</p>
                                <p>Change: ${change >= 0 ? change : "Your payment is insufficent! | Kulang po bayad ninyo!"}</p>
                            </div>
                        )}
                    </div>
                </>
            ) : (
                <p>There are no items in the cart!</p>
            )}
        </>
    );
}
