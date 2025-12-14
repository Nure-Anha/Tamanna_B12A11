import { faFacebook, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLocationArrow, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

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
                    <a className='hover:text-red-600' href=""><FontAwesomeIcon icon={faEnvelope} /> support@lifedrop.com</a>
                    <a className='hover:text-red-600' href=""><FontAwesomeIcon icon={faLocationArrow} /> Road-2,3/A Middle Badda, <br />Dhaka-1212 , Bangladesh</a>
                    <a className='hover:text-red-600' href=""><FontAwesomeIcon icon={faPhone} /> Call: (+880) 1917896335</a>
                    
            </nav>

            <nav>
                <h6 className="footer_title_heading mb-4">SUPPORT LINKS</h6>
                <div className="flex flex-col md:flex-row gap-10">
                    <div className="flex flex-col gap-2">
                        <a className="hover:text-red-600" href="">Thalassemia</a>
                        <a className="hover:text-red-600" href="">Myelodysplasia</a>
                        <a className="hover:text-red-600" href="">Hemolytimia</a>
                        <a className="hover:text-red-600" href="">Hypercoagulable</a>
                        <a className="hover:text-red-600" href="">Sicklenemiaxs</a>
                    </div>

                    <div className="flex flex-col gap-2">
                        <a className="hover:text-red-600" href="">Cell Elofrosis</a>
                        <a className="hover:text-red-600" href="">Blood Count</a>
                        <a className="hover:text-red-600" href="">Ychromas Eosis</a>
                        <a className="hover:text-red-600" href="">Thrombo Xtosis</a>
                        <a className="hover:text-red-600" href="">Aplastic Anemia</a>
                    </div>
                </div>
            </nav>


            <nav>
                <h6 className="footer_title_heading">SOCIAL</h6>
                <div className="grid grid-flow-col gap-4">
                    <a className='text-4xl' href=""><FontAwesomeIcon icon={faXTwitter}></FontAwesomeIcon></a>
                    <a className='text-4xl hover:text-red-600' href=""><FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon></a>
                    <a className='text-4xl hover:text-blue-400' href=""><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></a>
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