/* eslint-disable */

import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
    const [showFullContent, setShowFullContent] = useState(false);
    <>
        <Section row nopadding>
            <LeftSection>
                <SectionTitle main center>
                    Hii <br />
                    I`m Ankit Maurya
                </SectionTitle>
                <SectionText>
                {showFullContent?"As a web designer and developer, I specialize in creating stylish and modern websites, web applications and online stores, serving clients of all sizes. My goal is to provide high-quality and visually appealing solutions that engage users and help businesses succeed in the o.nline space. With a focus on customer satisfaction, I work closely with clients to understand their needs and deliver results that exceed their expectations.":"As a web designer and developer, I specialize in creating stylish and modern websites, web applications and online stores, serving clients of all sizes. My goal is to provide high-quality and visually appealing solutions that engage users and help businesses succeed in the o.nline space."}
                </SectionText>
                <Button onClick={()=>{setShowFullContent(!showFullContent)}}>Learn More</Button>
            </LeftSection>
        </Section>
    </>
);

export default Hero;
