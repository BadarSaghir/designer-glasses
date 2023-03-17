import React from 'react'

type Props = {
  text:string,
  bgColor:string,
  fontColor:string,
  iconColor?:string,
  variant:'text' | 'outlined' | 'contained',
  size:"large"|"medium" |"small",
  shadowColor:string,
  fontSize?:string |number,
  route:string,
  txtclassName?:string,

  className?:string,
  showIcon?:boolean
}
import IconButton from '@mui/material/Button';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import Link from 'next/link';
;
const ViewButton = (props: Props) => {
  const {showIcon} = props
  let icon = showIcon
  if(icon==undefined) icon=true
  
 const shadow="0px 0px 9px 0px "+props.shadowColor
  return (
    <div className="rounded-full " style={
      {
      boxShadow:shadow,
      MozBoxShadow:shadow,
      WebkitBoxShadow:shadow,
      }
    }>

    <IconButton

    variant={props.variant}
    sx={
      {
        ":hover":{
          borderColor:props.fontColor
        }
      }
    }
    className={`font-bold  rounded-full  shadow-[${props.fontColor}] ${props.className}`}


    style={{
      backgroundColor: props.bgColor,
      color: props.fontColor,
      borderColor:props.fontColor


    }}
  >
    <div className='flex  h-[100%] w-[100%] items-center justify-center gap-2 text-sm'>
      <div className=''><div className={props.txtclassName}>{props.text}</div></div>

  {icon && <PlayCircleFilledIcon style={{color:props.iconColor}} fontSize={props.size}  />}
    </div>

  </IconButton>

    </div>
  )
}

export default ViewButton
