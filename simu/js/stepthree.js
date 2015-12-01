var stepthree = function(container){
	var HTML = 	'<div class="steptwo">'+
				'<h2 class="steptwo-hder">提交成功<span class="close"></span></h2>'
				+'<form class="steptwo-mid" action="" method="">'
					+'<p class="steptwo-mid-o">'
					+'恭喜您申请成功，请等待工作人员联系您'
					+'</p>'
					+'<p class="steptwo-mid-o">'
					+'咨询电话：143-8868-6095'
					+'</p>'
				+'</form>'
			+'</div>';

			container.innerHTML = HTML;

			var close = document.querySelector(".close");
			var steptwo = document.querySelector('.steptwo');
			console.log(steptwo.parentNode);
			close.addEventListener('touchend',function(){
				steptwo.style.display = 'none';
				steptwo.parentNode.style.display = 'none';
			})

}