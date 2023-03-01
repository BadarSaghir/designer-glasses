import { Typography } from '@mui/material'
import Grid from '@mui/material/Grid'
import React, { PropsWithChildren } from 'react'
import Brand from './Brand'

type Props = PropsWithChildren &{
  brandImagesSrc?:string[]
  brandTitles:string[],

}

const Brands = ({brandImagesSrc=['none','none','none','none','none','none'],brandTitles}: Props) => {
  return (
    <div>
      <Grid container>
        {brandTitles.map((txt,idx)=>{

          return <Typography key={idx} color={(theme)=>theme.button.heroBtnBgColor}>{txt}</Typography>
        })}

    </Grid>
      <Grid container>{brandImagesSrc.map((src,idx)=><Grid key={idx} item xs={2}><Brand key={idx} /></Grid>)}</Grid>
      <div>ViewAll</div>
    </div>
  )
}

export default Brands
