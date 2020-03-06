// JavaScript Document
let bulb=document.getElementById("bulb");
let room=document.getElementById("roomImg");
let tvScreen=document.getElementById("tvScreen");
let pcScreen=document.getElementById("pcScreen");

let lamp=false;
let TV=false;
let PC=false;



function bulbCheck()
{
	lamp=true;
	execute();
}

function TVCheck()
{
	TV=true;
	execute();
	
}

function PCCheck(){
	PC=true;
	execute();	
}


function execute()
{
	if ((lamp==true) && (TV==false) && (PC==false)){
		room.style.backgroundPosition="9562px";
	}
	
	if ((lamp==false) && (TV==true) && (PC==false)){
		room.style.backgroundPosition="8196px";
	}
	if ((lamp==true) && (TV==true) && (PC==false)){
		room.style.backgroundPosition="6830px";
	}
	
	if ((lamp==false) && (TV==false) && (PC==true)){
		room.style.backgroundPosition="5464px";
	}
	
	if ((lamp==true) && (TV==false) && (PC==true)){
		room.style.backgroundPosition="4098px";
	}
	
	if ((lamp==false) && (TV==true) && (PC==true)){
		room.style.backgroundPosition="2732px";
	}
	
	if ((lamp==true) && (TV==true) && (PC==true)){
		room.style.backgroundPosition="1366px";
	}
}
//setInterval(function(){ alert("Hello"); }, 2000);
setTimeout(result,6000);
function result(){
if ((lamp!==true) || (TV!==true) || (PC!==true)){
	
	alert("“Oh no, we lose too much”.");
}
}

console.log("csdcd");
bulb.addEventListener("click",bulbCheck);
tvScreen.addEventListener("click",TVCheck);
pcScreen.addEventListener("click",PCCheck);
