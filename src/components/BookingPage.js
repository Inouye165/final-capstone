import React, { useState, useEffect } from 'react';
import Reservations from './reservations';

// Function to initialize and update available times
const fetchAvailableTimes = async (date) => {
    const times = await fetchAPI(date); // Wait for the API to respond
    return times;
};

function BookingPage() {
    const [formResData, setFormResData] = useState({
        date: "",
        time: "",
        guests: 1,
        occasion: "",
    });
    const [availableTimes, setAvailableTimes] = useState([]); // State for times

    // Fetch available times on component load or when the date changes
    useEffect(() => {
        if (formResData.date) {
            const fetchTimes = async () => {
                const times = await fetchAvailableTimes(new Date(formResData.date)); // Waits for data
                setAvailableTimes(times); // Sets the state after data is fetched
            };
            fetchTimes(); // Calls the async function to fetch and set times
        }
    }, [formResData.date]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormResData({
            ...formResData,
            [name]: value,
        });
    };

    return (
        <div>
            <h2>Make a Reservation</h2>
            <Reservations
                formResData={formResData}
                handleChange={handleChange}
                availableTimes={availableTimes} // Pass available times to Reservations
            />
        </div>
    );
}

export default BookingPage;
