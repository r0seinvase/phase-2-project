import React, {useState} from 'react';
import StorageCards from "./StorageCards"
import SeatingCards from "./SeatingCards"
import ElectronicsCards from "./ElectronicsCards"


function Favorites({storage, seating, electronics, favorites}) {
    let store= storage

    const renderStorageFavorites = favorites.map(item  => {if(item.type === "storage") { 
    const found = store.find(e => e.id == item.ID)
    return<>
    <StorageCards storage={found} />
    </>} else {
        return null
    }})
    
    const renderSeatingFavorites = favorites.map(item  => {if(item.type === "seating") { 
        const found = seating.find(e => e.id == item.ID)
        return<>
        <SeatingCards seat={found}/>
        </>} else {
        return null
    }})
    const renderElectronicsFavorites = favorites.map(item  => {if(item.type === "electronics") { 
        const found = electronics.find(e => e.id == item.ID)
        return<>
        <ElectronicsCards electronic={found}/>
        </>} else {
        return null
    }})

    // const renderSeatingFavorites = seating
    // .map((seat) => <SeatingCards seat={seat} key={seat.id} />)

    // const renderElectronicsFavorites = favorites
    // .map((electronic) => <ElectronicsCards electronic={electronic} key={electronic.id} />)

    return (
        <div className = "card">
            {renderStorageFavorites}
            {renderSeatingFavorites}
            {renderElectronicsFavorites}
    </div> )
}
export default Favorites
