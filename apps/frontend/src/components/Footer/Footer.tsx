import { Theme, styled, useTheme } from '@mui/material/styles';
import HelpIcon from '@mui/icons-material/Help';
import SitemapCard from '../SitemapCard/SiteMapCard';
import MailIcon from '@mui/icons-material/Mail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import {
  CommonFilter,
  FilterFrameType,
  FilterGender,
  FilterShape,
  FilterSize,
} from '../data';
import ContactItem from './ContactItem';
type Props = {
  logo: string;
  title: string;
  social: { placeholder: string; url: string; icon: string }[];
  signupLink: string;
};

const FooterBox = styled('footer')(({ theme }) => ({
  display: 'flex',
  width: '100%',
  backgroundColor: theme.paletes.secondary,
  color: theme.navbar.bg_logo,
  maxHeight: '1300px',
  padding: '74px  25px 0',
  justifyContent: 'center',
}));

const Footer = (props: Props) => {
  const filters: CommonFilter[][] = [
    [FilterFrameType, FilterGender],
    [FilterShape, FilterSize],
  ];
  const contacts = [
    { icon: <HelpIcon />, label: 'Help Center', value: '', link: '' },
    {
      icon: <MailIcon />,
      label: 'Email',
      value: 'abc@gmail.com',
      link: 'mailto:abc@gmail.com',
    },
    {
      icon: <LocalPhoneIcon />,
      label: 'Phone',
      value: '+123456',
      link: 'tel:123456',
    },
  ];
  function filterToSiteMap(
    data: CommonFilter
  ): { element: string; link: string }[] {
    return data.list.map((val, idx) => ({
      element: val,
      link: `/glasses?${data.title.toLowerCase()}=${val}`,
    }));
  }
  const theme = useTheme();
  return (
    <FooterBox>
      <div className="flex  flex-col md:flex-row h-[100%] justify-between gap-y-6   md:gap-12">
        <div className="md:w-[200px] md:flex md:justify-center flex pl-8  flex-wrap md:flex-col  lg:w-[456px] h-[100%]">
          {contacts.map((props, idx) => (
            <ContactItem
              icon={props.icon}
              label={props.label}
              link={props.link}
              value={props.value}
              key={idx}
            />
          ))}
        </div>
        {/* <div className='flex'>
      {filters.map((filter,idx)=>
      <SitemapCard className='flex-1' title={filter.title} key={idx}  list={filterToSiteMap(filter)}></SitemapCard>)}
      </div> */}
        <div className="flex flex-wrap gap-4   justify-center  sm:items-baseline">
          {filters.map((group, groupIdx) => (
            <div className="flex gap-4 justify-center  sm:items-baseline" key={groupIdx}>
              {group.map((filter, filterIdx) => (
                <SitemapCard
                  title={filter.title}
                  key={filterIdx}
                  list={filterToSiteMap(filter)}
                ></SitemapCard>
              ))}
            </div>
          ))}
          {/* {filters.map((filter, idx) => (
            <SitemapCard
              title={filter.title}
              key={idx}
              list={filterToSiteMap(filter)}
            ></SitemapCard>
          ))} */}
        </div>
      </div>
    </FooterBox>
  );
};

export default Footer;
