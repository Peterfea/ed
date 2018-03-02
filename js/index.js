// JavaScript Document
$(function(){
	$(" #oldhouse .pic").hover(function(){
	var x = event.pageX-$(this).offset().left
	var y = event.pageY-$(this).offset().top
	var h = $(this).outerHeight()
	var w = $(this).outerWidth()
	var k = Math.floor(h/w)
	if((k*x) >= y && (h - k * x) >= y)
	{
		$(this).children("div").css({"top":-205,"left":0})
		$(this).children("div").stop(true,false).animate({top:0})	
	}
	if((k*x) < y && (h - k * x) < y)
	{
		$(this).children("div").css({"top":"100px","left":0})
		$(this).children("div").stop(true,false).animate({top:0})	
	}
	if((k*x) < y && (h - k * x) > y)
	{
		$(this).children("div").css({"top":"0","left":-200})
		$(this).children("div").stop(true,false).animate({left:0})	
	}
	if((k*x) > y && (h - k * x) < y)
	{
		$(this).children("div").css({"top":"0","left":200})
		$(this).children("div").stop(true,false).animate({left:0})	
	}	
},function(){
	var x = event.pageX-$(this).offset().left
	var y = event.pageY-$(this).offset().top
	var h = $(this).outerHeight()
	var w = $(this).outerWidth()
	var k = Math.floor(h/w)
	if((k*x) >= y && (h - k * x) >= y)
	{
			$(this).children("div").stop(true,false).animate({top:-205})	
	}
	if((k*x) < y && (h - k * x) < y)
	{
			$(this).children("div").stop(true,false).animate({top:205})	
	}
	if((k*x) < y && (h - k * x) > y)
	{
			$(this).children("div").stop(true,false).animate({left:-200})	
	}
	if((k*x) > y && (h - k * x) < y)
	{
			$(this).children("div").stop(true,false).animate({left:200})	
	}				
})
//图片流光
$("#introduce .pic").mouseenter(function(){
	$(this).children(".light").stop(true,true).animate({left:1050},500,function(){
		$("#introduce .pic").children(".light").css("left",-300)	
	})
	$(this).children(".tit").eq(0).stop(true,false).delay(1000).animate({left:0})
	$(this).children(".tit").eq(1).stop(true,false).delay(500).animate({right:0})
	$(this).children(".tit").eq(2).stop(true,false).delay(1000).animate({left:0})
	$(this).children(".tit").eq(3).stop(true,false).delay(1200).fadeIn()
	$(this).children(".tit-a").eq(0).stop(true,false).delay(200).animate({left:0},200)
	$(this).children(".tit-a").eq(1).stop(true,false).delay(200).animate({left:0},400)
	$(this).children(".tit-a").eq(2).stop(true,false).delay(200).animate({left:0},600)
	$(this).children(".tit-b").eq(0).stop(true,false).delay(200).animate({top:0},600)
	$(this).children(".tit-b").eq(1).stop(true,false).delay(200).animate({top:0},500)
	$(this).children(".tit-b").eq(2).stop(true,false).delay(200).animate({top:0},400)
	$(this).children(".tit-b").eq(3).stop(true,false).delay(200).animate({top:0},300)
	$(this).children(".tit-b").eq(4).stop(true,false).delay(200).animate({top:0},200)
	$(this).children(".tit-b").eq(5).stop(true,false).delay(200).animate({top:0},100)
	$(this).children(".tit-b").eq(6).stop(true,false).delay(200).animate({top:0},200)
	$(this).children(".tit-b").eq(7).stop(true,false).delay(200).animate({top:0},300)
	$(this).children(".tit-b").eq(8).stop(true,false).delay(200).animate({top:0},400)
	$(this).children(".tit-b").eq(9).stop(true,false).delay(200).animate({top:0},500)
	$(this).children(".tit-b").eq(10).stop(true,false).delay(200).animate({top:0},600)
	$(this).children(".tit-c").stop(true,false).delay(500).fadeIn()
		
}).mouseleave(function(){
	$(this).children(".tit").eq(3).stop(true,false).fadeOut()
	$(this).children(".tit").eq(0).stop(true,false).delay(500).animate({left:580})
	$(this).children(".tit").eq(1).stop(true,false).animate({right:580})
	$(this).children(".tit").eq(2).stop(true,false).delay(500).animate({left:580})	
	$(this).children(".tit-a").eq(0).stop(true,false).animate({left:280},200,function(){
		$(this).css("left",-280)		
	})
	$(this).children(".tit-a").eq(1).stop(true,false).animate({left:280},400,function(){
		$(this).css("left",-280)	
	})
	$(this).children(".tit-a").eq(2).stop(true,false).animate({left:280},600,function(){
		$(this).css("left",-280)	
	})
	$(this).children(".tit-b").eq(0).stop(true,false).animate({top:270},100)
	$(this).children(".tit-b").eq(1).stop(true,false).animate({top:270},200)
	$(this).children(".tit-b").eq(2).stop(true,false).animate({top:270},300)
	$(this).children(".tit-b").eq(3).stop(true,false).animate({top:270},400)
	$(this).children(".tit-b").eq(4).stop(true,false).animate({top:270},500)
	$(this).children(".tit-b").eq(5).stop(true,false).animate({top:270},600)
	$(this).children(".tit-b").eq(6).stop(true,false).animate({top:270},500)
	$(this).children(".tit-b").eq(7).stop(true,false).animate({top:270},400)
	$(this).children(".tit-b").eq(8).stop(true,false).animate({top:270},300)
	$(this).children(".tit-b").eq(9).stop(true,false).animate({top:270},200)
	$(this).children(".tit-b").eq(10).stop(true,false).animate({top:270},100)
	$(this).children(".tit-c").stop(true,false).fadeOut()
})
//标题效果
$(".top-wrap").mouseenter(function(){
	$(this).css("transform","rotate(360deg)")
	$(this).children(".top").css("display","none")
	$(this).children(".more").css("display","block")
}).mouseleave(function(){
	$(this).css("transform","rotate(-360deg)")
	$(this).children(".top").css("display","block")
	$(this).children(".more").css("display","none")
})
//选项卡
$("#ranking .text:eq(1) .title-top").children("span").mouseenter(function(){
	var sindex = $(this).index()
	$(this).addClass("color").siblings("span").removeClass("color")
	$("#ranking .text").eq(1).children("dl").eq(sindex).show().siblings("dl").hide()		
})
//本周精选
$("#arrow-left").click(function(){
	var ix = $(".display-left").index()
	if( ix == 6)
	{
	$(".select-wrap").animate({marginLeft:-204})
	$("#select-wrap .picbox").eq(ix-1).addClass("display-left").siblings().removeClass("display-left")
	$("#select-wrap .picbox").eq(6).css("left",1220)
	$("#select .tit").stop(true,false).animate({left:454})
	}
	if( ix == 1)
	{
	$(".select-wrap").animate({marginLeft:136})
	$("#select-wrap .picbox").eq(ix-1).addClass("display-left").siblings().removeClass("display-left")
	$("#select-wrap .picbox").eq(1).css("left",590)
	$("#select .tit").stop(true,false).animate({left:170})
	}
	if( ix == 2)
	{
	$(".select-wrap").animate({marginLeft:68})
	$("#select-wrap .picbox").eq(ix-1).addClass("display-left").siblings().removeClass("display-left")
	$("#select-wrap .picbox").eq(2).css("left",716)
	$("#select .tit").stop(true,false).animate({left:230})
	}
	if( ix == 3)
	{
	$(".select-wrap").animate({marginLeft:0})
	$("#select-wrap .picbox").eq(ix-1).addClass("display-left").siblings().removeClass("display-left")
	$("#select-wrap .picbox").eq(3).css("left",842)
	$("#select .tit").stop(true,false).animate({left:280})
	}
	if( ix == 4)
	{
	$(".select-wrap").animate({marginLeft:-68})
	$("#select-wrap .picbox").eq(ix-1).addClass("display-left").siblings().removeClass("display-left")
	$("#select-wrap .picbox").eq(4).css("left",968)
	$("#select .tit").stop(true,false).animate({left:350})
	
	}
	if( ix == 5)
	{
	$(".select-wrap").animate({marginLeft:-136})
	$("#select-wrap .picbox").eq(ix-1).addClass("display-left").siblings().removeClass("display-left")
	$("#select-wrap .picbox").eq(5).css("left",1094)
	$("#select .tit").stop(true,false).animate({left:400})
	}
		
})
$("#arrow-right").click(function(){
	var ix = $(".display-left").index()
	if(ix == 0)
	{
		$(".select-wrap").animate({marginLeft:86})
		$("#select-wrap .picbox").eq(ix+1).addClass("display-left").siblings().removeClass("display-left")
		$("#select-wrap .picbox").eq(1).css("left",126)
		$("#select .tit").stop(true,false).animate({left:238})
	}
	if(ix == 1)
	{
		$(".select-wrap").animate({marginLeft:0})
		$("#select-wrap .picbox").eq(ix+1).addClass("display-left").siblings().removeClass("display-left")
		$("#select-wrap .picbox").eq(2).css("left",252)
		$("#select .tit").stop(true,false).animate({left:280})
	}
	if(ix == 2)
	{
		$(".select-wrap").animate({marginLeft:-86})
		$("#select-wrap .picbox").eq(ix+1).addClass("display-left").siblings().removeClass("display-left")
		$("#select-wrap .picbox").eq(3).css("left",378)
		$("#select .tit").stop(true,false).animate({left:324})
	}
	if(ix == 3)
	{
		$(".select-wrap").animate({marginLeft:-174})
		$("#select-wrap .picbox").eq(ix+1).addClass("display-left").siblings().removeClass("display-left")
		$("#select-wrap .picbox").eq(4).css("left",504)
		$("#select .tit").stop(true,false).animate({left:360})
	}
	if(ix == 4)
	{
		$(".select-wrap").animate({marginLeft:-260})
		$("#select-wrap .picbox").eq(ix+1).addClass("display-left").siblings().removeClass("display-left")
		$("#select-wrap .picbox").eq(5).css("left",630)
		$("#select .tit").stop(true,false).animate({left:398})
	}
	if(ix == 5)
	{
		$(".select-wrap").animate({marginLeft:-346})
		$("#select-wrap .picbox").eq(ix+1).addClass("display-left").siblings().removeClass("display-left")
		$("#select-wrap .picbox").eq(6).css("left",756)
		$("#select .tit").stop(true,false).animate({left:430})
	}
})
//新房
$("#newhouse .pic-list .pic").mouseenter(function(){
	$(this).children("span").eq(0).stop(true,false).delay(700).animate({left:0})
	$(this).children("span").eq(1).stop(true,false).delay(700).animate({left:0})	
}).mouseleave(function(){
	var owidth = $(this).width()
	$(this).children("span").eq(0).stop(true,false).animate({left:-owidth})
	$(this).children("span").eq(1).stop(true,false).animate({left:owidth})	
})
//新房左侧图片
$("#newhouse .pic-display").mouseenter(function(){
	$(this).children("div").eq(0).stop(true,false).animate({top:160},400)
	$(this).children("div").eq(1).stop(true,false).animate({top:-160},450)
	$(this).children("div").eq(2).stop(true,false).animate({top:160},500)
	$(this).children("div").eq(3).stop(true,false).animate({top:-160},550)
	$(this).children("div").eq(4).stop(true,false).animate({top:160},600)
	$(this).children("div").eq(5).stop(true,false).animate({top:-160},650)
	$(this).children("div").eq(6).stop(true,false).animate({top:160},700)
	$(this).children("div").eq(7).stop(true,false).animate({top:-160},750)
	$(this).children("div").eq(8).stop(true,false).animate({top:160},800)
	$(this).children("div").eq(9).stop(true,false).animate({top:-160},850)
}).mouseleave(function(){
	$(this).children("div").eq(0).stop(true,false).animate({top:0},400)
	$(this).children("div").eq(1).stop(true,false).animate({top:0},450)
	$(this).children("div").eq(2).stop(true,false).animate({top:0},500)
	$(this).children("div").eq(3).stop(true,false).animate({top:0},550)
	$(this).children("div").eq(4).stop(true,false).animate({top:0},600)
	$(this).children("div").eq(5).stop(true,false).animate({top:0},650)
	$(this).children("div").eq(6).stop(true,false).animate({top:0},700)
	$(this).children("div").eq(7).stop(true,false).animate({top:0},750)
	$(this).children("div").eq(8).stop(true,false).animate({top:0},800)
	$(this).children("div").eq(9).stop(true,false).animate({top:0},850)	
})
//登录页面出现
$("#logins").click(function(){
	$("#regist").css("transform","scale(1,1)")	
})
$("#backup").click(function(){
	$("#regist").css("transform","scale(0,0)")	
})
//登录用户名判断
$(".usernames").focusin(function(e) {
    $(this).val("")
	$("#txt-users").text("")
});
$(".usernames").focusout(function(e) {
    var userrvals = $(this).val()
	if(userrvals.length == 0)
	{
		$("#txt-users").text("*用户名不能为空")	
		$(this).val("用户名")
	}
});
//密码判断
$(".passwordd").focusin(function(e) {
    $("#txt-passwordd").text("")
	$(this).val("")
});
$(".passwordd").focusout(function(e) {
    var passwordvals = $(this).val()
	if(passwordvals.length == 0)
	{
		$("#txt-passwordd").text("*密码不能为空")
		$(this).val("输入密码")	
		return false
	}
	if(passwordvals.length < 6)
	{
		$("#txt-passwordd").text("*请输入正确的密码")
		$(this).val("输入密码")	
		return false
	}
	if(passwordvals.length > 20)
	{
		$("#txt-passwordd").text("*请输入正确的密码")
		$(this).val("输入密码")	
		return false
	}
	return true
});
})
/*	*/

//banner图片切换
$(document).ready(function() {
    var Wwidth = document.body.clientWidth;
	//$(window).width()
	$(".banner").css("width",3*Wwidth)
	$(".banner-wrap").css("width",Wwidth)
	$("#banner").css("width",Wwidth)
	
});
var a = 0
function qiehuan(){
	var Wwidth = $(window).width()
	if(a == 3)
	{
		a = 0	
	}
	else
	{
	$(".banner").animate({marginLeft:-a*Wwidth})
	$("#banner ul li").eq(a).addClass("color").siblings("li").removeClass("color")
	++a
	}		
}
var bannertimer = setInterval(qiehuan,3000)

















































