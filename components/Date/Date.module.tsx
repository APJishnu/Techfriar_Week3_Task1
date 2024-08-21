"use client"

// Date.module.tsx
import React, { useState, useEffect } from 'react';
import styles from './Date.module.css'; // Adjust the path as needed

const DateComponent: React.FC = () => {
  const [showDateTimePicker, setShowDateTimePicker] = useState(false);
  const [showArrivalDateTimePicker, setShowArrivalDateTimePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string>(new Date().toISOString().split('T')[0]); // Initialize with current date
  const [selectedTime, setSelectedTime] = useState<string>(new Date().toTimeString().split(' ')[0].substring(0, 5)); // Initialize with current time
  const [selectedArrivalDate, setSelectedArrivalDate] = useState<string>(new Date().toISOString().split('T')[0]); // Initialize with current date
  const [selectedArrivalTime, setSelectedArrivalTime] = useState<string>(new Date().toTimeString().split(' ')[0].substring(0, 5)); // Initialize with current time

  // UseEffect to handle updates to the state
  useEffect(() => {
    // Initialize state with the current date and time
    const now = new Date();
    setSelectedDate(now.toISOString().split('T')[0]);
    setSelectedTime(now.toTimeString().split(' ')[0].substring(0, 5));
    setSelectedArrivalDate(now.toISOString().split('T')[0]);
    setSelectedArrivalTime(now.toTimeString().split(' ')[0].substring(0, 5));
  }, []);

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(e.target.value);
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedTime(e.target.value);
  };

  const handleArrivalDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedArrivalDate(e.target.value);
  };

  const handleArrivalTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedArrivalTime(e.target.value);
  };

  // Prevent closing the picker when clicking inside it
  const handleDateTimePickerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <>
      <div className={styles.pickupTime} onClick={() => setShowDateTimePicker(prev => !prev)}>
        <span className={styles.date}>{selectedDate}</span>
        <span className={styles.time}>{selectedTime}</span>
        {showDateTimePicker && (
          <div className={styles.dateTimePicker} onClick={handleDateTimePickerClick}>
            <input type="date" value={selectedDate} onChange={handleDateChange} />
            <input type="time" value={selectedTime} onChange={handleTimeChange} />
            <button onClick={() => setShowDateTimePicker(false)}>Set</button>
          </div>
        )}
      </div>

      <div className={styles.pickupTime} onClick={() => setShowArrivalDateTimePicker(prev => !prev)}>
        <span className={styles.date}>{selectedArrivalDate}</span>
        <span className={styles.time}>{selectedArrivalTime}</span>
        {showArrivalDateTimePicker && (
          <div className={styles.arrivalDateTimePicker} onClick={handleDateTimePickerClick}>
            <input type="date" value={selectedArrivalDate} onChange={handleArrivalDateChange} />
            <input type="time" value={selectedArrivalTime} onChange={handleArrivalTimeChange} />
            <button onClick={() => setShowArrivalDateTimePicker(false)}>Set</button>
          </div>
        )}
      </div>
    </>
  );
};
export default DateComponent;
