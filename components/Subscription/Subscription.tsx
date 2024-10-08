"use client"
import React, { useState } from 'react';
import styles from './Subscription.module.css';

const Subscription: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [emailError, setEmailError] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the default form submission

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setEmailError('Please enter a valid email address.');
      return;
    }

    if (name && email) {
      setShowPopup(true);
      setName('');
      setEmail('');
      setEmailError(''); // Clear email error message on successful submission
    }
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  return (
    <div>
      {/* Desktop version of subscription and app promotion */}
      <div className={styles.adsWrapper}>
        <div className={styles.adsContainer}>
          <div className={styles.adsDetails}>
            <h2 className={styles.adsHeading}>Subscribe here for exclusive offers and updates!</h2>
            <div className={styles.adsInputFields}>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailError(''); // Clear error message on input change
                }}
              />
            </div>
            {/* Show error message if email is invalid */}
            {emailError && <p className={styles.errorMessage}>{emailError}</p>}

            <p className={styles.adsParagraph}>
              Please Select The Ways You Would Like To Hear From Diamondlease, And Confirm That You re Happy For
              Us To Store Your Data In Line With Our Privacy Policy.
            </p>
            <button className={styles.adsBtn} onClick={handleSubscribe}>Subscribe</button>
          </div>
          {/* App promotion details */}
          <div className={styles.adsDetails2}>
            <div className={styles.mobileImgDiv}>
              <img src="/Subscription/mobile.svg" alt="App preview" className={styles.appImage} />
            </div>
            <div className={styles.mobileDiv2}>
              <p className={styles.paragraph1MobileDiv2}>
                Enter your number and receive a direct link to download the app
              </p>
              <div className={styles.inputDiv}>
                <input type="tel" placeholder="Enter Phone Number" />
              </div>
              <button className={styles.mobileBtn}>Get the link</button>
              <h6>Get it on</h6>
              <div className={styles.mobileLinks}>
                <a href="#"><img src="/Subscription/apple-store-transparent.svg" alt="App Store" /></a>
                <a href="#"><img src="/Subscription/google-play-transparent.svg" alt="Google Play" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile version of subscription and app promotion */}
      <div className={styles.subscriptionContainer}>
        <h2 className={styles.subscribeHeader}>Subscribe here for exclusive offers and updates!</h2>
        <form className={styles.subscriptionForm} onSubmit={handleSubscribe} noValidate>

          <input
            type="text"
            placeholder="Name"
            className={styles.inputField}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className={styles.inputField}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailError(''); // Clear error message on input change
            }}
          />


          {/* Show error message if email is invalid */}
          {emailError && <p className={styles.errorMessage}>{emailError}</p>}
          <p className={styles.privacyText}>
            Please Select The Ways You Would Like To Hear From Diamondlease, And Confirm That You re Happy For Us To
            Store Your Data In Line With Our Privacy Policy.
          </p>
          <button type="submit" className={styles.subscribeButton}>Subscribe</button>

        </form>
        {/* App promotion section */}
        <div className={styles.appPromoContainer}>
          <div className={styles.appStores}>
            <div className={styles.imgPhoneDiv}>
              <img src="/Subscription/mobile.svg" alt="App preview" className={styles.appImage} />
            </div>
            <div className={styles.appStoresGetItOn}>
              <p className={styles.getItOn}>Get it on</p>
              <div className={styles.getLinkImgDiv}>
                <img src="/Subscription/apple-store-transparent.svg" alt="App Store" className={styles.storeBadge} />
                <img src="/Subscription/google-play-transparent.svg" alt="Google Play" className={styles.storeBadge} />
              </div>
              <p className={styles.promoText}>
                Enter your number and receive a direct link to download the app
              </p>
            </div>
          </div>
          <div className={styles.inputTagAndButtonDiv}>
            <div className={styles.Input}><input type="tel" placeholder="Enter Phone Number" className={styles.inputField} /></div>
          </div>
          <div className={styles.GetTheLinkDiv}><button className={styles.getLinkButton}>Get the link</button></div>

        </div>
      </div>

      {/* Popup Message */}
      {showPopup && (
        <div className={styles.popup}>
          <div className={styles.popupContent}>
            <p>Subscribed successfully!</p>
            <button className={styles.popupClose} onClick={handlePopupClose}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Subscription;
