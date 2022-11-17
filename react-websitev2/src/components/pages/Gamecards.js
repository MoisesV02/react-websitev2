import React from 'react'
import './Gamecards.css'
import CardItem from './Gamecarditem'

const icon = new URL("../../images/SimpleRPG.png", import.meta.url)
const icon2 = new URL("../../images/GalacticWars.png", import.meta.url)
const icon3 = new URL("../../images/Reaction.png", import.meta.url)
const icon4 = new URL("../../images/Meteors.png", import.meta.url)
const icon5 = new URL("../../images/SynthHero.png", import.meta.url)
const icon6 = new URL("../../images/HelicopterGame.png", import.meta.url)

function Gamecards() {
  return (
    <div className='Gamecards'>
      <h1>GAMES</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={icon}
              text='Tutorial: Use arrow keys to move, v is select, z is inventory, and ENTER is exit. Made by KJScott.'
              label='Simple RPGs'
              path='/simple-rpgs'
            />
            <CardItem
              src={icon2}
              text='Tutorial: Use arrow keys to move, press Z to shoot. Made by Volcano Bytes.'
              label='Galactic Wars'
              path='/galactic-wars'
            />
            <CardItem
              src={icon3}
              text='Tutorial: Click were there is a mouse icon. Made by Tristangre97.'
              label='Reaction'
              path='/reaction'
            />
          </ul>
        </div>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={icon4}
              text='Tutorial: Use arrow keys to spin, space is to shoot, CTRL is bomb, and ENTER is to restart. Made by Nodime.'
              label='Meteors'
              path='/meteors'
            />
            <CardItem
              src={icon5}
              text='Tutorial: Use left, right, and down arrow keys to match the rhythm of the triangles. Made by IDev.'
              label='Synth Hero'
              path='/synth-hero'
            />
            <CardItem
              src={icon6}
              text='Tutorial: Click anywhere on the screen to make sure that the helicopter does not crash. Made by IDev.'
              label='Helicopter Game'
              path='/helicopter-game'
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Gamecards