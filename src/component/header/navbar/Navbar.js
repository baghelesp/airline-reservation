import React, { useState, useEffect } from 'react';
import './Navbar.css'; 
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
                <div style={{margin:"auto"}}><a href="">Explore</a></div>
                <div style={{margin:"auto"}}><a href="">Book</a></div>
                <div style={{margin:"auto"}}><a href="">Experience</a></div>
                <div style={{margin:"auto"}}><a href="">Privilege Club</a></div>  
            </nav>
        </div>
        <div style={{display:"flex", margin:"auto", }}>
            <div>
            <a href="">Help</a>
            </div>
            
            <div style={{display:"flex"}}>
                <div style={{margin:"auto"}}><a href="/login">Loin</a></div>
                <div style={{margin:"auto"}}><a href="/signup">Signup</a></div>
                
            </div>
        </div>
        
    </div>
    </>
}
export default Navbar;