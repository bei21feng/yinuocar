
//定义全局变量
var border_height,border_width,border_top,border_left;


$(document).ready(function(){
	window_init();
	$(window).resize(function(){
	
	     window_init();
	
	 });
	 
	 
	 //所有的动画
	 all_animate();
	 
	 //轮播动画
	 var unslider04 = $('#b04').unslider({
	         dots: true
	     }),
	     data04 = unslider04.data('unslider');
	      
	     $('.unslider-arrow04').click(function() {
	         var fn = this.className.split(' ')[1];
	         data04[fn]();
	     });
	 
	 //使用自定义动画失败
	 // $("#banner_left").click(function(){
		//  var leftData=$("#banner_container").css("left");
		//  var banner_width=$(".index_banner").width();
		//  var left=parseInt(leftData.substr(0,leftData.length-2));
		//  console.log(left);
		//  console.log(banner_width);
		//  if(left<(-1)*(banner_width)&&left>=0){
		// 	 $("#banner_container").animate({left:(-2)*(banner_width)+"px"},2000,function(){
		// 		 $("#banner_container").stop(true);
		// 		 console.log("执行动画1");
		// 	 });
		//  }
		//  else if(left<(-2)*(banner_width)&&left>=(-1)*(banner_width)){
		// 	 $("#banner_container").animate({left:"0px"},2000,function(){
		// 		 $("#banner_container").stop(true);
		// 		 console.log("执行动画2");
		// 	 });
		//  }
		//  else{
		// 	 $("#banner_container").animate({left:(-1)*(banner_width)+"px"},2000,function(){
		// 		 $("#banner_container").stop(true);
		// 		 console.log("执行动画3");
		// 	 });
		//  }
	 // });
	 
});

function window_init(){
    var window_width = $(window).width();
    var window_height = $(window).height();
	var display_height=$(".banner_img").height()*1.54;
	var banner_height=(window_width*802/1920)+"px";
	console.log(banner_height);
	$(".banner_li").css("height",banner_height);
	// console.log(font_size);
	
	// $(".banner_ul").css("width":"300%");
	// $(".banner_li").css("width":(100/3+"%"));
	var display_font=display_height*0.1;
	var display_font_size=display_font+"px";
	
	//var totalHeight=height1+height2;
	$(".display_container").height(display_height);
	$(".word_container").css("font-size",display_font_size);
	var font_size=$(".display_container").css("font-size");
	console.log(font_size);
	// var index_font1=display_font*0.2+"px";
	// $(".index_font1").css("font-size",index_font1);
	var index_font1_size=$(".index_font1").css("font-size");
	console.log(index_font1_size);
	
	//修改全局变量
	var img_height=$("#sqDet_img1").height();
	var img_width=$("#sqDet_img1").width();
	border_height=(img_height+4)+"px";
	border_width=(img_width+4)+"px";
	border_top=(img_height+2)+"px";
	border_left=(img_width+2)+"px";
	
	//修改展示界面距离
	console.log(window_width);
	var img_distance=200*window_width/1688;
	var img1_left=(window_width/2-250-img_distance-300)+"px";
	var img2_left=(window_width/2-250)+"px";
	var img3_left=(window_width/2+250+img_distance)+"px";
	$("#one1").css("left",img1_left);
	$("#one2").css("left",img2_left);
	$("#one3").css("left",img3_left);
}

function all_animate(){
	$("#word1_text2").mouseover(function(){
		$("#word1_text2_BF").fadeIn(500);
	});
	$("#word1_text2_BF").mouseout(function(){
		$("#word1_text2_BF").fadeOut(500,function(){
			$("#word1_text2_BF").stop(true);
		});
	});
	
	//专项质量检测悬浮动画
	
	//1
	$("#sqDet_img1").mouseover(function(){
		//console.log("执行动画3");
		$("#img_border1").animate({
				"height": border_height,
				"width": border_width
			},200,function(){
			
		});
	});
	
	$("#sqDet_img1").mouseout(function(){
		//console.log("执行动画4");
		$("#img_border1").animate({
				"height": "0px",
				"width": "0px",
				"top":border_top,
				"left":border_left
			},200,function(){
			$("#img_border1").css({"top":"-2px","left":"-2px"});
			$("#img_border1").stop(true);
		});
	});
	
	//2
	$("#sqDet_img2").mouseover(function(){
		//console.log("执行动画3");
		$("#img_border2").animate({
				"height": border_height,
				"width": border_width
			},200,function(){
			
		});
	});
	
	$("#sqDet_img2").mouseout(function(){
		//console.log("执行动画4");
		$("#img_border2").animate({
				"height": "0px",
				"width": "0px",
				"top":border_top,
				"left":border_left
			},200,function(){
			$("#img_border2").css({"top":"-2px","left":"-2px"});
			$("#img_border2").stop(true);
		});
	});
	
	//3
	$("#sqDet_img3").mouseover(function(){
		//console.log("执行动画3");
		$("#img_border3").animate({
				"height": border_height,
				"width": border_width
			},200,function(){
			
		});
	});
	
	$("#sqDet_img3").mouseout(function(){
		//console.log("执行动画4");
		$("#img_border3").animate({
				"height": "0px",
				"width": "0px",
				"top":border_top,
				"left":border_left
			},200,function(){
			$("#img_border3").css({"top":"-2px","left":"-2px"});
			$("#img_border3").stop(true);
		});
	});
	
	//4
	$("#sqDet_img4").mouseover(function(){
		//console.log("执行动画3");
		$("#img_border4").animate({
				"height": border_height,
				"width": border_width
			},200,function(){
			
		});
	});
	
	$("#sqDet_img4").mouseout(function(){
		//console.log("执行动画4");
		$("#img_border4").animate({
				"height": "0px",
				"width": "0px",
				"top":border_top,
				"left":border_left
			},200,function(){
			$("#img_border4").css({"top":"-2px","left":"-2px"});
			$("#img_border4").stop(true);
		});
	});
	
	/* 鼠标悬浮效果 */
	// $(".bg_list").hover(function(){
	//     $('.bg_outside',this).stop().animate({
	//         top:'-100%'
	//     },800);
	// },function(){
	//     $('.bg_outside',this).stop().animate({
	//         top:'0'
	//     },800);
	// });
	
	/* 鼠标悬浮效果 */
	$(".one_img_container").hover(function(){
	    $('.hide_word',this).stop().animate({
	        opacity:'1'
	    },500);
	},function(){
	    $('.hide_word',this).stop().animate({
	       opacity:'0'
	    },500);
	});
	//团队介绍动画
	// $(".us_img_container").hover(function(){
	// 	$(".hide_word").animate({"opacity":"1"},300,function(){
			
	// 	});
	// });
	
	// $(".us_img_container").mouseout(function(){
	// 	$(".hide_word").animate({"opacity":"0"},300,function(){
	// 		$(".hide_word").stop(true);
	// 	});
	// });
}