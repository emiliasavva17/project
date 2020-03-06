let image=document.getElementById("startImg");
let start=document.getElementById("startbtn");
let next=document.getElementById("next");
let pos=4098;
console.log("afdcadc ax");

function changePlus(){
	image.style.backgroundPosition= 2732+"px";
	
}
 function changeMinus()
{
	image.style.backgroundPosition= 1366+"px";
	
}
 
 
 
 
 const getKey = (e) =>{
	
	switch(e.key){	
		case "Left":
        case "ArrowLeft":
			changePlus();
		break;
		case "Right":
        case "ArrowRight":
		
			changeMinus();
		break;
		
	}
}
 
start.addEventListener("click",changePlus);
document.addEventListener("keydown", getKey);
