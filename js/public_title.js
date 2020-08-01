$(document).ready(function(){
	
	$("#wechat_logo").mouseover(function(){
		$("#wechat_QRCode").fadeIn(500);
	});
	$("#wechat_logo").mouseout(function(){
		$("#wechat_QRCode").fadeOut(500,function(){
			$("#wechat_QRCode").stop(true);
		});
	});
});