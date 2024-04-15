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
import TextField from '@mui/material/TextField';

export default function Loginn() {
  const [open, setOpen] = React.useState(false);
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: '30vw' }} role="presentation" > 
    {/* onClick={toggleDrawer(false)} */}
      
      {/* <Divider /> */}
      <div style={{backgroundColor:'#B4D4FF', width:'100%', height:'100vh', padding:'5%', }}>

        

           
                <div style={{height:'100%',width:'100%',display:"flex", padding:'10px',flexDirection:'column',  alignItems:'center'}}>
                    <h2 style={{margin:'auto'}}>Begin a Journey</h2>
                        <form style={{paddingTop:'20px ', height:'100%',display:'flex',flexDirection:'column',alignItems:'center', justifyContent:'space-evenly'}}>
                            <div style={{}}>
                            <TextField
                                id="outlined-controlled"
                                label="Username"
                                value={username}
                                onChange={(event) => {
                                setUsername(event.target.value);
                                }}
                            />
                            </div>
                            <div style={{}}>
                            <TextField
                                id="outlined-password-input"
                                label="Password"
                                type="password"
                                value={password}
                                onChange={(event) => {
                                setPassword(event.target.value);
                                }}
                            />
                            </div>
                            <div style={{}}>

                                <Button variant="contained">login</Button>
                            </div>
                            <div style={{}}>
                                <p>do not have account? <a href='/signup'><Button >signup</Button></a></p>
                            
                            </div>
                        </form>
                    </div>
                
            </div>
            {/* <div style={{borderRadius:'0px 20px 20px 0px',height:'100%', width:'50%'}}>
                <Slideshow/>
            </div> */}
        
    
    
      
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>Open drawer</Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}