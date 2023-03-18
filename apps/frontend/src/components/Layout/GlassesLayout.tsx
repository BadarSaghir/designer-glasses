/* eslint-disable @next/next/no-img-element */
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
  stylesData,
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
      <Navbar navitems={navItems} logo={Logo} />

      <div className="flex flex-col items-center   pb-14  m-0">
        <div className="w-full  shadow mt-2">
          <section className="o-grid-banner">
            <div className="o-grid-banner__img">
              <p>
                <img
                  src="https://image2.cdnsbg.com/filter-page-resources/filter-page-banners/1aaad9f55578a6a954452762c8dbe754.png?q=90"
                  width=""
                  height="200"
                  alt="Grid banner"
                  className="w-full object-cover"
                />
              </p>
            </div>
          </section>
        </div>
      </div>


      {children}
      <div className="mt-[3.08rem]">
        <Footer logo="" signupLink="" title={''} social={[]} />
      </div>
    </div>
  );
};

export default GlassesLayout;
