import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { FaLocationDot } from "react-icons/fa6";
import Fab from '@mui/material/Fab';

import EditIcon from '@mui/icons-material/Edit';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ViewBooking() {
    const data=[{flightno:'A124', airline:'Indigo', dep_city:'Nagpur', arr_city:'Pune', dep_date:'24-03-24', arr_date:'24:03-24', dep_time:'17:00', arr_time:'18:05', class_type:'economy', noOdAdults:1, noOfChilds:1,total_fare:6525},
    {flightno:'A124', airline:'Indigo', dep_city:'Nagpur', arr_city:'Pune', dep_date:'24-03-24', arr_date:'24:03-24', dep_time:'17:00', arr_time:'18:05', class_type:'economy', noOdAdults:1, noOfChilds:1,total_fare:6525}]
  const [open, setOpen] = React.useState(false);
  const [bookingNo, setBookingNo] = useState(null);
  const [name, setName] = useState(null);
 
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
       

    <div style={{margin:'5%', display:'flex', alignItems:'center', justifyContent:'space-evenly'}}> 
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



      <Button variant="outlined" onClick={handleClickOpen}>
        Show Booking
      </Button>
      </div>
      </div> 
      
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Your Bookings
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              Close
            </Button>
          </Toolbar>
        </AppBar>
        <List>
          {/* <ListItemButton>
            <ListItemText primary="Phone ringtone" secondary="Titania" />
          </ListItemButton>
          <Divider />
          <ListItemButton>
            <ListItemText
              primary="Default notification ringtone"
              secondary="Tethys"
            />
          </ListItemButton> */}
          {
            data.map((data,index)=>(
                <>
                <div style={{display:'flex', alignContent:'center', justifyContent:'space-between', margin:'2%'}}>
            <div>
            <img src='' alt='x'/>
            <h4>{data.airline}</h4>
            </div>
            <div>
                <div>
                    <b>{data.dep_time}</b>
                </div>

                <div>
                    {data.dep_city}
                </div>
            </div>
            {/*  */}
            <div style={{width:'16%', textAlign:'center'}}>
               <div>
                duration
               </div>
               <div style={{display:'flex', width:'100%'}}>
                <div ><FaLocationDot/></div>
                <div style={{width:'90%', margin:'10px 0px 0px 0px'}}>
                    
                <hr/>
                </div>
                
                <div><FaLocationDot/></div>
               </div>
               
            </div>
            {/*  */}
            <div>
                <div>
                    <b>{data.arr_time}</b>
                </div>

                <div>
                    {data.arr_city}
                </div>
            </div>
            {/* date */}
            <div style={{display:'flex', alignItems:'center'}}>
               <b> {data.dep_date}</b>
            </div>
            {/*  */}
            <div style={{display:'flex', alignItems:'center'}}>
               { data.flightno}
            </div>
            <div>
            <Fab color="secondary" aria-label="edit">
              <EditIcon />
            </Fab>
            </div>
            <div>
            <Fab sx={{backgroundColor:'red'}} aria-label="edit">
              <CloseIcon sx={{color:'white'}}/>
            </Fab>
            </div>
          </div>
          <Divider/>
          </>
            ))
          }
          
        </List>
      </Dialog>
    </React.Fragment>
  );
}