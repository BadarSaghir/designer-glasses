import { Divider, styled } from '@mui/material';
import { FilterTypes } from '../../../lib/FilterTypes';
import style from "./MainItem.module.scss"
type Props = {
  title: string;
  list: string[];
  isHorizontal?: boolean;
  type: FilterTypes;
};

const List = styled('ul')(({ theme }) => ({
  listStyle: 'none',


}));
const ListItem= styled('li')(({ theme }) => ({
  listStyle: 'none',
  // content:"2022",
 
  


}));

const SectionDivider=styled(Divider)(({theme})=>(
  {
    backgroundColor:theme.paletes.tertiary,
    opacity:"100%",
    height:2,
    width:"100%"
  }
))

const Title=styled('h3')(({theme})=>(
  {

  }
))

interface CircleProps {
  color: string
}
const Circle = styled('div')<CircleProps>(({ color }) => ({
  backgroundColor: color,
  borderRadius: '50%',
  height: '5px',
  width: '5px',
}));


function MainItem({ list, title, isHorizontal = false, type }: Props) {
  return (
    <div className='width-full'>
      <div className="text-secondaryMain flex flex-col px-[32%] py-3 text-sm w-full font-bold">
        <Title>{title}</Title>  
      <List>
        <div>

        {type=="text"&&list.map((val,idx)=> <ListItem className={style.item} key={idx}>{val}</ListItem>)}
        {type=="color"&& <div className='grid grid-col-4'>  {list.map((val,idx)=>  <Circle color={val}  className={style.item} key={idx}>{val}</Circle>)} </div>}
        {type=="size"&& <div className='flex'>  {list.map((val,idx)=>  <Circle color={val}  className={style.item} key={idx}>{val}</Circle>)} </div>}

        </div>
      </List>
      </div>
     <SectionDivider/>
    </div>
  );
}

export default MainItem;
