import React, { useState, useEffect } from 'react';
import {BrowserRouter,Link,Route,Routes,Navigate} from'react-router-dom'
import Home from './component/home/Home';
import Booking from './component/searchbar/booking/Booking';
import FlightStatus from './component/searchbar/flightstatus/FlightStatus'
import Checkin from './component/searchbar/Checkin';
import FlightPage from './pages/flight/FlightPage';
import Header from './component/header/Header';
import Login from './pages/Login/Login';
import Signup from './pages/signup/Signup';
import SeatBooking from './pages/seatbooking/SeatBooking';
import CustomizedTimeline from './pages/timeline/Timeline';
import UpdateBooking from './component/searchbar/updatebooking/Updatebooking';
import ViewBooking from './component/searchbar/viewbooking/ViewBooking';
function App() {
  
  return (
    <div >
    <BrowserRouter>
      <Routes>

           <Route exact path='/' element={<Header/>} >

              <Route  path='/' element={<Navigate replace to="/home"/>} ></Route>

              <Route path='/home' element={<Home/>}>
                  <Route  path='/home' element={<Navigate replace to="/home/booking"/>} ></Route>
                  <Route path='/home/booking' element={<Booking/>}></Route>
                  <Route path='/home/status' element={<FlightStatus/>}></Route>
                  <Route path='/home/viewbooking' element={<ViewBooking/>}></Route>
                  <Route path='/home/updateBooking' element={<UpdateBooking/>}></Route>
              </Route>

              <Route path='/searchflights' element={<FlightPage/>}/>

          </Route>

          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>} /> 
         {/* <Route exact path='/' element={<SeatBooking/>} ></Route> */}
         <Route exact path='/' element={<CustomizedTimeline/>} ></Route>
       
        
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
