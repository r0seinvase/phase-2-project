import React, { useState } from 'react';

function StorageCards({ storage, favorites, setFavorites }) {

    const [available, setAvailable] = useState(true);
    const [favorite, setFavorite] = useState(false);


    function handleAvailability() {
        setAvailable(!available)
    }

    function handleFavorite() {
        setFavorite(!favorite)
        const addFavorite = [...favorites, {['type']: "storage", ["ID"]: storage.id}]
        setFavorites(addFavorite)
    }
    return (
        <div className="card">
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
            <p></p>
            {favorite? (
                <button onClick={handleFavorite} className="favorite">★</button>
            ) : (
                <button onClick={handleFavorite} className="not-favorite">☆</button>
            )}

            {/* </div> */}
        
            {/* </div> */}
        </div>

    );
}




export default StorageCards;