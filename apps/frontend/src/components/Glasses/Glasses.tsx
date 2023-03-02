import menGlasses from "../../assets/glasses/men.jpg"
import childGlasses from "../../assets/glasses/child.jpg"
import womenGlasses from "../../assets/glasses/women.jpg"
import Card, { CardProps } from "./Card";
import { title } from "process";

function Glasses() {
    const glasses:CardProps[]=[{
        src:menGlasses,
        title:"Men"
    },
    {
        src:childGlasses, 
        title:"Child"
    },
    {
        src:womenGlasses,
        title:"Women"
    }
  ]
    
    return (  <div className="h-[100%] w-[100%] gap-4 px1017:gap-0 flex flex-col px1017:flex-row  items-center  pt-8">
{glasses.map((src,idx)=><div  key={idx} className="flex-1 flex justify-center items-center h-[100%]"><Card src={src.src} title={src.title}/></div> )}

    </div>
    );
}

export default Glasses;