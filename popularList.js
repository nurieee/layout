import React from 'react';
import { Collapse } from 'reactstrap';

const PopularList = props => {

    return <>
    <p class="font-weight-bold"> Popular</p>
    <div class="container">
  <div class="row">
    <div class="col">
    
 <div class="btn-group btn-group-lg" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-dark"><img src= 'https://sportsbet-io.imgix.net/sportsbet-io/portals/home-app/assets/product_card-livecasino.png?auto=compress%2Cformat&ixlib=react-9.0.1&w=100'></img> </button>
   <p class="font-weight-bold">Live dealer</p> 
 
</div>
    </div>
    <div class="col">
 <img src="https://sportsbet-io.imgix.net/sportsbet-io/portals/home-app/assets/product_card-poker.png?auto=compress%2Cformat&ixlib=react-9.0.1&w=100"></img>
 <p class="font-weight-bold">Poker</p> 
    </div>
    <div class="col">
    <img src="https://sportsbet-io.imgix.net/sportsbet-io/portals/home-app/assets/product_card-bombayclub2.png?auto=compress%2Cformat&ixlib=react-9.0.1&w=100"></img>
 <p class="font-weight-bold">Bombay Club</p> 
    </div>
  </div>
</div>
    </>
    
}

export default PopularList