import StorageCards from "./StorageCards";

function Storage({ storage, favorites, setFavorites }) {

    const storageData = storage.map((storage) => <StorageCards key={storage.id} storage={storage} favorites={favorites} setFavorites={setFavorites}/>)
    return <>
        <h1 className="category-title">Storage</h1>
        <div className="product">
            {storageData}
        </div>
    </>
}
export default Storage

