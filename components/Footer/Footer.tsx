import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
    
    return (
        <>
            {/* Desktop Footer */}
            <footer className={`${styles.footer} ${styles.DesktopFooter}`}>
                <div className={styles.footerContainer}>
                    <div className={styles.footerLogo}>
                        <img src="/Footer/footer-icon.svg" alt="Company Logo" />
                        <p>Member of the Al Habtoor Group</p>
                    </div>
                    <div className={styles.footerLinks}>
                        <div className={styles.footerColumn}>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Offers</a></li>
                                <li><a href="#">FAQ</a></li>
                                <li><a href="#">Career</a></li>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Locations</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Term & Conditions</a></li>
                                <li><a href="#">Services</a></li>
                                <li><a href="#">Contact US</a></li>
                                <li><a href="#">Service Request</a></li>
                            </ul>
                        </div>

                        <div className={styles.AlHabthoorCompanyList}>
                            
                            <p>Al Habtoor Company List</p>
                            <ul>
                                <li><a href="#">Education</a></li>
                                <li><a href="#">Publishing</a></li>
                                <li><a href="#">Hospitality</a></li>
                                <li><a href="#">Real Estate</a></li>
                                <li><a href="#">Automotive</a></li>
                                <li><a href="#">Vehicle Leasing</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.footerRight}>
                        <div className={styles.socialMedia}>
                            <p>FOLLOW US ON</p>
                            <div className={styles.socialUl}>
                                <ul>
                                    <li><a href="#"><img src="/Footer/facebook.svg" alt="Facebook" /></a></li>
                                    <li><a href="#"><img src="/Footer/twitter.svg" alt="Twitter" /></a></li>
                                    <li><a href="#"><img src="/Footer/instagram.svg" alt="Instagram" /></a></li>
                                    <li><a href="#"><img src="/Footer/linkedIn.svg" alt="LinkedIn" /></a></li>
                                    <li><a href="#"><img src="/Footer/youtube.svg" alt="YouTube" /></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className={styles.footerCertificates}>
                            <img src="/Footer/certificate1.svg" alt="Certificate 1" />
                            <img src="/Footer/certificate2.svg" alt="Certificate 2" />
                        </div>
                    </div>
                </div>
                <div className={styles.footerBottom}>
                    <p>&copy; 2018 Diamondlease LLC - All Rights Reserved.</p>
                </div>
            </footer>

            {/* Mobile Footer */}
            <footer className={styles.mobileFooterMainDiv}>
                <div className={styles.mobileFooter}>
                    <div className={styles.mobileFooterTop}>
                        <div className={styles.mobileFooterLogoDiv}>
                            <img src="/Footer/mobile-footer-logo.svg" alt="Al Habtoor Group Logo" className={styles.mobileLogo} />
                        </div>
                        <div className={styles.mobileFooterIcons}>
                            <a href="#"><img src="/Footer/facebook-black.svg" alt="Facebook" className={styles.mobileFooterIcon} /></a>
                            <a href="#"><img src="/Footer/twitter-black.svg" alt="Twitter" className={styles.mobileFooterIcon} /></a>
                            <a href="#"><img src="/Footer/instagram-black.svg" alt="Instagram" className={styles.mobileFooterIcon} /></a>
                            <a href="#"><img src="/Footer/linkedIn-black.svg" alt="LinkedIn" className={styles.mobileFooterIcon} /></a>
                            <a href="#"><img src="/Footer/youtube-black.svg" alt="YouTube" className={styles.mobileFooterIcon} /></a>
                        </div>
                    </div>
                    <div className={styles.mobileFooterLinks}>
                        <a href="#">Home</a>
                        <a href="#">Offers</a>
                        <a href="#">Career</a>
                        <a href="#">About Us</a>
                        <a href="#">Locations</a>
                        <a href="#">FAQ</a>
                        <a href="#">Terms & Conditions</a>
                        <a href="#">Service Request</a>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Services</a>
                        <a href="#">Contact Us</a>
                    </div>
                </div>

                <div className={styles.mobileFooterSection2}>
                    <h2 className={styles.mobileFooterTitle}>Al Habtoor Companies</h2>
                    <div className={styles.mobileFooterServices}>
                        <a href="#">Hospitality</a>
                        <a href="#">Real Estate</a>
                        <a href="#">Publishing</a>
                        <a href="#">Automotive</a>
                        <a href="#">Vehicle Leasing</a>
                    </div>
                    <div className={styles.mobileFooterSeal}>
                        <img src="/Footer/certificate-white.svg" alt="Secure GlobalSign Seal" className={styles.mobileSealIcon} />
                    </div>
                    <div className={styles.mobileFooterBottom}>
                        <p>© 2023 Car Rental LLC - All Rights Reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
