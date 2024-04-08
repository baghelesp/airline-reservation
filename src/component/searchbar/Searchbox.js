import Navbar from "./Navbar";
import { Link, Outlet } from "react-router-dom";
const styles={borderRadius:"20px", backgroundColor:"white", position:'absolute', top:'65%', right:"10%", width:"80%"}
function Searchbox()
{
    
    return<>
    <div style={styles}>
        <Navbar/>
        <Outlet/>
    </div>
    </>
}
export default Searchbox;