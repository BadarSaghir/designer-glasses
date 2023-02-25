import React from 'react'

type Props = {
  logo:string;
  title:string;
  social:{placeholder:string, url:string,icon:"string"}[];
  signupLink:"string"
}

const Footer = (props: Props) => {
  return (
    <div>Footer</div>
  )
}

export default Footer