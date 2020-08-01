$(function () {
    // $(".test_pic").fadeOut(2000);
    $("img").animate({
        //left: '300px',
        height: '+=180px',
        width: '+=180px'
    }, "slow",function(){
		$("#test_pict1").addClass('animated bounce');
		console.log("动画");
	});
})