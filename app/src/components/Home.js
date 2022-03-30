import About from "./About";
function Home({ home }) {

    const aboutCard = home.map((info) => <About key={info.id} info={info} />)


    return <div>

        {aboutCard}

    </div>

}
export default Home