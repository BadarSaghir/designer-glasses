import Link from "next/link";
import { FunctionComponent } from "react";

interface ContactItemProps {
     icon: JSX.Element; label: string; value: string; link: string;
}
 
const ContactItem: FunctionComponent<ContactItemProps> = ({icon,label,link,value}) => {

    return (
      <Link href={link}>  <div className="min-h-[60px] sm:w-[273px]  p-[25px] h-[100%] mt-2 pt-0 pb-0 cursor-pointer justify-between flex flex-col text-xl" style={{flexDirection:"inherit"}}>
        <div className="w-[100%] flex items-center gap-4">
            <div>{icon}</div>
            <div className="flex-col flex ">
            <div >{label}</div>
            
            <div className="text-sm">{value}</div>
            </div>

        </div>
       
        
        
        </div></Link> );
}
 
export default ContactItem;