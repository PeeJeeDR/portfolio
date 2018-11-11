import React, { Component } from 'react';
import { HeroSection } from '../sections/HeroSection';
import { AboutSection } from '../sections/AboutSection';
import { PortfolioSection } from '../sections/PortfolioSection';
import { FooterSection } from '../sections/FooterSection';

class App extends Component {
	componentWillMount = () => {
		console.log(window.pageXOffset);
	}
	
	
	render() {
		return (
			<div id='App'>
				<HeroSection />
				<AboutSection />
				<PortfolioSection />
				<FooterSection />
			</div>
		);
	}
}

export default App;