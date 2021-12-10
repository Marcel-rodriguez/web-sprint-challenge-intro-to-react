import React, { useState } from 'react'
import Cards, {Expanded} from '../Styles/Cards'
import 'material-icons/iconfont/material-icons.css'

function Character({name}) {
    const [hamburgerState, setHamburgerState] = useState(false)

    if(hamburgerState){
        return(
            <Expanded bgColor='black' height="50vh">
                <span className='material-icons' id='hamburger' onClick={() => setHamburgerState(!hamburgerState)}>close</span>
                <h3>Name: {name}</h3>
                <div className='character-info'>
                <p>Birthday: </p>
                <p>Films: </p>
                </div>
            </Expanded>
        )
    }


    return (
        <Cards bgColor='black' height='fit-content'>
            <h2>Name: {name} </h2>
            <span className='material-icons' id='hamburger' onClick={() => setHamburgerState(!hamburgerState)}>menu</span>
            
        </Cards>
    )
}

export default Character
