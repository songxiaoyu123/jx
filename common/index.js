$(document).ready(function(){
	//下拉菜单
//	$("#menu").click(function(){
//		/*$("#show").toggleClass("none");*/
//		$("#show").slideToggle("slow");
//	});
	//查看更多 校园风采
	var btn=document.getElementById("btn");//按钮
      btn.onclick=function(){
	      if(btn.innerHTML=="查看更多"){
	      	$(".over").css("display","block");
	      	btn.innerHTML="关闭";
	      }else{
	      	$(".over").css("display","none");
	      	btn.innerHTML="查看更多";
	      }
      }
      //学生作品
      var bottom=document.getElementById("bottom");//按钮
      bottom.onclick=function(){
	      if(bottom.innerHTML=="查看更多"){
	      	$(".hide").css("display","block");
	      	bottom.innerHTML="关闭";
	      }else{
	      	$(".hide").css("display","none");
	      	bottom.innerHTML="查看更多";
	      }
      }
      //明星学子
      var fastener=document.getElementById("fastener");//按钮
      fastener.onclick=function(){
	      if(fastener.innerHTML=="查看更多"){
	      	$(".no").css("display","block");
	      	fastener.innerHTML="关闭";
	      }else{
	      	$(".no").css("display","none");
	      	fastener.innerHTML="查看更多";
	      }
      }
      //就业单位
      var hide2=document.getElementById("hide2");//按钮
      hide2.onclick=function(){
	      if(hide2.innerHTML=="查看更多"){
	      	$(".display").css("display","block");
	      	hide2.innerHTML="关闭";
	      }else{
	      	$(".display").css("display","none");
	      	hide2.innerHTML="查看更多";
	      }
      }
});