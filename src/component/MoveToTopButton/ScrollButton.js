import React, { useState } from 'react';
import scrolltotop from '../../asset/scroll-to-top.gif';
// import s1 from '../../asset/s1.gif';
import "./Styles.css";

const ScrollButton = () =>{

const [visible, setVisible] = useState(false)

const toggleVisible = () => {
	const scrolled = document.documentElement.scrollTop;
	if (scrolled > 300){
	setVisible(true)
	}
	else if (scrolled <= 400){
	setVisible(false)
	}
};

const scrollToTop = () =>{
	window.scrollTo({
	top: 0,
	behavior: 'smooth'
	});
};

window.addEventListener('scroll', toggleVisible);

return (
	<div className='scroll-to-top '>
    <div className='button'>
		<img className='scroll-img' onClick={scrollToTop} src={scrolltotop} alt="scroll to top button" style={{display: visible ? 'inline' : 'none'}} />
    </div>
    </div>
);
}

export default ScrollButton;
