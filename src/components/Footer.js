import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';


function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <p> &copy; 2022 burger33.com</p>
            <InstagramIcon/>
            <TwitterIcon/>
            <FacebookIcon/>
        </div>
    </div>
  )
}

export default Footer