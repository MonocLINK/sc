import React, {useState} from 'react';
import { StyledHeading, StyledBody } from '../components/Styles/StyledBodyElements';

import mugshot from "../img/self.jpeg";

import { smallScreenSize } from '../Util';



const About = () => {

    const [bigImg, setBigImg] = useState(false);
        
    const handleImgClick = () => {
        if(visualViewport.width < parseInt(smallScreenSize) + 350){
            setBigImg(prevBigImg => !prevBigImg);

        }
    }

    return(
        <div>
            <StyledHeading> About </StyledHeading>
            <StyledBody
                style={ bigImg ? {justifyContent: 'center', flexWrap: 'wrap-reverse'} : { justifyContent: 'left'}}
            >
                <p
                    style={ bigImg ? {display: 'none'} : { }}
                >My name is Zach Nelson. Ever since I've been enrolled at MHS, I've had one goal in mind: Software Development. Starting at 13, I created scripts that helped me move in games, and say silly things in the chat. This evolved into me wondering how real software was made, and eventually dabbling in Python. Then, first day of the school year I stepped into Mr. Pratt's Intro to Programming course. I hated it. But only because it was so slow and limited, I was always trying to go above and beyond with my own research. This has evovled into my love for learning new things, and specifically love for creating optimal software.</p>
                <img src={mugshot} alt="Self" onClick={handleImgClick}
                    style={ bigImg ? {width: "100%"} : { }}
                />
            </StyledBody>
        </div>
    )
}

export default About;