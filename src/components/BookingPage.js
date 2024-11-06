// BookingPage.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Reservations from './reservations';
import BookingTable from './BookingTable';
import { fetchAPI, submitAPI } from './api';

function BookingPage() {
  const [formResData, setFormResData] = useState({
    date: '',
    time: '',
    guests: 1,
    occasion: '',
  });
  const [availableTimes, setAvailableTimes] = useState([]);
  const [bookings, setBookings] = useState(() => {
    // Load bookings from local storage on initial render
    const savedBookings = localStorage.getItem('bookings');
    return savedBookings ? JSON.parse(savedBookings) : [];
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormResData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const response = submitAPI(formResData);
    if (response === true) {
      // Update bookings state
      const updatedBookings = [...bookings, formResData];
      setBookings(updatedBookings);
  
      // Save updated bookings array to local storage
      localStorage.setItem('bookings', JSON.stringify(updatedBookings)); 
  
      navigate('/confirmed');
    } else { 
      // ... error handling ...
    }
  };

  useEffect(() => {
    if (formResData.date) {
      const fetchTimes = async () => {
        const selectedDate = new Date(formResData.date).toISOString().split('T')[0];
        const times = await fetchAPI(selectedDate);
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
        onSubmit={handleSubmit}
      />
      <h2>Reservations</h2>
      <BookingTable bookings={bookings} />
    </div>
  );
}

export default BookingPage;
