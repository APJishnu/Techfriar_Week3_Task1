import React from 'react';
import styles from './Guildlines.module.css';

const Guildlines: React.FC = () => {
  return (
    <>
      {/* Guildlines Heading */}
      <div className={styles.headingGuildlines}>
        <p>Rent/Lease In Three Easy Steps</p>
      </div>

      {/* Guide Section Layer 5 */}
      <div className={styles.layer5}>
        <div className={styles.guildlinesMain}>
          <div className={styles.guildlinesMainDiv}>
            {/* First Step */}
            <div className={styles.stepContainer}>
              <div className={styles.numberIcon}>
                <img src="/Guildlines/number1.svg" alt="Step 1" />
              </div>
              <div className={styles.guildline}>
                <img src="/Guildlines/guildlines-logo-1.svg" alt="Logo 1" className={styles.guildlineImg} />
                <p className={styles.guildlinesParagraph}>
                  Select the location. Browse through our available options and find the perfect car to suit your needs.
                </p>
              </div>
            </div>

            {/* Second Step */}
            <div className={styles.stepContainer}>
              <div className={styles.numberIcon}>
                <img src="/Guildlines/number2.svg" alt="Step 2" />
              </div>
              <div className={styles.guildline}>
                <img src="/Guildlines/guildlines-logo-2.svg" alt="Logo 2" className={styles.guildlineImg} />
                <p className={styles.guildlinesParagraph}>
                  Choose your desired Pick-Up date and time.
                </p>
              </div>
            </div>

            {/* Third Step */}
            <div className={styles.stepContainer}>
              <div className={styles.numberIcon}>
                <img src="/Guildlines/number3.svg" alt="Step 3" />
              </div>
              <div className={styles.guildline}>
                <img src="/Guildlines/guildlines-logo-3.svg" alt="Logo 3" className={styles.guildlineImg} />
                <p className={styles.guildlinesParagraph}>
                  Make payment and book the car. Select an option to either have the car delivered to your location or pick it up directly from us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Guildlines;
