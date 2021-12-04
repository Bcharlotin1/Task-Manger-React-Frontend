import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <div>
            <Link to='/'>Home</Link> <br></br>
    
            <Link to='/user'>Profile</Link>

            <Link to='/projects'>Projects</Link>

            <Link to='/projects/new'>Create Project</Link>

            <Link to='/projects/tasks'>Project Task</Link>

            <Link to='/projects/tasks/new'>Create Task</Link>

        </div>
    )
}
