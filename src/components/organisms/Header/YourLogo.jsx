import styled from 'styled-components';

const Logo = styled.div`
	height: 62px;
	width: 187px;
	align-self: center;
	display: flex;
	justify-content: center;
	flex-grow: none;
	flex-shrink: none;
	border: 2px solid #c72c3c80;
	border-radius: 4px;
	background: rgba(0, 0, 0, 0.4);
	color: rgba(199, 44, 60, 0.8);
	box-sizing: border-box;
	h1 {
		align-self: center;
		font-size: 32px;
		line-height: 38px;
	}
`;

export const YourLogo = () => {
	return (
		<Logo>
			<h1>Your Logo</h1>
		</Logo>
	);
};
