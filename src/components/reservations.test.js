import { render, screen } from "@testing-library/react";
import Reservations from './reservations';

test('Form Elements Present', () => {
    render(<Reservations />);

    const header = screen.getByText('Table Reservation');
    expect(header).toBeInstanceOf(HTMLHeadingElement);

    const dateLabel = screen.getByText("Date");
    expect(dateLabel).toBeInstanceOf(HTMLLabelElement);

    const dateInput = screen.getByLabelText('Date');
    expect(dateInput).toBeInstanceOf(HTMLInputElement);

    const timeLabel = screen.getByText("Time");
    expect(timeLabel).toBeInstanceOf(HTMLLabelElement);

    const timeSelect = screen.getByLabelText("Time");
    expect(timeSelect).toBeInstanceOf(HTMLSelectElement);

    const guestLabel = screen.getByText("Number of guests");
    expect(guestLabel).toBeInstanceOf(HTMLLabelElement);

    const guestInput = screen.getByLabelText('Number of guests');
    expect(guestInput).toBeInstanceOf(HTMLInputElement);

    const occassionLabel = screen.getByText("Occasion");
    expect(occassionLabel).toBeInstanceOf(HTMLLabelElement);

    const ocassionSelect = screen.getByLabelText("Occasion");
    expect(ocassionSelect).toBeInstanceOf(HTMLSelectElement);
    
    const submitBtn = screen.getByRole("submitBtn");
    expect(submitBtn).toBeInstanceOf(HTMLInputElement);
});