import Header from '../Header/Header.jsx';
import {Footer} from '../Footer/Footer.jsx';
import './gamesstyle.css'

const Games = () => {
    return(
        <>
            <Header />
            <h1 className='games-title'>OUR GAMES</h1>
            <div className='games-card'>
                <img className='games-images' src='https://i.ibb.co/jJKqV0H/unreal-engine-wallpaper-1920x1080.jpg' width={550} height={300}/>
                <div className='games-side'>
                    <h2 className='games-game-title'>Title</h2>
                    <p className='games-by'>by name</p>
                    <button className='view'>View</button>
                </div>
            </div>
            <div className='games-card'>
                <img className='games-images' src='https://i.ibb.co/jJKqV0H/unreal-engine-wallpaper-1920x1080.jpg' width={550} height={300} />
                <div className='games-side'>
                    <h2 className='games-game-title'>Title</h2>
                    <p className='games-by'>by name</p>
                    <button className='view'>View</button>
                </div>
            </div>
            <div className='games-card'>
                <img className='games-images' src='https://i.ibb.co/jJKqV0H/unreal-engine-wallpaper-1920x1080.jpg' width={550} height={300}/>
                <div className='games-side'>
                    <h2 className='games-game-title'>Title</h2>
                    <p className='games-by'>by name</p>
                    <button className='view'>View</button>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Games
