import Item from "./Item"
import ElectronicsCards from "./ElectronicsCards";

function Electronics({ electronics, favorites, setFavorites }) {
    const electronicsData = electronics.map((electronic) => <ElectronicsCards electronic={electronic} key={electronic.id} favorites={favorites} setFavorites={setFavorites} />)
    return <>
        <h1 className="category-title">Electronics</h1>
        <div className="product">
            {electronicsData}
        </div>
    </>
}
export default Electronics