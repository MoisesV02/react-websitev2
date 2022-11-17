import React from 'react'
import '../../App.css'

export default function SimpleRpgs() {
    return (
      <div className='game-container'>
        {/* Play.iDevGames.co.uk Responsive Embed Code for Simple RPGs */}
      <div style={{maxWidth: '1600px'}}>
        <div style={{position: 'relative', height: '680px', overflow: 'hidden'}}>
          <iframe id="embededGame" src="https://play.idevgames.co.uk/embed/simple-rpgs" scrolling="no" seamless="seamless" frameBorder={0} style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}>Browser not compatible.</iframe>
        </div>
      </div>
      {/* End Embed Code */}
  </div>
    )
}