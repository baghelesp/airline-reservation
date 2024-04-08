import { SlPlane } from "react-icons/sl";
import { GiIndianPalace } from "react-icons/gi";
import { GiWorld } from "react-icons/gi";

function Branding()
{
    return(<>
    <div style={{textAlign:'center', borderRadius:'10px',margin:'5%', padding:'4% 2%',backgroundColor:'white',display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
        <div >
            <div>
                <SlPlane size={50}/>
            </div>
            <div>
                200+ Daily Flights
            </div>
        </div>
        {/*  */}
        <div>
            <div>
                <GiIndianPalace size={50}/>
            </div>
            <div>
                80+ Domestic <br/>Destinations
            </div>
        </div>
        {/*  */}
        <div>
            <div>
                <GiWorld size={50}/>
            </div>
            <div>
                30+ DInternation <br/>Destinations
            </div>
        </div>
        {/*  */}
        <div>
            <div>
                <img src="/passenger.png" style={{ width:'50px', height:'60px', backgroundColor:'white'}}/>
            </div>
            <div>
            500 Mn+ happy <br/>passengers
            </div>
        </div>
        {/*  */}
        <div>
            <div>
                <SlPlane size={50}/>
            </div>
            <div>
                300+ Fleet Strong
            </div>
        </div>

    </div>
    </>)
}
export default Branding;