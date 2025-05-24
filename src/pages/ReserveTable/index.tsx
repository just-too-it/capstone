import { useState } from 'react';
import { Header } from '../../shared/ui/sections';
import { BookingForm } from './sections';

export const ReserveTable = () => {
  //TODO: передавать состояние и инфу о свободных столиках в форму бронирования. а обновлять там.
  // const [availableTimes, dispatch] = useReducer(initializeTimes, updateTimes)
  // const updateTimes = () => {}
  //const initializeTimes = () => {}
  return (
    <>
      <Header />
      <BookingForm />
    </>
  );
};
