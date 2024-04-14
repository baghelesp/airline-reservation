
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
import PassengerList from "./PassengerList";
import FlightList from "./flight/FlightList";
export default function Dashbboard() {
    const [openRes, setOpenRes] = useState(false);
    const [openBackDrop, setOpenBackDrop] = useState(false);
    const handleBackDropClose = () => {
        setOpenBackDrop(false);
      };
    const data = [{ flightno: 'A124', airline: 'Indigo', dep_city: 'Nagpur', arr_city: 'Pune', dep_date: '24-03-24', arr_date: '24:03-24', dep_time: '17:00', arr_time: '18:05', class_type: 'economy', noOdAdults: 1, noOfChilds: 1, total_fare: 6525 },
    { flightno: 'A124', airline: 'Indigo', dep_city: 'Nagpur', arr_city: 'Pune', dep_date: '24-03-24', arr_date: '24:03-24', dep_time: '17:00', arr_time: '18:05', class_type: 'economy', noOdAdults: 1, noOfChilds: 1, total_fare: 6525 }]

    return <>
        <div style={{ display: 'flex', width: '100vw' }}>
            <div style={{ width: '20%' }}>
                <SideBar />

            </div>
            <div style={{ width: '80%', height: '100vh', padding: '2%', color: 'white', overflowY: 'hidden' }}>
                <img style={{ zIndex: '-1', position: 'fixed', right: '0px', padding: '6%' }} width={'50%'} src="/planeTBg.png" />
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    {/* Search Result Component */}
                    <FlightList openRes={openRes} setOpenRes={setOpenRes} />
                    <Backdrop
                        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                        open={openBackDrop}
                        // onClick={handleBackDropClose}
                    >
                        <CircularProgress color="inherit" />
                    </Backdrop>
                    <div>
                        <SearchBtn openRes={openRes} setOpenBackDrop={setOpenBackDrop} setOpenRes={setOpenRes} />
                        {/* <SearchBar/> */}
                    </div>
                    <div>
                        icon, icon
                    </div>
                </div>
                <div style={{ width: '50%', marginTop: '3%' }}>
                    <h1>Online Booking system for all service based industries</h1>
                    <p> If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't quite enough, the next logical step is to find a random paragraph. </p>
                    <div style={{ marginTop: '3%' }}>
                        {/* <Button sx={{ background: 'purple' }} variant="contained" >ADD Flight</Button> */}
                        <FormDialog />
                    </div>


                </div>

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



            </div>

        </div>


    </>
}