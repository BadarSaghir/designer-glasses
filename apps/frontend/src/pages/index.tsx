import { Styles } from "../components/Styles";
import { Footer } from "../components/Footer";
import Header from "../components/Header/Header";
import UserLayout from "../components/Layout/UserLayout";
import { Features } from "../components/Features";
import Box from "@mui/material/Box";
import Sellers from "../components/Sellers";
import { useTheme } from "@mui/material";
import { navItems,imageText, brandTitle, brandsImagesSrc, sellerImagesSrc, sellerListTitle, socialData, stylesData } from "../components/data";
import Logo from "../assets/home/charmant logo.png"
import HeaderImg from "../assets/home/header.png"
import Head from "next/head";
import LensesCard from "../components/LensesCard";


const Index =()=>{
  const theme = useTheme()
  return (<>
  <Head>
    <meta  name="description" content="Designer glasses will help you choose the best glasses and lenses for you eyes by delivering them in your home" />
    <title>Designer Glasses</title>
  </Head>
    <UserLayout>
    <Header navData={navItems}  hreoImg={HeaderImg.src} imageText={imageText} logo={Logo}/>
    <Features brandTitle={brandTitle} brandsImagesSrc={brandsImagesSrc} sellerImagesSrc={{best:sellerImagesSrc,new:sellerImagesSrc}} sellerListTitles={sellerListTitle} brandUrl={"/brand"} sellerUrl={{new:"/sellers",best:"sellers"}}/>
    <div className={`flex-grow min-h-[100vh] `}>
          <Box className={"h-[100%] w-[100%] min-h-[100vh] flex items-center"} bgcolor={theme.sellerBg}>
          <Sellers sectionTitles={sellerListTitle} sellerListSrc={{best:sellerImagesSrc,new:sellerImagesSrc}} sellerUrl={{new:"/sellers",best:"sellers"}} />
          </Box>
    </div>
    
    <Styles {...stylesData}/>
    <LensesCard />
    <Footer logo="" signupLink="string" social={socialData} title=""/>
    </UserLayout>
    </>
  );}

export default Index
