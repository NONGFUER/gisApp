$(function(){
	showViewPort("step1")
});
var showViewPort = function(e,t) {
	var n = $(".page_yezhu").find(".steps");
	var r = n.filter(".stepon"),
	i = n.filter("[data-page=" + e + "]");
	if(!t) {
		r.one("webkitTransitionEnd", function() {
			r.removeClass("stepon").removeClass("slide-left")
		}).addClass("slide-left");
		i.addClass("stepon")
	} else {
		i.addClass("back-ready");
		setTimeout(function() {
			i.one("webkitTransitionEnd", function() {
				i.removeClass("back-ready")
			}).addClass("stepon")
		});
		r.one("webkitTransitionEnd", function() {
			r.removeClass("stepon").removeClass("slide-right")
		}).addClass("slide-right")
	}
}