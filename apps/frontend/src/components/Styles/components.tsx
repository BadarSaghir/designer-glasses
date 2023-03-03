import { styled } from "@mui/material";

function StylesLayout() {
    return (<div></div>);
}

export default StylesLayout;

export const Title =styled('div')(({theme})=>({
color:theme.paletes.secondary,
fontWeight:"bolder",

}))

export const TextGlasses = styled('div')(({theme})=>({
    color:theme.paletes.tertiary,
    fontWeight:"bolder",
    
    }))