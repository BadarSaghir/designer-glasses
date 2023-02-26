import React, { ComponentProps, PropsWithChildren, ReactNode } from 'react'
import Box from "@mui/material/Box"
import { Grid } from '@mui/material'
type Props = {logo?:string} & React.ComponentProps<typeof Box> &PropsWithChildren


const Logo = (props: Props) => {
  return (
   <Box   {...props}>
      <Grid container  alignItems={"center"}  height="100%" justifyContent="center">

        <Grid item>{props.children}</Grid>
        </Grid>

      </Box>
  )
}

export default Logo
