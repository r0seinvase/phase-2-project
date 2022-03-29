import { BrowserRouter, Route, Link} from "react-router-dom";
import Item from "./Item"
function Category() {
    return <div>
        categories listed here
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