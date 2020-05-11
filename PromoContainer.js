import React from 'react';
import PromoBanner from './PromoBanner';

const PromoContainer = props => {

    return (
        <div className="promo-container d-flex">
            <PromoBanner
                title={"Sport"}
                description={"Super cool sports Super cool sports"}
                image={"https://sportsbet-io.imgix.net/sportsbet-io/portals/home-app/assets/card-sports3.png"}>
                <button type="button" className="btn promo-button">Sport</button>
            </PromoBanner>
            <PromoBanner
                title={"Casino"}
                description={"Awesome casino Awesome casino Awesome casino"}
                image={"https://sportsbet-io.imgix.net/sportsbet-io/portals/home-app/assets/card-casino4.png"}
            >
                <button type="button" className="btn promo-button">Casino</button>
            </PromoBanner>
        </div>
    )
}
export default PromoContainer