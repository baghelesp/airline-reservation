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


export default function SearchBtn() {
  const [filter,setFilter]=useState('flightno');
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
        type={filter=='date'?'date':'text'}
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
        {/* <DirectionsIcon /> */}
        <SelectFilterOptions filter={filter} setFilter={setFilter}/>
      </IconButton>
    </Paper>
  );
}