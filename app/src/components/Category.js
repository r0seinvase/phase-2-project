
import { BrowserRouter, Route, Link} from "react-router-dom";
function Category() {
    return <div>
        <Link to="/About">
        <div className="navChild">About</div>
        </Link>
        <Link to="/Seating">
        <div className="navChild">Seating</div>
        </Link>
        <Link to="/Storage">
        <div className="navChild">Storage/Tables</div>
        </Link>
        <Link to="/Electronics">
        <div className="navChild">Electronics and Appliances</div>
        </Link>
        <Link to="/Favorites">
        <div className="navChild">Favorites</div>
        </Link>
    </div>
}

export default Category