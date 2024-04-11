import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { FaIndianRupeeSign } from "react-icons/fa6";


export default function Payment() {
    const [name,setName]=React.useState(null)
    const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <div style={{width:'100%'}}>


    <Card sx={{ p:3, minWidth: '100%' }}>
      <CardMedia
        sx={{ height: 'auto'}}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          Payment
        </Typography>
        <Typography sx={{pt:1,pb:2}} variant="body2" color="text.secondary">
            Please make the payment to book your flight before the fare raises
        </Typography>
        <Box component="section" sx={{ p: 3, border: '1px solid blue' }}>
      <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
        <div>
            <img src='/plane.png' width='50px' alt='na'/>
        </div>
        <div>
        <h3>Total Fare</h3>
        <span style={{color:'green'}}>after discount</span>
        </div>
        <div>
           <FaIndianRupeeSign/> 8000
        </div>

      </div>
    </Box>
    <Typography sx={{ pt:3, pb:1}} gutterBottom variant="h7" component="div" >
        ADD PAYMENT METHOD
    </Typography>
    
    <Typography sx={{py:2}} variant="body1" color="text.secondary">
        <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>

       <div>
    <TextField
        id="outlined-controlled"
        label="Card Number"
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      </div>
      <div style={{display:'flex', alignItems:'center', justifyContent:'space-evenly'}}>
        <div><img width='70px' style={{margin:'0px 10px 0px 10px'}} src='/visaicon.png'/></div>
      <div><img width='70px' style={{margin:'0px 10px 0px 10px'}} src='/mastercardicon.png'/></div>
      
      </div>
      </div>
        </Typography>
    <Typography  variant="body1" color="text.secondary">
        

      
    <TextField
    sx={{ width:'100%', py:1}}
        id="outlined-controlled"
        label="Card Holder Name"
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      
    </Typography>
    <Typography  sx={{py:1}} variant="body1" color="text.secondary">
        

      <div style={{display:'flex', width:'100%',alignItems:'center', justifyContent:'space-between'}}>

      <div>

      
    <TextField
    sx={{ width:'98%',}}
        id="outlined-controlled"
        label="Expiration"
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      </div>
      <div>
      <TextField
    sx={{ width:'98%'}}
        id="outlined-controlled"
        label="CVV"
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      </div>
      </div>
      
    </Typography>
      </CardContent>
      <CardActions>
        {/* <Button variant="contained" sx={{width:'100%'}} on>PAY</Button> */}
        <Button variant="contained" sx={{width:'100%'}} onClick={handleOpen}>Pay</Button>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        Processing
        <CircularProgress color="inherit" />
      </Backdrop>
        
      </CardActions>
    </Card>
    </div>
  );
}