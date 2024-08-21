// Location.tsx
import styles from './Location.module.css';
import Image from 'next/image';

const Location = () => {
  const locations = [
    { name: "Dubai", imgSrc: "/Location/layer-6-location.svg" },
    { name: "Abu Dhabi", imgSrc: "/Location/layer-6-location.svg" },
    { name: "Sharjah", imgSrc: "/Location/layer-6-location.svg" },
    { name: "Fujairah", imgSrc: "/Location/layer-6-location.svg" },
    { name: "Ras Al Khaimah", imgSrc: "/Location/layer-6-location.svg" },
  ];

  return (
    <div className={styles.layer_6}>
      <div className={styles.layer6Container}>
        {/* Heading for the locations section */}
        <div className={styles.layer6HeadingDiv}>
          <p className={styles.layer6Heading}>Locations</p>
        </div>

        {/* List of locations */}
        <ul className={styles.layer6Locations}>
          {locations.map((location, index) => (
            <li key={index}>
              <Image src={location.imgSrc} alt={`${location.name} location`} width={24} height={24} />
              <p>{location.name}</p>
              {/* Add vertical line unless it's the last item */}
              {index < locations.length - 1 && <span className={styles.verticalLine}></span>}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Location;
