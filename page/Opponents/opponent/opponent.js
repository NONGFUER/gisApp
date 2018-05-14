localStorage.removeItem("addressX_jz");
localStorage.removeItem("addressY_jz");
localStorage.removeItem("addressName_jz");
localStorage.removeItem("addressX_jzm");
localStorage.removeItem("addressY_jzm");
localStorage.removeItem("addressName_jzm");
var count =1;
var cityFlag = false;
var brandFlag = false;
var dateFlag = false;
var conditions = {
	city:{
		obj:null,
		button:$("#button_area"),
		booth:$("#booth_area"),
		panel:$("#panel_area"),
	},
	brand:{
		obj:null,
		button:$("#button_brand"),
		panel:$("#panel_brand"),
		booth:$("#booth_brand"),
	},
	date:{
		obj:null,
		button:$("#button_date"),
		panel:$("#panel_date"),
		booth:$("#booth_date"),
	}

}
var current = {
	type:null
}
$(function(){
	appendStyle();//添加下拉筛选样式
	getJPList(1,10,false,false,false);//获取基盘列表
	Echo.init({offset: 0,throttle: 0});//图片懒加载
	tabToTop();//上拉tab-bar置顶
	//topscroll()
	$(".header_back").unbind("tap").bind("tap",function(){
		window.location.href = base.url + "gisApp/page/home/home.html";
	});
	$.each(conditions,function(key,condition){
		condition["button"].on("tap",function(){
			if(current["type"] == key){
				setTimeout(hide,0)
				return false;
			}
			hideCurrentPannel();
			showPannel(key);
		});
		
		condition["booth"].click(function(){
			show(key);
		});
	})

	$("#panel_box").on("tap", function(e){
		if(!checkTapEmpty(e.srcElement)){
			e.preventDefault();
			setTimeout(hide,0)
		}
	});
	
});
function getJPList(curpage,pagesize,city,brand,datetype){
	$(".lists").html("");
	count =1;
	var url = base.basePath + "familymart.competitorshop.getlist?curPage="+curpage+"&pageSize="+pagesize;
	if(city){
		url += "&city="+city;
	}
	if(brand){
		url += "&brand="+brand;
	}
	if(datetype){
		url += "&date="+datetype;
	}
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

function getJPList1(curpage,pagesize){
	var url = base.basePath + "familymart.competitorshop.getlist?curPage="+curpage+"&pageSize="+pagesize;
	var reqData = {//无效参数设置
		curPage:1,
		pageSize:2
	}
	if(cityFlag){
		url += "&city="+cityFlag;
	}
	if(brandFlag){
		url += "&brand="+brandFlag;
	}
	if(dateFlag){
		url += "&date="+dateFlag;
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
					getJPList1(++count,10);//获取基盘列表
					$(".loading_box").hide()
				},1500)
					
			}
	});
}

//
var checkTapEmpty = function(el) {
	var list = [];
	for (var k in conditions) {
		if (conditions[k]["button"] && conditions[k]["button"].length > 0) {
			list.push(conditions[k]["button"][0])
		}
		if (conditions[k]["panel"] && conditions[k]["panel"].length > 0) {
			list.push(conditions[k]["panel"][0])
		}
	}
	return $(el).isin(list)
};

function show(type){
	scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
	$("#panel_box").show();
	$(document.body).addClass("filter_show");
	showPannel(type);
}

function showPannel(type){
	current["type"] && conditions[current["type"]]["button"].removeClass("active");
	current["type"] = type;
	conditions[current["type"]]["panel"].addClass("active");
	conditions[current["type"]]["button"].addClass("active");
	//conditions[current["type"]]["obj"].show()
}

function hide(){
	setTimeout(function() {
		$("#panel_box").hide();
		hideCurrentPannel();
		$(document.body).removeClass("filter_show");
		window.scrollTo(0, scrollTop)
	}, 500)
}
function hideCurrentPannel(){
	if(current["type"]){
		conditions[current["type"]]["panel"].removeClass("active")
	}
}

$.fn.isin = function(e) {
	if(this.length === 0) return !1;
	var t = this[0];
	for(var n = 0, r = e.length; n < r; n += 1)
	if(e[n].contains(t)) return !0;
	return !1
}

function filterClickCity(ci){
	if(ci){
		conditions["city"]["booth"].addClass("active");
		conditions["city"]["booth"].find("h2").html(DICTIONARY["city"][ci]);
	}else{
		conditions["city"]["booth"].removeClass("active");
		conditions["city"]["booth"].find("h2").html("区域");
	}
	cityFlag = ci;
	getJPList(1,10,cityFlag,brandFlag,dateFlag);
	hide();
}
function filterClickBrand(br){
	if(br){
		conditions["brand"]["booth"].addClass("active");
		conditions["brand"]["booth"].find("h2").html(DICTIONARY["brand"][br]);
	}else{
		conditions["brand"]["booth"].removeClass("active");
		conditions["brand"]["booth"].find("h2").html("品牌");
	}
	brandFlag = br;
	getJPList(1,10,cityFlag,brandFlag,dateFlag);
	hide();
}
function filterClickDate(da){
	if(da){
		conditions["date"]["booth"].addClass("active");
		conditions["date"]["booth"].find("h2").html(DICTIONARY["datetype"][da]);
	}else{
		conditions["date"]["booth"].removeClass("active");
		conditions["date"]["booth"].find("h2").html("开店日期");
	}
	dateFlag = da;
	getJPList(1,10,cityFlag,brandFlag,dateFlag);
	hide();
}
