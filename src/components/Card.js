import React from 'react'

function Card({title,imageUrl,body,btntext}) {
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
            <a href="https://rkrjptrohit@gmail.com" target="_blank" className="btn-main-offer">{btntext}</a>
        </div>
    )
}

export default Card
