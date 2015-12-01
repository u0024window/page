var steptwo = function(container){
	var HTML = 	'<div class="steptwo">'+
				'<h2 class="steptwo-hder">填写资料<span class="close"></span></h2>'
				+'<form class="steptwo-mid" action="" method="">'
					+'<p class="steptwo-mid-o">'
						+'<label class="guize" for="name">姓名</label>'
						+'<input class="guize-c" name="name" placeholder="请输入相关信息">'
					+'</p>'
					+'<p class="steptwo-mid-o" >'
						+'<label class="guize" for="tel" >手机</label>'
						+'<input class="guize-c" name="tel" placeholder="请输入相关信息">'
					+'</p>'
					+'<p class="zhuyi">注：有问题请联系专线客服！</p>'
					+'<input class="steptwo-btn" type="submit" value="提交">'
				+'</form>'
			+'</div>';
	var Success = '<div class="steptwo">'+
				'<h2 class="steptwo-hder">提交成功<span class="close"></span></h2>'
				+'<form class="steptwo-mid" action="" method="">'
					+'<p class="steptwo-mid-o">'
					+'恭喜您申请成功，请等待工作人员联系您'
					+'</p>'
					+'<p class="steptwo-mid-o">'
					+'咨询电话：134-8868-6095 &nbsp周小姐'
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