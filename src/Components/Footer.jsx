import "./footer.css"
import logo from "../Images/futuremindslogofooter.png"
export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-grid">
                    <div className="footer-column">
                        <a href="/" className="footer-logo" style={{ display: 'flex', gap: ".5rem",textDecoration: "none"}}>
                            <div className="navbar-logo">
                                <div >
                                    <div className="logo">
                                        <img src={logo} alt="" width={50} height={25} />
                                    </div>
                                </div>
                            </div>
                            <span style={{ fontSize: '1.6rem', color: "#7e22ce",paddingTop: "10px",fontWeight: 800 }}>Future<span style={{ color: "#ef3121" }}>Minds</span>.fun</span>
                        </a>
                        <p className="footer-description">
                            Nurturing young minds through creativity and innovation. We empower the next generation with skills,
                            knowledge, and hands-on learning experiences.
                        </p>
                        <div className="social-links">
                            <a href="#" className="social-link">
                                <span className="social-icon facebook-icon"></span>
                            </a>
                            <a href="#" className="social-link">
                                <span className="social-icon instagram-icon"></span>
                            </a>
                            <a href="#" className="social-link">
                                <span className="social-icon twitter-icon"></span>
                            </a>
                            <a href="#" className="social-link">
                                <span className="social-icon youtube-icon"></span>
                            </a>
                        </div>
                    </div>

                    <div className="footer-column">
                        <h3 className="footer-heading">Quick Links</h3>
                        <ul className="footer-links">
                            <li>
                                <a href="/" className="footer-link">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="/about" className="footer-link">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="/activities" className="footer-link">
                                    Activities
                                </a>
                            </li>
                            <li>
                                <a href="/contact" className="footer-link">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h3 className="footer-heading">Activities</h3>
                        <ul className="footer-links">
                            <li>
                                <a href="/activities" className="footer-link">
                                    Swimming
                                </a>
                            </li>
                            <li>
                                <a href="/activities/drawing-painting" className="footer-link">
                                    Drawing & Painting
                                </a>
                            </li>
                            <li>
                                <a href="/activities" className="footer-link">
                                    Kathak Dance
                                </a>
                            </li>
                            <li>
                                <a href="/activities" className="footer-link">
                                    Freestyle Dance
                                </a>
                            </li>
                            <li>
                                <a href="/activities" className="footer-link">
                                    Space Exploration
                                </a>
                            </li>
                            <li>
                                <a href="/activities" className="footer-link">
                                    Character Development & Yoga
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h3 className="footer-heading">Contact Us</h3>
                        <ul className="contact-info">
                            <li className="contact-item">
                                <span className="contact-icon location-icon"></span>
                                <span>
                                    Block No 15, Ahilyadevi Nagar, Behind Aasra Petrol Pump and Mantri Chandak Estate, Hatgi Road Solapur.
                                </span>
                            </li>
                            <li className="contact-item">
                                <span className="contact-icon phone-icon"></span>
                                <a href="tel:+919146099742" className="contact-link">
                                    +91 91460 99742
                                </a>
                            </li>
                            <li className="contact-item">
                                <span className="contact-icon email-icon"></span>
                                <a href="mailto:futureminds@gmail.com" className="contact-link">
                                    futuremindds@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="copyright">&copy; {new Date().getFullYear()} FutureMinds. All rights reserved.</p>
                    <p className="powered-by">
                        Powered by <a className="highlight" href="https://vishwalatarati.in/">vishwalatarati Digital Solution Pvt Ltd</a>
                    </p>
                </div>
            </div>
        </footer>
    )
}

