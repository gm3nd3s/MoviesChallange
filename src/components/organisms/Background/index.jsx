import styled from 'styled-components';
import image from '../../../assets/MoviesBG.png';

const BackgroundWrapper = styled.div`
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
	object-fit: cover;
`;

const BackgroundImage = styled.img`
	height: 100%;
	opacity: 100%;
`;

const BackgroundOverlay = styled.div`
	width: 100%;
	height: 100%;
	background-color: #000000;
	opacity: 20%;
	z-index: 0;
`;

export const Background = () => {
	return (
		<BackgroundWrapper>
			<BackgroundOverlay>
				<BackgroundImage src={image} alt="background image with moovies covers" />
			</BackgroundOverlay>
		</BackgroundWrapper>
	);
};
