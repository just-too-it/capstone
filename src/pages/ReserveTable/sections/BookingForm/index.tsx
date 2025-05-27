import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import {
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  FormHelperText,
  Box,
  CircularProgress,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';

import styles from './styles.module.scss';
import { Button } from '../../../../shared/ui/components';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../../../shared/constants/paths';

declare global {
  interface Window {
    fetchAPI: (date: Date) => string[];
    submitAPI: (formData: any) => true;
  }
}

interface BookingFormValues {
  name: string;
  email: string;
  guests: number;
  date: Dayjs | null;
  time: string;
  occasion: string;
}

const occasions = ['Birthday', 'Anniversary', 'Wedding', 'Business', 'Other'];

const validationSchema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  guests: yup
    .number()
    .min(1, 'At least 1 guest')
    .max(10, 'Max 10 guests')
    .required('Number of guests is required'),
  date: yup.mixed().required('Date is required'),
  time: yup.string().required('Time is required'),
  occasion: yup.string().required('Occasion is required'),
});

export const BookingForm = () => {
  const navigate = useNavigate();
  const [timeSlots, setTimeSlots] = useState<string[]>([]);
  const [loadingTimeSlots, setLoadingTimeSlots] = useState(false);
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [isBookingConfirmed, setIsBookingConfirmed] = useState(false);

  const submitData = async (values: BookingFormValues) => {
    const submissionData = {
      ...values,
      date: values.date?.format('YYYY-MM-DD'),
    };
    setLoadingSubmit(true);
    try {
      const result = await new Promise<boolean>(resolve => {
        setTimeout(() => {
          resolve(window.submitAPI(submissionData));
        }, 2000);
      });
      setIsBookingConfirmed(result);
    } catch (error) {
      console.error('Error result:', error);
    } finally {
      setLoadingSubmit(false);
    }
  };

  const formik = useFormik<BookingFormValues>({
    initialValues: {
      name: '',
      email: '',
      guests: 1,
      date: null,
      time: '',
      occasion: '',
    },
    validationSchema,
    onSubmit: submitData,
  });

  const fetchTimeSlots = async (date: Dayjs) => {
    setLoadingTimeSlots(true);
    setTimeSlots([]);

    try {
      const availableTimes = await new Promise<string[]>(resolve => {
        setTimeout(() => {
          resolve(window.fetchAPI(date.toDate()));
        }, 2000);
      });

      setTimeSlots(availableTimes);
    } catch (error) {
      console.error('Error fetching times:', error);
    } finally {
      setLoadingTimeSlots(false);
    }
  };

  const handleDateChange = (date: Dayjs | null) => {
    formik.setFieldValue('date', date, true);
    formik.setFieldTouched('date', true, false);
    formik.setFieldValue('time', '', false);

    if (date) {
      fetchTimeSlots(date);
    } else {
      setTimeSlots([]);
    }
  };

  useEffect(() => {
    if (isBookingConfirmed) {
      navigate(PATHS.confirm);
    }
  }, [isBookingConfirmed, navigate]);

  return (
    <main>
      <h2 className={styles.title}>Table Reservation</h2>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Box
          component='form'
          onSubmit={formik.handleSubmit}
          sx={{ maxWidth: 500, mx: 'auto', p: 3 }}>
          <TextField
            fullWidth
            id='name'
            name='name'
            label='Full Name'
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
            margin='normal'
          />

          <TextField
            fullWidth
            id='email'
            name='email'
            label='Email'
            type='email'
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            margin='normal'
          />

          <TextField
            fullWidth
            id='guests'
            name='guests'
            label='Number of Guests'
            type='number'
            inputProps={{ min: 1, max: 10 }}
            value={formik.values.guests}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.guests && Boolean(formik.errors.guests)}
            helperText={formik.touched.guests && formik.errors.guests}
            margin='normal'
          />

          <DatePicker
            label='Reservation Date'
            value={formik.values.date}
            onChange={handleDateChange}
            minDate={dayjs()}
            slotProps={{
              textField: {
                fullWidth: true,
                margin: 'normal',
                error: formik.touched.date && Boolean(formik.errors.date),
                helperText: formik.touched.date && formik.errors.date,
              },
            }}
          />

          <FormControl
            fullWidth
            margin='normal'
            error={formik.touched.time && Boolean(formik.errors.time)}>
            {loadingTimeSlots ? (
              <Box sx={{ display: 'flex', justifyContent: 'center', p: 2 }}>
                <CircularProgress size={24} />
              </Box>
            ) : (
              <>
                <InputLabel id='time-label'>Time</InputLabel>
                <Select
                  labelId='time-label'
                  id='time'
                  name='time'
                  value={formik.values.time}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  disabled={!formik.values.date || loadingTimeSlots}
                  label='Time'>
                  {loadingTimeSlots ? (
                    <Box sx={{ display: 'flex', justifyContent: 'center', p: 2 }}>
                      <CircularProgress size={24} />
                    </Box>
                  ) : timeSlots.length > 0 ? (
                    timeSlots.map(slot => (
                      <MenuItem key={slot} value={slot}>
                        {slot}
                      </MenuItem>
                    ))
                  ) : (
                    <MenuItem disabled>
                      {formik.values.date ? 'No available times' : 'Select date first'}
                    </MenuItem>
                  )}
                </Select>
              </>
            )}

            <FormHelperText>{formik.touched.time && formik.errors.time}</FormHelperText>
          </FormControl>

          <FormControl
            fullWidth
            margin='normal'
            error={formik.touched.occasion && Boolean(formik.errors.occasion)}>
            <InputLabel id='occasion-label'>Occasion</InputLabel>
            <Select
              labelId='occasion-label'
              id='occasion'
              name='occasion'
              value={formik.values.occasion}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              label='Occasion'>
              {occasions.map(option => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText>{formik.touched.occasion && formik.errors.occasion}</FormHelperText>
          </FormControl>

          <Button
            type='submit'
            disabled={!formik.isValid || !formik.dirty || loadingTimeSlots}
            className={styles.button}>
            {loadingSubmit ? (
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <CircularProgress size={24} />
              </Box>
            ) : (
              'Submit Reservation'
            )}
          </Button>
        </Box>
      </LocalizationProvider>
    </main>
  );
};
