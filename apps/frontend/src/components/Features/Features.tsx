import React from 'react'
import Box from "@mui/material/Box"
import {Brands} from "./Brands"
type Props = {
  list:string[]
}

const Features = (props: Props) => {
  return (

    <Box height={"100%"}>
      <Brands />
    </Box>
    )
}

export default Features
