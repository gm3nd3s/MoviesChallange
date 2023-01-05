import styled from 'styled-components';
import PropTypes from 'prop-types';

const DEFAULT_URL = 'https://www.imdb.com/';

const AdWrapper = styled.div`
	width: 684px;
	height: 364px;
	border: 10px solid #61d6b6;
	border-radius: 10px;
	align-self: center;
	background-color: white;
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: center;
	margin-top: 102px;
	h1 {
		color: #61d6b6;
		font-size: 32px;
		font-weight: 700;
	}
	p {
		color: #081f44;

		font-weight: 400;
		font-size: 24px;
	}
`;

const ParagraphWrapper = styled.div``;

const Button = styled.button`
	height: 83px;
	width: 600px;
	margin: 0 auto;
	border-radius: 4px;
	background: #ec5632;
	border: none;
	text-align: center;
	font-weight: 700;
	font-size: 32px;
	cursor: pointer;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);

	:hover {
		background-color: #fe3f11;
	}
`;

const redirect = (url) => {
	window.location.href = url;
};

export const Popup = ({ url }) => {
	return (
		<AdWrapper>
			<h1>WATCH NEW MOVIES FOR FREE</h1>
			<ParagraphWrapper>
				<p>Watch any movies online for free without ads!</p>
				<p>Have fun watching your favourite movies!</p>
			</ParagraphWrapper>
			<Button
				onClick={(e) => {
					e.stopPropagation();
					e.nativeEvent.stopImmediatePropagation();
					if (e.target === e.currentTarget) {
						redirect(url);
					}
				}}>
				WATCH HERE!
			</Button>
		</AdWrapper>
	);
};

Popup.propTypes = {
	url: PropTypes.string,
};
Popup.defaultProps = {
	url: DEFAULT_URL,
};
