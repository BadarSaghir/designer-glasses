import React, { ComponentProps, ReactNode } from 'react'
import Box from "@mui/material/Box"
type Props = {logo?:string} & React.ComponentProps<typeof Box>


const Logo = (props: Props) => {
  return (
    <Box  {...props}>Logo</Box>
  )
}

export default Logo