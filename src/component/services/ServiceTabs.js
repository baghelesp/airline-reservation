import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ServiceCard from './ServiceCard';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;
  
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function ServiceTabs() {
  const tab1=[{title:"6E Eats",text:'Delectable Preparation now on-board. Booking Open', img:'/xyz'},
  {title:"One for the skies", text:"Prebook your favourite alcoholic beverage", img:'/xyz'}
]
const tab2=[{title:"Excess Baggage",text:'Prebook any excess check-in baggeage and save up to 20%', img:''},
  {title:"Delayed & Lost Baggage Protection", text:"Prebook your favourite alcoholic beverage", img:''},
  {title:"Sports Equipment", text:"Prebook your favourite alcoholic beverage", img:''},
  {title:"Carter Porter", text:"Prebook your favourite alcoholic beverage", img:''}
]
const tab3=[{title:"Fast Forward",text:'Delectable Preparation now on-board. Booking Open', img:''},
  {title:"Lounge Service", text:"Prebook your favourite alcoholic beverage", img:''}
]
const tab4=[{title:"Travel Assistance",text:'Delectable Preparation now on-board. Booking Open', img:''},
  {title:"Cancellation Assitance", text:"Prebook your favourite alcoholic beverage", img:''}
]

  const tabStyles={
    display:'flex',
    alignItems:'center',
    overFlow:'scroll'
  
  }
  const cardStyle={
    margin:'15px 25px 15px 0px'
  }
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <div style={{margin:'4%'}}>
    <Box sx={{ width: '100%' , background:'green', }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Food & Beverages" {...a11yProps(0)} />
          <Tab label="Baggage" {...a11yProps(1)} />
          <Tab label="Airport Service" {...a11yProps(2)} />
          <Tab label="Trip Assurance" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        
          <div style={tabStyles}>
          {
            tab1.map((tab,index)=>(
            <div style={cardStyle} >
              <ServiceCard tab={tab}/>
            </div>
          ))
        }
          </div>
          
        
        
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      <div style={tabStyles}>
      {
          tab2.map((tab,index)=>(
            <div style={cardStyle}>
              <ServiceCard tab={tab}/>
            </div>
          ))
        }
         </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
      <div style={tabStyles}>
      {
          tab3.map((tab,index)=>(
            <div style={cardStyle}>
              <ServiceCard tab={tab}/>
            </div>
          ))
        }
         </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
      <div style={tabStyles}>
      {
          tab4.map((tab,index)=>(
            <div style={cardStyle}>
              <ServiceCard tab={tab}/>
            </div>
          ))
        }
         </div>
      </CustomTabPanel>
    </Box>
    </div>
  );
}