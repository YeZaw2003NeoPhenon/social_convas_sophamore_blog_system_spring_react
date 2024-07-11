import {FaFacebook , FaTwitter , FaInstagram , FaLinkedin ,FaGithub} from 'react-icons/fa'
import { Container , Row , Col } from 'react-bootstrap';

const Footer = () => {
    const currentDate = new Date();
    return(

        <footer className="Footer">
          <Container>
            <Row className='text-center py-3'>
            <Col className="about-section" md={4}>
                        <h2 className="about-title">About Me</h2>
                        <p className="about-text">
                            Hello! I'm Neo, a passionate developer with experience in various technologies, including Spring Boot, MyBatis, React, and more. I have been dedicated to programming for about 9 months, and I continuously strive to provide the best projects and resources.
                        </p>
                        <p className="about-text">
                            I find backend development particularly gratifying, as it allows me to create robust and efficient systems. In my free time, I enjoy learning new skills, reading tech blogs, and exploring new frameworks. Feel free to connect with me on LinkedIn or GitHub.
                        </p>
                        <p className="contact-info">
                            Contact me at: <a href="mailto:your.email@example.com">winzawyair@example.com</a>
                        </p>
                </Col>
                <Col md={4}>
                        <h5>Follow Us</h5>
                        <div className="social-icons">
                            <a href="https://web.facebook.com/ye.z.win.56614/" target="_blank" rel="Guy with erudite dedications and aspirations and dreams">
                                <FaFacebook size={24} />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <FaTwitter size={24} />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <FaInstagram size={24} />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin size={24} />
                            </a>
                            <a href="https://github.com/YeZaw2003NeoPhenon" target="_blank" rel="Diligent and dignified tech guy">
                                <FaGithub size={24} />
                            </a>
                        </div>
                    </Col>

                    <Col md={4}>
                        <h5>Contact Us</h5>
                        <p>
                            Email: info@example.com<br />
                            Phone: (123) 456-7890
                        </p>
                    </Col>
            </Row>
            <Row className="text-center py-3">
                    <Col>
                        <p>All rights reserved &copy; {currentDate.getFullYear()}</p>
                    </Col>
                </Row>
          </Container>
        </footer>
    )
}
export default Footer;