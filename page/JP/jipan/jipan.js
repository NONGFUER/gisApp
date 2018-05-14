var count = 1;
var yflag = true;
var n = 1; //flag
var scrollTop = "";
var degree = false;
var cityFlag = false;
var timesortFlag = "desc";
var conditions = {
	city:{
		obj:null,
		button:$("#button_area"),
		booth:$("#booth_area"),
		panel:$("#panel_area"),
	},
	confirmStatus:{
		obj:null,
		button:$("#button_degree"),
		panel:$("#panel_degree"),
		booth:$("#booth_degree"),
	}
}
var current = {
	type:null
}
localStorage.removeItem("addressX_jp");
localStorage.removeItem("addressY_jp");
localStorage.removeItem("addressName_jp");
localStorage.removeItem("addressX_jpm");
localStorage.removeItem("addressY_jpm");
localStorage.removeItem("addressName_jpm");
$(function () {
	appendStyle();//添加下拉筛选样式

	getJPList(1,10,"desc",false,false);//获取基盘列表
	Echo.init({offset: 0,throttle: 0});//图片懒加载
	tabToTop();//上拉tab-bar置顶
	$("body").on("touchmove", addStickFixed);
	//topscroll()
	
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
	

	//返回
	$("#header_back").click(function(){
  		window.location.href = base.url + "gisApp/page/home/home.html"
  	});
  	
  	//跳转到基盘添加
	$(".sort_bar_add").click(function(){
		window.location.href = "../addJP/addJP.html"
	});

});
function getJPList(curpage,pagesize,timesort,city,confirmStatus){
	$(".lists").html("");
	count =1;
	var url = base.basePath + "familymart.property.app.getlistsort?curPage="+curpage+"&pageSize="+pagesize;//"&confirmStatus="+confirmStatus+
	if(timesort){

		url += "&timesort="+timesort;
	}
	if(city){
		//cityFlag = city;
		url += "&city="+city;
	}
	if(confirmStatus){
		//degree = confirmStatus;
		url += "&confirmStatus="+confirmStatus;
	}
	$.reqPostAjaxs(url,"" ,function(data){		
		if( data.statusCode == "200" ){
			var sjpList = data.data;
			for( var i = 0; i < sjpList.length-1; i++ ){
				var areaName = (sjpList[i].city ? sjpList[i].city : '') +''+(sjpList[i].area ? sjpList[i].area : '') ;
				var preData = {
					"dtoName":sjpList[i].dtoName,
					"imgpath":sjpList[i].img1,
					"bprExpectRent":sjpList[i].bprExpectRent,
					"bprShopArea":sjpList[i].bprShopArea,
					"bprShopWidth":sjpList[i].bprShopWidth,
					"areaName":areaName,
					"bprExpectRent":(sjpList[i].bprExpectRent == 0 ? "不详" : sjpList[i].bprExpectRent ),
					"bprMarketType":DICTIONARY["bprMarketType"][sjpList[i].bprMarketType],
					"bprViceMarketType":DICTIONARY["bprMarketType"][sjpList[i].bprViceMarketType],
					"bpmConfirmStatus":sjpList[i].bpmConfirmStatus,
					"bprCustomerFlow":sjpList[i].bprCustomerFlow ?sjpList[i].bprCustomerFlow :"" ,
					"bprExpectDaysales":sjpList[i].bprExpectDaysales ? sjpList[i].bprExpectDaysales : "",
					"jpid":sjpList[i].id
				}
				$(".lists").append(strMoudle(preData));
			}
			Echo.init({offset: 0,throttle: 0});//图片懒加载
			var loadDom = $('<li class="loading_box"><i class="loading"></i><span>加载中…</span></li>');
			$(".mod_cont").append(loadDom);
			setTimeout(function(){
				$(".loading_box").hide()
			},1500);
		}else{
			modelAlert(data.message);
		}
	} );
}

function getJPList1(curpage,pagesize,timesort,confirmStatus){
	var url = base.basePath + "familymart.property.app.getlistsort?curPage="+curpage+"&pageSize="+pagesize;
	if(timesortFlag){

		url += "&timesort="+timesortFlag;
	}
	if(cityFlag){
		//cityFlag = city;
		url += "&city="+cityFlag;
	}
	if(degree){
		//degree = confirmStatus;
		url += "&confirmStatus="+degree;
	}
	var reqData = {//无效参数设置
		curPage:1,
		pageSize:2
	}
	$.reqPostAjaxs(url,reqData ,function(data){
		console.log(data);
		if( data.statusCode == "200" ){
			
			var sjpList = data.data;
			if(sjpList.length == 1 ){ yflag = false }
			for( var i = 0; i < sjpList.length-1; i++ ){
				var areaName = (sjpList[i].city ? sjpList[i].city : '') +''+(sjpList[i].area ? sjpList[i].area : '') ;
				var preData = {
					"dtoName":sjpList[i].dtoName,
					"imgpath":sjpList[i].img1,
					"bprExpectRent":sjpList[i].bprExpectRent,
					"bprShopArea":sjpList[i].bprShopArea,
					"bprShopWidth":sjpList[i].bprShopWidth,
					"areaName":areaName,
					"bprExpectRent":(sjpList[i].bprExpectRent == 0 ? "不详" : sjpList[i].bprExpectRent ),
					"bprMarketType":DICTIONARY["bprMarketType"][sjpList[i].bprMarketType],
					"bprViceMarketType":DICTIONARY["bprMarketType"][sjpList[i].bprViceMarketType],
					"bpmConfirmStatus":sjpList[i].bpmConfirmStatus,
					"bprCustomerFlow":sjpList[i].bprCustomerFlow ?sjpList[i].bprCustomerFlow :"" ,
					"bprExpectDaysales":sjpList[i].bprExpectDaysales ? sjpList[i].bprExpectDaysales : "",
					"jpid":sjpList[i].id
				}
				$(".lists").append(strMoudle(preData));
			}
			Echo.init({offset: 0,throttle: 0});//图片懒加载
		}
	} );
}



//上拉置顶
function tabToTop(){	
	$(document).scroll(function() {
			addStickFixed();
			if (getScrollTop() + getClientHeight() == getScrollHeight()) { 
				$(".loading_box").show()
				if(!yflag){
						$(".loading_box").hide()
				}else{
//					setTimeout(function(){			
							getJPList1(++count,10,"desc","");//获取基盘列表
							$(".loading_box").hide()	
//					},1500)
				}				
			}
	});
}

function addStickFixed(){
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
	if(o < 0) {//当该元素小于scrolltop,则添加固定
		$("#booth").addClass("stick_fixed");
		$(".occupy").css("display", "block")
	} else {
		$("#booth").removeClass("stick_fixed");
		$(".occupy").css("display", "none")
	}
}

function chooseDegree(){
	condition["confirmStatus"]["booth"].addClass("active");
	condition["confirmStatus"]["booth"].find("h2").html("1");
}
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
	getJPList(1,10,'desc',cityFlag,degree);
	hide();
}
function filterClickDegree(de){
	if(de){
		conditions["confirmStatus"]["booth"].addClass("active");
		conditions["confirmStatus"]["booth"].find("h2").html(de);
	}else{
		conditions["confirmStatus"]["booth"].removeClass("active");
		conditions["confirmStatus"]["booth"].find("h2").html("确度");
	}
	degree = de;
	getJPList(1,10,'desc',cityFlag,degree);
	hide();
}
