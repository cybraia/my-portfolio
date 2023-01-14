import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        I am <br />
        Krishna Mehta
      </SectionTitle>
      <SectionText>
        I am a Computer Science student at the PES University. I am passionate about software development and am currently looking for summer internship opportunities for Summer 2023.
      </SectionText>
      <Button><a href='https://drive.google.com/file/d/1UkMmEp4BH_p6clHAaBZhBpc1146YnhYX/view?usp=sharing' style={{textDecoration: "none", color: "white"}}>Resume</a></Button>
    </LeftSection>
  </Section>
);

export default Hero;