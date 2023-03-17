import { Theme, useTheme } from '@mui/material';
import { iCLenses } from '../data';
import { Title } from '../Styles/components';
import ViewButton from '../ViewButton';
import Image from 'next/image';
import { useState } from 'react';
function getbtnConfig(theme: Theme) {
  const btnProps = [
    {
      text: 'Driver Near',
      bgColor: '#ffffff',
      fontColor: theme.paletes.tertiary,
      variant: 'outlined',
      size: 'small',
      shadowColor: 'transparent',
      route: '',
      showIcon: false,
    },
    {
      text: 'BLUE LIGHT',
      bgColor: '#ffffff',
      fontColor: theme.paletes.tertiary,
      variant: 'outlined',
      size: 'large',
      shadowColor: 'transparent',
      route: '',
      showIcon: false,
    },
    {
      text: 'PROGRESSIVE',
      // bgColor: theme.paletes.tertiary,
      bgColor: '#ffffff',
      fontColor: theme.paletes.tertiary,

      // fontColor: theme.paletes.secondary,
      // variant: 'contained',
      variant: 'outlined',

      size: 'large',
      shadowColor: 'transparent',
      route: '',
      showIcon: false,
    },
    {
      text: 'PHOTOSUN',
      bgColor: '#ffffff',
      fontColor: theme.paletes.tertiary,
      variant: 'outlined',
      size: 'large',
      shadowColor: 'transparent',
      route: '',
      showIcon: false,
    },
  ];
  return btnProps;
}

function LensesCard() {
  const data = iCLenses;
  const theme= useTheme()
  const seletedTheme= {
    bgColor: theme.paletes.tertiary,
    fontColor: theme.paletes.secondary,
    variant: 'contained',
    size: 'large',
  };
  const [selected, setSelected] = useState(2);
  const btnValues = getbtnConfig(theme);

  return (
    <div className="min-h-screen flex min-w-full pt-8 pb-16">
      <div className="flex-grow flex flex-col text-center items-center ">
        <Title className="text-[2rem] pb-10">{data.title}</Title>
        <div className="sm:grid gap-8 flex flex-col sm:flex-none  sm:grid-cols-2 w-[100%] h-[100%]  sm:gap-8">
          <div className="hidden md:flex items-center flex-1 h-full gap-4 flex-col sm:justify-center sm:items-center sm:pt-10">
            {btnValues.map((v, idx) => {
              return (
                <div key={idx} className="flex h-[100px] " onClick={()=>{setSelected(idx)}}>
                  <ViewButton
                    txtclassName="text-[2rem]"
                    className=" md:h-20 md:w-80"
                    text={v.text}
                    bgColor={idx===selected?seletedTheme.bgColor:v.bgColor}
                    fontColor={idx===selected?seletedTheme.fontColor:v.fontColor}
                    variant={idx===selected?seletedTheme.variant as "contained":v.variant as 'text' | 'contained' | 'outlined'}
                    size={idx===selected?seletedTheme.size as "small":v.size as 'small' | 'medium' | 'large'}
                    shadowColor={v.shadowColor}
                    route={v.route}
                    showIcon={v.showIcon}
                  
                  />
                </div>
              );
            })}
          </div>
          <div className="hidden md:flex flex-1 h-[100%] relative  gap-4 flex-col justify-center items-center pt-10">
            <Image
              className="h-[80%] w-[80%] mr-12"
              alt={data.topImages[1]}
              src={data.topImages[0]}
              width={600}
              height={1200}
            />
          </div>
          {data.BottomImages.map((data, idx) => (
            <div
              key={idx}
              className="flex h-72 sm:h-full px-12  flex-col justify-center items-center gap-4 pb-14"
            >
              <div className="h-[220px] w-[220px] md:h-[80%]  md:w-[80%] aspect-video relative">
                <Image
                  className="h-[100%] min-w-[220px]  w-full rounded-[20%]"
                  alt={data.name}
                  src={data.imgsrc}
                  width={600}
                  height={1200}
                />
                <div className="relative hidden ms:block md:block  top-[-10%] ">
                  <ViewButton
                    bgColor={theme.paletes.tertiary}
                    fontColor={theme.navbar.bg_logo}
                    route=""
                    shadowColor={'transparent'}
                    size={'small'}
                    fontSize={'10px'}
                    text={'VIEW MORE'}
                    variant={'contained'}
                  />
                </div>
              </div>

              <Title color={theme.paletes.secondary}>
                <pre> {data.name} </pre>
              </Title>
            </div>
          ))}
        </div>
        <br className="h-11" />
      </div>
    </div>
  );
}

export default LensesCard;
