import Seating from "./Seating";
import Electronics from "./Electronics";
import Storage from "./Storage";


import React, { useState, useEffect } from "react"

function Home() {

    const [seating, setSeating] = useState([])
    const [storage, setStorage] = useState([])
    const [electronics, setElectronics] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/chairs")
            .then(res => res.json())
            .then(data => setSeating(data))

        fetch("http://localhost:3000/Storage")
            .then(res => res.json())
            .then(data => setStorage(data))

        fetch("http://localhost:3000/Electronics")
            .then(res => res.json())
            .then(data => setElectronics(data))
    }, []);


    return <div>
        <Seating seating={seating} />
        <Electronics electronics={electronics} />
        <Storage storage={storage}/>
    </div>
}
export default Home