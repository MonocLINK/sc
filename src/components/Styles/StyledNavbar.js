import styled from 'styled-components';
import { colors, smallScreenSize } from '../../Util';
import { Link } from 'react-router-dom';

export const StyledNav = styled.nav`
    background-color: ${colors.light}88;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1vh 1vw 0;
    padding: 1rem;
    z-index: 10;
    border-top-right-radius: 1vw;
    border-top-left-radius: 1vw;
    display: flex;
    transition: 0.25s;

    @media screen and (max-width: ${smallScreenSize}) {
        flex-direction: column;
    }
`;

export const StyledLink = styled(Link)`
    color: ${colors.mid};
    
    font-size: 3rem;
    display: flex;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    text-shadow: 2px 2px ${colors.dark}55;

    @media screen and (max-width: ${smallScreenSize}) {
        flex-direction: column;
        font-size: 2rem;
    }

`;
