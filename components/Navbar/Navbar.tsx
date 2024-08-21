  "use client"

  // components/Navbar.tsx

  import React, { useState } from 'react';
  import styles from './Navbar.module.css';
  
import Link from 'next/link';

  const Navbar: React.FC = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

    return (
      <nav className={styles.customNavbar}>
        <div className={styles.navbarLeft}>
          <img src="/Navbar/Nav-logo.svg" alt="Car Rental Logo" className={styles.logo} />
          
        </div>
        
        <div className={styles.navbarRight}>
          <div className={styles.socialIcons}>
            <a href="#"><img src="/Navbar/facebook-nav.svg" alt="Facebook" width={15.5} height={15.5} /></a>
            <a href="#"><img src="/Navbar/instagram-nav.svg" alt="Instagram" width={15.5} height={15.5} /></a>
            <a href="#"><img src="/Navbar/twitter-nav.svg" alt="Twitter" width={15.5} height={15.5} /></a>
            <a href="#"><img src="/Navbar/linkedIn-nav.svg" alt="LinkedIn" width={15.5} height={15.5} /></a>
          </div>
          <div className={styles.navLink}>
            <ul className={styles.navbarMenu}>
              <li><Link passHref href="/about">About</Link></li>
              <li><a href="#">Offers</a></li>
              <li><a href="#">Corporate</a></li>
              <li><a href="#">Personal</a></li>
              <li><a href="#">Locations</a></li>
              <li><a href="#">Contact Us</a></li>
              <div className={styles.iconContainer}>
                <li>
                  <a href="#">
                    <img src="/Navbar/notification.svg" alt="Notification" className={styles.notificationIcon} />
                    <span className={styles.notificationSpan}>1</span>
                  </a>
                </li>
                <li>
                  <a href="#" className={styles.profileLink}>
                    <span className={styles.profileIcon}>J</span>John Doe
                  </a>
                </li>
              </div>
            </ul>
            
          </div>
        </div>
        <div className={styles.greeting}>
              Sunday Pick Up/Drop-Off only at Dubai Silicon Oasis & Habtoor Grand Sales Counters | All Rates inclusive of VAT. T&C s apply | Follow us on Social Media for New Offers
            </div>
          {/* Mobile menu toggle button */}
          <div className={styles.mobileToggle} onClick={toggleMobileMenu}>
          <span className={styles.toggleIcon}><img src="./Navbar/Nav-toggle.svg" alt="" /></span>
        </div>
      
    
        {/* Mobile nav menu */}
        <div className={`${styles.mobileNav} ${isMobileMenuOpen ? styles.mobileNavActive : ''}`}>
          <span className={styles.closeIconSpan} onClick={toggleMobileMenu}>
            <img className={styles.closeIcon} src="./Navbar/Nav-close.svg" alt="Close" />
          </span>
          <ul className={styles.navLinks}>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Offers</a></li>
            <li><a href="#">Corporate</a></li>
            <li><a href="#">Personal</a></li>
            <li><a href="#">Locations</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
          <div className={styles.loginSignup}>
            <button className={styles.loginBtn}>Log In/Sign Up</button>
          </div>
        </div>
      </nav>
    );
  };

  export default Navbar;
