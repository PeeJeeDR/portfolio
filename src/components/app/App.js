import React, { Component } from 'react';
import { HeroSection } from '../sections/HeroSection';
import { AboutSection } from '../sections/AboutSection';

class App extends Component {
	render() {
		return (
			<div id='App'>
				<HeroSection />
				<AboutSection />
			</div>
		);
	}
}

export default App;