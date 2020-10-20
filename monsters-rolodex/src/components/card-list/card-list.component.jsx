import React from 'react';
import './card-list.styles.css'

export const CardList = (props) => {    
    console.log(props)
    
return <div className='card-list'>
    {propes.names.map((person) => (
          <h1 key={person.id}> {person.name}</h1>
        ))}
        
</div>
}