import "./footerstyle.css"

export const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="side1">
                    <h2 className="footer-title">EpicByte Entertainment</h2>
                    <p className="footer-text">Privacy Policy</p>
                    <p className="footer-text">Cookie Policy</p>
                    <p className="footer-text">Legal</p>
                    <p className="footer-text">@ 2023 EpicByte Entertainment - All Rights Reserved</p>
                </div>
                <div className="side2">
                    <h2 className="en">EN</h2>
                    <div className="social">
                        <img className="logosocial" src="https://i.ibb.co/5xJpbm3/youtube.png" />
                        <img className="logosocial" src="https://i.ibb.co/BPrx7Lt/instagram-Logo.png" />
                        <img className="logosocial" src="https://i.ibb.co/3BXBHbx/linkedin-Logo.png" />
                    </div>
                </div>
            </div>
        </>
    )
}
