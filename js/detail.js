// JavaScript Document

var m = 1
var $abox = "<div class='box'><img src='images/7-1.jpg'><div class='tit'>洛克菲勒中心<p>洛克菲勒中是一个由19栋商业大楼组成的建筑群，各大楼底层是相通的。其中最大的是奇异电器大楼，高259米，共69层。中心总占地22英亩，在1939年完成全部建筑。</p></div></div>"
var $bbox = "<div class='box'><img src='images/7-2.jpg'><div class='tit'>布鲁克林大桥<p>纽约的布鲁克林大桥横跨纽约东河，连接着布鲁克林区和曼哈顿岛，在1883年5月24日正式交付使用。大桥全长1834米，桥身由上万根钢索吊离水面41米，是当年世界上最长的悬索桥，也是世界上首次以钢材建造的大桥，落成时被认为是继世界古代七大奇迹之后的第八大奇迹，被誉为工业革命时代全世界7个划时代的建筑工程奇迹之一.</p></div></div>"
var $cbox = "<div class='box'><img src='images/7-3.jpg'><div class='tit'>圣路易斯拱门<p>圣路易斯拱门，就是美国向西开发的一个象征，这座雄伟壮观的不锈钢悬链线的建筑物，高达192米，是1964年动工后仅用两年时间建成的。拱门底部有电梯可以直达顶层。圣路易斯拱门为圣路易斯市的地标， 高630英尺， 比华盛顿纪念碑、自由女神像或是欧洲的比萨斜塔都还要高!</p></div></div>"
var $dbox = "<div class='box'><img src='images/7-4.jpg'><div class='tit'>五角大楼<p>五角大楼是美国国防部所在地，位于华盛顿特区西南方的维珍尼亚州阿灵顿县。由于其特殊的职能，所以有时“五角大楼”一词不仅仅代表这座建筑本身，也常常用作美国国防部、甚至美国军事当局的代名词。五角大楼由美国建筑师乔治·贝格斯特罗姆（George Bergstrom，1876年-1955年）设计，来自宾夕法尼亚州费城的建筑商约翰·麦克沙恩（John McShain）承建。</p></div></div>"
var $ebox = "<div class='box'><img src='images/7-5.jpg'><div class='tit'>国会大厦<p>美国著名历史纪念建筑。在费城国家独立历史公园独立大厦内。1732～1756年建造。独立大厦原为殖民时期宾夕法尼亚州的议会大厦。1774年 9月和1775年 5月在此召开第一次和第二次美洲大陆会议。</p></div></div>"
var $fbox = "<div class='box'><img src='images/7-6.jpg'><div class='tit'>白宫<p>白宫是美国总统府所在地，对人们来说白宫总是充满了神秘感。根据白宫支出由全体纳税人担负的原则，白宫的一部分在规定时间内向全世界公民开放，因此成了游人观光的热点。</p></div></div>"
var $gbox = "<div class='box'><img src='images/7-7.jpg'><div class='tit'>太空针塔<p>太空针塔(Space Needle)是位于美国华盛顿州西雅图的一个观景塔，是西雅图的地标性建筑之一。太空针塔兴建于1961年，是为了1962年举行的世博会而建设，而世博会期间太空针塔共迎接了230万游客。太空针塔高184米，顶层距离地158米，建成时曾是美国西部最高的建筑之一。太空针塔最宽处有42米，总重9550吨，并设计可抵御9.1级地震和每小时10公里的风力。除此之外，塔上还安装有25根避雷针。</p></div></div>"
var $hbox = "<div class='box'><img src='images/7-8.jpg'><div class='tit'>洛克菲勒中<p>洛克菲勒中是一个由19栋商业大楼组成的建筑群，各大楼底层是相通的。其中最大的是奇异电器大楼，高259米，共69层。中心总占地22英亩，在1939年完成全部建筑。</p></div></div>"
var $ibox = "<div class='box'><img src='images/7-9.jpg'><div class='tit'>希尔斯大厦<p>西尔斯大厦是位于美国伊利诺伊州芝加哥的一幢摩天大楼，曾是北美第一高楼，2013年11月12日被世贸中心一号楼打破记录。落成时名为西尔斯大厦，2009年，总部在伦敦的保险经纪公司-韦莱集团，同意租用该大楼的很大比例作为办公楼，同时作为取得合同的一部分条件而取得了该建筑物的命名权。</p></div></div>"
var $jbox = "<div class='box'><img src='images/7-10.jpg'><div class='tit'>帝国大厦<p>帝国大厦是位于美国纽约州纽约市曼哈顿第五大道350号、西33街与西34街之间的一栋著名摩天大楼，名称源于纽约州的昵称──帝国州，故其英文名称原意为纽约州大厦或者帝国州大厦，惟帝国大厦的翻译已经约定俗世，及沿用至今。帝国大厦为纽约市以至美国最著名的地标和旅游景点之一，为美国及美洲第4高，世界上第25高的摩天大楼，也是保持世界最高建筑地位最久的摩天大楼(1931-1972年)。</p></div></div>"
var $kbox = "<div class='box'><img src='images/7-11.jpg'><div class='tit'>联合国大厦<p>联合国大厦是联合国总部的所在地，这块领土的所有权已经不属于美国以及任何一国，而是世界上唯一的一块国际领土。在美国纽约市曼哈顿区的东侧，可以俯瞰东河。</p></div></div>"

$(window).scroll(function(){
	var a =$(window).height()
	var top = $(window).scrollTop()
	var scre = $(document).height()
	if(top >= scre - a)
	{
		/*var n = (Math.random()*(11-1)+1)
		n = Math.ceil(n)*/
		/*var h = (Math.random()*(4-1)+1)
		h = Math.ceil(h)
		var k = (Math.random()*(4-1)+1)
		k = Math.ceil(k)
		var l = (Math.random()*(4-1)+1)
		l = Math.ceil(l)*/
		
		if(m == 1)
		{
			$(".col").eq(0).append($bbox)
			$(".col").eq(1).append($ibox)
			$(".col").eq(2).append($cbox)
			$(".col").eq(3).append($dbox)
			++m
			return
		}
		if(m == 2)
		{
			$(".col").eq(0).append($abox)
			$(".col").eq(1).append($bbox)
			$(".col").eq(2).append($kbox)
			$(".col").eq(3).append($jbox)
			++m
			return
		}
		if(m == 3)
		{
			$(".col").eq(0).append($cbox)
			$(".col").eq(1).append($ibox)
			$(".col").eq(2).append($gbox)
			$(".col").eq(3).append($fbox)
			++m
			return
		}
		if(m == 4)
		{
			$(".col").eq(0).append($abox)
			$(".col").eq(1).append($ebox)
			$(".col").eq(2).append($fbox)
			$(".col").eq(3).append($hbox)
			++m
			return
		}
		if(m == 5)
		{
			$(".col").eq(0).append($ebox)
			$(".col").eq(1).append($jbox)
			$(".col").eq(2).append($ibox)
			$(".col").eq(3).append($kbox)
			++m
			return
		}
		if(m == 6)
		{
			$(".col").eq(0).append($bbox)
			$(".col").eq(1).append($fbox)
			$(".col").eq(2).append($dbox)
			$(".col").eq(3).append($cbox)
			++m
			return
		}
		if(m == 7)
		{
			$(".col").eq(0).append($gbox)
			$(".col").eq(1).append($abox)
			$(".col").eq(2).append($ebox)
			$(".col").eq(3).append($ibox)
			++m
			return
		}
		if(m == 11)
		{
			$(".col").eq(0).append($hbox)
			$(".col").eq(1).append($dbox)
			$(".col").eq(2).append($ibox)
			$(".col").eq(3).append($gbox)
			m=1
			return
		}
		if(m == 8)
		{
			$(".col").eq(0).append($ibox)
			$(".col").eq(1).append($cbox)
			$(".col").eq(2).append($dbox)
			$(".col").eq(3).append($kbox)
			++m
			return
		}
		if(m == 9)
		{
			$(".col").eq(0).append($jbox)
			$(".col").eq(1).append($fbox)
			$(".col").eq(2).append($cbox)
			$(".col").eq(3).append($dbox)
			++m
			return
		}
		if(m == 10)
		{
			$(".col").eq(0).append($kbox)
			$(".col").eq(1).append($jbox)
			$(".col").eq(2).append($cbox)
			$(".col").eq(3).append($dbox)
			++m
			return
		}
				
		
		/*if(n == 2)
		{
			$(".col").append($box_2)	
		}
		if(n == 3)
		{
			$(".col").append($box_3)	
		}
		if(n == 4)
		{
			$(".col").append($box)	
		}*/
		
	}	
})
$(function(){
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