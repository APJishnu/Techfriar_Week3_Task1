"use client";

import React, { useState } from "react";
import styles from "./HeroSection.module.css";
import DateComponent from "../Date/Date.module";

const HeroSection: React.FC = () => {
  const [showTripOptions, setShowTripOptions] = useState(false);
  const [showPickupOptions, setShowPickupOptions] = useState(false);
  const [showDropoffOptions, setShowDropoffOptions] = useState(false);
  const [activeButton, setActiveButton] = useState<string | null>(null);
  const [selectedOption, setSelectedOption] = useState<'pickup' | 'dropoff'>('pickup');

  const handleButtonClick = (option: 'pickup' | 'dropoff') => {
    setSelectedOption(option);
  };

  // Function to handle toggling of trip options
  const toggleTripOptions = () => {
    setShowTripOptions(prev => !prev);
    if (!showTripOptions) {
      setActiveButton('bookCarBtn'); // Set activeButton to 'bookCarBtn' if opening trip options
    } else {
      setActiveButton(null); // Remove activeButton if closing trip options
    }
  };

  // Function to handle toggling of pick-up options
  const togglePickupOptions = () => {
    setShowPickupOptions(prev => !prev);
    setShowDropoffOptions(false); // Hide drop-off options when pick-up is selected
    setActiveButton('samePickUpBtn'); // Set activeButton to 'samePickUpBtn'
  };

  // Function to handle toggling of drop-off options
  const toggleDropoffOptions = () => {
    setShowDropoffOptions(prev => !prev);
    setShowPickupOptions(false); // Hide pick-up options when drop-off is selected
    setActiveButton('differentDropOffBtn'); // Set activeButton to 'differentDropOffBtn'
  };




  const [isTripOptionsVisible, setIsTripOptionsVisible] = useState<boolean>(false);
  const [activeOption, setActiveOption] = useState<'samePickUp' | 'differentDropOff' | null>(null);
  const [isPickUpOptionsVisible, setIsPickUpOptionsVisible] = useState<boolean>(false); // Set to true to show by default
  const [isDropOffOptionsVisible, setIsDropOffOptionsVisible] = useState<boolean>(false); // Set to true to show by default

  const handleBookCarClick = () => {
    setIsTripOptionsVisible(!isTripOptionsVisible);
  };

  const handleSamePickUpClick = () => {
    setActiveOption('samePickUp');
    setIsPickUpOptionsVisible(true);
    setIsDropOffOptionsVisible(false);
  };

  const handleDifferentDropOffClick = () => {
    setActiveOption('differentDropOff');
    setIsDropOffOptionsVisible(true);
    setIsPickUpOptionsVisible(false);
  };

  return (
    <div className={styles.mainContainer}>
      <section className={styles.hero}>
        {/* Desktop View */}
        <div className={styles.quickPickup}>
          <div className={styles.slideInButton1}>
            <button className={styles.slideInContents}>
              <img className={styles.contactImg} src="../HeroSection/contact-icon.svg" alt="Contact" />
              <p>8714804072</p>
            </button>
          </div>

          <div className={styles.slideInButton2}>
            <button className={styles.slideInContents}>
              <img className={styles.customerImg} src="../HeroSection/customer-service-icon.svg" alt="Customer Service" />
              <p>8714804072</p>
            </button>
          </div>

          <div className={styles.pickupOptions}>
            <button
              className={`${styles.pickupLink} ${selectedOption === 'pickup' ? styles.active : ''}`}
              onClick={() => handleButtonClick('pickup')}
            >
              Same as Pick-Up <span className={styles.line}></span>
            </button>
            <button
              className={`${styles.pickupLink} ${selectedOption === 'dropoff' ? styles.active : ''}`}
              onClick={() => handleButtonClick('dropoff')}
            >
              Different Drop-Off <span className={styles.line}></span>
            </button>
            <select name="vehicle" className={styles.vehicleType}>
              <option value="" disabled>Select vehicle type</option>
              <option value="sedan">Sedan</option>
              <option value="coupe">Coupe</option>
              <option value="suv">SUV</option>
            </select>
          </div>

          <div className={styles.additionalDetails}>
            <div className={styles.location}>
              <select name="place" className={styles.locationList}>
                <option value="al-quoz">Al Quoz</option>
                <option value="al-barsha">Al Barsha</option>
                <option value="al-satwa">Al Satwa</option>
              </select>
              <img src="../HeroSection/arrow.svg" alt="Location" className={styles.mapPin} />
            </div>

            {/* Conditionally render location2 */}
            <div className={`${styles.location2} ${selectedOption === 'pickup' ? styles.hidden : ''}`}>
              <select name="place" className={styles.locationList2}>
                <option value="al-quoz">Al Quoz</option>
                <option value="al-barsha">Al Barsha</option>
                <option value="al-satwa">Al Satwa</option>
              </select>
              <img src="../HeroSection/arrow.svg" alt="Location" className={styles.mapPin} />
            </div>

            <DateComponent />
      
            <div className={styles.searchButton}>
              <button>
                <img src="../HeroSection/search_icon.svg" alt="Search" />
              </button>
            </div>

            <span className={styles.verticalLine}></span>

            <div className={styles.quickBook}>
              <button>Quick Book</button>
            </div>
          </div>

          <div className={styles.downloadLinks}>
            <p className={styles.downloadDescription}>
              Download our App for easy accessibility anytime, anywhere!
            </p>
            <div className={styles.applinks}>
              <a href="#">
                <img src="../HeroSection/apple-store.svg" alt="Apple Store" />
              </a>
              <a href="#">
                <img src="../HeroSection/google-play.svg" alt="Google Play" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className={styles.mobileBookingContainer}>
        <div className={styles.mobileBookingSection}>
      <div className={styles.mobileBookingButtons}>
        <button 
          id="bookCarBtn" 
          className={`${styles.mobileBookingButton} ${isTripOptionsVisible ? styles.activeButton : ''}`} 
          onClick={handleBookCarClick}
        >
          Book a Car
        </button>
        <button 
          id="quickBookBtn" 
          className={`${styles.mobileBookingButton} ${styles.outline} ${!isTripOptionsVisible ? styles.activeButton : ''}`}
        >
          Quick Book
        </button>
      </div>

      {isTripOptionsVisible && (
        <div id="tripOptions" className={styles.tripOptionsContainer}>
          <div className={styles.selectorOptions}>
            <button 
              className={`${styles.selectorOption} ${activeOption === 'samePickUp' ? styles.focused : ''}`} 
              id="samePickUpBtn"
              onClick={handleSamePickUpClick}
            >
              Same as Pick-Up <span className={styles.line}></span>
            </button>
            <button 
              className={`${styles.selectorOption} ${activeOption === 'differentDropOff' ? styles.focused : ''}`} 
              id="differentDropOffBtn"
              onClick={handleDifferentDropOffClick}
            >
              Different Drop-Off <span className={styles.line}></span>
            </button>
            <select className={styles.selectorOption} id="vehicleTypeSelect">
              <option value="" disabled selected>Vehicle Type</option>
              <option value="car">Car</option>
              <option value="bike">Bike</option>
            </select>
          </div>

          {isPickUpOptionsVisible && (
            <div id="pickUpOptions" className={styles.dropdownOptions}>
              <select>
                <option value="location1">Pick-Up Location</option>
                <option value="location2">Location 2</option>
              </select>
              <input type="datetime-local" defaultValue={new Date().toISOString().slice(0,16)} />
              <input type="datetime-local" defaultValue={new Date().toISOString().slice(0,16)} />
            </div>
          )}

          {isDropOffOptionsVisible && (
            <div id="dropOffOptions" className={styles.dropdownOptions}>
              <select>
                <option value="location1">Pick-Up Location</option>
                <option value="location2">Location 2</option>
              </select>
              <select>
                <option value="location3">Drop-Off Location</option>
                <option value="location4">Location 4</option>
              </select>
              <input type="datetime-local" defaultValue={new Date().toISOString().slice(0,16)} />
              <input type="datetime-local" defaultValue={new Date().toISOString().slice(0,16)} />
            </div>
          )}

          <div className={styles.searchButtonDiv}>
            <button className={styles.searchButton}>Search</button>
          </div>
        </div>
      )}
    </div>
    </div>
    </div>
  );
};

export default HeroSection;
