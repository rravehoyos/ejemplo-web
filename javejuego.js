

var conte1=document.getElementById("ele");
if(conte1.className=="")
		{	
			var izq="400";
			var alto="800";
			conte1.className="conte";
			conte1.style.top=alto+"px";
			conte1.style.left=izq+"px";
			var x=parseInt(izq);
			var y=parseInt(alto);

		}


var moveD=function()
{
	x=x+5;
	xf=x.toString();
	conte1.className="conte";
	conte1.style.left=xf+"px";
	console.log(xf);
}

var moveI=function()
{
	x=x-5;
	xf=x.toString();
	conte1.className="conte";
	conte1.style.left=xf+"px";
	console.log(xf);
}
var moveAb=function()
{
	y=y+5;
	yf=y.toString();
	conte1.className="conte";
	conte1.style.top=yf+"px";
	console.log(yf);
}
var moveAr=function()
{
	y=y-5;
	yf=y.toString();
	conte1.className="conte";
	conte1.style.top=yf+"px";
	console.log(yf);
}