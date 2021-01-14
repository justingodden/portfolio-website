import React from 'react'
import bg from '../images/sentient-background.jpg'
import logo from '../images/sentient-logo.svg'

function Temp() {
    return (
        <div style={{height: '200px', width: '300px'}}>
            <img src={bg} alt="" width="300" height="200"></img>
            <img className="navLogo" style={{
                height:"50px", position: 'relative', top: '-130px', right: '-30px'
            }}
            src={require('../images/sentient-logo.svg').default} alt=''/>
            <h2 style={{
                position: 'relative', top: '-210px', right: '-110px', color: 'black', fontSize: '38px'
            }}>Sentient</h2>

            
        </div>
    )
}

export default Temp
