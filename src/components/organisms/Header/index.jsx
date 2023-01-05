import styled from 'styled-components';

import { YourLogo } from './YourLogo';

const HeadWrapper = styled.header`
	width: 100%;
	height: auto;
	margin-top: 40px;
	display: flex;
	justify-content: center;
	align-self: flex-start;
`;

export const Header = () => {
	return (
		<HeadWrapper>
			<YourLogo />
		</HeadWrapper>
	);
};
