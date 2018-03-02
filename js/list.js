// JavaScript Document

//banner图片切换
$(document).ready(function() {
    var Wwidth = $(window).width()
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
	++a
	}		
}
var bannertimer = setInterval(qiehuan,3000)

$(function(){
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
//美国服务地区
$("#america .yuan").mouseenter(function(){
	var x = $(this).index()
	$(".point").eq(x-1).css("transform","scale(1,1)").siblings(".point").css("transform","scale(0,0)")
})
//美国置业指南
/*$("#job .piclist").eq(0).mouseenter(function(){
	$("#first-wrap").css("z-index",1)
	$("#first-wrap .tit").stop(true,false).animate({top:0})	
})
$("#up-1").click(function(){
	$("#first-wrap .tit").stop(true,false).animate({top:-240},function(){
		$("#first-wrap").css("z-index",-1)	
	})	
	
})
$("#job .piclist").eq(1).mouseenter(function(){
	$("#second-wrap").css("z-index",1)
	$("#second-wrap .tit").stop(true,false).animate({top:0})	
})
$("#up-2").click(function(){
	$("#second-wrap .tit").stop(true,false).animate({top:-240},function(){
		$("#second-wrap").css("z-index",-1)	
	})	
})
$("#job .piclist").eq(2).mouseenter(function(){
	$("#third-wrap").css("z-index",1)
	$("#third-wrap .tit").stop(true,false).animate({top:0})	
})
$("#up-3").click(function(){
	$("#third-wrap .tit").stop(true,false).animate({top:-240},function(){
		$("#third-wrap").css("z-index",-1)	
	})	
})
$("#job .piclist").eq(3).mouseenter(function(){
	$("#fourth-wrap").css("z-index",1)
	$("#fourth-wrap .tit").stop(true,false).animate({top:0})	
})
$("#up-4").click(function(){
	$("#fourth-wrap .tit").stop(true,false).animate({top:-240},function(){
		$("#fourth-wrap").css("z-index",-1)	
	})	
})*/
//成交案例
/*$("#case .piclist .pic").hover(function(){
	var x = event.pageX-$(this).offset().left
	var y = event.pageY-$(this).offset().top
	var h = $(this).outerHeight()
	var w = $(this).outerWidth()
	var k = Math.floor(h/w)
	if((k*x) >= y && (h - k * x) >= y)
	{
		$(this).children("div").css({"top":-276,"left":0})
		$(this).children("div").stop(true,false).animate({top:0})	
	}
	if((k*x) < y && (h - k * x) < y)
	{
		$(this).children("div").css({"top":276,"left":0})
		$(this).children("div").stop(true,false).animate({top:0})	
	}
	if((k*x) < y && (h - k * x) > y)
	{
		$(this).children("div").css({"top":0,"left":-380})
		$(this).children("div").stop(true,false).animate({left:0})	
	}
	if((k*x) > y && (h - k * x) < y)
	{
		$(this).children("div").css({"top":0,"left":380})
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
			$(this).children("div").stop(true,false).animate({top:-276})	
	}
	if((k*x) < y && (h - k * x) < y)
	{
			$(this).children("div").stop(true,false).animate({top:276})	
	}
	if((k*x) < y && (h - k * x) > y)
	{
			$(this).children("div").stop(true,false).animate({left:-380})	
	}
	if((k*x) > y && (h - k * x) < y)
	{
			$(this).children("div").stop(true,false).animate({left:380})	
	}				
})*/
//成交案例
$("#case .piclist .pic").mouseenter(function(){
	$(this).children("div").css({"transform":"scale(1,1)"})	
}).mouseleave(function(){
	$(this).children("div").css({"transform":"scale(0,0)"})	
})
//投资项目
$(".view").mouseenter(function(){
	$("#big-pic-tit").text("津门里启辰小区")	
}).mouseleave(function(){
	$("#big-pic-tit").text("威尔士海滨度假公寓")	
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