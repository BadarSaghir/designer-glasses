import { Divider, styled } from '@mui/material';
import { useSetRecoilState } from 'recoil';
import { FilterTypes } from '../../../lib/FilterTypes';
import { filterAtomState } from '../../../recoil/atom/filterAtom';
import { StyledMenu } from './MenuButton';
import style from './MainItem.module.scss';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import CheckboxIcon from '@mui/material/Checkbox';
import {RangeFilter} from "./RangeItem"
import React from 'react';

type Props = {
  title: string;
  list: string[];
  isHorizontal?: boolean;
  type: FilterTypes;
  current: number[];
  filterKey: string;
};
interface ISelected {
  selected: boolean;
}

const List = styled('ul')(() => ({
  listStyle: 'none',
}));
const ListItem = styled('div')<ISelected>(({ selected, theme }) => ({
  listStyle: 'none',
  // content:"2022",
  cursor: 'pointer',
  paddingLeft: '3px',

  // border:`${selected?"2px solid "+theme.paletes.tertiary:""}`
}));

const SectionDivider = styled(Divider)(({ theme }) => ({
  backgroundColor: theme.paletes.tertiary,
  opacity: '100%',
  height: 2,
  width: '100%',
}));

const Title = styled('h3')(({ theme }) => ({}));

interface CircleProps {
  color: string;
  selected: boolean;
}
const Circle = styled('div')<CircleProps>(({ theme, color, selected }) => ({
  backgroundColor: color,
  borderRadius: '100%',
  height: '18px',
  width: '18px',

  cursor: 'pointer',
  padding: '8px',

  // boxShadow: `${selected?24:''}`
  border: `${selected ? '4px solid ' + theme.paletes.tertiary : ''}`,
}));

function MainItem({
  list,
  title,
  isHorizontal = true,
  type,
  current = [],
  filterKey,
}: Props) {
  const setFilterState = useSetRecoilState(filterAtomState);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const setFilter = (
    key: 'gender' | 'shape' | 'color' | 'frameType' | 'size'|'price',
    idx: number
  ) => {
    return () => {
      console.log('clicked', key, idx);
      setFilterState((state) => {
        const isSelected = state[key].selected.includes(idx);
        return {
          ...state,
          [key]: {
            ...state[key],
            selected: isSelected
              ? state[key].selected.filter((item) => item !== idx)
              : [...state[key].selected, idx],
          },
        };
      });
    };
  };

  return (
    <div className="width-full">
      <div className="text-secondaryMain flex flex-col px-[18%] py-4 text-sm w-full font-bold">
        <Title>{title}</Title>
        <Button
          id="demo-customized-button"
          aria-controls={open ? 'demo-customized-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          variant="contained"
          className="text-tertiaryMain md:hidden bg-secondaryMain"
          disableElevation
          onClick={handleClick}
          endIcon={<KeyboardArrowDownIcon />}
        >
          {'Select Filters'}
        </Button>
        <List>
          <div>
            {type == 'text' && (
              <>
                {list.map((val, idx) => (
                  <ListItem
                    selected={current.includes(idx)}
                    onClick={setFilter(
                      filterKey as
                        | 'size'
                        | 'color'
                        | 'gender'
                        | 'shape'
                        | 'frameType',
                      idx
                    )}
                    className={style.item + ' hidden  rounded-md py-1 pl-2 md:block'}
                    key={idx}
                  >
                   <CheckboxIcon className='text-tertiaryMain'   sx={(theme)=>({
          '&.Mui-checked': {
            color: theme.paletes.secondary,
          },
        })} checked={current.includes(idx)} /> {val}
                  </ListItem>
                ))}
                <StyledMenu
                className='md:hidden'
                  id="demo-customized-menu"
                  MenuListProps={{
                    'aria-labelledby': 'demo-customized-button',
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                >
                  {' '}
                  {list.map((val, idx) => (
                    <div key={idx}>
                      <MenuItem onClick={handleClose} disableRipple>
                        <ListItem

                    selected={current.includes(idx)}
                    onClick={setFilter(
                            filterKey as
                              | 'size'
                              | 'color'
                              | 'gender'
                              | 'shape'
                              | 'frameType',
                            idx
                          )}
                          className={style.item + ' pr-8 pl-2 py-2 rounded-lg'}
                          key={idx}
                        >
                           <CheckboxIcon className='text-tertiaryMain'   sx={(theme)=>({
          '&.Mui-checked': {
            color: theme.paletes.secondary,
          },
        })} checked={current.includes(idx)} /> {val}
                        </ListItem>{' '}
                      </MenuItem>
                    </div>
                  ))}
                </StyledMenu>
              </>
            )}
            {type == 'color' && (
              <>
                {
                  <div className="md:grid md:grid-cols-4 md:gap-1 md:w-24  hidden">
                    {list.map((val, idx) => (
                      <Circle
                      selected={current.includes(idx)}
                      onClick={setFilter(
                          filterKey as
                            | 'size'
                            | 'color'
                            | 'gender'
                            | 'shape'
                            | 'frameType',
                          idx
                        )}
                        className="cursor-pointer"
                        color={val}
                        key={idx}
                      ></Circle>
                    ))}
                  </div>
                }
                <StyledMenu
                className='md:hidden'
                  id="demo-customized-menu"
                  MenuListProps={{
                    'aria-labelledby': 'demo-customized-button',
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                >
                  {' '}
                  <MenuItem className='flex justify-center items-center' onClick={handleClose} disableRipple>
                    <div className="grid grid-cols-4 gap-1 w-24 ">
                      {list.map((val, idx) => (
                        <Circle
                        selected={current.includes(idx)}
                        onClick={setFilter(
                            filterKey as
                              | 'size'
                              | 'color'
                              | 'gender'
                              | 'shape'
                              | 'frameType',
                            idx
                          )}
                          className="cursor-pointer "
                          color={val}
                          key={idx}
                        ></Circle>
                      ))}
                    </div>
                  </MenuItem>
                </StyledMenu>
              </>
            )}

            {type == 'size' && (
            <RangeFilter />
            )}
              {type == 'price' && (
            <RangeFilter />
            )}
          </div>
          <div>
            {/* <StyledMenu
              id="demo-customized-menu"
              MenuListProps={{
                'aria-labelledby': 'demo-customized-button',
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose} disableRipple>
                Edit
              </MenuItem>
            </StyledMenu> */}
          </div>
        </List>
      </div>
      {isHorizontal && <SectionDivider />}
    </div>
  );
}

export default MainItem;
