import { navItems } from "../components/data";
import { FeatureStyle } from "../components/Feature";
import { Footer } from "../components/Footer";
import Header from "../components/Header/Header";
import UserLayout from "../components/Layout/UserLayout";
import { FeatureSellers } from "../components/Sellers";

const Index =()=>{
  
  return (
    <UserLayout>
    <Header navData={navItems} logo={"Logo here"}/>
    <FeatureSellers list={["Ali"]}/>
    <FeatureStyle title=""/>
    <Footer logo="" signupLink="string" social={[]} title=""/>
    </UserLayout>
  );}

export default Index
