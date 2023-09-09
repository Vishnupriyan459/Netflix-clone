const width=window.innerWidth;
const height=window.innerHeight;
const banar_icon=document.querySelector(".banar-icon");
const background_img=document.querySelector("main");


function image_picker(size){
    
}
window.addEventListener("resize",()=>{
    console.log(banar_icon);
    const rewidth=window.innerWidth;
    // image_picker(rewidth);
    if(rewidth>=320 && rewidth<768){
        
        banar_icon.src="teluguism-maamannanott.jpg"
        banar_icon.style.width="30rem"
        background_img.style.backgroundImage='url()';
        // 
        // banar_icon.style.maxWidth= "20%" 
        
        
    }
    else if(rewidth>=768){
        
        background_img.style.backgroundImage='url(maamanan.jpg)';
        banar_icon.src="mamanan.png";
        // banar_icon.Width= "40%";

    }
    
    
})
window.onload=function(){

    const onre=window.innerWidth;
    if(onre>=320 && onre<768){
        
        banar_icon.src="teluguism-maamannanott.jpg"
        banar_icon.style.width="30rem"
        background_img.style.backgroundImage='url()';
        // 
        // banar_icon.style.maxWidth= "20%" 
        background_img.width="70%"
        
    }
    else if(onre>=768){
        
        background_img.style.backgroundImage='url(maamanan.jpg)';
        banar_icon.src="mamanan.png";
        banar_icon.style.width="30rem"

        // banar_icon.style.maxWidth= "40%"     
    }
}