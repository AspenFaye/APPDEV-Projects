import React, {useState} from "react"
import Login from "./Login";

export default function AdminPanel(props){
    let accounts = props.accounts
    const [devlogs, setDevlogs] = useState([]);

    //function handler for adding a devlog
    function AddDevLog(){
        let devlog = {
            date: new Date().getFullYear() + "-" + (new Date().getMonth() + 1) + "-" + new Date().getDate(),
            title: document.getElementById("title").value, 
            content: document.getElementById("content").value

        }
        setDevlogs(d => [...d, devlog])
        document.getElementById("title").value=""
        document.getElementById("content").value=""
    }

    //function to render Accounts
    const renderAccounts = () => {
        return(
            accounts.map((account) => {
                return(
                    <div>
                        <h2 key = {account.id}>{account.username}</h2>
                        <p>{account.role}</p>
                    </div>
                )
            })
        )
    }

    //function to render Devlogs
    const renderDevLogHistory = () => {
        return(
            devlogs.map((devlog) => {
                return(
                    <div>
                        <h2>{devlog.title}</h2>
                        <p>{devlog.date}</p>
                        <p>{devlog.content}</p>
                    </div>
                )
            })
        )
    }

    if(props.isLoggedIn === false){
        return <Login />
    }
    else{
        return(
            <div>
            <h1>This is the Admin Panel</h1>
            <p>These are the active accounts: </p>
            {renderAccounts()}
            <br />
            <hr />
            <h4>Admin Devlogs</h4>
            Title <input type="text" name="title" id="title" />
            <br />
            <hr />
            Content:
            <br />
            <textarea name="content" id="content" cols="50" rows="10"></textarea>
            <br />
            <button type = "submit" onClick = {AddDevLog}>Submit</button>
            <h4>Devlog History:</h4>
            {renderDevLogHistory()}
        </div>
        )
    }

}