import React from 'react'

function Card({title,imageUrl,body}) {
    return (
        <div className = "cards-container">
            <div className= "image-container">
                <img src={imageUrl} alt=""></img>
            </div>
            <div className ="card-title">
                <h3>{title}</h3>
            </div>
            <div className ="card-body">
                <p>{body}</p>
            </div>
        </div>
    )
}

export default Card
