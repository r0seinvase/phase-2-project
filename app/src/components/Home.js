import About from "./About";
import { useState, useEffect } from "react";

function Home() {

    const [home, setHome] = useState([])
    const [index, setIndex] = useState(null)
    const [image, setImage] = useState(null)

    // useEffect(() => {
    //     fetch("http://localhost:3000/about")
    //         .then(res => res.json())
    //         .then(data => setHome(data))
    //         .then(setIndex(0))
    //         .then(() => {
    //             setImage(home[index])
    //         })
    // }, []);





    // const aboutCard = () => {
    //     image = home[index]

    //     return image
    // }
    // console.log(image)

    return <div>
        <h1 className="about_us_header">about us</h1>
        <button> x </button>
        <About aboutCard={image} />
        <button> x </button>
        <h2 className="about_us_paragraph"> Known for its futuristic and orgaic design, the Space Age marks a turning point in post-war society. The demands of the WWII brought forth new innovative materials such as fibreglass, plastic and moulded plywood. These materials were extremely malleable and could be shaped to fit the human body. Humanity's new fascination with the cosmos took on new urgency and significance as the 'Space Race' between the USA and Russia provoked political tension-- inspiring an age of exceptional innovation in the world of design.
            Stellar picks aims to service as a catalogue to some of the most iconic pieces in the world of design.
            An ode to the inovation and spirit of rational design.  </h2>
    </div>

}
export default Home