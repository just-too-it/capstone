import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { BookingForm } from '.';

const getFormElements = async () => {
  const titleElement = screen.getByText(/table reservation/i);
  const nameInput = await screen.findByRole('textbox', {
    name: /name/i,
  });
  const emailInput = await screen.findByRole('textbox', {
    name: /email/i,
  });
  const guestsInput = await screen.findByRole('spinbutton', {
    name: /guests/i,
  });
  const dateInput = screen.getByTestId('date-picker');
  const timeSelect = await screen.findByRole('combobox', {
    name: /time/i,
  });
  const occasionSelect = await screen.findByRole('combobox', {
    name: /occasion/i,
  });
  const submitButton = await screen.findByRole('button', {
    name: /submit reservation/i,
  });

  return {
    titleElement,
    nameInput,
    emailInput,
    guestsInput,
    dateInput,
    timeSelect,
    occasionSelect,
    submitButton,
  };
};

const renderForm = () => {
  render(
    <MemoryRouter>
      <BookingForm />
    </MemoryRouter>,
  );
};

describe('Form Component', () => {
  it('should render the form with default values', async () => {
    renderForm();
    const {
      titleElement,
      nameInput,
      emailInput,
      guestsInput,
      dateInput,
      timeSelect,
      occasionSelect,
      submitButton,
    } = await getFormElements();

    expect(titleElement).toBeInTheDocument();
    expect(nameInput).toHaveValue('');
    expect(emailInput).toHaveValue('');
    expect(guestsInput).toHaveValue(1);
    expect(dateInput).toBeInTheDocument();
    expect(timeSelect).toBeInTheDocument();
    expect(occasionSelect).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });
});
