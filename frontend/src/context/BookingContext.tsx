import React, { createContext, useContext, useState } from 'react';

type Booking = {
  id: number;
  petName: string;
  date: string;
};

type BookingContextType = {
  bookings: Booking[];
  addBooking: (booking: Booking) => void;
};

export const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
};

type BookingProviderProps = {
  children: React.ReactNode;
};

export const BookingProvider: React.FC<BookingProviderProps> = ({ children }) => {
  const [bookings, setBookings] = useState<Booking[]>([]);

  const addBooking = (booking: Booking) => {
    setBookings((prevBookings) => [...prevBookings, booking]);
  };

  return (
    <BookingContext.Provider value={{ bookings, addBooking }}>
      {children}
    </BookingContext.Provider>
  );
};
