import Item from "./Item"
import SeatingCards from "./SeatingCards";

function Seating({ seating }) {
    const seatingData = seating.map((seat) => <SeatingCards seat={seat} key={seat.id} />)
    return <>
        <h1 className="category-title">Seating</h1>
        <div className="product">
            {seatingData}
        </div>
    </>
}
export default Seating