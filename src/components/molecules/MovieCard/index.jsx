import styled from 'styled-components';
import PropTypes from 'prop-types';

const CardImage = styled.img`
	width: 200px;
	height: 291px;
	border-radius: 10px;
	overflow: hidden;
	border: none;
	object-fit: fill;
	box-sizing: content-box;
	cursor: pointer;
	object-fit: cover;
`;

export const MovieCard = ({ img, alt }) => {
	return <CardImage className={'overlay'} src={img} alt={alt} />;
};

MovieCard.propTypes = {
	img: PropTypes.string,
	alt: PropTypes.string,
};
MovieCard.defaultProps = {
	img: '',
	alt: '',
};
