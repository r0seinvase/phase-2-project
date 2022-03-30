import React, { useState } from 'react';

function StorageCards({ storage }) {

    const [available, setAvailable] = useState(true);

    function handleAvailability() {
        setAvailable(!available)
    }



    return (
        <div className="card">
            {/* <div className="products"> */}
            <img src={storage.image} alt={storage.name} />
            <h4>{storage.name} designed by {storage.designer}</h4>
            <p>{storage.Year}</p>
            <p> {storage.price} </p>
            <p></p>
            {available ? (
                <button onClick={handleAvailability} className="primary">In Stock</button>
            ) : (
                <button classname="secondary">Out of Stock</button>
            )}
            {/* </div> */}
        </div>

    );
}




export default StorageCards;