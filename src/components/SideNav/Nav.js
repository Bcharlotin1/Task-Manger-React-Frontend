import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <div>
            <Link to='/'>Home</Link>
    
            <Link to='/user'>Profile</Link>

            <Link to='/user/projects'>Projects</Link>

            <Link to='/user/projects/new'>Create Project</Link>

        </div>
    )
}
