import React from 'react'

export default function SynthHero() {
  return (
    <div className='game-container'>
        {/* Play.iDevGames.co.uk Responsive Embed Code for Synth Hero */}
      <div style={{position: 'relative', height: 0, overflow: 'hidden', paddingBottom: '56.25%'}}>
        <iframe id="embededGame" src="https://play.idevgames.co.uk/embed/synth-hero" scrolling="no" seamless="seamless" frameBorder={0} style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}>Browser not compatible.</iframe>
      </div>
      {/* End Embed Code */}
  </div>
  )
}
