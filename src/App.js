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
import Payment from './pages/payment/Payment';
import Dashbboard from './pages/admin/dashboard/Dashboard';
import ExecutiveDashbboard from './pages/airline-executive/ExecutiveDashboard';
import EnterPassenger from './pages/passenger/EnterPassenger';
import Success from './pages/successfullbooking/Success';
import AvailableFlight from './pages/availableflights/AvailableFlight';
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
         <Route exact path='/seatbooking' element={<SeatBooking/>} ></Route>
         {/* <Route exact path='/' element={<CustomizedTimeline/>} ></Route> */}
         <Route exact path='/payment' element={<Payment/>}/>
         <Route exact path='/admin' element={<Dashbboard/>}/>
         <Route exact path='/airline-executive' element={<ExecutiveDashbboard/>}/>
        <Route exact path='/passenger' element={<EnterPassenger/>}/>        
        <Route exact path='/success' element={<Success/>}/>
        <Route exact path='/availableflight' element={<AvailableFlight/>}/>

      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
