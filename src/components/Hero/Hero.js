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
        I am a Computer Science senior at the PES University. I am passionate about software development and am currently looking for spring internship opportunities for 2024 and full time opportunities.
      </SectionText>
      <Button><a href='https://drive.google.com/file/d/1Xee5wEGkFDCupuh4kn_e0XTjQpl1-TFW/view?usp=sharing' style={{textDecoration: "none", color: "white"}}>Resume</a></Button>
    </LeftSection>
  </Section>
);

export default Hero;