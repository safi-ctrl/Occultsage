import React from 'react';

import Astrology from '../section/course/Astrology'; 
import Astrologyvedic from '../section/course/Astrologyvedic';
import AstrologyvastuCombo from '../section/course/AstrologyvastuCombo';
import Neomerology from '../section/course/Neomerology';
import Tarotcard from '../section/course/Tarotcard';
import PalmistryCourse from '../section/course/PalmistryCourse';
const Courses = () => {
  return (
    <div>
      <Astrology/>
      <Astrologyvedic/>
      < AstrologyvastuCombo />
      <Neomerology/>
      <Tarotcard/>
      <PalmistryCourse/>
    </div>
  );
};

export default Courses;