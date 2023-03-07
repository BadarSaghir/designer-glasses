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
    {
      src: childGlasses,
      title: 'Child',
    },
  ];
  const theme = useTheme();

  return (
    <div className="h-[100%] w-[100%] justify-around  pt-8 items-center gap-2 px1017:gap-0 flex flex-col">
      <div
        className="font-bold shadow-black text-lg tracking-widest"
        style={{ color: theme.paletes.tertiary }}
      >
        {'Glasses For All'.toUpperCase()}
      </div>
      <div className="h-[100%] w-[100%] gap-2 px1017:gap-0 flex flex-col px1017:flex-row  items-center ">
        {glasses.map((src, idx) => (
          <div
            key={idx}
            className="flex-1 flex justify-center items-center h-[100%]"
          >
            <Card src={src.src} title={src.title} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Glasses;
