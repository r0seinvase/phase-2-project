import Item from "./Item"
import ElectronicsCards from "./ElectronicsCards";

function Electronics({ electronics }) {
    const electronicsData = electronics.map((electronic) => <ElectronicsCards electronic={electronic} key={electronic.id} />)
    return <>
        <h1 className="category-title">Electronics</h1>
        <div className="product">
            {electronicsData}
        </div>
    </>
}
export default Electronics