import React from 'react';

import './main.css';

import Petka from './img/petka.png';
import Glava from './img/glava.png';

export default class Main extends React.Component<{}, any> {
	constructor(props: {}) {
		super(props);
		this.state = {
			petka: 0,
			glava: 0,
			coinSide: '',
		};
	}

	componentDidMount() {
		let flipResult = Math.round(Math.random());
		this.setState(() => {
			return flipResult === 0 ? {coinSide: 'petka', coin: Petka} : {coinSide: 'glava'}
		});
	}

	flip() {
		let flipResult = Math.round(Math.random());
		let imgCoin = document.getElementById('coin');

		if(imgCoin) {
			if(!flipResult) {
				imgCoin.animate([
					{transform: 'rotateY(0deg)'},
					{transform: 'rotateY(1800deg)'},
				], {
					duration: 3000,
					fill: 'forwards'
				});
			} else {
				imgCoin.animate([
					{transform: 'rotateY(0deg)'},
					{transform: 'rotateY(1980deg)'},
				], {
					duration: 3000,
					fill: 'forwards'
				});
			}
		}

		setTimeout(() => {
			this.setState((currentState: any) => {
				return flipResult === 0 ? {petka: currentState.petka + 1, coinSide: 'petka'}
										: {glava: currentState.glava + 1, coinSide: 'glava'}
			});
		}, 3000);
	}

	render() {
		const {petka, glava} = this.state;

		return (
			<div className='main'>
				<div id='coin'>
					<img className='coinHeads' src={Glava} alt='h'/>
					<img className='coinTails' src={Petka} alt='t'/>
				</div>
				<div className='stats'>
					<h1>Petka: {petka}</h1>
					<h1>Glava: {glava}</h1>
				</div>
				<button onClick={() => this.flip()}>Flip!</button>
			</div>
		);
	}
	
}