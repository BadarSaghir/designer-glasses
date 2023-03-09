import ELLE from '../assets/home/elle logo.png';
import ESPIRT from '../assets/home/espirit logo.png';
import LACTOS from '../assets/home/lacoste logo.png';
import STEPER from '../assets/home/stepper logo.png';
import CHARMANT from '../assets/home/charmant logo.png';
import GUESS from '../assets/home/guess logo.png';
import glasses1 from '../assets/home/glasses 1.png';
import glasses2 from '../assets/home/glasses 2.png';
import glasses3 from '../assets/home/glasses 3.png';
import glasses4 from '../assets/home/glasses 4.png';
import glasses5 from '../assets/home/glasses 5.png';
import glasses6 from '../assets/home/glasses 6.png';
import intaImg from '../assets/home/insta.png';
import fbImg from '../assets/home/fb.png';
import mailImg from '../assets/home/mail.png';
import cateye from '../assets/home/cat eye.png';
import react from '../assets/home/rectangle.png';
import round from '../assets/home/round.png';
import square from '../assets/home/square.png';
import lens1 from '../assets/home/color lense.png';
import lens2 from '../assets/home/clear lense.png';
import img5 from '../assets/home/img 5.jpg';
import img6 from '../assets/home/img 6.jpg';
import diagramn from '../assets/home/diagram.png';

export const navItems = [
  {
    name: 'Glasses',
    link: '/glasses?q=all',
  },
  {
    name: 'Sun Glasses',
    link: '/glasses?q=sun',
  },
  {
    name: 'Brands',
    link: '/glasses?q=brands',
  },
  {
    name: 'Contact Lenses',
    link: '/glasses?q=lenses',
  },
  {
    name: 'Sale',
    link: '/glasses?q=sale',
  },
];
export const imageText = [
  {
    name: 'MEN GLASSES',
    link: '/glasses',
  },
  {
    name: 'MEN SUNGLASSES ',
    link: '/glasses',
  },
  {
    name: 'WOMEN GLASSES',
    link:'/glasses',
  },
  {
    name: 'WOMEN SUNGLASSES ',
    link: '/glasses',
  },
];

export const brandsImagesSrc = [
  ELLE.src,
  ESPIRT.src,
  LACTOS.src,
  STEPER.src,
  CHARMANT.src,
  GUESS.src,
];
export const sellerImagesSrc = [
  glasses1.src,
  glasses2.src,
  glasses3.src,
  glasses4.src,
  glasses5.src,
  glasses6.src,
];
export const brandTitle = ['TOP BRAND'];
export const sellerListTitle = ['NEW ARRIVALS', 'BEST SELLER'];
export const socialData = [
  { icon: fbImg.src, placeholder: '', url: '' },
  { icon: intaImg.src, placeholder: '', url: '' },
  { icon: mailImg.src, placeholder: '', url: '' },
];

export interface IStylesData {
  title: string;
  showcaseGlassess: { imgSrc: string; name: string }[];
  showcaseLenses: { imgSrc: string; name: string }[];
}

export const stylesData: IStylesData = {
  title: 'CHOOSE YOUR STYLE',
  showcaseGlassess: [
    { name: 'CAT EYE', imgSrc: cateye.src },
    { name: 'RECTANGLE', imgSrc: react.src },
    { name: 'ROUND', imgSrc: round.src },
    { name: 'SQUARE', imgSrc: square.src },
  ],
  showcaseLenses: [
    { imgSrc: lens1.src, name: 'COLOUR CONTACT LENSES ' },
    { imgSrc: lens2.src, name: 'CLEAR CONTACT LENSES ' },
  ],
};

export interface ICLenses {
  title: string;
  topImages: string[];
  BottomImages: { name: string; imgsrc: string; url: string }[];
}
export const iCLenses: ICLenses = {
  title: 'CHOOSE YOUR LENSES LIKE',
  topImages: [diagramn.src, 'Digram'],
  BottomImages: [
    {
      name: 'HOW TO CHOOSE EYE\nGLASSES?',
      imgsrc: img5.src,
      url: '',
    },
    {
      name: 'EYE GLASSES FOR YOUR\nFACE STYLE',
      imgsrc: img6.src,
      url: '',
    },
  ],
};

export interface CommonFilter {
  title: string;
  list: string[];
}

export const FilterGender: CommonFilter = {
  title: 'GENDERS',
  list: ['Men', 'Women', 'Kids'],
};

export const FilterShape: CommonFilter = {
  title: 'SHAPES',
  list: [
    'Cat Eye',
    'Round',
    'Aviator',
    'Square',
    'Rectangle',
    'Oval',
    'Sports',
    'Club Master',
    'One Piece',
  ],
};

export const FilterColor: CommonFilter = {
  title: 'COLORS',
  list: [
    '#000000',
    '#3C3838',
    '#0B0D21',
    '#050E71',
    '#6F0303',
    '#E7E1E1',
    '#032306',
    '#010904',
    '#162183',
    '#A59004',
    '#0D021F',
    '#001C6A',
    '#162183',
    '#2FD905',
    '#091908',
    '#030D27',
  ],
};



export const FilterFrameType: CommonFilter = {
  title: 'FRAME TYPE',
  list: [
   "Full Frame",
   "Rimles",
   "Half Rimless"
  ],
};


export const FilterSize: CommonFilter = {
  title: 'SIZE',
  list: [
   "S",
   "M",
   "L",
   "XL"
  ],
};
