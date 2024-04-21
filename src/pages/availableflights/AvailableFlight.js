import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { FaPlane } from "react-icons/fa6";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import StarsIcon from '@mui/icons-material/Stars';
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';
import './flightpath.css'

export default function AvailableFlight() {
    const data = [{ flightno: 'A124', airline: 'Indigo', dep_city: 'Mumbai', arr_city: 'Nagpur', dep_date: '26-05-24', arr_date: '24:03-24', dep_time: '17:00', arr_time: '18:05', class_type: 'economy', noOdAdults: 1, noOfChilds: 1, total_fare: 6525 },
    { flightno: 'A125', airline: 'Indigo', dep_city: 'Nagpur', arr_city: 'Mumbai', dep_date: '24-05-24', arr_date: '24:03-24', dep_time: '15:00', arr_time: '16:25', class_type: 'Business', noOdAdults: 1, noOfChilds: 1, total_fare: 6525 }]

    return (
        <>

            {
                data.map((d, index) => (

                    <Card sx={{ minWidth: '100vw', m: 2 }}>

                        <CardContent>
                            {/* <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography> */}

                            <div style={{ display: 'flex', alignItems: 'center', padding: '0% 2%', justifyContent: 'space-around' }}>
                                {/*  */}

                                <div style={{ display: 'flex', width: '25%', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <div>
                                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />

                                    </div>
                                    {/*  */}
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                        <div>
                                            {d.flightno}
                                        </div>
                                        <div>
                                            {d.airline}
                                        </div>
                                    </div>
                                    {/*  */}
                                    <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                                        <div>{d.class_type==='economy'?<StarsIcon style={{color:'#9595f0'}}/>:<EnergySavingsLeafIcon style={{color:'green'}}/>}</div>
                                        <div style={{marginBottom:'5px', marginLeft:'3px'}}>{d.class_type}</div>
                                        
                                    </div>

                                </div>

                                {/* ------- */}
                                <div style={{ display: 'flex', width: '45%', alignItems: 'center', justifyContent: 'space-evenly' }}>


                                    {/*  */}
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', }}>
                                        <div style={{color:'grey'}}>
                                            {d.dep_date}
                                        </div>
                                        <div>

                                            <h2>{d.dep_time}</h2>
                                        </div>
                                        <div>
                                            <b>{d.dep_city}</b>
                                        </div>
                                    </div>

                                    {/*  */}
                                    <div >
                                        <div className="flight-path" >
                                            {/* SVG for the dotted line */}
                                            <svg height="100%"  width="250" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                                <line x1="0" y1="50%" x2="250" y2="50%" className="flight-line" />
                                            </svg>
                                            {/* Plane icon */}
                                            <div className="plane-icon">
                                                <FaPlane size={22} />
                                            </div>
                                        </div>
                                    </div>


                                    {/*  */}
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                        <div style={{color:'grey'}}>
                                            {d.dep_date}
                                        </div>
                                        <div>
                                            <h2>{d.arr_time}</h2>

                                        </div>
                                        <div>
                                            <b>{d.arr_city}</b>
                                        </div>
                                    </div>
                                </div>
                                <div style={{width:'22%', display:'flex', height:'100%', alignItems:'center', justifyContent:'space-evenly'}}>
                                    <div style={{display:'flex',flexDirection:'column',alignItems:'center', justifyContent:'center'}}>
                                        <div><CurrencyRupeeIcon/>{d.total_fare}</div>
                                        <div>
                                            <small style={{color:'grey'}}><i>per adult</i></small>
                                        </div>
                                    </div>
                                    <div style={{display:'flex',alignItems:'center', flexDirection:'column', justifyContent:'center'}}>
                                    <div><CurrencyRupeeIcon/>{d.total_fare}</div>
                                        <div>
                                        <small style={{color:'grey'}}><i>per child</i></small>

                                        </div>

                                    </div>

                                </div>
                                {/* Book Btn */}

                                <div style={{width:'8%'}}>
                                    <Button variant='contained'>Book</Button>
                                </div>
                            </div>
                        </CardContent>

                    </Card>

                ))
            }
        </>

    );
}