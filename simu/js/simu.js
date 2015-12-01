		onload = function(){	
			var eZankai = document.querySelector('.member>span');
			var embrul = document.querySelector('.member>ul');
			var eBaoming = document.querySelector('.baoming');
			var mask = document.querySelector('.mask');
			eZankai.addEventListener('touchend',function(){
				//展开更多>>
			});
			eBaoming.addEventListener('touchend',function(){
				mask.style.display = 'block';
				stepone(mask);
				eBaoming.href = '#';
			});

			var w = document.documentElement.clientWidth;
			document.documentElement.style.fontSize = w / 750 * 24 + "px";
			window.onresize = function(){
				var w = document.documentElement.clientWidth;
				document.documentElement.style.fontSize = w / 750 * 24 + "px";
			}
		}