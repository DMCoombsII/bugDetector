import React from 'react'
import '.bugCard.css'


export default (props)=>{

    function Clicked(){
        props.clicked(props.name)
    }

    return(
        <div className='bug-card'>
            <h2 className='name'>{props.name}</h2>
            <h4 className='priority'>{props.name}</h4>
            <h5 className='version'>{props.name}</h5>
        </div>
    )
}