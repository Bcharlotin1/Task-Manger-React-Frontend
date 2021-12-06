import React from 'react'
import { useParams } from 'react-router'

export default function DisplayTest() {
let { id } = useParams()
    return (
        <div>
        <h1>Dispaly idnividualt project number {id}</h1>
        </div>
    )
}
