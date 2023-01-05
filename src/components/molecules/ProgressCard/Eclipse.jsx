import styled from 'styled-components';
import PropTypes from 'prop-types';

const EclipseWrapper = styled.div`
	border: 1.5px solid #22daa8;
	border-radius: 50%;
	height: 18px;
	width: 18px;
	align-self: center;
	margin: auto;
	background-color: ${(props) => (props.isDirty ? '#22daa8 ' : 'transparent')};
`;
export const Eclipse = ({ bool }) => {
	return <EclipseWrapper isDirty={bool} />;
};

Eclipse.propTypes = {
	bool: PropTypes.bool,
};
Eclipse.defaultProps = {
	bool: false,
};
