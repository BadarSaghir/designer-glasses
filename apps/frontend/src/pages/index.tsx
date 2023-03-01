import { navItems,imageText, brandTitle, brandsImagesSrc, sellerImagesSrc, sellerListTitle } from "../components/data";
import { Styles } from "../components/Styles";
import { Footer } from "../components/Footer";
import Header from "../components/Header/Header";
import UserLayout from "../components/Layout/UserLayout";
import { Features } from "../components/Features";

const Index =()=>{

  return (
    <UserLayout>
    <Header navData={navItems} imageText={imageText} logo={"Logo here"}/>
    <Features brandTitle={brandTitle} brandsImagesSrc={brandsImagesSrc} sellerImagesSrc={{best:sellerImagesSrc,new:sellerImagesSrc}} sellerListTitles={sellerListTitle} brandUrl={"/brand"} sellerUrl={{new:"/sellers",best:"sellers"}}/>
    <Styles title=""/>
    <Footer logo="" signupLink="string" social={[]} title=""/>
    </UserLayout>
  );}

export default Index
