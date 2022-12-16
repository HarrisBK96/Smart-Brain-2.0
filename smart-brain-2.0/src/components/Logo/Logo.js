import React from 'react';
import Tilt from 'react-parallax-tilt';
import './Logo.css';
import brain from './brain.png'

const Logo = () => {
	return(
		<div className='ma4 mt0'>
			<Tilt 
			className='Tilt'
			tiltMaxAngleX={30}
			tiltMaxAngleY={30}
			style={{height:150, width:150}}
			>
				<div className='pa3'>
      				<img style={{paddingTop:'10px'}} alt='Logo' src={brain}/>
      			</div>
    		</Tilt>
		</div>
	);
}

export default Logo;