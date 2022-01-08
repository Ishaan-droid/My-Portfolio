import hcl from '../../images/hcll.png';
import TechMahindra from '../../images/TechMahindra.png';
// import guardian from '../../images/guardian.png';
import { AiOutlineDatabase, AiOutlineConsoleSql } from 'react-icons/ai';
import { SiJirasoftware } from 'react-icons/si';
import { DiJavascript1 } from 'react-icons/di';
// import { DiReact, DiJavascript1 } from 'react-icons/di';

const experienceDetails = [
  {
    id: 0,
    company: 'HCL',
    image: hcl,
    alt: 'Ishaan_HCL',
    position: 'Database Developer',
    position_icon: AiOutlineDatabase,
    technologies: 'Oracle SQL, PL-SQL, Shell Scripting, Unix',
    tech_icon: AiOutlineConsoleSql,
    duration: '2017,Sept - 2018,April',
    work: [
      'Used DDL queries to edit datatypes and length, create packages, procedures and triggers to migrate data to production tables.',
      'Daily/Weekly checking of logs on an open-source terminal emulator – PUTTY, using Unix commands and resolving production issues.',
      'Debugging server errors, memory compact issues, providing support and handling SQL issues of the QES.',
      'Performed transmission of CSV files from one server to another through Connect Direct',
      'Optimised queries using parallel processing, indexing',
    ],
  },
  {
    id: 1,
    company: 'Tech Mahindra',
    image: TechMahindra,
    alt: 'Ishaan_TechMahindra',
    position: 'Software Engineer',
    position_icon: SiJirasoftware,
    technologies: 'HTML, CSS, Javascript, React, SQL',
    tech_icon: DiJavascript1,
    duration: '2018,July - 2020,October',
    work: [
      'Developed new functionalities and systems through AJAX and Rest services',
      'Used React extensively to make faster web apps, added spinners, react routing and used lifecycle methods',
      'Modified GUI as per the requirements by the client',
      'Worked on JEST, and written test cases to increase code coverage',
      'Maintained code, bug fixes and did code refactoring wherever needed.',
      'Did agile development, 10 points an iteration and have a habit of working under tight deadlines',
    ],
  },
  // {
  //   id: 2,
  //   company: 'Guardian Life Insurance',
  //   image: guardian,
  //   alt: 'Ishaan_Guardian',
  //   position: 'Senior Engineer',
  //   position_icon: SiJirasoftware,
  //   technologies: 'Javascript, React, Node JS, Express JS, SQL, Bootstrap',
  //   tech_icon: DiReact,
  //   duration: '2021,March - 2021,Aug',
  //   work: [
  //     'Same responsibilities like before in tighter deadlines.',
  //     'Making API calls and managing data efficiently with with Redux thunk, context API and variety of array methods',
  //     'Created Rest API with Node JS, Mongo DB and even performed user authentication and authorisation',
  //     'Made pages responsive with bootstrap and its utility classes',
  //   ],
  // },
];

export default experienceDetails;
