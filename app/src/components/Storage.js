import Item from "./Item"
import StorageCards from "./StorageCards";

function Storage({ storage }) {

    const storageData = storage.map((storage) => <StorageCards key={storage.id} storage={storage} />)
    return <>
        <h1 className="category-title">Storage</h1>
        <div className="product">
            {storageData}
        </div>
    </>
}
export default Storage

