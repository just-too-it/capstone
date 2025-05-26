import { useState } from 'react';
import { Footer, Header } from '../../shared/ui/sections';
import { BookingForm } from './sections';

import styles from './styles.module.scss';

export const ReserveTable = () => {
  //TODO: передавать состояние и инфу о свободных столиках в форму бронирования. а обновлять там.
  // const [availableTimes, dispatch] = useReducer(initializeTimes, updateTimes)
  // const updateTimes = () => {}
  //const initializeTimes = () => {}
  return (
    <div className='app-container'>
      <Header />
      <main className={styles.main}>
        <BookingForm />
      </main>
      <Footer />
    </div>
  );
};
