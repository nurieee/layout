import React from 'react';

const PromoBanner = props => {

    return (
        <div className="promo-banner">
            <div className="banner-info d-flex flex-column justify-content-between">
                <div className="promo-title">{props.title}</div>
                <div className="promo-description">{props.description}</div>
                {props.children}
            </div>
            <img className="img-fluid" src={props.image}/>
        </div>
    )
}
export default PromoBanner