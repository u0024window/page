var stepone = function(container){
	var HTML,init,bindEvent;
	HTML = '<div class="stepone">'+
				'<h2 class="stepone-hder">投资规则<span class="close"></span></h2>'+
				'<section class="stepone-mid">'+
					'<p class="stepone-mid-o">'+
						'<span class="guize">领投规则：</span>'+
						'<span class="guize-c">正和新融1号产品诚邀八位企业家共同组成领投团队，每份500万元人民币，每位企业家最多可申请两份。</span>'
					+'</p>'
					+'<p class="stepone-mid-o">'
						+'<span class="guize">跟投规则：</span>'
						+'<span class="guize-c">每份100万元人民币，每位企业家跟投不超过三份。</span>'
					+'</p>'
					+'<div class="stepone-mid-t">'
						+'<div class="stepone-ptcl">'
							+'<input type="checkbox" value="">'
							+'<span>《私募投资基金监督管理暂行办法》</span>'
							
						+'</div>'
						
						+'<article>'
							+'<p>根据《私募投资基金监督管理暂行办法》第四章第十四条规定：“ 私募基金管理人、私募基金销售机构不得向合格投资者之外的单位和个人募集资金，不得通过报刊、电台、电视、互联网等公众传播媒体或者讲座、报告会、分析会和布告、传单、手机短信、微信、博客和电子邮件等方式，向不特定对象宣传推介。”</p>'

							+'<p>对路APP谨遵《私募投资基金监督管理暂行办法》规定，只向特定的合格投资者宣传推介相关私募投资基金产品。</p>'

							+'<p>阁下如有意进行私募投资基金投资且满足《私募投资基金监督管理暂行办法》关于“合规投资者”标准的规定，即具备相应风险识别能力和风险承担能力，投资单只私募基金的金额不低于100 万元，且个人金融类资产不低于300万元或者最近三年个人年均收入不低于50万元人民币。请阁下详细阅读本提示，并注册申请成为对路APP特定的合规投资者，方可获得本产品的宣传推介服务。</p>'

							+'<p>此产品为私募基金产品，仅可以向合格投资者进行推介，请确认。</p>'

						+'</article>'
					+'</div>'
				+'</section>'
				+'<span class="yuedu">请仔细阅读并勾选该项</span>'
				+'<button class="stepone-btn">下一步</button>'
			+'</div>';
			init  = function(){
				container.innerHTML = HTML;
				bindEvent();
			}();
			
		 function bindEvent(){

			var ptcl = document.querySelector(".stepone-ptcl");
			var chkbox = document.querySelector(".stepone-ptcl>input");
			var  article = document.querySelector(".stepone-mid-t>article");
			var close = document.querySelector(".close");
			var stepone = document.querySelector('.stepone');
			var nextbtn = document.querySelector('.stepone-btn');
			var eZhuyi = document.querySelector(".yuedu");
			
			close.addEventListener('touchstart',function(){
				close.style.backgroundColor = '#E32828';
				stepone.style.display = 'none';
				stepone.parentNode.style.display = 'none';
			});
			ptcl.addEventListener('touchstart',function(){
				var sPtcldis = getComputedStyle(article , null)['display'];
				if(sPtcldis == 'none'){
					chkbox.checked = true;
					article.style.display = 'inline-block';
				}else{

					article.style.display = 'none';
					chkbox.checked = false;
				}
			});
			nextbtn.addEventListener('touchend',function(){
				if(chkbox.checked){
					//如果选中跳到下一步
					console.log("123")
						container && steptwo(container);
				}else{
					eZhuyi.style.display = 'block';
				}
			});
		}
	}


