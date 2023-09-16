import React, { useState } from "react";
import {DatePicker} from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Importa el estilo

export function DateSelector() {
  const [selectedDate, setSelectedDate] = useState('');

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
console.log('entra a dateselector')
  return (
    <div>
        {console.log('entra al div')}
   
    </div>
  );
}
