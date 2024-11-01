// BookingPage.js
import React, { useState, useEffect } from 'react';
import Reservations from './reservations';
// If fetchAPI is available globally via a script tag, you may not need to import it.
// Otherwise, import it if it's in a module.
import { fetchAPI } from './api'; // Adjust the path if needed
// Inside BookingPage.js, at the top of the file or inside useEffect
console.log("Is fetchAPI available:", typeof fetchAPI !== "undefined");

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
    console.log(`Field changed: ${name} = ${value}`); // Log each change
  
    setFormResData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  
   

  useEffect(() => {
    console.log('useEffect triggered with date:', formResData.date);
    
    const fetchTimes = async () => {
      const selectedDate = new Date(formResData.date).toISOString().split('T')[0]; // Use the selected date
      console.log('Formatted date for fetchAPI:', selectedDate);
  
      try {
        const times = await fetchAPI(selectedDate);
        if (Array.isArray(times) && times.length === 0) {
          console.log('fetchAPI returned an empty array.');
        } else {
          console.log('Times returned from fetchAPI:', times);
        }
        setAvailableTimes(times);
      } catch (error) {
        console.error('Error fetching times:', error);
      }
    };
  
    if (formResData.date) {
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
