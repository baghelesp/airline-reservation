
import SideBar from "../sidebar/SideBar";
import Button from '@mui/material/Button';
import SearchBtn from "./searchbar/SearchBtn";
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { useState } from 'react';
import { FaLocationDot } from "react-icons/fa6";
import Fab from '@mui/material/Fab';
import PeopleIcon from '@mui/icons-material/People';
import EditIcon from '@mui/icons-material/Edit'
import FormDialog from "../addflight/FormDialog";
import PassengerList from "../admin/dashboard/PassengerList";

export default function Booking()
{
    return(<>
    {/* flight */}
    <div style={{ marginTop: '6%' }}>
                    <div>
                        <h2>Todays flights</h2>
                    </div>
                    <div style={{ backgroundColor: 'rgb(0,0,0,0.3)', borderRadius: '10px', marginTop: '2%' }}>
                        <List >
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
                                data.map((data, index) => (
                                    <>
                                        <div style={{ display: 'flex', alignContent: 'center', justifyContent: 'space-between', margin: '2%' }}>
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
                                            <div style={{ width: '16%', textAlign: 'center' }}>
                                                <div>
                                                    duration
                                                </div>
                                                <div style={{ display: 'flex', width: '100%' }}>
                                                    <div ><FaLocationDot /></div>
                                                    <div style={{ width: '90%', margin: '10px 0px 0px 0px' }}>

                                                        <hr />
                                                    </div>

                                                    <div><FaLocationDot /></div>
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
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <b> {data.dep_date}</b>
                                            </div>
                                            {/*  */}
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                {data.flightno}
                                            </div>
                                            <div>
                                                {/* <Fab color="primary" aria-label="edit">
            <Badge badgeContent={4} color="secondary">
            
              <PeopleIcon />
            </Badge></Fab> */}
                                                <PassengerList />
                                            </div>
                                            <div>
                                                <Fab color="secondary" aria-label="edit">
                                                    <EditIcon />
                                                </Fab>
                                            </div>

                                        </div>
                                        <Divider sx={{ background: 'white', color: 'white' }} />
                                    </>
                                ))
                            }

                        </List>
                    </div>
                </div>
    </>)
}