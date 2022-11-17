import React from 'react'
import '../../App.css'
import Gamecards from './Gamecards'

const image = new URL("../../images/Background8.jpg", import.meta.url)

export default function Game() {
    return (
        <div className='background' style={{ backgroundImage: `url(${image})`}}>
            <Gamecards></Gamecards>
        </div>
    )
}