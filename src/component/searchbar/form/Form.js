import { useState } from 'react';
import PassengerClass from './PassengerClass'
import Menu from './Menu'
import dayjs from 'dayjs';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import DatePickerValue from './DatePickerValue';
import TextField from '@mui/material/TextField';
import SearchBtn from './SearchBtn';
function Form()
{
    const d=new Date()
    const curDate=`${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`
    const [source,setSource]=useState(" ");
    const [date,setDate]=useState(curDate)

    return (
        <>
        
        <form style={{fontSize:"30px",display:'flex',}}>
            <div style={{display:'flex', margin:"5%", padding:"10px"}}>
            
           <div style={{margin:"8px"}}><TextField id="outlined-basic" label="From" variant="outlined" onChange={(e)=>{setSource(e.target.value);}} /></div> 
           <div style={{margin:"8px"}}><TextField id="outlined-basic" label="To" variant="outlined" /></div> 
            <div><DatePickerValue label="Departure" date={date} setDate={setDate}/></div>
            
            <div><Menu/></div>
            <div>
                <SearchBtn/>
            </div>
            </div>
        </form>
    
        
        

        </>
    );

}
export default Form;