import TheGrayMan from '../../assets/The gray man-cover.png';
import Blonde from '../../assets/Blonde-cover.png';
import Minions from '../../assets/Minions-cover.png';
import TopGun from '../../assets/Top gun-cover.png';
import BulletTrain from '../../assets/Bullet Train-cover.png';
import Thor from '../../assets/Thor-cover.png';
import PurpleHearts from '../../assets/PurpleHearts.jpg';
import BlackPanther from '../../assets/blackPanther.jpg';
import GodFather from '../../assets/GodFather.jpg';
import BuzzLightyear from '../../assets/buzzLightyear.jpg';
import TurningRed from '../../assets/turningRed.jpg';
import Luca from '../../assets/luca.jpg';
import Batman from '../../assets/Batman-cover.png';
import Flash from '../../assets/Flash-cover.png';
import Spider from '../../assets/Spiderman-cover.png';
import IronMan from '../../assets/ironMan.jpg';
import BlackAdam from '../../assets/blackAdam.jpg';
import Captain from '../../assets/captainMarvel.jpg';
import CaptainAmerica from '../../assets/captainAmerica.jpg';
import AntMan from '../../assets/ant-man.jpg';
import Doctor from '../../assets/doctorStrange.jpg';
import Knives from '../../assets/knivesOut.jpg';
import Joker from '../../assets/joker.jpg';
import Interstellar from '../../assets/interstellar.jpg';
import TheWolf from '../../assets/theWolf.jpg';
import Django from '../../assets/django.jpg';
import Basterds from '../../assets/basterds.jpg';
import ShutterIsland from '../../assets/shutterIsland.jpg';
import PulpFiction from '../../assets/pulpFiction.jpg';
import CatchMe from '../../assets/catchMe.jpg';
import Seven from '../../assets/seven.jpg';
import ForrestGump from '../../assets/forrestGump.jpg';
import TheHatefulEight from '../../assets/theHatefulEight.jpg';
import TheDeparted from '../../assets/theDeparted.jpg';
import KillBill from '../../assets/killBill.jpg';
import Inception from '../../assets/inception.jpg';

export const movieList = [
	{
		id: 0,
		title: 'The Gray Man',
		imdbUrl: 'https://www.imdb.com/title/tt1649418',
		cover: TheGrayMan,
		relatedMovies: [
			{
				id: 3,
				title: 'Top Gun: Maverick',
				imdbUrl: 'https://www.imdb.com/title/tt1745960',
				cover: TopGun,
				relatedMovies: [
					{
						id: 12,
						title: 'The Batman',
						imdbUrl: 'https://www.imdb.com/title/tt1877830',
						cover: Batman,
						relatedMovies: [],
					},
					{
						id: 13,
						title: 'Spiderman',
						imdbUrl: 'https://www.imdb.com/title/tt0145487',
						cover: Spider,
						relatedMovies: [],
					},
					{
						id: 14,
						title: 'Iron Man 3',
						imdbUrl: 'https://www.imdb.com/title/tt1300854',
						cover: IronMan,
						relatedMovies: [],
					},
				],
			},
			{
				id: 4,
				title: 'Bullet Train',
				imdbUrl: 'https://www.imdb.com/title/tt12593682',
				cover: BulletTrain,
				relatedMovies: [
					{
						id: 15,
						title: 'Black Adam',
						imdbUrl: 'https://www.imdb.com/title/tt6443346',
						cover: BlackAdam,
						relatedMovies: [],
					},
					{
						id: 16,
						title: 'The Flash',
						imdbUrl: 'https://www.imdb.com/title/tt3107288',
						cover: Flash,
						relatedMovies: [],
					},
					{
						id: 17,
						title: 'Captain Marvel',
						imdbUrl: 'https://www.imdb.com/title/tt4154664',
						cover: Captain,
						relatedMovies: [],
					},
				],
			},
			{
				id: 5,
				title: 'Thor: Love and Thunder',
				imdbUrl: 'https://www.imdb.com/title/tt5113044',
				cover: Thor,
				relatedMovies: [
					{
						id: 18,
						title: 'Knives Out',
						imdbUrl: 'https://www.imdb.com/title/tt8946378',
						cover: Knives,
						relatedMovies: [],
					},
					{
						id: 19,
						title: 'Forrest Gump',
						imdbUrl: 'https://www.imdb.com/title/tt0109830',
						cover: ForrestGump,
						relatedMovies: [],
					},
					{
						id: 20,
						title: 'Inception',
						imdbUrl: 'https://www.imdb.com/title/tt1375666',
						cover: Inception,
						relatedMovies: [],
					},
				],
			},
		],
	},
	{
		id: 1,
		title: 'Blonde',
		imdbUrl: 'https://www.imdb.com/title/tt1655389',
		cover: Blonde,
		relatedMovies: [
			{
				id: 6,
				title: 'Purple Hearts',
				imdbUrl: 'https://www.imdb.com/title/tt4614584',
				cover: PurpleHearts,
				relatedMovies: [
					{
						id: 21,
						title: 'Captain America: The First Avenger',
						imdbUrl: 'https://www.imdb.com/title/tt0458339',
						cover: CaptainAmerica,
						relatedMovies: [],
					},
					{
						id: 22,
						title: 'Ant-Man',
						imdbUrl: 'https://www.imdb.com/title/tt0478970',
						cover: AntMan,
						relatedMovies: [],
					},
					{
						id: 23,
						title: 'Doctor Strange',
						imdbUrl: 'https://www.imdb.com/title/tt1211837',
						cover: Doctor,
						relatedMovies: [],
					},
				],
			},
			{
				id: 7,
				title: 'Black Panther: Wakanda Forever',
				imdbUrl: 'https://www.imdb.com/title/tt9114286',
				cover: BlackPanther,
				relatedMovies: [
					{
						id: 24,
						title: 'Knives Out',
						imdbUrl: 'https://www.imdb.com/title/tt8946378',
						cover: Knives,
						relatedMovies: [],
					},
					{
						id: 25,
						title: 'Joker',
						imdbUrl: 'https://www.imdb.com/title/tt7286456',
						cover: Joker,
						relatedMovies: [],
					},
					{
						id: 26,
						title: 'Interstellar',
						imdbUrl: 'https://www.imdb.com/title/tt0816692',
						cover: Interstellar,
						relatedMovies: [],
					},
				],
			},
			{
				id: 8,
				title: 'The Godfather',
				imdbUrl: 'https://www.imdb.com/title/tt0068646',
				cover: GodFather,
				relatedMovies: [
					{
						id: 27,
						title: 'Inception',
						imdbUrl: 'https://www.imdb.com/title/tt1375666',
						cover: Inception,
						relatedMovies: [],
					},
					{
						id: 28,
						title: 'The Wolf of Wall Street',
						imdbUrl: 'https://www.imdb.com/title/tt0993846',
						cover: TheWolf,
						relatedMovies: [],
					},
					{
						id: 29,
						title: 'Django',
						imdbUrl: 'https://www.imdb.com/title/tt1853728',
						cover: Django,
						relatedMovies: [],
					},
				],
			},
		],
	},
	{
		id: 2,
		title: 'Minions: The rise of guru',
		imdbUrl: 'https://www.imdb.com/title/tt5113044',
		cover: Minions,
		relatedMovies: [
			{
				id: 9,
				title: 'Buzz Lightyear',
				imdbUrl: 'https://www.imdb.com/title/tt10298810',
				cover: BuzzLightyear,
				relatedMovies: [
					{
						id: 30,
						title: 'Inglorious Basterds',
						imdbUrl: 'https://www.imdb.com/title/tt0361748',
						cover: Basterds,
						relatedMovies: [],
					},
					{
						id: 31,
						title: 'Shutter Island',
						imdbUrl: 'https://www.imdb.com/title/tt1130884',
						cover: ShutterIsland,
						relatedMovies: [],
					},
					{
						id: 32,
						title: 'Pulp Fiction',
						imdbUrl: 'https://www.imdb.com/title/tt0110912',
						cover: PulpFiction,
						relatedMovies: [],
					},
				],
			},
			{
				id: 10,
				title: 'Turning Red',
				imdbUrl: 'https://www.imdb.com/title/tt8097030',
				cover: TurningRed,
				relatedMovies: [
					{
						id: 33,
						title: 'Catch me if you can',
						imdbUrl: 'https://www.imdb.com/title/tt0264464',
						cover: CatchMe,
						relatedMovies: [],
					},
					{
						id: 34,
						title: 'Seven: Seven deadly sins. Seven ways to die',
						imdbUrl: 'https://www.imdb.com/title/tt12593682',
						cover: Seven,
						relatedMovies: [],
					},
					{
						id: 35,
						title: 'Forrest Gump',
						imdbUrl: 'https://www.imdb.com/title/tt0109830',
						cover: ForrestGump,
						relatedMovies: [],
					},
				],
			},
			{
				id: 11,
				title: 'Luca',
				imdbUrl: 'https://www.imdb.com/title/tt12801262',
				cover: Luca,
				relatedMovies: [
					{
						id: 36,
						title: 'The Hateful Eight',
						imdbUrl: 'https://www.imdb.com/title/tt3460252',
						cover: TheHatefulEight,
						relatedMovies: [],
					},
					{
						id: 37,
						title: 'The Departed',
						imdbUrl: 'https://www.imdb.com/title/tt0407887',
						cover: TheDeparted,
						relatedMovies: [],
					},
					{
						id: 38,
						title: 'Kill Bill',
						imdbUrl: 'https://www.imdb.com/title/tt0266697',
						cover: KillBill,
						relatedMovies: [],
					},
				],
			},
		],
	},
];
