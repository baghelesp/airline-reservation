import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Header from '../header/Header';
import Searchbox from '../searchbar/Searchbox';
import Carousel from '../carousel/Carousel';
import Footer from '../footer/Footer';
import Branding from '../branding/Branding';
import ServiceTabs from '../services/ServiceTabs';

function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 2 seconds
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <div >
      {isLoading ? (
        <Loading />
      ) : (
       <>
     
        {/* <img style={{width:"100%"}} src="/bg-img.jpg" alt="img not found"/> */}
        <video autoPlay loop muted style={{width:"100%", maxHeight:"70%"}} >
            <source src="/bg-v.mp4" type="video/mp4"/>
        </video>
        <Searchbox/>
        <div>
          <ServiceTabs/>
        </div>
        <div  style={{display:'flex', alignItems:'center', justifyContent:'center', margin:'30px'}}>
          <Carousel/>
        </div>
        <div>
          <Branding/>
        </div>
        <div>
          <Footer/>
        </div>
        </>
      )}
    </div>
  );
}

export default Home;
