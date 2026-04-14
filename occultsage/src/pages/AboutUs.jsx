import React from 'react';
import AboutIntro from "../section/about/AboutIntro";
import WhoWeAre from "../section/about/WhoWeAre";
import Consultant from "../section/about/Consultant";
import RoadmapSection from "../section/about/RoadmapSection";
import MissionVision from '../section/about/MissionVision';
const AboutUs = () => {
  return (
    <div>
      <AboutIntro />
       <WhoWeAre/>
      <Consultant/>
      <RoadmapSection/>
      <MissionVision/>
    </div>
  );
};

export default AboutUs;