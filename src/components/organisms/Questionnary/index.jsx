import { useState } from 'react';
import styled from 'styled-components';

import { questions, movieList } from '../../../utils';

import { ProgressCard } from '../../molecules';
import { Popup } from '../../molecules/Popup';
import { CardList } from './CardList';

const QuestionnaryWrapper = styled.section`
	width: 80%;
	height: 80%;
	margin: 0 auto;
	padding: 32px 0;
	align-self: flex-start;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	background-color: transparent;
`;

const Question = styled.h1`
	font-weight: 600;
	text-align: center;
	font-size: 34px;
	line-height: 40px;
`;

export const Questionnary = () => {
	const question = questions[0];
	const initialMovies = movieList.filter((m) => m.id < 3);

	const [questionState, setQuestionState] = useState(question);
	const [moviesState, setMoviesState] = useState(initialMovies);
	const [movieToWatchState, setMovieToWatchState] = useState('');

	const setNextQuestion = () => {
		if (questions[questions.length] !== questionState) {
			setQuestionState(questions[questionState.id + 1]);
		} else {
			setQuestionState('');
		}
	};

	return (
		(moviesState && questionState && (
			<QuestionnaryWrapper>
				<ProgressCard questionNum={questionState.id}></ProgressCard>
				<Question>{questionState.question}</Question>
				<CardList
					movies={moviesState}
					setMovies={setMoviesState}
					setMovieToWatch={setMovieToWatchState}
					setNextQuestion={setNextQuestion}
				/>
			</QuestionnaryWrapper>
		)) || <Popup url={movieToWatchState} />
	);
};
