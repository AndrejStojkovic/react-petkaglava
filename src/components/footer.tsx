import React from 'react';

import './footer.css';

const Footer = () => {
	return (
		<footer>
			<div>
				Project by&nbsp;
				<a className='link' href='https://github.com/AndrejStojkovic'>Andrej Stojkovikj</a>
			</div>
			<div>
				<a className='link git' href='https://github.com/AndrejStojkovic/react-petkaglava'>GitHub Repository</a>
			</div>
		</footer>
	);
}

export default Footer;