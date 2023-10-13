import Header from "../Header/Header";
import { Footer } from "../Footer/Footer";
import "./contactsstyle.css";

const Contacts = () => {
  return (
    <div className="background-contacts">
      <Header />
      <h1 className="contact-us">CONTACT US!</h1>
      <div className="background-flex">
        <div className="contacts-card">
          <img
            className="contacts-pfp"
            src="https://i.ibb.co/LJ8ZqsJ/andrea-removebg-preview.png"
          />
          <div className="contacts-list">
            <div className="contacts-row">
              <img
                className="contacts-logo"
                src="https://i.ibb.co/drhjLMc/gmail.png"
              />
              <p className="contacts-p">a.dimineo@itsrizzoli.it</p>
            </div>
            <div className="contacts-row">
              <img
                className="contacts-logo"
                src="https://i.ibb.co/Wn1cGyJ/phone-call.png"
              />
              <p className="contacts-p">+39 334 168 6046</p>
            </div>
            <div className="contacts-row">
              <img
                className="contacts-logo"
                src="https://i.ibb.co/927zwdH/linkedin-Contact.png"
              />
              <p className="contacts-p">
                linkedin.com/in/andrea-di-mineo-958443230/
              </p>
            </div>
            <div className="contacts-row">
              <img
                className="contacts-logo"
                src="https://i.ibb.co/ZfFbKq7/discord.png"
              />
              <p className="contacts-p">andrew900_</p>
            </div>
          </div>
        </div>
        <div className="contacts-card">
          <img
            className="contacts-pfp"
            src="https://i.ibb.co/XCnTT68/alessandro-removebg-preview.png"
          />
          <div className="contacts-list">
            <div className="contacts-row">
              <img
                className="contacts-logo"
                src="https://i.ibb.co/drhjLMc/gmail.png"
              />
              <p className="contacts-p">alessandro2003.platania@gmail.com</p>
            </div>
            <div className="contacts-row">
              <img
                className="contacts-logo"
                src="https://i.ibb.co/Wn1cGyJ/phone-call.png"
              />
              <p className="contacts-p">+39 334 885 7475</p>
            </div>
            <div className="contacts-row">
              <img
                className="contacts-logo"
                src="https://i.ibb.co/927zwdH/linkedin-Contact.png"
              />
              <p className="contacts-p">
                linkedin.com/in/alessandro-platania-b9158425a
              </p>
            </div>
            <div className="contacts-row">
              <img
                className="contacts-logo"
                src="https://i.ibb.co/ZfFbKq7/discord.png"
              />
              <p className="contacts-p">plata_exe</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Contacts;
