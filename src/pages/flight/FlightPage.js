import { useEffect, useState } from "react";
import Searchbox from "../../component/searchbar/Searchbox";
import Form from "../../component/searchbar/form/Form";
import './FlightPage.css'
function FlightPage()
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
    return(<>
    <div className={scrollPosition > 180 ? 'sbar hidden' : 'sbar'} style={{position:'fixed',left:"0px", backgroundColor:"white", width:"100vw" }}>
    <Form />
    </div>
        
        <div style={{height:"1000px"}}></div>
    </>)
}
export default FlightPage;