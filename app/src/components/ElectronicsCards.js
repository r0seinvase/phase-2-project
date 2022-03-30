import React, { useState } from 'react';

function ElectronicsCards({ electronic }) {

    const [available, setAvailable] = useState(true);
    const [favorite, setFavorite] = useState(false);

    function handleAvailability() {
        setAvailable(!available)
    }

    function handleFavorite() {
        setFavorite(!favorite)
    }



    return (
        <div className="card">
            {/* <div className="products"> */}
            <img src={electronic.image} alt={electronic.name} />
            <h4>{electronic.name} designed by {electronic.designer}</h4>
            <p>{electronic.Year}</p>
            <p> {electronic.price} </p>
            <p></p>
            {available ? (
                <button onClick={handleAvailability} className="primary">In Stock</button>
            ) : (
                <button classname="secondary">Out of Stock</button>
            )}
            <p></p>
            {favorite? (
                 <button onClick={handleFavorite} className="emoji-button favorite active">★</button>
             ) : (
                 <button onClick={handleFavorite} className="emoji-button favorite">☆</button>
            )}
            {/* </div> */}
        </div>

    );
}




export default ElectronicsCards;