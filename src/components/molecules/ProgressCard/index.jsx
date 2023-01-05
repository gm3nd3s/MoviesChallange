import { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { questions } from '../../../utils';
import { Eclipse } from './Eclipse';

const Wrapper = styled.div`
	height: 97px;
	width: 220px;
	border-radius: 8px;
	background-color: #ffffff;
	align-self: center;
	color: #22daa8;
	font-weight: 700;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	flex-shrink: none;
	flex-wrap: none;
	text-align: center;
	p {
		align-self: center;
		padding: 0;
		margin: 20px 0 0 0;
	}
`;

const EclipseWrapper = styled.div`
	height: 18px;
	width: 96px;
	margin: auto 0;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-self: center;
	margin-top: 13px;
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
