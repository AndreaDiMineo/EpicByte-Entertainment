import  Header  from '../Header/Header';
import { Footer } from '../Footer/Footer';
import "./contactsstyle.css"

export const Contacts = () => {
    return(
        <>
            <Header />
            <h1 className='contact-us'>CONTACT US!</h1>
            <div className='contacts-section'>
                <img className='contacts-logo' src="https://i.ibb.co/Wn1cGyJ/phone-call.png" />
                <div className='contact-texts'>
                    <p className='contact-label'>+39 334 885 7475 (Platania)</p>
                    <p className='contact-label'>+39 334 168 6046 (Di Mineo)</p>
                    <p className='contact-label'>+39 351 883 7087 (Ben Moussa)</p>
                </div>
            </div>
            <div className='contacts-section'>
                <img className='contacts-logo' src="https://i.ibb.co/drhjLMc/gmail.png" />
                <div className='contact-texts'>
                    <p className='contact-label'>alessandro2003.platania@gmail.com</p>
                    <p className='contact-label'>a.dimineo@itsrizzoli.it</p>
                    <p className='contact-label'>a.benmoussa@itsrizzoli.it</p>
                </div>
            </div>
            <div className='contacts-section'>
                <img className='contacts-logo' src="https://i.ibb.co/927zwdH/linkedin-Contact.png" />
                <div className='contact-texts'>
                    <p className='contact-label'>linkedin.com/in/alessandro-platania-b9158425a</p>
                    <p className='contact-label'>linkedin.com/in/andrea-di-mineo-958443230/</p>
                    <p className='contact-label'>linkedin.com/in/benmoussa-amine/</p>
                </div>
            </div>
            <div className='contacts-section'>
                <img className='contacts-logo' src="https://i.ibb.co/ZfFbKq7/discord.png" />
                <div className='contact-texts'>
                    <p className='contact-label'>plata.exe</p>
                    <p className='contact-label'>andrew900_</p>
                    <p className='contact-label'>Amine-07#4049</p>
                </div>
            </div>
            <Footer />
        </>
    )
    
}
