import React from "react"

const Card = (props) => {
    return (
        <div className="card h-100 md-5">
            <img src={"https://picsum.photos/id/"+(Math.floor(Math.random()*900)+100)+"/400/400"} className="Card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="Card-title">{props.titulo}</h5>
                    <p className="Card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus naque.</p>
                </div>
                <div className="Card-footer">
                    <button className="btn btn-primary btn-lg" type="button">Call to action!</button>
                </div>
        </div>
        
    )
}

export default Card