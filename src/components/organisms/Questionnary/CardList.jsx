import styled from 'styled-components';

import { MovieCard } from '../../molecules';

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
`;

const CardButton = styled.button`
	width: 200px;
	height: 291px;
	border-radius: 10px;
	border: none;
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

export const CardList = ({ movies, setMovies, setMovieToWatch, setNextQuestion }) => {
	return (
		<CardsWrapper>
			{movies.map((movie) => (
				<CardButton
					onClick={(e) => {
						e.preventDefault();
						e.stopPropagation();

						setMovies(movie.relatedMovies);
						setNextQuestion();
						setMovieToWatch(movie.imdbUrl);
					}}
					key={movie.id}>
					<MovieCard img={movie.cover} alt={movie.title} />
				</CardButton>
			))}
		</CardsWrapper>
	);
};
