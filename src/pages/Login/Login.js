import { Button, autocompleteClasses } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useEffect,useState } from 'react';
import Slideshow from '../slideshow/SlideShow';

function Login()
{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    return(<>
    <div style={{backgroundColor:'#B4D4FF', width:'100vw', height:'100vh', padding:'5%', }}>

        <div style={{backgroundColor:'#86B6F6', width:'100%', height:'100%',borderRadius:'20px'}}>

            <div style={{display:"flex", justifyContent:'center', alignItems:'center', width:'100%', height:'100%',padding:'30px'}}>

            <div style={{borderRadius:'20px 0px 0px 20px',backgroundColor:'#EEF5FF', height:'100%', width:'50%', padding:'25px'}}>
                <div >
                    <a href='/' style={{color:'red'}}>Logo</a>
                </div>
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
            <div style={{borderRadius:'0px 20px 20px 0px',height:'100%', width:'50%'}}>
                <Slideshow/>
            </div>
            </div>
        </div>
    </div>
    
    </>)
}
export default Login;