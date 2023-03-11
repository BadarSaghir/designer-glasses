import { FunctionComponent } from "react";

interface ContactItemProps {
     icon: JSX.Element; label: string; value: string; link: string;
}
 
const ContactItem: FunctionComponent<ContactItemProps> = ({icon,label,link,value}) => {
    return ( <div className="h-[60px] sm:w-[273px] p-[25px] pt-0 cursor-pointer justify-between flex flex-col text-xl">
        <div className="w-[100%] flex items-center gap-4">
            <div>{icon}</div>
            <div>{label}</div>

        </div>
       
        
        
        </div> );
}
 
export default ContactItem;