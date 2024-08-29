import React from 'react';
import WorkIcon from '@mui/icons-material/Work';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SchoolIcon from '@mui/icons-material/School';
import "../styles/RightCv.css";

const RightCv = () => {
  return (
    <div className='cvRight'>
        <div className='education'>
          <h2 className='rightH2'><SchoolIcon className='eduIco'/><span className='rightSpan'>Education</span></h2>
          <div className='eduDiv'>
            <h2>Front-End Development</h2>
            <div className='rightDate'><CalendarMonthIcon className='rightIcon'/> 2020-2024</div>
            <p>Web Development all I need to know </p>
          </div>
          <div className='line'></div>
          <div className='eduDiv'>
            <h2>Istanbul, TR</h2>
            <div className='rightDate'><CalendarMonthIcon className='rightIcon'/> 2020-2024</div>
            <p>Bachelor Degree </p>
          </div>
          <div className='line'></div>
          <div className='eduDiv'>
            <h2>School of Coding</h2>
            <div className='rightDate'><CalendarMonthIcon className='rightIcon'/> 2014-2018</div>
            <p>High School</p>
          </div>
        </div>
        <div className='workExp'>
        <h2 className='rightH2'><WorkIcon className='eduIco'/><span className='rightSpan'>Work Experience</span></h2>
          <div className='eduDiv'>
            <h2>Front-End Developer</h2>
            <div className='rightDate'><CalendarMonthIcon className='rightIcon'/> 2022-Present</div>
            <p>I have a great passion towards front_end Development, and I love to work and learn front-end more </p>
          </div>
          <div className='line'></div>
          <div className='eduDiv'>
            <h2>Back-End Developer</h2>
            <div className='rightDate'><CalendarMonthIcon className='rightIcon'/> 2020-2021</div>
            <p>I have a experience back-end development together with front-end development </p>
          </div>
          <div className='line'></div>
          <div className='eduDiv'>
            <h2>Web Developer</h2>
            <div className='rightDate'><CalendarMonthIcon className='rightIcon'/> 2020-present</div>
            <p>I started my journey on web development in 2020, since then, I enjoyed the process very well.</p>
          </div>
        </div>
    </div>
  )
}

export default RightCv