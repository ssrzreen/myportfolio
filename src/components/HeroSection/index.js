import React from 'react'
import {
    HeroContainer, HeroBg, HeroInnerContainer, HeroLeftContainer, HeroRightContainer
    , Title, TextLoop, Span, SubTitle, ResumeButton, Image
} from './herosec.style'
import { Bio } from '../../data/constants'
import Typewriter from 'typewriter-effect'
import HeroBgAnimation from '../HeroBgAnimation'
import HeroTag from '../../images/SAVE_20240228_125331 (1).jpg'

const Hero = () => {
    return (
        <div id="about">
            <HeroContainer>
                <HeroBg>
                    <HeroBgAnimation></HeroBgAnimation>
                </HeroBg>
                <HeroInnerContainer>
                    <HeroLeftContainer>
                        <Title>I am <br />{Bio.name}</Title>
                        <TextLoop>
                            I am
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle>{Bio.description}</SubTitle>
                        {/* <ResumeButton href={Bio.name} target="_blank">Check Resume</ResumeButton> */}
                    </HeroLeftContainer>
                    <HeroRightContainer>
                        <Image src={HeroTag} alt="Hero"/>
                    </HeroRightContainer>
                </HeroInnerContainer>
            </HeroContainer>
        </div>
    )
}

export default Hero