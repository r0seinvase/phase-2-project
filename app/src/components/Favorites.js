import React, {useState} from 'react';
import StorageCards from "./StorageCards"
import SeatingCards from "./SeatingCards"
import ElectronicsCards from "./ElectronicsCards"


function Favorites({storage, seating, electronics}) {
    const renderStorageFavorites = storage
    // .filter()
    .map((storage) => <StorageCards storage={storage} key={storage.id} />) 

    const renderSeatingFavorites = seating
    // .filter()
    .map((seat) => <SeatingCards seat={seat} key={seat.id} />)

    const renderElectronicsFavorites = electronics
    // .filter()
    .map((electronic) => <ElectronicsCards electronic={electronic} key={electronic.id} />)

    return (
        <div className = "card">
            {[renderStorageFavorites, renderSeatingFavorites, renderElectronicsFavorites]}
    </div> )
}
export default Favorites