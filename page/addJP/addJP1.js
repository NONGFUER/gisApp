var w = [
				["朝向"],
				["所有非便利店的基盘", "east"],
				["外资小7小罗喜士多", "west"],
				["内资一线，各地不同品牌", "south"],
				["北", "north"],
			];
$(function(){
	$(".changeStep").click(function(){
		var nextPage = $(this).attr("data-page");
		shownext( nextPage );
	});
	$(".next").click(function(){
		var nextPage = $(this).attr("data-page");
		shownext( nextPage );
	});
	$(".cancle").click(function(){
		bottomCancle();
	});
//	JPTypeListShow()
	//showViewPort("step2")
});
var shownext = function(e, t) {
	var wrapper = $(".page_yezhu").find(".yezhu-wrapper");
	var stepon = wrapper.find(".stepon"),
		dpDom = $(".page_yezhu").find("[data-page=" + e + "]");
	if(!t) {
		stepon.one("webkitTransitionEnd", function() {
			stepon.removeClass("stepon").removeClass("slide-left")
		}).addClass("slide-left");
		dpDom.addClass("stepon")
	} else {
		dpDom.addClass("back-ready");
		setTimeout(function() {
			dpDom.one("webkitTransitionEnd", function() {
				dpDom.removeClass("back-ready")
			}).addClass("stepon")
		});
		stepon.one("webkitTransitionEnd", function() {
			stepon.removeClass("stepon").removeClass("slide-right")
		}).addClass("slide-right")
	}
}

function JPTypeListShow(){
	var JPTypeListDom = [];
	for(var i = 1; i < w.length; i++) {
		var x = "<li select_data=" + w[i][1] + ">" + w[i][0] + "</li>";
		JPTypeListDom.push($(x))
	}
	
	$(".layer_fixed").show();
	$("#bottom_layer_title").html(w[0][0]);
	for(var t = 0; t < JPTypeListDom.length; t++) {
		$("#layer_list").append(JPTypeListDom[t])
	}
	$("#layer_list").attr("option-list", "orientationList");
	$("#layer_list").attr("option-list-dom", "orientationListDom");
	$(".bottom_layer").addClass("active")
}

var bottomCancle = function() {
	$(".bottom_layer").removeClass("active");
	setTimeout(function() {
		$("#layer_list").html("");
		$("#layer_list").attr("option-list", "");
		$("#bottom_layer_title").html("");
		$(".layer_fixed").hide()
	}, 100)
}