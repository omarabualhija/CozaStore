const initTheme={theme:false}
export const theme=(state=initTheme,action)=>{
    if(action.type === 'theme'){
 return initTheme.theme=!initTheme.theme
}
return initTheme.theme
}

 const initSlider={data:[]}
 export const sliderData=(state=initSlider,action)=>{
     if(action.type==="sliderData"){
         return initSlider.data=action.payload
     }
     return initSlider.data 
 }

 const initProduct={data:[]}
 export const productDataReducer=(state,action)=>{
    
if(action.type==="product"){
  
    return initProduct.data= action.payload;
}

    return initProduct.data
 }