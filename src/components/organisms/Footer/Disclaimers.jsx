import styled from 'styled-components';

const DisclaimersWrapper = styled.div`
	height: 19px;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	gap: 30px;
	color: #ffffff;
	opacity: 0.45;
	margin-bottom: 20px;
	padding: 0;
	font-weight: 400;
	p:hover {
		cursor: pointer;
		text-align: center;
	}
`;

export const Disclaimers = () => {
	return (
		<DisclaimersWrapper>
			<p>Privacy Policy</p>
			<p>Terms of Use</p>
		</DisclaimersWrapper>
	);
};
