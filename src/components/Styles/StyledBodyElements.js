import styled from 'styled-components';
import { colors, smallScreenSize } from '../../Util';

export const StyledHeading = styled.div`
    color: ${colors.lighter};
    background-color: ${colors.light}88;
    text-align: center;

    margin-left: 1vw;
    margin-right: 1vw;
    padding: 1vh 5vw;
    border-bottom-left-radius: 1vw;
    border-bottom-right-radius: 1vw;
    font-size: 5rem;
    flex: 1;
    transition: 0.25s;
    text-shadow: 2px 2px ${colors.dark}88;

    @media screen and (max-width: ${smallScreenSize}) {
        font-size: 3rem;
    }

`;

export const StyledBody = styled.div`
    color: ${colors.lighter};
    background-color: ${colors.darker}88;
    display: flex;


    margin: 1vw;
    padding: 1vh 5vw;
    border-radius: 1vw;
    font-size: 1.5rem;
    padding-left: 1vh 5vw;
    transition: 0.25s;
    white-space: normal;

    @media screen and (max-width: ${smallScreenSize}) {
        font-size: 1.2rem;
    }

    & > img {
        padding: 30px;
        height: 50%;
        width: 50%;
        border-radius: 20px;

        cursor: pointer;
        float: right;
        
    }

`;