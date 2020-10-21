import React from 'react';
import './search-box.style.css'

export const SearchBox = ({handler}) =>{
    return <input className="search" type="search" onChange={ handler }/>
}