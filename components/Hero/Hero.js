import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
    <>
        <Section row nopadding>
            <LeftSection>
                <SectionTitle main center>
                    Hii <br />
                    I`m Ankit Maurya
                </SectionTitle>
                <SectionText>
                    I design and develop services for customers of all sizes, specializing in creating stylish, modern website, web and online services
                    stores.
                </SectionText>
                <Button onClick={props.handleClick}>Learn More</Button>
            </LeftSection>
        </Section>
    </>
);

export default Hero;