$(function () {
    $(btn1).click(function () {
        $(form1).css("left", "25px");
        $(form2).css("left", "450px");
        $(btn).css("left", "0px");
		$("#btn1").find("a").css("color","#ffffff");
		$("#btn2").find("a").css("color","gray");
    });
    $(btn2).click(function () {
        $(form1).css("left", "-400px");
        $(form2).css("left", "25px");
        $(btn).css("left", "200px");
		$("#btn1").find("a").css("color","gray");
		$("#btn2").find("a").css("color","#ffffff");
    });
	
	$("#input1_submit").click(function(){
		
		var submit_suc=true;
		//console.log($('#input1_line8').is(':checked'));
		
		if($("#input1_line1").val()==""){
			alert("预约时间不能为空");
			submit_suc=false;
			return 0;
		}
		
		if($("#input1_line2_text1").val()==""){
			alert("品牌不能为空");
			submit_suc=false;
			return 0;
		}
		
		console.log($("#input1_line2_text2").val());
		if($("#input1_line2_text2").val()==""){
			alert("车型不能为空");
			submit_suc=false;
			return 0;
		}
		
		if($("#input1_line3").val()==""){
			alert("您的姓名不能为空");
			submit_suc=false;
			return 0;
		}
		
		if($("#input1_line4").val()==""){
			alert("预约检测地址不能为空");
			submit_suc=false;
			return 0;
		}
		
		if($("#input1_line5").val()==""){
			alert("手机号不能为空");
			submit_suc=false;
			return 0;
		}
		
		if($("#input1_line6").val()==""){
			alert("验证码不能为空");
			submit_suc=false;
			return 0;
		}
		
		if($("#input1_line7").val()==""){
			alert("短信验证码不能为空");
			submit_suc=false;
			return 0;
		}
		
		if($('#input1_line8').is(':checked')){
			alert("请勾选服务协议");
			submit_suc=false;
			return 0;
		}
	});
	
	$("#input2_submit").click(function(){
		
		var submit_suc=true;
		
		if($("#input2_line1").val()==""){
			alert("预约时间不能为空");
			submit_suc=false;
			return 0;
		}
		
		if($("#input2_line2_text1").val()==""){
			alert("品牌不能为空");
			submit_suc=false;
			return 0;
		}
		
		console.log($("#input2_line2_text2").val());
		if($("#input2_line2_text2").val()==""){
			alert("车型不能为空");
			submit_suc=false;
			return 0;
		}
		
		if($("#input2_line3").val()==""){
			alert("您的姓名不能为空");
			submit_suc=false;
			return 0;
		}
		
		if($("#input2_line4").val()==""){
			alert("预约检测地址不能为空");
			submit_suc=false;
			return 0;
		}
		
		if($("#input2_line5").val()==""){
			alert("手机号不能为空");
			submit_suc=false;
			return 0;
		}
		
		if($("#input2_line6").val()==""){
			alert("验证码不能为空");
			submit_suc=false;
			return 0;
		}
		
		if($("#input2_line7").val()==""){
			alert("短信验证码不能为空");
			submit_suc=false;
			return 0;
		}
		
		if($('#input2_line8').is(':checked')){
			alert("请勾选服务协议");
			submit_suc=false;
			return 0;
		}
	});
})

// function checkForm1(){
// 	var input1=$("#form1").find("input");
// 	console.log(input1);
// 	var submit_suc=true;
// 	for(var i=0;i<input1.length();i++){
// 		console.log(input[i].val());
// 		if(input[i].val()==""){
// 			alert("请输入所有信息!!!");
// 			submit_suc=false;
// 			return false;
// 			break;
// 		}
// 	}
// }
/*
var x = document.getElementById("form1");
var y = document.getElementById("form2");
var z = document.getElementById("btn");
var text = document.getElementsByClassName("if_tab");

function form1() {
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0px"
}

function form2() {
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "200px"
}
*/