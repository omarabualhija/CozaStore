import styled from "styled-components"
import {backgroundColor} from "../Shared/masterStyled"

export const Products=styled.div`  //Start Component
&>div{
& >h2{
    color: ${({theme})=>theme.color};
}}

`
export const Filters=styled.div`  //component Filter btn
padding-top:30px;
display:flex;
flex-direction:column;
gap:30px;
color: ${({theme})=>theme.color};

&>:first-child{    //Filter Type
    display:flex;
    & > span{
        
        margin-right:0.6rem;
        font-size:0.75rem;
        cursor:pointer;


    
        &.active{
            color:${backgroundColor.purple}
        }
        @media (min-width:575px){   //medium and up screen
            margin-right:1rem;
            font-size:1.2rem;
            font-weight:400;
        }
        &:hover{
            color:${backgroundColor.purple}
        }
    }
}


&>:nth-child(2){    // box Search Btn & Advance filter Btn 
font-size:0.8rem;

& >button{                    
    margin-right:10px;
    padding: 12px 10px;
    border: 1px solid ${({theme})=>theme.color};
    color: ${({theme})=>theme.color};
    &::before{
    padding-right: 10px;
    }
    &:hover{
background-color:${backgroundColor.purple};
color:white;
border-color:transparent;
}

}}

@media (min-width:575px){
    flex-direction:row;
    justify-content:space-between; 
    align-items:center;
}

`
export const Search=styled.div`  //Search box
position:relative;
width:calc(100% - 50px);
border:1px solid ${({theme})=>theme.color};
margin: 40px auto 0;
transition:all 3s;
display:none;

&>i{
    position:absolute;
    top:50%;
    left:10px;
    transform:translatey(-50%);
    z-index:3;
}
& >[type="search"]{
border:none;
position:relative;
padding:0 30px;
width:100%;
color:${({theme})=>theme.color};
background-color:transparent;
height:30px;
:focus{
    border:none;
    outline:none;
}
}
&.show{
   
    display:block;

}
` 
export const  Cards=styled.div`
display:grid;
justify-content:center;
gap:15px;
padding-top:40px;
grid-template-columns:repeat(auto-fill,minmax(250px,250px));
&> a {
&>:first-child{   
    position:relative;
    overflow:hidden;
    &>img{
    width: 100%;
    transition: all 0.3s;
}
&>button{     //Quick View Btn
    position: absolute;
    z-index: 999;
    bottom: -15%;
    left: 50%;
    transform: translate(-50%);
    background-color: white;
    padding: 6px 13px;
    font-size: 1.1rem;
    border-radius: 40px;
    transition: all 0.3s;
    &:hover{
        background-color: black;
        color:white;
    }
}

}
&:hover > :first-child button {

    bottom: 10%;
}
&:hover > :first-child img{
  transform:scale(1.1)
}

&> :nth-child(2){
    padding: 10px 0;
    color: ${({theme})=>theme.color};
    text-align:start;
}
}

`



export const Color=styled.button`
position:relative;

&::before{
    content:"";
    width:10px;
    height:10px;
    border-radius:10px;
    position:absolute;
    left:-20px;
    top:50%;
    transform:translatey(-50%);
    z-index:3;
background-color:${({Color})=>Color}
}
`


