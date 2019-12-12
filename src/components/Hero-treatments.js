import React from 'react'

export default function Hero_treatments(props) {

    const stylesHero = {
        backgroudImage: props.backgroud,
        backgroudPosition: 'center', 
        backgroudSize: 'cover',
        height: '700px',
        maxWidth: '1300px',
        width: '100%'
    }
    return (
        <div>
            <header style={stylesHero}  className='tra-component'>
                <h2>{props.title}</h2>
                <hr/>
                <p>{props.paragraph}</p>
            </header>
        </div>
    )
}
