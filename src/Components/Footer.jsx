import { faFacebook, faLinkedin, faWhatsapp, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLocationArrow, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router';

const Footer = () => {
    return (
<div>
            <footer className="footer sm:footer-horizontal bg-[#46515e]  p-10 text-white">
                <div>
                    <h3 className='font-bold text-3xl lg:text-5xl' >LifeDrop</h3>
                    <p className='text-[16px]   mt-3'>LifeDrop is a user-friendly blood donation <br /> platform that connects donors with <br />  people in need. It ensures a safe, <br />  efficient, and organized blood donation <br />  process.</p>
                    <p className=' font-medium mt-5'>
                    </p>
                </div>


            <nav>
                    <h6 className="footer_title_heading">CONTACT US</h6>
                    <p className="flex items-center gap-2 mb-2">
            <FontAwesomeIcon icon={faEnvelope} />{" "}
            <a
              href="mailto:support@lifedrop.com"
              className="hover:text-red-600"
            >
              nureanha99@gmail.com
            </a>
          </p>
                    <a className='hover:text-red-600' href=""><FontAwesomeIcon icon={faLocationArrow} /> Road-2,3/A Middle Badda, <br />Dhaka-1212 , Bangladesh</a>
                    <p className="flex items-center gap-2 mb-2">
            <FontAwesomeIcon icon={faPhone} />{" "}
            <a href="tel:+8801836349141" className="hover:text-red-600">
              (+880) 1836349141
            </a>
          </p>
                    
            </nav>

            <nav>
                <h6 className="footer_title_heading mb-4">SUPPORT LINKS</h6>
                <div className="flex flex-col md:flex-row gap-10">
                    <div className="flex flex-col gap-2">
                        <Link className="hover:text-red-600" to={'/about-us'}>About Us</Link>
                        <Link className="hover:text-red-600" to={'/testimonials'}>Feedback</Link>
                        <Link className="hover:text-red-600" to={'/contact-us'}>Contact Us</Link>
                        <Link className="hover:text-red-600" to={'/terms-policy'}>Terms & Policy</Link>
                    </div>
                </div>
            </nav>


            <nav>
                <h6 className="footer_title_heading">SOCIAL</h6>
                <div className="grid grid-flow-col gap-4">
                    <a className='text-4xl' href="https://www.linkedin.com/in/nure-anha-41892a1b8/" target='blank'><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></a>
                    <a className='text-4xl' href="https://wa.me/8801836349141" target='blank'><FontAwesomeIcon icon={faWhatsapp}></FontAwesomeIcon></a>
                    <a className='text-4xl' href="https://www.facebook.com/handi.ercel.77/" target='blank'><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></a>
                </div>
            </nav>
    </footer>

    <footer className="footer sm:footer-horizontal footer-center p-4 bg-[#17222e] text-white">
    <aside>
        <p>Copyright © {new Date().getFullYear()} - All right reserved by Blood Donors Industries Ltd.</p>
    </aside>
    </footer>
</div>
    );
};

export default Footer;