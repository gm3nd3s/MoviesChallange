import { useState } from 'react';
import styled from 'styled-components';

import { questions, movieList } from '../../../utils';

import { ProgressCard, MovieCard } from '../../molecules';
import { Popup } from '../../molecules/Popup';

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
	transition: opacity 1s ease-in-out;
`;

const Question = styled.h1`
	font-weight: 600;
	text-align: center;
	font-size: 34px;
	line-height: 40px;
`;

const CardsWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
	gap: 34px;
	overflow: hidden;
	align-self: center;
	margin: 0 auto;
	overflow-y: scroll;
`;

const CardButton = styled.button`
	border: none;
	width: 200px;
	height: 291px;
	border-radius: 10px;
	padding: 0;
	margin: 0;
	object-fit: fill;
	background: none;
	:hover .overlay {
		opacity: 1;
	}
	@media screen and (max-width: 860px) {
		width: 140px;
		height: 190px;
	}
	@media screen and (max-width: 660px) {
		width: 100px;
		height: 145px;
	}
`;
const Overlay = styled.span`
	background: rgb(255, 255, 255);
	background: linear-gradient(205.28deg, rgba(255, 255, 255, 0.44) 0%, rgba(255, 255, 255, 0) 100%);
	width: 200px;
	height: 291px;
	position: absolute;
	opacity: 0;
	border-radius: 10px;
	@media screen and (max-width: 860px) {
		width: 140px;
		height: 190px;
	}
	@media screen and (max-width: 660px) {
		width: 100px;
		height: 145px;
	}
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
				<CardsWrapper>
					{moviesState.map((movie) => (
						<CardButton
							onClick={(e) => {
								e.preventDefault();
								e.stopPropagation();

								setMoviesState(movie.relatedMovies);
								setNextQuestion();
								setMovieToWatchState(movie.imdbUrl);
							}}
							key={movie.id}>
							<Overlay className={'overlay'} />
							<MovieCard img={movie.cover} alt={movie.title} />
						</CardButton>
					))}
				</CardsWrapper>
			</QuestionnaryWrapper>
		)) || <Popup url={movieToWatchState}></Popup>
	);
};
