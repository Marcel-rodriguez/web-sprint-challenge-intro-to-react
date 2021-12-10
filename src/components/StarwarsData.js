import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Character from './Character';
function StarwarsData() {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('https://swapi.dev/api/people')
        .then(resp => {
            console.log(resp.data , 'CharData')
            setData(resp.data)
        })
        .catch(error => {
            console.error(error)
        })
    },[])
    
    

    return (
        <div>
            {data.map(char => {
                return <Character name={char.name} born={char.birth_year} films={char.films} eyeColor={char.eye_color} Height={char.height} key={char.name}/>
            })}
        </div>
    )
}

export default StarwarsData
