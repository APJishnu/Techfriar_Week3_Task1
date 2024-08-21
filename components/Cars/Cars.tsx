import React from 'react';
import styles from './Cars.module.css';

// Type for car data
interface Car {
  imageSrc: string;
  heading: string;
  description: string;
  people: number;
  transmission: string;
  doors: number;
  ac: boolean;
  price: string;
}

// Car data
const carData: Car[] = [
  {
    imageSrc: './Cars/car1.svg',
    heading: 'Mitsubishi Eclipse',
    description: 'Eclipse Cross is a fusion of sharp coupe looks and dynamic SUV mobility with signature Mitsubishi styling, technology, and driving confidence.',
    people: 6,
    transmission: 'Automatic',
    doors: 5,
    ac: true,
    price: 'AED 2700 / Monthly'
  },
  {
    imageSrc: './Cars/car2.svg',
    heading: 'Toyota Corolla',
    description: 'The Toyota Corolla is known for its reliability, fuel efficiency, and comfort. A perfect blend of style and substance.',
    people: 5,
    transmission: 'Manual',
    doors: 4,
    ac: true,
    price: 'AED 2000 / Monthly'
  },
  {
    imageSrc: './Cars/car1.svg',
    heading: 'Mitsubishi Eclipse',
    description: 'Eclipse Cross is a fusion of sharp coupe looks and dynamic SUV mobility with signature Mitsubishi styling, technology, and driving confidence.',
    people: 6,
    transmission: 'Automatic',
    doors: 5,
    ac: true,
    price: 'AED 2700 / Monthly'
  },
  {
    imageSrc: './Cars/car2.svg',
    heading: 'Toyota Corolla',
    description: 'The Toyota Corolla is known for its reliability, fuel efficiency, and comfort. A perfect blend of style and substance.',
    people: 5,
    transmission: 'Manual',
    doors: 4,
    ac: true,
    price: 'AED 2000 / Monthly'
  },
  // Add more car objects as needed
];

const Cars: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headingMpc}>
        Most popular cars
      </div>

      <div className={styles.carsMainContainer}>
        <div className={styles.carsContainer}>
          {carData.map((car, index) => (
            <div key={index} className={styles.cars}>
              <img src={car.imageSrc} alt={car.heading} className={styles.carImage} />
              <div className={styles.carDetails}>
                <p className={styles.headingP}>{car.heading}</p>
                <p className={styles.contentP}>{car.description}</p>
                <ul className={styles.carDetailsLists}>
                  <li><img src="./Cars/6people.svg" alt="People" className={styles.icon} />{car.people} people</li>
                  <li><img src="./Cars/automatic.svg" alt="Transmission" className={styles.icon} />{car.transmission}</li>
                  <li><img src="./Cars/5doors.svg" alt="Doors" className={styles.icon} />{car.doors} Doors</li>
                  <li><img src="./Cars/Ac.svg" alt="AC" className={styles.icon} />{car.ac ? 'AC' : 'No AC'}</li>
                </ul>
                <div className={styles.carPriceBooking}>
                  <p className={styles.priceP}>{car.price}</p>
                  <button className={styles.carPriceBtn}>Book Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cars;
