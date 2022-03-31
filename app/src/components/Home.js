import About from "./About";
import { useState, useEffect } from "react";

function Home({ displayImage }) {

    const aboutImage = displayImage.map(img => <About key={img.id} {...img} />)

    return <div>
        {aboutImage}
    </div>

}
export default Home