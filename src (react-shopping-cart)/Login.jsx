import React, {useState} from "react"
import Shop from "./Shop";
import AdminPanel from "./AdminPanel";


export default function Login() {
    //list of objects to be imported as props
    let items = [
        {id: 1, name: "Item 1", price: 10},
        {id: 2, name: "Item 2", price: 15}, //ALT+SHIFT+DOWN for copying to baba
        {id: 3, name: "Item 3", price: 20}
      ]
    //accounts lists
    let accounts = [
        {id: 1, username: "customer", password: "customer", role: "customer"},
        {id: 2, username: "admin", password: "admin", role: "admin"},
        {id: 3, username: "customer2", password: "customer2", role: "customer2"},
        {id: 4, username: "customer3", password: "customer3", role: "customer3"},
    ]

    //boolean state for logging in
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    //variables for user roles
    const [role, setRole] = useState("")
    //variables for usernames
    const [enterUsernames, setEnterUsernames] = useState("")
    //variables for passwords
    const [enterPasswords, setEnterPasswords] = useState("")

    //functional handlers for updating our username states
    function getUsernames(event){
        setEnterUsernames(event.target.value)
    }
    //functional handlers for updating our password states
    function getPasswords(event){
        setEnterPasswords(event.target.value)
    }
    //funtional handler for handling the login process
    function handleLogin(){
        accounts.map((account) => {
            if(account.username === enterUsernames && account.password === enterPasswords){
                setIsLoggedIn(true)
                setRole(account.role)
            }
        })
    }

    //component for rendering Login page
    const renderLogin = () => {
        return(
            <div>
                <h1>Login:</h1>
                Username: <input type = "text" placeholder="Username" id="username" onChange={getUsernames} />
                Password: <input type = "text" placeholder="Password" id="password" onChange={getPasswords} />
                <button onClick = {handleLogin}>Login</button>
            </div>
        )
    }

    //component for rendering the Shop
    const renderShop = () => {
        return(
            <Shop isLoggedIn = {isLoggedIn} items = {items} />
        )
    }

    //component for rendering the Admin Panel
    const renderAdmin = () => {
        return(
            <AdminPanel isLoggedIn = {isLoggedIn} accounts = {accounts} />
        )
    }

    if(isLoggedIn === false){
        return renderLogin()
    }
    else{
        if(role === "customer"){
            return renderShop()
        }
        else if(role === "admin"){
            return renderAdmin()
        }
    }
}