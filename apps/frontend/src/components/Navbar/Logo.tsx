import React, { ComponentProps, PropsWithChildren, ReactNode } from 'react'
import Box from "@mui/material/Box"
import { Grid } from '@mui/material'
type Props = {logo?:string} & React.ComponentProps<typeof Box> &PropsWithChildren


const Logo = (props: Props) => {
  return (
   <Box  height="100%" width={"100%"}  {...props}>
      <Grid container  alignItems={"center"}  height="100%" justifyContent="center">

        <Grid height="100%"  item>
          {props.children}</Grid>
        </Grid>

      </Box>
  )
}

export default Logo
