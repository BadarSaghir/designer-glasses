import React, { ComponentProps, PropsWithChildren, ReactNode } from 'react'
import Box from "@mui/material/Box"
import { Grid } from '@mui/material'
import Link from 'next/dist/client/link'
type Props = {logo?:string} & React.ComponentProps<typeof Box> &PropsWithChildren


const Logo = (props: Props) => {
  return (
  <Link href="/"> <Box   {...props}>
      <Grid container  alignItems={"center"}  height="100%" justifyContent="center">

        <Grid item>{props.children}</Grid>
        </Grid>

      </Box>
      </Link> 
  )
}

export default Logo
