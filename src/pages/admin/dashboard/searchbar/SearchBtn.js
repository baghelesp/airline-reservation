import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import SelectFilterOptions from './SelectFilterOptions';
import { useState } from 'react';
import FlightList from '../flight/FlightList';


export default function SearchBtn(p) {
  const [filter,setFilter]=useState('flightno');
  const [input,setInput]=useState(null);
  // const [openRes,setOpenRes]=useState(false);
  const handleChange=(e)=>{
    setInput(e.target.value);
    console.log(e.target.value)

  }
  const handleSearch=(e)=>{
    p.setOpenBackDrop(true)
    console.log("filter : "+filter+", input : "+input);
    setTimeout(()=>{p.setOpenBackDrop(false); p.setOpenRes(true)},3000)
    // p.setOpenRes(true)
  }
  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', borderRadius:'25px' ,display: 'flex', alignItems: 'center', width: 700 }}
    >
      <IconButton sx={{ p: '10px' }} aria-label="menu">
        <MenuIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Flight"
        type={filter==='date'?'date':'text'}
        onChange={handleChange}
      />
      
      <Divider sx={{ height: 55, m: 0.5 }} orientation="vertical" />
      <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
        {/* <DirectionsIcon /> */}
        <SelectFilterOptions filter={filter} setFilter={setFilter}/>
      </IconButton>
      <IconButton type="button" onClick={handleSearch} sx={{ p: '10px' }} aria-label="search">
        <SearchIcon sx={{fontSize:'30px'}} />
        
      </IconButton>
    </Paper>
  );
}