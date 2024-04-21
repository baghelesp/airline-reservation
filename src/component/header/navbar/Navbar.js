import React, { useState, useEffect } from 'react';
import './Navbar.scss'; 
import Loginn from '../../../pages/Login/Loginn';
function Navbar ()
{
    const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
    return <>
    <div className={scrollPosition > 180 ? 'navbar hidden' : 'navbar'} style={{zIndex:99 ,display:"flex", padding:"10px",color: 'rgba(255, 255, 255,1)' , backgroundColor: 'rgba(255, 255, 255, 0.2)' }}>
        <div className='heading' style={{margin:"auto",padding:"15px"}}> 
            Archtype
            <span>Airline</span>
        </div>
        <div>
            <nav style={{display:"flex", margin:"auto" ,padding:"15px"}}>
                <div style={{margin:"auto"}}><a href=""><span className='link'>Explore</span></a></div>
                <div style={{margin:"auto"}}><a href=""><span className='link'>Book</span></a></div>
                <div style={{margin:"auto"}}><a href=""><span className='link'>Experience</span></a></div>
                <div style={{margin:"auto"}}><a href=""><span className='link'>Privilege Club</span></a></div>  
            </nav>
        </div>
        <div style={{display:"flex", margin:"auto", }}>
            <div>
            <a href="" className='link'>Help</a>
            </div>
            
            <div style={{display:"flex"}}>
              <Loginn/>
                {/* <div style={{margin:"auto"}}><a href="/login">Login</a></div> */}
                <div style={{margin:"auto"}}><a href="/signup">Signup</a></div>
                
            </div>
        </div>
        
    </div>
    </>
}
export default Navbar;