// BookingPage.js
import React, { useState, useEffect } from 'react';
import Reservations from './reservations';
import BookingTable from './BookingTable';
import { fetchAPI } from './api';

function BookingPage() {
  const [formResData, setFormResData] = useState({
    date: '',
    time: '',
    guests: 1,
    occasion: '',
  });
  const [availableTimes, setAvailableTimes] = useState([]);
  const [bookings, setBookings] = useState([]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormResData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setBookings((prevBookings) => [...prevBookings, formResData]);
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
        onSubmit={handleSubmit} // Ensure handleSubmit is passed here
      />
      <h2>Reservations</h2>
      <BookingTable bookings={bookings} />
    </div>
  );
}

export default BookingPage;
