var n = 4;
var i = 1;

function next(){
	if (i==n)
		i = 1;
	else
		i++;
	document.getElementById("slide").setAttribute("src", "slide_"+i+".jpg")
}

function back(){
	if (i==1)
		i = n;
	else
		i--;
	document.getElementById("slide").setAttribute("src", "slide_"+i+".jpg")
}