import { NavLink, Outlet } from "react-router-dom";
import './Navbar.scss'
function Navbar(){
    return<>
    <div style={{borderRadius:"20px 20px 0px 0px", backgroundColor:'#211C6A', display:"flex", padding:'10px 0px',justifyContent:'space-evenly', alignItems:'center',width:"100%"}}>
        <div >
        <NavLink to="/home/booking"  className="navlink"    ><span>Book</span></NavLink>
        </div>
        <div>
        <NavLink  to="/home/status" className="navlink"  ><span>Flight Status</span></NavLink>
        </div>
        <div>
        <NavLink  to="/home/viewbooking" className="navlink"  ><span>View-Booking</span></NavLink>
        </div>
        <div>
        <NavLink to="/home/updatebooking"  className="navlink"  ><span>Update-Booking</span></NavLink>
        </div>
    
    
    
    </div>
    
    </>
}
export default Navbar;