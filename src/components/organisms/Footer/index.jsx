import styled from 'styled-components';

import { Disclaimers } from './Disclaimers';

const FooterWrapper = styled.footer`
	width: 100%;
	position: absolute;
	bottom: 0;
	display: flex;
	justify-content: center;
	margin-bottom: 20px;
`;

export const Footer = () => {
	return (
		<FooterWrapper>
			<Disclaimers />
		</FooterWrapper>
	);
};
