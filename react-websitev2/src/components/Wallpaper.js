import React from 'react'
import '../App.css'
import { Button } from './Button'
import './Wallpaper.css'

const picture = new URL("../images/RetroGamev2.png", import.meta.url)

function Wallpaper() {
  return (
    <div className='wallpaper-container' style={{ backgroundImage: `url(${picture})`}}>
        <h1>Ready To Play Some Games?</h1>
        <p>Adventure Awaits</p>
        <div className='wallpaper-btns'>
            <Button 
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
            >
              PLAY
            </Button>
        </div>
    </div>
  )
}

export default Wallpaper