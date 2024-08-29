import React from 'react';
import think from '../assets/think.jpg';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import HouseIcon from '@mui/icons-material/House';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import AssistantIcon from '@mui/icons-material/Assistant';
import PublicIcon from '@mui/icons-material/Public';

import "../styles/LeftCv.css"


const LeftCv = () => {
  return (
    <div className='cvLeft'>
        <div
        style={{backgroundImage: `url(${think})`}}
         className='image'>
          <h2>Süleyman Celebi</h2>
        </div>
        <div className='contacts'>
          <div className='contact'><BusinessCenterIcon className='leftIcon'/><span>Developer</span></div>
          <div className='contact'><HouseIcon className='leftIcon'/><span>Istnabul, TR</span></div>
          <div className='contact'><EmailIcon className='leftIcon'/><span>suehzrssh.12@gmail.com</span></div>
          <div className='contact'><CallIcon className='leftIcon'/><span>123456789011</span></div>
        </div>
        <div className='line'></div>
        <div className='skillsandlang'>
          <div className='skills'>
            <h2><AssistantIcon className='leftIcon'/><span>Skills</span></h2>
            <div className='skill'>
              <h3 className='sTitle'>HTML, CSS, JS</h3>
              <div className='progBar'><div className='s95'>95%</div></div>
            </div>
            <div className='skill'>
              <h3 className='sTitle'>ReactJS</h3>
              <div className='progBar'><div className='s85'>85%</div></div>
            </div>
            <div className='skill'>
              <h3 className='sTitle'>NodeJS</h3>
              <div className='progBar'><div className='s75'>75%</div></div>
            </div>
            <div className='skill'>
              <h3 className='sTitle'>MySQL</h3>
              <div className='progBar'><div className='s70'>70%</div></div>
            </div>
          </div>
          <div className='langs'>
          <h2><PublicIcon className='leftIcon'/> <span>Languages</span></h2>
            <div className='lang'>
              <h3 className='sTitle'>Turkish</h3>
              <div className='progBar'><div className='l100'></div></div>
            </div>
            <div className='lang'>
              <h3 className='sTitle'>English</h3>
              <div className='progBar'><div className='l80'></div></div>
            </div>
            <div className='lang'>
              <h3 className='sTitle'>Arabic</h3>
              <div className='progBar'><div className='l20'></div></div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default LeftCv