import React, {useState} from 'react';
import StorageCards from "./StorageCards"
import SeatingCards from "./SeatingCards"
import ElectronicsCards from "./ElectronicsCards"


function Favorites({storage, seating, electronics}) {
    const renderStorageFavorites = storage.map((storage) => <StorageCards storage={storage} key={storage.id} />) 
    const renderSeatingFavorites = seating.map((seat) => <SeatingCards seat={seat} key={seat.id} />)
    const renderElectronicsFavorites = electronics.map((electronic) => <ElectronicsCards electronic={electronic} key={electronic.id} />)

    return (
        <div className = "card">
            Place Holder
            {[renderStorageFavorites, renderSeatingFavorites, renderElectronicsFavorites]}
    </div> )
}
export default Favorites