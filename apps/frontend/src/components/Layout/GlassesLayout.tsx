import React, { PropsWithChildren } from 'react';
import Header from '../Header/Header';
import {
  navItems,
  imageText,
  brandTitle,
  brandsImagesSrc,
  sellerImagesSrc,
  sellerListTitle,
  socialData,
  stylesData
} from '../data';
import Logo from '../../assets/home/charmant logo.png';
import HeaderImg from '../../assets/home/header.png';
import { Navbar } from '../Navbar';
import { Footer } from '../Footer';

const GlassesLayout = ({
  children,
  header = HeaderImg.src,
  showHeader = false,
}: PropsWithChildren & { header?: string; showHeader?: boolean }) => {
  return (
    <div className="flexflex-col ">
      {showHeader ? (
        <Header
          navData={navItems}
          hreoImg={header ? header : HeaderImg.src}
          imageText={imageText}
          logo={Logo}
          isShopNow={false}
        />
      ) : (
        <Navbar navitems={navItems} logo={Logo} />
      )}

      {children}
      <div className='mt-[3.08rem]'><Footer logo='' signupLink="" title={''} social={[]}/></div>
    </div>
  );
};

export default GlassesLayout;
