import React from 'react'
import '../../App.css'
import './About.css'

const image = new URL("../../images/Background8.jpg", import.meta.url)

export default function About() {
    return (
        <div className='background' style={{ backgroundImage: `url(${image})`}}>
            <section className='section'>
                <div className='container'>
                    <div className='row'>
                        <div>
                            <h1 className='main-heading'>ABOUT</h1>
                            <div className='space1'></div>
                            <h2 className='subheaders'>How it Started:</h2>
                            <div className='space2'></div>
                            <p className='paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Proin fermentum leo vel orci porta non. Rhoncus dolor purus non enim praesent. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis. Quis enim lobortis scelerisque fermentum dui faucibus in ornare. Sit amet cursus sit amet dictum sit amet justo donec. Neque ornare aenean euismod elementum nisi quis eleifend. Nibh tortor id aliquet lectus proin nibh nisl. Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque. Fringilla urna porttitor rhoncus dolor purus non enim praesent. Phasellus vestibulum lorem sed risus ultricies. Scelerisque varius morbi enim nunc faucibus. Lacus suspendisse faucibus interdum posuere lorem. Sed libero enim sed faucibus. Et odio pellentesque diam volutpat commodo. Fames ac turpis egestas integer eget aliquet nibh praesent. Nam at lectus urna duis convallis convallis tellus. Mauris rhoncus aenean vel elit scelerisque mauris. Diam quam nulla porttitor massa id neque aliquam.</p>
                            <div className='space1'></div>
                            <h2 className='subheaders'>Team:</h2>
                            <div className='space2'></div>
                            <p className='paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At quis risus sed vulputate odio ut enim blandit volutpat. Lectus mauris ultrices eros in. Et egestas quis ipsum suspendisse ultrices gravida dictum fusce. Est ullamcorper eget nulla facilisi. Elementum curabitur vitae nunc sed velit dignissim. Pellentesque id nibh tortor id. Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra. Enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra. Faucibus turpis in eu mi. Suspendisse ultrices gravida dictum fusce ut. Malesuada pellentesque elit eget gravida cum sociis natoque penatibus.</p>
                            <div className='space1'></div>
                            <h2 className='subheaders'>Results:</h2>
                            <div className='space2'></div>
                            <p className='paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est lorem ipsum dolor sit. Egestas sed tempus urna et pharetra pharetra massa. Nisl rhoncus mattis rhoncus urna neque viverra justo nec. Lobortis feugiat vivamus at augue eget. Vel turpis nunc eget lorem dolor sed. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit. Massa ultricies mi quis hendrerit. Dignissim convallis aenean et tortor at risus viverra adipiscing. Egestas maecenas pharetra convallis posuere morbi. Quis eleifend quam adipiscing vitae proin sagittis nisl. Nunc vel risus commodo viverra maecenas. Sit amet est placerat in egestas. Eleifend donec pretium vulputate sapien nec sagittis. Nec ultrices dui sapien eget mi. Netus et malesuada fames ac turpis egestas. Tortor consequat id porta nibh venenatis cras. Quam lacus suspendisse faucibus interdum posuere lorem ipsum. Non consectetur a erat nam at lectus urna duis convallis.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}