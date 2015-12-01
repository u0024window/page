//**********************展开********************************************
			var eZankai = document.querySelector('.zank');
			var eArticle = document.querySelector('.arti');

			eZankai.addEventListener('touchend',function(event){
				eArticle.className = 'arti';
				eZankai.style.display = 'none';
			})

//********************************项目详情*****************************
		var nav = document.querySelector("nav");
		var navul = document.querySelector("nav ul");
		var navullis = document.querySelectorAll("nav ul li");

		var navW = parseInt(window.getComputedStyle(nav , null)['width']);
		 
		navul.style.width = ((navullis.length) * 161-11)/24 +"rem";

		nav.addEventListener("touchstart",touchstartHandler);
		nav.addEventListener("touchmove",touchmoveHandler);
		nav.addEventListener("touchend",touchendHandler);


		var startX;
		var nowX = 0;
		var dX;

		var lastTwoPoint = [0,0];


		function touchstartHandler(event){
			navul.style.webkitTransition = "none";	
			navul.style.transition = "none";	
			startX = event.touches[0].pageX;	
		}


		function touchmoveHandler(event){
			event.preventDefault();
			dX = event.touches[0].pageX - startX;	


			navul.style.webkitTransform = "translateX(" + (nowX + dX)/24 + "rem)";
			navul.style.transform = "translateX(" + (nowX + dX)/24 + "rem)";

			lastTwoPoint.shift();
			lastTwoPoint.push(event.touches[0].pageX);
		}


		function touchendHandler(event){
			nowX += dX;


			nowX += (lastTwoPoint[1] - lastTwoPoint[0]) * 5;
			if(nowX > 0){
				nowX = 0;
			}

			if(nowX < -parseInt(navul.style.width)*24 + navW){
				nowX = -parseInt(navul.style.width)*24 + navW-20;
			}

			
			var t = Math.sqrt(Math.abs(lastTwoPoint[1] - lastTwoPoint[0])) / 10;
			navul.style.webkitTransition = "all " + t + "s cubic-bezier(0.1, 0.85, 0.25, 1) 0s"; 
			navul.style.transition = "all " + t + "s cubic-bezier(0.1, 0.85, 0.25, 1) 0s"; 
			navul.style.webkitTransform = "translateX(" + nowX/24 + "rem)";
			navul.style.transform = "translateX(" + nowX/24 + "rem)";
		}