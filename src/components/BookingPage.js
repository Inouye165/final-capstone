// BookingPage.js
import React, { useState, useEffect } from 'react';
import Reservations from './reservations';
// If fetchAPI is available globally via a script tag, you may not need to import it.
// Otherwise, import it if it's in a module.
import { fetchAPI } from './api'; // Adjust the path if needed

function BookingPage() {
  const [formResData, setFormResData] = useState({
    date: '',
    time: '',
    guests: 1,
    occasion: '',
  });

  const [availableTimes, setAvailableTimes] = useState([]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(`Field changed: ${name} = ${value}`);
    setFormResData({
      ...formResData,
      [name]: value,
    });
  };

  useEffect(() => {
    if (formResData.date) {
      const fetchTimes = async () => {
        const selectedDate = new Date(formResData.date);
        console.log('Fetching available times for:', selectedDate); // Log the date
        const times = await fetchAPI(selectedDate);
        console.log('Fetched times:', times);
        setAvailableTimes(times);
      };
      fetchTimes();
    }
  }, [formResData.date]);
  
  return (
    <div>
      <h2>Make a Reservation</h2>
      <Reservations
        formResData={formResData}
        handleChange={handleChange}
        availableTimes={availableTimes}
      />
    </div>
  );
}

export default BookingPage;
