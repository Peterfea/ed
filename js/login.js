// JavaScript Document
$(function(){
	//手机号判断
	$(".phone").focusin(function(e) {
    $(this).val("")
	$("#txt-phone").text("")
});
$(".phone").focusout(function(e) {
    var phonevals = $(this).val()
	
	if(phonevals.length == 0 )
	{
		$("#txt-phone").text("*手机号不能为空")
		$(this).val("请输入手机号")
		return false
	}
	if(phonevals.length<11 || phonevals.length>11)
	{
		$("#txt-phone").text("*请输入合法的手机号")	
		$(this).val("请输入手机号")
		return false
	}
		return true	
});	
//用户名判断
$(".username").focusin(function(e) {
    $(this).val("")
	$("#txt-user").text("")
});
$(".username").focusout(function(e) {
    var userrvals = $(this).val()
	if(userrvals.length == 0)
	{
		$("#txt-user").text("*用户名不能为空")	
		$(this).val("请输入昵称")
	}
});
//密码判断
$(".password").focusin(function(e) {
    $("#txt-password").text("")
	$(this).val("")
});
$(".password").focusout(function(e) {
    var passwordvals = $(this).val()
	if(passwordvals.length == 0)
	{
		$("#txt-password").text("*密码不能为空")
		$(this).val("输入密码（6-20位数字、字母组合）")	
		return false
	}
	if(passwordvals.length < 6)
	{
		$("#txt-password").text("*密码不得小于6位")
		$(this).val("输入密码（6-20位数字、字母组合）")	
		return false
	}
	if(passwordvals.length > 20)
	{
		$("#txt-password").text("*密码不得大于20位")
		$(this).val("输入密码（6-20位数字、字母组合）")	
		return false
	}
	return true
});
//确认密码
$(".passwords").focusin(function(e) {
    $(this).val("")
	$("#txt-passwords").text("")
});
$(".passwords").focusout(function(e) {
    var passwordsvals = $(this).val()
	var passwordvals = $(".password").val()
	if(passwordvals != passwordsvals )
	{
		$(this).val("确认密码")
		$("#txt-passwords").text("*两次密码不一致，请重新输入")	
	}
});
//登录页面出现
$("#lei").click(function(){
	$("#login").addClass("lei")	
	$("#regist").addClass("leis")
	$("#regist").css("z-index","10")
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