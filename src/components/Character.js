import React, { useState} from 'react'
import Cards, {Expanded, PTag} from '../Styles/Cards'
import 'material-icons/iconfont/material-icons.css'

function Character({name,born,films,eyeColor,Height,starShips}) {
    const [hamburgerState, setHamburgerState] = useState(false)

    

    if(hamburgerState){
        return(
            <Expanded key={name} bgColor='black' height="50vh">
                <div className="Expanded-Container">
                    <div className="Card-Header">
                        <span className='material-icons' id='hamburger' onClick={() => setHamburgerState(!hamburgerState)}>close</span>
                        <h2>Name : {name} </h2>
                    </div>
                    <div className='character-info'>
                        <div className='Character-Stats'>
                        <h3>BirthDay: </h3>
                        <PTag tagWidth='fit-content'>{born}</PTag>
                        <h3>Eye-Color: </h3>
                        <PTag tagWidth='fit-content'>{eyeColor}</PTag>
                        <h3>Height: </h3>
                        <PTag tagWidth='fit-content'>{Height}</PTag>
                        </div>
                        
                        <div className="Films-Div">
                            <h3>Films appeared in</h3>
                            {films.map(film => {
                                return <PTag tagWidth='25vh' >Film: {film}</PTag>
                            })}
                        </div>
                    </div>
                </div>
            </Expanded>
        )
    }


    return (
        <Cards bgColor='black' height='fit-content'>
            <h2>Name : {name} </h2>
            <span className='material-icons' id='hamburger' onClick={() => setHamburgerState(!hamburgerState)}>menu</span>
        </Cards>
    )
}

export default Character
