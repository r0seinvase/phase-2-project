import React, { useState } from 'react';

function SeatingCards({ seat }) {

    const [available, setAvailable] = useState(true);

    function handleAvailability() {
        setAvailable(!available)
    }



    return (
        <div className="card">
            {/* <div className="products"> */}
            <img src={seat.image} alt={seat.name} />
            <h4>{seat.name} designed by {seat.designer}</h4>
            <p>{seat.Year}</p>
            <p> {seat.price} </p>
            <p></p>
            {available ? (
                <button onClick={handleAvailability} className="primary">In Stock</button>
            ) : (
                <button className="secondary">Out of Stock</button>
            )}
            {/* </div> */}
        </div>

    );
}




export default SeatingCards;