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
export default function EnterPassenger()
{
    const d=[1,2]
    const [name,setName]=React.useState(null)
    return(<>
        <div style={{width:'100%'}}>


<Card sx={{ p:3, minWidth: '100%' }}>
  <CardMedia
    sx={{ height: 'auto'}}
    image="/static/images/cards/contemplative-reptile.jpg"
    title="green iguana"
  />
  <CardContent>
    <Typography gutterBottom variant="h4" component="div">
      Enter Passengers Details
    </Typography>
    <Typography sx={{pt:1,pb:2}} variant="body2" color="text.secondary">
        All Fields are compulsory
    </Typography>
    <Box component="section" sx={{ p: 3, border: '1px solid blue' }}>
  <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
    <div>
        <img src='/plane.png' width='50px' alt='na'/>
    </div>
    <div>
    <h3>Total Fare</h3>
    <span style={{color:'green'}}>4 Adults 2 Childs</span>
    </div>
    <div>
       <FaIndianRupeeSign/> 8000
    </div>

  </div>
</Box>
{
    d.map((dx,i)=>{
        return(
        <>
        <Typography sx={{ pt:2, pb:1}} gutterBottom variant="h6" component="div" >
        Passenger {i+1}
</Typography>

<Typography sx={{py:1}} variant="body1" color="text.secondary">
    <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>

   <div>
    <TextField
    sx={{pr:1}}
    id="outlined-controlled"
    label="title"
    value={name}
    onChange={(event) => {
      setName(event.target.value);
    }}
  />
  </div>
  <div>
  <TextField
  sx={{px:1}}
    id="outlined-controlled"
    label="Name"
    value={name}
    onChange={(event) => {
      setName(event.target.value);
    }}
  />
  </div><div>
  <TextField
  sx={{pl:1}}
    id="outlined-controlled"
    label="Age"
    type='number'
    value={name}
    onChange={(event) => {
      setName(event.target.value);
    }}
  />
  </div>
  
  </div>
    </Typography>
        </>)
    })
}

  </CardContent>
  <CardActions>
    {/* <Button variant="contained" sx={{width:'100%'}} on>PAY</Button> */}
    <Button variant="contained" sx={{width:'100%'}} >Save</Button>
  
    
  </CardActions>
</Card></div>
    </>);
}