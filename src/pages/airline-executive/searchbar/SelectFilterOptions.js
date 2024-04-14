import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

export default function SelectFilterOptions(p) {
  // const [filter, setFilter] = React.useState('flightno');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    p.setFilter(event.target.value);
    console.log(event.target.value)
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      {/* <Button sx={{ display: 'block', mt: 2 }} onClick={handleOpen}>
        Open the select
      </Button> */}
      <FormControl sx={{ minWidth: 240}}>
        <InputLabel id="demo-controlled-open-select-label">Search By</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={p.filter}
          label="Search By"
          onChange={handleChange}
        >
          {/* <MenuItem value="">
            <em>None</em>
          </MenuItem> */}
          <MenuItem value={'flightno'}>FlightNo</MenuItem>
          <MenuItem value={'src_city'}>Source City</MenuItem>
          <MenuItem value={'dest_city'}>Destination</MenuItem>
          <MenuItem value={'date'}>Date</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}