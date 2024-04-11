
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Avatar from '@mui/material/Avatar';
import DashboardIcon from '@mui/icons-material/Dashboard';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import AssessmentIcon from '@mui/icons-material/Assessment';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
export default function SideBar() {
  

  const DrawerList = (
    <Box sx={{ width: '100%' ,height:'100vh', background:'white'}} role="presentation" >
      <List sx={{background:'#074173',color:'white'}}>
      <ListItem >
      <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
      <ListItemText sx={{px:1}} primary={'Shivam Baghele'} />
        </ListItem>
        <ListItem>
        
        </ListItem>

        <ListItem>
        <ListItemText sx={{color:'grey'}} primary={'baghele.shivam@principal.com'} />
        </ListItem>
      
        {/* {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))} */}
      </List>
      <Divider />
      <List>
        {/* {['All mail', 'Trash', 'Spam'].map((text, index) => ( */}
          <ListItem  disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DashboardIcon/>
              </ListItemIcon>
              <ListItemText primary={'Dashboard'} />
            </ListItemButton>
            </ListItem>

            <ListItem  disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <FlightTakeoffIcon/>
              </ListItemIcon>
              <ListItemText primary={'Flights'} />
            </ListItemButton>
            </ListItem>
            <ListItem  disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AssessmentIcon/>
              </ListItemIcon>
              <ListItemText primary={'Report'} />
            </ListItemButton>
            </ListItem>
            <ListItem  disablePadding>
            <ListItemButton>
              <ListItemIcon>
                < ExitToAppIcon />
              </ListItemIcon>
              <ListItemText primary={'Logout'} />
            </ListItemButton>
            </ListItem>       
        {/* ))} */}
      </List>
    </Box>
  );

  return (
    <div>
      
      
        {DrawerList}
      
    </div>
  );
}