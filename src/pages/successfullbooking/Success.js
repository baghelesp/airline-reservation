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
import { Divider } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
export default function Success(){
    return(<>
    <div style={{width:'100%'}}>


<Card sx={{ p:3, minWidth: '100%' }}>

  <CardContent>
  <Typography gutterBottom variant="h4" sx={{textAlign:'center'}} component="div">
    <CheckCircleIcon sx={{fontSize:'8vh', color:'green'}}/>
    </Typography>
    <Typography sx={{textAlign:'center'}} gutterBottom variant="h4" component="div">
     Booking Successful
    </Typography>
    <Divider/>
    <Typography sx={{pt:1,pb:2}} variant="body2" color="text.secondary">
       Download the booking confirmation ticket!
    </Typography>
    <Box component="section" sx={{ p: 3, border: '1px solid blue' }}>
  <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
    <div>
        <img src='/plane.png' width='50px' alt='na'/>
    </div>
    <div>
    <h3>Booking Invoice</h3>
    
    </div>
    <div>
       <FaIndianRupeeSign/> 8000
    </div>

  </div>
</Box>
<Typography sx={{ pt:3, pb:1}} gutterBottom variant="h7" component="div" >
    ADD PAYMENT METHOD
</Typography>

  </CardContent>
  <CardActions>
    {/* <Button variant="contained" sx={{width:'100%'}} on>PAY</Button> */}
    <Button variant="contained" sx={{width:'100%'}}>Back To Home</Button>

    
  </CardActions>
</Card>
</div>
    </>);

}