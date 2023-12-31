import Header from "../Header/Header.jsx";
import { Footer } from "../Footer/Footer.jsx";
import "./gamesstyle.css";

const Games = () => {
  return (
    <>
      <Header />
      <h1 className="games-title">OUR GAMES</h1>
      <div className="Game-Conatiner">
        <div className="games-card">
          <img
            src="https://i.ibb.co/3pZzBcY/blackout-New.png"
            width={300}
            height={300}
          />
          <div className="games-side">
            <h2 className="games-game-title"> Blackout </h2>
            <p className="made-by"> by <br/> Alessandro Platania </p>
            <button className="view-button"> View </button>
          </div>
        </div>
      </div>
      <div className="Game-Conatiner">
        <div className="games-card">
          <img
            src="https://i.ibb.co/jJKqV0H/unreal-engine-wallpaper-1920x1080.jpg"
            width={300}
            height={300}
          />
          <div className="games-side">
            <h2 className="games-game-title"> Title </h2>
            <p className="made-by"> by <br/> TBC </p>
            <button className="view-button"> View </button>
          </div>
        </div>
        
      </div>
      <Footer />
    </>
  );
};

export default Games;
