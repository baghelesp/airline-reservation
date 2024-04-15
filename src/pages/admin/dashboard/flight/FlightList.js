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
import Avatar from '@mui/material/Avatar';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

import EditIcon from '@mui/icons-material/Edit';
import PassengerList from '../PassengerList';
import CancleFLight from './CancleFlight';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FlightList(p) {
    // const data=[{flightno:'A124', airline:'Indigo', dep_city:'Mumbai', arr_city:'Nagpur', dep_date:'26-05-24', arr_date:'24:03-24', dep_time:'17:00', arr_time:'18:05', class_type:'economy', noOdAdults:1, noOfChilds:1,total_fare:6525},
    // {flightno:'A125', airline:'Indigo', dep_city:'Nagpur', arr_city:'Mumbai', dep_date:'24-05-24', arr_date:'24:03-24', dep_time:'15:00', arr_time:'16:25', class_type:'Business', noOdAdults:1, noOfChilds:1,total_fare:6525}]
  
  const[openSB,setOpenSB]=useState(false);
  const handleClickOpen = () => {
    p.setOpenRes(true);
  };

  const handleClose = () => {

    p.setOpenRes(!p.openRes);
    console.log(p.openRes)
  };
  const handleSnackBarClose=()=>{
    setOpenSB(false)
    p.setOpenRes(false)
}

  return (
    <React.Fragment>  
      <Dialog
        fullScreen
        open={p.openRes}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
         <Snackbar 
                    open={openSB} 
                    anchorOrigin={{vertical:'top',horizontal:'center'}}
                    autoHideDuration={2000} onClose={handleSnackBarClose}>
                    <Alert
                        
                        severity="success"
                        variant="filled"
                        sx={{ width: '100%' }}
                    >
                        Successfully Deleted!
                    </Alert>
                </Snackbar>
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
          
          {
            p.data.map((data,index)=>(
                <>
                <div key={index} style={{display:'flex', alignContent:'center', justifyContent:'space-between', margin:'2%'}}>
            <div>
            <Avatar alt="Travis Howard" src="/indigo.png" />

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
            <PassengerList />
            </div>
            <div>
            <Fab color="secondary" aria-label="edit">
              <EditIcon />
            </Fab>
            </div>
            <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
            {/* <Fab>
              <CloseIcon sx={{color:'red'}}/>
            </Fab> */}
            <CancleFLight data={data} setOpenRes={p.setOpenRes} setOpenSB={setOpenSB}/>
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