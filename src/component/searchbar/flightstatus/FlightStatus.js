import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from "react";
import Button from '@mui/material/Button';
function FlightStatus()
{
    const [bookingNo, setBookingNo] = useState(null);
    const [name, setName] = useState(null);
    return(<>
    <div style={{display:'flex', alignItems:'center', justifyContent:'space-evenly', margin:'5%'}}>

    <div>
    <TextField
        id="outlined-controlled"
        label="PNR/Booking Reference"
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      </div>
      <div>

      
      <TextField
        id="outlined-controlled"
        label="Email"
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      </div>
      <div>

      
      <Button variant="contained">Contained</Button>
      </div>
      </div>
    </>)
}
export default FlightStatus;