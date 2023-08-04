let btn = document.getElementById("up");
let navigation = document.querySelector(".navigation")
let logo = document.querySelector(".logo")


window.onscroll = function (){
	if(window.scrollY >= 150){
		//console.log(window.scrollY);
		btn.style.display="block"
	}
	else{
		btn.style.display="none"
	}
	
	if(window.scrollY >=90 ){
		navigation.style.opacity="0"
		logo.style.opacity="0"
	}
	else{
		navigation.style.opacity="1"
		logo.style.opacity="1"
	}
}

btn.addEventListener("click", ()=>{
	window.scrollTo({
		left:0,
		top:0,
		behavior:"smooth",
	});
});



window.prevntdefault;