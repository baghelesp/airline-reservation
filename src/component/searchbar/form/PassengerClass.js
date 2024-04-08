import * as React from 'react';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import NumberInput from './NumberInput';


export default function DenseMenu() {
  return (
    <Paper sx={{ width: 320 }}>
      <MenuList dense>
      <MenuItem>
          <ListItemText >PASSENGER</ListItemText>
        </MenuItem>
        <Divider/>

        <div style={{display:'flex'}}>
          <div></div>
        <MenuItem>
          <ListItemText >Adults  </ListItemText>
        </MenuItem>
        <NumberInput/>
        </div>
        
        <MenuItem>
          <ListItemText >child</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText >Infant</ListItemText>
        </MenuItem>
        <br></br>
        
        <MenuItem>
          <ListItemText>CLASS</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemText>Economy</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText>Bussiness</ListItemText>
        </MenuItem>
        <Divider />
      </MenuList>
    </Paper>
  );
}