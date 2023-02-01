import React from 'react'

function Card({title,imageUrl,body,btntext,url,fromtowhen}) {
    return (
        <div className = "cards-container">
            <div className= "image-container">
                <img src={imageUrl} alt="" style={{objectFit:"contain"}}></img>
            </div>
            <div className ="card-title">
                <h3>{title}</h3>
            </div>
            <div className ="card-subtitle">
                <h4>{fromtowhen}</h4>
            </div>
            <div className ="card-body">
                <p>{body}</p>
            </div>
            <a href={url} target="_blank" className="btn-main-offer">{btntext}</a>
        </div>
    )
}

export default Card
