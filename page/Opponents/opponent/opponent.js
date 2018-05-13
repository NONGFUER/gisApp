var count =1;
$(function(){
	appendStyle();//添加下拉筛选样式
	getJPList(1,10,"desc");//获取基盘列表
	Echo.init({offset: 0,throttle: 0});//图片懒加载
	tabToTop();//上拉tab-bar置顶
	//topscroll()
	$(".header_back").unbind("tap").bind("tap",function(){
		window.location.href = base.url + "gisApp/page/home/home.html";
	});
});
function getJPList(curpage,pagesize,timesort){
	var url = base.basePath + "familymart.competitorshop.getlist?curPage="+curpage+"&pageSize="+pagesize;
	var reqData = {//无效参数设置
		curPage:1,
		pageSize:2
	}
	$.reqPostAjaxs(url,reqData ,function(data){
		console.log(data);
		if( data.statusCode == "200" ){
			var sjpList = data.data;
			for( var i = 0; i < sjpList.length; i++ ){
				var areaName = (sjpList[i].province ? sjpList[i].province : '') +''+(sjpList[i].area ? sjpList[i].area : '') ;
				var preData = {
					"dtoName":sjpList[i].compName,
					"imgpath":sjpList[i].img1,
					"bprShopArea":sjpList[i].bprShopArea,
					"bprShopWidth":sjpList[i].bprShopWidth,
					"areaName":areaName,
					"bprExpectRent":(sjpList[i].expectRent == 0 ? "不详" : sjpList[i].expectRent ),
					"bprMarketType":DICTIONARY["bprMarketType"][sjpList[i].marketType],
					"bprViceMarketType":DICTIONARY["bprMarketType"][sjpList[i].viceMarketType],
					"bpmConfirmStatus":sjpList[i].bpmConfirmStatus,
					"bprCustomerFlow":sjpList[i].customerFlow ?sjpList[i].customerFlow :"" ,
					"bprExpectDaysales":sjpList[i].expectDaysales ? sjpList[i].expectDaysales : "",
					"jpid":sjpList[i].id,
					"brand":sjpList[i].brand,
					"cigaretteFlag":sjpList[i].cigaretteFlag,
					"tuName":sjpList[i].tuName,
				}
				$(".lists").append(strMoudleJZ(preData));
			}
			Echo.init({offset: 0,throttle: 0});//图片懒加载
			var loadDom = $('<li class="loading_box"><i class="loading"></i><span>加载中…</span></li>');
			$(".mod_cont").append(loadDom);
			setTimeout(function(){
				$(".loading_box").hide()
			},1500);
		}else{
			modelAlert(data.message,"",toIndex);
		}
	} );
}

function getJPList1(curpage,pagesize,timesort){
	var url = base.basePath + "familymart.competitorshop.getlist?curPage="+curpage+"&pageSize="+pagesize+"&timesort="+timesort;
	var reqData = {//无效参数设置
		curPage:1,
		pageSize:2
	}
	$.reqPostAjaxs(url,reqData ,function(data){
		console.log(data);
		if( data.statusCode == "200" ){
			var sjpList = data.data;
			for( var i = 1; i < sjpList.length; i++ ){
				var areaName = (sjpList[i].city ? sjpList[i].city : '') +''+(sjpList[i].area ? sjpList[i].area : '') ;
				var preData = {
					"dtoName":sjpList[i].compName,
					"imgpath":sjpList[i].img1,
					"bprShopArea":sjpList[i].bprShopArea,
					"bprShopWidth":sjpList[i].bprShopWidth,
					"areaName":areaName,
					"bprExpectRent":(sjpList[i].expectRent == 0 ? "不详" : sjpList[i].expectRent ),
					"bprMarketType":DICTIONARY["bprMarketType"][sjpList[i].marketType],
					"bprViceMarketType":DICTIONARY["bprMarketType"][sjpList[i].viceMarketType],
					"bpmConfirmStatus":sjpList[i].bpmConfirmStatus,
					"bprCustomerFlow":sjpList[i].customerFlow ?sjpList[i].customerFlow :"" ,
					"bprExpectDaysales":sjpList[i].expectDaysales ? sjpList[i].expectDaysales : "",
					"jpid":sjpList[i].id,
					"brand":sjpList[i].brand,
					"cigaretteFlag":sjpList[i].cigaretteFlag,
					"tuName":sjpList[i].tuName,
				}
				$(".lists").append(strMoudleJZ(preData));
			}
			Echo.init({offset: 0,throttle: 0});//图片懒加载
		}
	} );
}

//跳转到基盘添加
$(".sort_bar_add").click(function(){
	window.location.href = "../addOpponent/addOpponent.html"
});

//上拉置顶
function tabToTop(){
	var n = 1;
	$(document).scroll(function() {
			if(n) {
				var offsetObject = $("#booth").offset();
				topValue = offsetObject.top;
				var i = offsetObject.height;
				var s = $('<div class="occupy" style="display:none;height:' + i + 'px">');
				if($("#booth").next().length != 0) {
					s.insertBefore($("#booth").next())
				} else {
					s.appendTo($("#filter").parent())
				}
				n = 0
			}
			var o = topValue - (document.body.scrollTop || document.documentElement.scrollTop);
			if(o < 0) {
				$("#booth").addClass("stick_fixed");
				$(".occupy").css("display", "block")
			} else {
				$("#booth").removeClass("stick_fixed");
				$(".occupy").css("display", "none")
			}
			if (getScrollTop() + getClientHeight() == getScrollHeight()) { 
				$(".loading_box").show()
				setTimeout(function(){
					getJPList1(++count,10,"desc");//获取基盘列表
					$(".loading_box").hide()
				},1500)
					
			}
	});
}
