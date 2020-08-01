$(document).ready(function(){
	windows_function();
	main_function();
});

function windows_function(){
	$("#front-fix").click(function(){
		$("#front-fix").css("display","none");
		$("#consult_windows").css("display","block");
	});
	
	$("#min_widows").click(function(){
		$("#front-fix").css("display","block");
		$("#consult_windows").css("display","none");
	});
	
	$("#close_windows").click(function(){
		$("#front-fix").css("display","block");
		$("#consult_windows").css("display","none");
	});
}

function main_function(){
	$("#send_button").click(function(){
		var message=$("#send_text").val();
		if(message==""){
			alert("不能发送空消息!!!");
		}
		else{
			send_message(message);
		}
	});
}

function send_message(message){
	$("#consult_text").append('<div class="user_message"><img class="user_avatar" src="img/img-公共/user.png"/><img class="user_text_dhk" src="img/img-预约检测/dhk.png" /><div class="user_message_text">'+message+'</div></div>');
	$("#consult_text").append('<div class="robot_message"><img class="robot_avatar" src="img/img-预约检测/jqr.png"/><img class="robot_text_bdhk" src="img/img-预约检测/bdhk.png" /><div class="robot_message_text">底盘是检测的，技师会通过手机在汽车底部拍照的方式来进行底盘检测。</div></div>');
	$("#send_text").val("");
}