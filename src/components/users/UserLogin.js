import React from 'react'
import { useState } from "react"
import { useDispatch } from "react-redux"
import { loginUser } from '../../actions/userAction'
import { useNavigate } from "react-router"

export default function UserSignup() {
    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()

   

    function handleSubmit(event){
        event.preventDefault()
       
        if(password.length >= 8){
            dispatch(loginUser({
                email: email,
                password: password,
            }, navigate))

            setPassword("")
        }else{
            alert("your password must be 8 characters long")

        }
       
    }
    return (
        <div>
            <h1>User Login</h1>
            <form onSubmit={handleSubmit}>
          

            <label>Email</label>
            <input 
            type="text"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            ></input>


            <label>Password</label>
            <input 
            type="password"
            value={password}
            minLength="8"
            onChange={(event) => setPassword(event.target.value)}
            > 
            </input>

            <input type="submit"></input>
            </form>
        </div>
    )
}