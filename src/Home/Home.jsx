import Header from '../Header/Header.jsx';
import image from "../controller.jpeg"
import game from "../gameController.png"
import "./homestyle.css"

const Home = () => {
    return(
        <>
            <Header />
            <h1>LEVEL UP YOUR FUN!</h1>
            <img src={image}/>
            <div className="description">
                <p><b>EpicByte Entertainment</b> is<br/> an italian video games start-up<br/> 
                which aims to release enjoyable products<br/> for the audience</p>
            </div>
            <div className="games">
                <h2>OUR GAMES</h2>
                <picture>
                    <div className="images">
                        <img src={game}/>
                        <img src={game}/>
                        <img src={game}/>
                    </div>
                    <div className="titles">
                        <h4>Title1</h4>
                        <h4>Title2</h4>
                        <h4>Title3</h4>
                    </div>
                </picture>
            </div>
        </>
    )
}

export default Home