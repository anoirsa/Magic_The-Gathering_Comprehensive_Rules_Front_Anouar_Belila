import React from 'react';
import Button from './Button';
import {Link} from 'react-router-dom'
import './Footer.css'

function Footer() {
    return (
        <div className="footer--class">
            <div className="footer--email--field--container">
                <h3>Anouar Belila welcomes requests to improve the website</h3>
                <p>Leave your email and get the latest!!</p>
                <form className="from-algin">
                <input
                className='footer-input'
                name='email'
                type='email'
                placeholder='Your Email'
              />
              <Button
                chosenStyle="btn--primary" textGiven="SEND" 
              />
              </form>
              <section className="footer--details">
                    <div>
                    <h3>About US</h3>
                    <Link className="detail-link">Careers</Link>
                    <Link className="detail-link">Terms of Service</Link>
                    </div>
                    <div>
                    <h3>Contact US</h3>
                    <Link className="detail-link">Contact</Link>
                    <Link className="detail-link">Support</Link>
                    </div>
              </section>

            </div>
            <div className="icons--container">
                <div className="logo--container">
                <h1>E-ANOUAR</h1>
                <i className="fas fa-book-open" /> 
                </div>
                <div className="contact--icon--container">
                    <Link className="detail-link" ><i className="fab fa-facebook" /></Link>
                    <Link className="detail-link" ><i className="fab fa-instagram" /></Link>
                    <Link className="detail-link" ><i className="fab fa-linkedin-in" /></Link>
                </div>
            </div>
        </div>
    )
}

export default Footer
