import React from 'react'

type Props = {
  text:string,
  bgColor:string,
  fontColor:string,
  iconColor?:string,
  variant:'text' | 'outlined' | 'contained',
  size:"large"|"medium" |"small"
}
import IconButton from '@mui/material/Button';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
const ViewButton = (props: Props) => {
  return (
    <IconButton
    variant={props.variant}
    sx={
      {
        ":hover":{
          borderColor:props.fontColor
        }
      }
    }
    className={`font-bold rounded-full shadow-md border-backgound-200 shadow-[${props.fontColor}] `}


    style={{
      backgroundColor: props.bgColor,
      color: props.fontColor,
      
    
    }}
  >
    <div className='flex  h-[100%] w-[100%] items-center gap-2 text-sm'>
      <div>{props.text}</div>

    <PlayCircleFilledIcon style={{color:props.iconColor}} fontSize={props.size}  />
    </div>
  </IconButton>
  )
}

export default ViewButton