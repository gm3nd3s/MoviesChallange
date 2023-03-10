import styled from 'styled-components';
import PropTypes from 'prop-types';

import { questions } from '../../../utils';
import { Eclipse } from './Eclipse';

const Wrapper = styled.div`
	min-height: 97px;
	min-width: 220px;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	flex-shrink: none;
	flex-wrap: none;
	align-self: center;
	font-weight: 700;
	text-align: center;
	color: #22daa8;
	background-color: #ffffff;
	border-radius: 8px;

	p {
		align-self: center;
		padding: 0;
		margin: 20px 0 0 0;
	}
`;

const EclipseWrapper = styled.div`
	height: 18px;
	width: 96px;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-self: center;
	margin: 13px 0 auto 0;
`;

export const ProgressCard = ({ questionNum }) => {
	return (
		<Wrapper>
			<p>
				QUESTION {questionNum + 1} OF {questions.length}:
			</p>
			<EclipseWrapper>
				<Eclipse bool={questionNum === 0} />
				<Eclipse bool={questionNum === 1} />
				<Eclipse bool={questionNum === 2} />
			</EclipseWrapper>
		</Wrapper>
	);
};

ProgressCard.propTypes = {
	questionNum: PropTypes.number,
};
ProgressCard.defaultProps = {
	questionNum: 0,
};
