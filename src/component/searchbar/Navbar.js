import { NavLink, Outlet } from "react-router-dom";
import './Navbar.css'
function Navbar(){
    return<>
    <div style={{borderRadius:"20px 20px 0px 0px", backgroundColor:'#211C6A', display:"flex", padding:'10px 0px',justifyContent:'space-evenly', alignItems:'center',width:"100%"}}>
        <div >
        <NavLink to="/home/booking"  className="navlink" activeClassName="active-link"  >Book</NavLink>
        </div>
        <div>
        <NavLink  to="/home/status" className="navlink" activeClassName='active-link' >Flight Status</NavLink>
        </div>
        <div>
        <NavLink  to="/home/viewbooking" className="navlink" activeClassName='active-link' >View-Booking</NavLink>
        </div>
        <div>
        <NavLink to="/home/updatebooking"  className="navlink" activeClassName='active-link' >Update-Booking</NavLink>
        </div>
    
    
    
    </div>
    
    </>
}
export default Navbar;