import React from 'react';

import Consultancyhero from '../section/ConsultancySection/Consultancyhero';
import ConsultancyProblems from '../section/ConsultancySection/ConsultancyProblems';
import ConsultancyProcess from '../section/ConsultancySection/ConsultancyProcess';
import ConsultancyAuthority from '../section/ConsultancySection/ConsultancyAuthority';
import ConsultancyForm from '../section/ConsultancySection/ConsultancyForm';


const Consultancy = () => {
  return (
    <div>
     
      <Consultancyhero />
      <ConsultancyProblems />
      <ConsultancyProcess />
      <ConsultancyAuthority />
      <ConsultancyForm />
    </div>
  );
};

export default Consultancy;