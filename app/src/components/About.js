import { useState, useEffect } from "react";
import Comments from './Comments.js';



function About({ aboutImage, image }) {
    const work = null
    const [comments, setComments] = useState([])
    useEffect(() => {
        fetch("http://localhost:3000/Comments")
        .then(response => response.json())
        .then(data => setComments(data))
      },[])

    return <div className="about">
        <h1 className="about_us_header">about us</h1>
        <button> x </button>
        <img src={image} />
        <button> x </button>
        <h2 className="about_us_paragraph"> Known for its futuristic and orgaic design, the Space Age marks a turning point in post-war society. The demands of the WWII brought forth new innovative materials such as fibreglass, plastic and moulded plywood. These materials were extremely malleable and could be shaped to fit the human body. Humanity's new fascination with the cosmos took on new urgency and significance as the 'Space Race' between the USA and Russia provoked political tension-- inspiring an age of exceptional innovation in the world of design.
            Stellar picks aims to service as a catalogue to some of the most iconic pieces in the world of design.
            An ode to the inovation and spirit of rational design.  </h2>
        <Comments comments={comments} setComments={setComments}/>
    </div>
}
export default About;





