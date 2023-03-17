import Button from '@mui/material/Button';
import { useTheme } from '@mui/material';
import { StaticImageData } from 'next/image';
import { useState } from 'react';
export interface CardProps {
  src: StaticImageData;
  title: string;
}

function Card({ src, title }: CardProps) {
  const theme = useTheme();
  const shadow = '0px 0px 9px 0px ' + theme.paletes.tertiary;
  const shadowHover = '0px 0px 9px 0px ' + theme.paletes.secondary;
  const mainColor = {
    borderColor: theme.paletes.tertiary,
    backgroundColor: theme.paletes.secondary,
    color: theme.paletes.tertiary,
    boxShadow: shadow,
    MozBoxShadow: shadow,
    WebkitBoxShadow: shadow,
  };
  const hoverColor = {
    backgroundColor: theme.paletes.secondary,
    color: theme.paletes.whiteMain,
    boxShadow: shadowHover,
    MozBoxShadow: shadowHover,
    WebkitBoxShadow: shadowHover,
    borderColor: theme.paletes.whiteMain,
  };
  const glassesButtons = [title + ' Glasses', 'Sun'];

  const [styleShadows, setStyleShadows] = useState(mainColor);
  const [styleShadows2, setStyleShadows2] = useState(mainColor);

  return (
    <div
      className="  lg:h-[70%] lg:w-[80%] w-[100%] h-52  min-w-[320px] flex justify-end  items-center flex-col "
      style={{
        backgroundImage: `url(${src.src})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center bottom',
      }}
    >
      <div className="w-[100%] flex flex-col bg-[#000000] opacity-80 items-center py-4">
        <div className="font-bold sm:text-2xl  text-[#e5e5e5] ">
          <h5>{title}</h5>
        </div>
        <div className="flex  gap-3 items-center px1017:flex-col px1190:flex-row flex-wrap justify-center p-2">
          <div className="">
            {' '}
            <Button
              onMouseEnter={() => {
                setStyleShadows(hoverColor);
              }}
              onMouseLeave={() => setStyleShadows(mainColor)}
              variant="outlined"
              className="font-bold rounded-full px-3 text-sm "
              style={{
                ...styleShadows,
              }}
              sx={{
                height: '40px',
                p: 1,
                fontSize: '0.6rem',
              }}
            >
              {title} Glasses
            </Button>
          </div>
          <div>
            {' '}
            {title.toUpperCase() !== 'CHILD'.toUpperCase() && (
              <Button
                onMouseEnter={() => {
                  setStyleShadows2(hoverColor);
                }}
                onMouseLeave={() => setStyleShadows2(mainColor)}
                variant="outlined"
                className="font-bold rounded-full px-3 text-sm "
                style={{
                  ...styleShadows2,
                }}
                sx={{
                  height: '40px',
                  p: 1,
                  fontSize: '0.6rem',
                }}
              >
                Sun Glasses
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
