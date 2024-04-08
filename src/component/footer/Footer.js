import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";



const h1Style={
margin:'0px 0px 7px 0px'
}
const divStyle = {
    margin: '4px 0px 4px 0px',
    

}
function Footer() {
    return (<>
        <div style={{ margin:'5%',display: "flex", color:'white', flexDirection: 'row', justifyContent:'space-between'}}>
            {/* section1 */}
            <div >
                <h2 style={h1Style}>Get to Know Us</h2>
                <div style={divStyle }>
                    About Us
                </div>
                <div style={divStyle }>
                    IndiGo Green – ESG report
                </div>
                <div style={divStyle }>
                    Board of Directors
                </div>
                <div style={divStyle }>
                    Leadership Team
                </div>
                <div style={divStyle }>
                    Press Releases
                </div>
                <div style={divStyle }>
                    InterGlobe Enterprises
                </div>
                <div style={divStyle }>
                    RPWD - Equal Opportunity Policy
                </div>
                <div style={divStyle }>
                    Seat/Aircraft information
                </div>

            </div>
            {/* Section 2 */}
            <div>
                <h2>Services</h2>
                <div style={divStyle }>
                    Special/Disability Assistance

                </div>
                <div style={divStyle }>
                    Medical Assistance

                </div>
                <div style={divStyle }>
                    Seat Select

                </div>
                <div style={divStyle }>
                    6E Eats

                </div>
                <div style={divStyle }>
                    Add-ons & Services

                </div>
                <div style={divStyle }>
                    Baggage

                </div>
                <div style={divStyle }>
                    Refund Claim

                </div>
                <div style={divStyle }>
                    Charter Services
                </div>
            </div>
            {/* Section 3 */}
            <div>
                <h2>Quick links
                </h2>
                <div style={divStyle }>
                    Offers


                </div>
                <div style={divStyle }>
                    Careers


                </div>
                <div style={divStyle }>
                    Advertise with us


                </div>
                <div style={divStyle }>
                    Sitemap

                </div>
                <div style={divStyle }>
                    Destinations


                </div>
                <div style={divStyle }>
                    Blogs


                </div>
                <div style={divStyle }>
                    Terms and Conditions

                </div>
                <div style={divStyle }>
                    Conditions of Carriage

                </div>
                <div style={divStyle }>
                    Privacy Policy

                </div>
                <div style={divStyle }>
                    Disclaimer
                </div>

                {/* International Travel Tips
Web check-in Advisory
Tariff Sheet
Purchase Requirement */}
            </div>
            {/* Section 4 */}
            <div>
                <div>
                    <h2>Social</h2>
                    <div style={{display:'flex',margin:'10px 0px 10px 0px' ,justifyContent:'space-between'}}>
                        <div><FaFacebookF/></div>
                        <div><FaTwitter/></div>
                        <div><FaLinkedin/></div>
                        <div><AiFillInstagram/></div>
                        <div></div>
                    </div>
                    <div style={{borderRadius:'5px', margin:'10px 0px 10px 0px', display:'flex', alignItems:'center' , padding:'2px 5px 2px 5px', backgroundColor:'black', opacity:'0.7'}}>
                        <FaWhatsapp size={30}/>
                        <div>
                            <span style={{fontSize:'10px', margin:'0px 0px 0px 5px'}}>CONNECT ON WHATSAPP</span>
                            <div style={{fontSize:'20px', margin:'0px 0px 0px 5px'}}>93223 16545</div>
                        </div>
                    </div>
                </div>
                <div>
                    <h2>
                        Downloads
                    </h2>
                    <div style={{borderRadius:'5px', margin:'10px 0px 10px 0px', display:'flex', alignItems:'center' , justifyContent:'space-evenly', padding:'2px 5px 2px 5px', backgroundColor:'black', opacity:'0.7'}}>
                        <FaGooglePlay size={25}/>
                        <div>
                            <span style={{fontSize:'10px', margin:'0px 0px 0px 5px'}}>get it on</span>
                            <div style={{fontSize:'15px', margin:'0px 0px 0px 5px'}}>PLAY STORE</div>
                        </div>
                    </div>
                    <div style={{borderRadius:'5px', margin:'10px 0px 10px 0px', display:'flex', alignItems:'center' , justifyContent:'space-evenly', padding:'2px 5px 2px 5px', backgroundColor:'black', opacity:'0.7'}}>
                        <FaApple size={25}/>
                        <div>
                            <span style={{fontSize:'10px', margin:'0px 0px 0px 5px'}}>get it on</span>
                            <div style={{fontSize:'15px', margin:'0px 0px 0px 5px'}}>APP STORE</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <hr />
        <div style={{padding:'2%',display:'flex', color:'white', alignItems:'center', justifyContent:'center'}}>
            <h3><FaRegCopyright  style={{margin:'0px 10px 0px 10px'}}/>Copyright 2024 ArchType. All rights reserved.</h3>
        </div>
    </>)
}
export default Footer;