// BookingTable.js
import React from 'react';

function BookingTable({ bookings }) {
  console.log("Data in BookingTable:", bookings); // Log to confirm data received

  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Time</th>
          <th>Guests</th>
          <th>Occasion</th>
        </tr>
      </thead>
      <tbody>
        {bookings.length > 0 ? (
          bookings.map((booking, index) => (
            <tr key={index}>
              <td>{booking.date}</td>
              <td>{booking.time}</td>
              <td>{booking.guests}</td>
              <td>{booking.occasion}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="4">No reservations made yet.</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default BookingTable;
