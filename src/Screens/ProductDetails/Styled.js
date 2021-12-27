import styled from "styled-components";
import {backgroundColor} from "../../Components/Shared/masterStyled";

export const ImgGallery=styled.div`
@media (min-width:676px){
margin-top:55px;
}
&> :first-child{
display: flex;
flex-direction:column;

@media (min-width:676px){
flex-direction:row;
gap:100px;
padding-top:100px;

.slider-MW{
    max-width:550px;
}
}
& > :nth-child(2){

    margin-top: 15px;
    & >h4,p,span {
display:block;
        margin-bottom:1rem
    }

}

}


`

export const Select =styled.div`
flex:1;
 color:${({theme})=>theme.color};
&>div{
    display:flex;
    gap:20px;
    &>label{
        min-width:45px;
       
    }
    &>select{
      margin:0 0 1rem 0.5rem;
      width:calc(100% - 80px);
background:transparent;
    height: 32px;
    border-radius: 4px;
    border: 1px solid ${({theme})=>theme.color};
    color: ${({theme})=>theme.color};
    &>option{
        width: 100%;
        color: ${({theme})=>theme.color}; 
        background-color: ${({theme})=>theme.backgroundColor};
 
     }
  
    :focus{
       
       outline:none;
   }
   &.active {
    background-color:${backgroundColor.purple};
    color:red;
    }

}

   
}


`