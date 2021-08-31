import React from 'react';
import './assets/sass/main.scss';
import SideBar from './components/sidebar/sidebar.component';
import Header from './components/header/header.component';
import Realtors from './components/realtors/realtors.component';
import Features from './components/features/features.component';
import Story from './components/story/story.component';
import Homes from './components/homes/homes.component';
import Gallery from './components/gallery/gallery.component';
import Footer from './components/footer/footer.component';

function App() {
	return (
		<div className="container">
			<SideBar />
			<Header />
			<Realtors />
			<Features />
			<Story />
			<Homes />
			<Gallery />
			<Footer />
		</div>
	);
}

export default App;
