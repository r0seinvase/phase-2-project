import About from "./About";


function Home({ previousImage, displayImage, nextImage }) {

    const aboutImage = displayImage.map(img => <About previousImage={previousImage} nextImage={nextImage} key={img.id} {...img} />)

    return <div>
        {aboutImage}
    </div>

}
export default Home