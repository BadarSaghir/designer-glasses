import menGlasses from '../../assets/glasses/men.jpg';
import childGlasses from '../../assets/glasses/child.jpg';
import womenGlasses from '../../assets/glasses/women.jpg';
import Card, { CardProps } from './Card';
import { useTheme } from '@mui/material';

function Glasses() {
 
  const glasses: CardProps[] = [
    {
      src: menGlasses,
      title: 'Men',
    },
    {
      src: womenGlasses,
      title: 'Women',
    },
  
  ];
  const theme = useTheme();

  return (
    <div className="h-[100%] w-[100%] justify-around  pt-8 items-center gap-2 px1017:gap-0 flex flex-col">
      <div
        className="font-bold shadow-black text-lg tracking-widest"
        style={{ color: theme.paletes.tertiary }}
      >
     <div className='text-[2rem] pb-8'>  {'Glasses For All'.toUpperCase()}</div> 
      </div>
      <div className="h-[100%] w-[100%] gap-2 px1017:gap-0 flex flex-col px1017:flex-row  items-center ">
        {glasses.map((src, idx) => (
          <div
            key={idx}
            className="flex-1 flex w-[100%]  justify-center items-center h-[650px]"
          >
            <Card src={src.src} title={src.title} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Glasses;
