import Button from "@mui/material/Button";
import {useTheme} from "@mui/material";
import { StaticImageData } from "next/image";
export interface CardProps {
src:StaticImageData,
    title:string
}

function Card({src,title}:CardProps) {
    
    const theme= useTheme()
    const shadow="0px 0px 9px 0px "+theme.paletes.tertiary;
    return (  <div className="  lg:h-[70%] lg:w-[80%] w-[100%] h-52  flex justify-end  items-center flex-col "   style={{
        backgroundImage: `url(${src.src})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center bottom',
      

      }} >
        <div className="w-[100%] flex flex-col bg-[#000000] opacity-80 items-center" >
            <div className="font-bold sm:text-2xl  text-[#e5e5e5] ">
                <h5>{title}</h5>
            </div> 
            <div className="flex gap-3 flex-wrap justify-center p-2">
               <div className="">   <Button variant="outlined" className="font-bold text-sm text-black"  style={{borderColor:"black", backgroundColor:theme.button.heroBtnTextColor }} sx={ {height:"40px",p:1,fontSize:"0.6rem",":hover":{borderColor:"black"} }}>Men Glasses</Button></div>
               <div>              <Button variant="outlined" className="font-bold text-sm text-black"  style={{borderColor:"black", backgroundColor:theme.paletes.whiteMain,  boxShadow:shadow,
      MozBoxShadow:shadow,
      WebkitBoxShadow:shadow, }} sx={ {height:"40px",p:1,fontSize:"0.6rem",":hover":{borderColor:"black"} }}>Sun Glasses</Button></div>

            </div>
        
        </div>
        </div>);
}

export default Card;