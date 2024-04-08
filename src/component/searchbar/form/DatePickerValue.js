import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function DatePickerValue(props) {
  
  const handleDateChange = (ndate) => {
    // Format the date to the desired format
    const formattedDate = ndate ? `${ndate.$y}-${ndate.$M+1}-${ndate.$D}` : ''; // Format example: dd-Mon-yyyy
    console.log("Formatted Date:", formattedDate);
    props.setDate(formattedDate);
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        
        <DatePicker
          label={props.label}
          value={dayjs(props.date)}
          
          onChange={(newValue) => {handleDateChange(newValue)}}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}

