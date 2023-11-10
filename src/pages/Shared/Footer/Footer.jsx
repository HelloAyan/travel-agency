import React from 'react';
import '../../../../src/index.css';

const Footer = () => {
    return (
        <div className="footer_main_container">
            <div>
                <div>Logo</div>
                <div>
                    <div>Need any help?</div>
                    <div>Call Us: (880)1234 56789</div>
                </div>
                <div>
                    <div>Love Street, Muscat, Oman</div>
                    <div>example@travel.com</div>
                </div>
                <div>social logo</div>
            </div>

            <div>
                <div>
                    <div>Company</div>
                    <div>About Us</div>
                    <div>Contact Us</div>
                    <div>Travel Guides</div>
                    <div>Data Policy</div>
                </div>
                <div>
                    <div>Top Destination</div>
                    <div>Las Vegas</div>
                    <div>New York City</div>
                    <div>San Francisco</div>
                    <div>Hawaii</div>
                </div>
            </div>
            <div>
                <div>Sign up Newsletter</div>
                <div>
                    <input type="text" /> <br />
                    <input type="submit" value='Submit' />
                </div>

                <div>2023 Travel All Right Reserved</div>
            </div>
        </div>
    )
}

export default Footer;