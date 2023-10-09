import Header from '../Header/Header.jsx';
import {Footer} from '../Footer/Footer.jsx';
import image from "../controller.jpeg"
import game from "../gameController.png"
import "./homestyle.css"

const Home = () => {
    return(
        <>
            <Header />
            <h1 className='home-title'>LEVEL UP YOUR FUN!</h1>
            <img className='img-home' src={image}/>
            <div className="description">
                <p className='p-home'><b>EpicByte Entertainment</b> is<br/> an italian video games start-up<br/> 
                which aims to release enjoyable products<br/> for the audience</p>
            </div>
            <div className="games">
                <h2 className='h2-home'>OUR GAMES</h2>
                <picture>
                    <div className="images">
                        <img className='game-images' src={game}/>
                        <img className='game-images' src={game}/>
                        <img className='game-images' src={game}/>
                    </div>
                    <div className="titles">
                        <h4>Title1</h4>
                        <h4>Title2</h4>
                        <h4>Title3</h4>
                    </div>
                </picture>
            </div>
            <Footer />
        </>
    )
}

export default Home
