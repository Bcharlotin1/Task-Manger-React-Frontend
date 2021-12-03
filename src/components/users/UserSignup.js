import React from 'react'
import { useState } from "react"
import { useDispatch } from "react-redux"
import { createUser } from '../../actions/userAction'
import { useNavigate } from "react-router"

export default function UserSignup() {
    const [username, setUsername] = useState("")
    //retuns ana array of 2 item  1.  inital stat 2.  funtion to change that value
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()

   

    function handleSubmit(event){
        event.preventDefault()
        //thakes conttne to redux
        dispatch(createUser({
            username: username,
            email: email,
            password: password,
        }, navigate))
        
        setUsername("")
        setEmail("")
        setPassword("")
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <label>Username</label>
            <input 
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            ></input>

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
            onChange={(event) => setPassword(event.target.value)}
            > 
            </input>

            <input type="submit"></input>
            </form>
        </div>
    )
}
