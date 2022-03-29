import { BrowserRouter, Route, Link} from "react-router-dom";
import Item from "./Item"
function Category() {
    return <div>
        <div className="navChild">About</div>
        <div className="navChild">Seating</div>
        <div className="navChild">Storage/Tables</div>
        <div className="navChild">Elictric Appliances</div>
        <ul>
            <li>
                <Link to="/Item">
                Items listed here
                </Link>
            </li>
        </ul>
    </div>
}

export default Category