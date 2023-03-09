import { Divider, styled } from '@mui/material';
import { FilterTypes } from '../../../lib/FilterTypes';

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

function MainItem({ list, title, isHorizontal = false, type }: Props) {
  return (
    <div className='width-full'>
      <div className="text-secondaryMain flex flex-col px-[32%] py-3 text-sm w-full font-bold">
        <Title>{title}</Title>  
      <List>
        <div>

        {type=="text"&&list.map((val,idx)=> <ListItem key={idx}>{val}</ListItem>)}
        {type=="size"&&list.map((val,idx)=> <ListItem key={idx}>{val}</ListItem>)}
        {type=="color"&&list.map((val,idx)=> <ListItem key={idx}>{val}</ListItem>)}

        </div>
      </List>
      </div>
     <SectionDivider/>
    </div>
  );
}

export default MainItem;
