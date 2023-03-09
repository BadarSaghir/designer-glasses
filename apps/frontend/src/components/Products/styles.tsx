import { styled } from '@mui/material';
import Button from '@mui/material/Button';
export const FilterContainer = styled('div')({
  display: 'flex',
  justifyContent:"space-between",
  paddingLeft:"20px" ,
  paddingRight:"20px",
  paddingTop:"5px"  
 
});

export const FilterHideButton = styled(Button)({
    fontWeight:"bolder"
});
export const FilterSortButton = styled(Button)<{show:boolean}>(({theme,show=true})=>({
    backgroundColor:theme.paletes.secondary,
    display:show?"block":"none",
    color:theme.navbar.bg_logo
}));


export default FilterContainer;
