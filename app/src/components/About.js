
function About({ info }) {

    console.log(info);


    return <div className="about">
        <h1 className="about_us_header">about us</h1>
        <div className="images">
            <img src={info.image_1} alt="modernism" />
            <img src={info.image_2} alt="modernism" />
            <img src={info.image_3} alt="modernism" />
            <img src={info.image_4} alt="modernism" />
            <img src={info.image_5} alt="modernism" />
            <img src={info.image_6} alt="modernism" />
            <img src={info.image_7} alt="modernism" />
            <img src={info.image_8} alt="modernism" />
            <img src={info.image_9} alt="modernism" />
            <img src={info.image_10} alt="modernism" />
            <img src={info.image_11} alt="modernism" />
            <img src={info.image_12} alt="modernism" />
            <img src={info.image_13} alt="modernism" />
            <img src={info.image_14} alt="modernism" />
            <img src={info.image_15} alt="modernism" />
            <img src={info.image_16} alt="modernism" />
        </div>
        <h2 className="about_us_paragraph"></h2>
    </div>
}
export default About