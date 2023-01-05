import { useState } from 'react';
import styled from 'styled-components';

import './App.css';
import { Background, Header, Footer, Questionnary } from './components';

const Home = styled.main`
	margin: 0;
	width: 100vw;
	height: 100vh;
	overflow: hidden;
	display: flex;
	justify-content: center;
	flex-direction: column;
	background-image: url(background);
`;
const PageWrapper = styled.div`
	z-index: 1;
	height: 100%;
	width: 100%;
	display: flex;

	flex-direction: column;
	margin: 0;
	padding: 0;
`;

function App() {
	return (
		<Home>
			<PageWrapper>
				<Header />
				<Questionnary />
				<Footer />
			</PageWrapper>
			<Background />
		</Home>
	);
}

export default App;
