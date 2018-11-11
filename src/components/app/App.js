import React, { Component } from 'react';
import { HeroSection } from '../sections/HeroSection';
import { AboutSection } from '../sections/AboutSection';
import { PortfolioSection } from '../sections/PortfolioSection';

class App extends Component {
	render() {
		return (
			<div id='App'>
				<HeroSection />
				<AboutSection />
				<PortfolioSection />
			</div>
		);
	}
}

export default App;