import SeatingCards from "./SeatingCards";

function Seating({ seating, favorites, setFavorites }) {
    const seatingData = seating.map((seat) => <SeatingCards seat={seat} key={seat.id} favorites={favorites} setFavorites={setFavorites}/>)
    return <>
        <h1 className="category-title">Seating</h1>
        <div className="product">
            {seatingData}
        </div>
    </>
}
export default Seating