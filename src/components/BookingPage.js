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
    const savedBookings = localStorage.getItem('bookings');
    return savedBookings ? JSON.parse(savedBookings) : [];
  });
  const [error, setError] = useState('');
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
      const updatedBookings = [...bookings, formResData];
      setBookings(updatedBookings);
      localStorage.setItem('bookings', JSON.stringify(updatedBookings));
      navigate('/confirmed');
    } else {
      setError('There was an error submitting your booking. Please try again.');
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
      {error && (
        <div role="alert" aria-live="assertive" style={{ color: 'red' }}>
          {error}
        </div>
      )}
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
