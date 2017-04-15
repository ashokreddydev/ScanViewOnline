	(function (){


	var btn1 = document.getElementById("btnCtrl1");
	var btn2 = document.getElementById("btnCtrl2");
	var btn3 = document.getElementById("btnCtrl3");
	
	
	
	function routeProvider(event)
	{
		//var title="";
		localStorage.clear();
	console.log(document.getElementsByTagName('img'))
	
	console.log(event.currentTarget.id)

	if(event.currentTarget.id=="btnCtrl1")
	{
		//console.log(document.getElementsByTagName('img')[0].src)
		//title=document.getElementById("t1").value;
		localStorage.setItem("Scanname","BRAIN CT")

			localStorage.setItem("path", document.getElementsByTagName('img')[0].src);
			

	}
	else if(event.currentTarget.id=="btnCtrl2")
	{
//title=document.getElementById("t2").value;
localStorage.setItem("Scanname","PNS CT")

	localStorage.setItem("path", document.getElementsByTagName('img')[1].src);

	}
	else if(event.currentTarget.id=="btnCtrl3")
	{
		//title=document.getElementById("t3").value;
		localStorage.setItem("Scanname","SPINE CT")

	localStorage.setItem("path", document.getElementsByTagName('img')[2].src);


	}

		
		  window.location.assign("view.html")
	}
	
	btn1.addEventListener("click",routeProvider);
	btn2.addEventListener("click",routeProvider);
	btn3.addEventListener("click",routeProvider);
	



	})();
	
	
	
	
	// navi Bar
	$(document).ready(function() {   
            var sideslider = $('[data-toggle=collapse-side]');
            var sel = sideslider.attr('data-target');
            var sel2 = sideslider.attr('data-target-2');
            sideslider.click(function(event){
                	event.preventDefault(); 
			event.stopPropagation();
                $(sel).toggleClass('in');
                $(sel2).toggleClass('out');
            });
        });