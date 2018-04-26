$(function(){
	getJPList();
	var n = 1;
	$(document).scroll(function() {
		if(n) {
			var offsetObject = $("#filter").offset();
			topValue = offsetObject.top;
			var i = offsetObject.height;
			var s = $('<div class="occupy" style="display:none;height:' + i + 'px">');
			if($("#filter").next().length != 0) {
				s.insertBefore($("#filter").next())
			} else {
				s.appendTo($("#filter").parent())
			}
			n = 0
		}
		var o = topValue - (document.body.scrollTop || document.documentElement.scrollTop);
		if(o < 0) {
			$("#filter").addClass("stick_fixed");
			$(".occupy").css("display", "block")
		} else {
			$("#filter").removeClass("stick_fixed");
			$(".occupy").css("display", "none")
		}
	});
});
function getJPList(){
	var url = base.basePath + "familymart.property.app.getlist?curPage=1&pageSize=10";
	var reqData = {
		curPage:1,
		pageSize:10
	}
	$.reqPostAjaxs(url,reqData ,function(data){
		console.log(data);
		if( data.statusCode == "200" ){
			var jpLists = data.data;
		}
	} );
//	for( var i = 0; i < jpLists.length; i++){
//		
//	}
}
//跳转
$(".sort_bar_add").click(function(){
	window.location.href = "../addJP/addJP.html"
});

