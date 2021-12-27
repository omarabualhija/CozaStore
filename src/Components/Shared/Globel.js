import { createGlobalStyle } from 'styled-components'


export const GlobelStyle=createGlobalStyle`

body{
    color:${({theme})=>theme.color};
background-color: ${({theme})=>theme.backgroundColor};
}
`