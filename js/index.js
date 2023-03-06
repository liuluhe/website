// js menu expand
var flag=true;
function show_menu(){
	var menu1 = document.getElementById("menu1");
	if(flag){
		menu1.style.display="block";
		flag = false;
	}else{
		menu1.style.display="none";
		flag = true;
	}	
}

function remove_menu(){
	var menu1 = document.getElementById("menu1");
	menu1.style.display="none";
	flag = true; //on mouse leave turn the flag to true
}
