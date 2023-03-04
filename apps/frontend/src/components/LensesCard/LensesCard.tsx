import { Theme, useTheme } from '@mui/material';
import { iCLenses } from '../data';
import { Title } from '../Styles/components';
import ViewButton from '../ViewButton';
import Image from 'next/image';
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
      text: 'Driver Near',
      bgColor: '#ffffff',
      fontColor: theme.paletes.tertiary,
      variant: 'outlined',
      size: 'large',
      shadowColor: 'transparent',
      route: '',
      showIcon: false,
    },
    {
      text: 'Driver Near',
      bgColor: theme.paletes.whiteMain,
      fontColor: theme.paletes.tertiary,
      variant: 'outlined',
      size: 'large',
      shadowColor: 'transparent',
      route: '',
      showIcon: false,
    },
    {
      text: 'Driver Near',
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
  const theme = useTheme();
  const btnValues = getbtnConfig(theme);

  return (
    <div className="min-h-screen flex min-w-full pt-8">
      <div className="flex-grow flex flex-col text-center items-center ">
        <Title>{data.title}</Title>
        <div className="sm:grid gap-8 flex pt-6 flex-col sm:flex-none  sm:grid-cols-2 w-[100%] h-[100%] sm:p-28 sm:gap-8">
          <div className="flex items-center pt-6 flex-1 h-full gap-4 flex-col sm:justify-center sm:items-center sm:pt-10">
            {btnValues.map((v, idx) => {
              return (
                <div key={idx} className="flex h-[100px] ">
                  <ViewButton
                    text={'Driver Near'}
                    bgColor={v.bgColor}
                    fontColor={v.fontColor}
                    variant={v.variant as 'text' | 'contained' | 'outlined'}
                    size={v.size as 'small' | 'medium' | 'large'}
                    shadowColor={v.shadowColor}
                    route={v.route}
                    showIcon={v.showIcon}
                  />
                </div>
              );
            })}
          </div>
          <div className="flex flex-1 h-[100%] relative  gap-4 flex-col justify-center items-center pt-10">
            <Image
              className="h-full w-full"
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
              <div className='h-[100%] w-full relative'>
                <Image
                  className="h-[100%] w-full rounded-3xl"
                  alt={data.name}
                  src={data.imgsrc}
                  width={600}
                  height={1200}
                />
                <div className='md:absolute md:block top-[90%] md:top-[90%] hidden left-[30%]  md:left-[30%] lg:left-[40%] '>
                <ViewButton bgColor={theme.paletes.tertiary} fontColor={theme.navbar.bg_logo} route="" shadowColor={theme.paletes.whiteMain} size={"small"} fontSize={"10px"} text={"VIEW MORE"} variant={"contained"} />
                </div>
              </div>

              <Title color={theme.paletes.secondary}><pre> {data.name} </pre></Title>
            </div>
          ))}
        </div>
        <br className='h-11'/>
      </div>
     
    </div>
  );
}

export default LensesCard;
