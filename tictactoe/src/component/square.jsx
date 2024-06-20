import React, {useState} from 'react'

const square = ({value, setOnClick}) => {   
    return(
        <button onClick={setOnClick}
        style={{background: 'rgb(45, 105, 105)', border: 'solid', borderWidth: '5px', borderColor: 'rgb(29, 253, 253)', justifyContent: 'center', alignItems: 'center', height: '100px', width: '100px', color: 'white', fontSize: '50px', fontWeight: '600'}}>
            {value}
        </button>       
    ) 
}

export default square