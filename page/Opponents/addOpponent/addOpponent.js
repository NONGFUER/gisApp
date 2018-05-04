var domLists = {};

$(function(){	
//	getImages("SH18438526");
//	imageHandle();
	$(".msgwriter-txt").unbind("input").bind("input",function(){
		$(".num").text($(this).val().length)
	});
	$(".changeStep").click(function(){
		var nextPage = $(this).attr("data-page");
		shownext( nextPage );
	});
	$("#toxia").click(function(){
		var nextPage = $(this).attr("data-page");
		shownext( nextPage );
	});
	$("#infoComplete").click(function(){
		var nextPage = $(this).attr("data-page");
		shownext( nextPage );
	});
	$("#complete").click(function(){
		createJipan()
		
	});
	$(".cancle").click(function(){
		bottomCancle();
	});

});
//获取图片
function getImages(bpmId){
	var url = base.basePath + "familymart.get.uploader?bpmId="+bpmId;
	var reqData = "";
	$.reqGetAjaxs( url, reqData, function(data){
		console.log(data);
	} );
}
/*获取表单信息*/
function getFormData(){
	var jpName    = $("#jpName").val();//基盘名称 
	if($.isNull(jpName)){alert("基盘名称为空 ！")};
	var accuracy  = $(".accuracyList").html();//确度
	if($.isNull(accuracy)){alert("确度为空 ！")};
	var jpType    = $(".JPTypeList").attr("select-value");//基盘类型
	var cityValue = $(".cityList").attr("select-value");//城市
	var areaValue = $(".areaList").attr("select-value");			//区
	var cityName  = $(".cityList").html();//城市
	var areaName  = $(".areaList").html();			//区
	var jpAdress  = $("#jpAdress").val();//基盘地址
	var jpRoad    = $("#jpRoad").val();  //基盘街道
	
	var rishang   = $("#rishang").val()//预估日商
	var zujin     = $("#zujin").val()//预估租金
	
	var mianji    = $("#mianji").val();//面积
	var dwidth    = $("#dwidth").val();//店宽	
	var siteValue = $(".siteList").attr("select-value");//立地
	var viewValue = $(".viewList").attr("select-value");//视野
	var markType  = $(".marketTypeList").attr("select-value");//主商圈
	var subType   = $(".subMarketTypeList").attr("select-value");//副商圈
	var carPark   = $(".carparkList").attr("select-value");//车辆停靠
	var txfx      = $(".txfxList").attr("select-value");//通行方向
	var waywidth  = $(".waywidthList").attr("select-value");//路宽类型
	
	var propertyDto = {}
	var bpPropertyRpt    = {};
	var bpPropertyMaster = {};
	
	bpPropertyMaster.bpmPropertyName  = jpName;//基盘名称
	bpPropertyMaster.bpmConfirmStatus = accuracy;//确度
	bpPropertyRpt.bprObjectType      = jpType;//基盘类型	
	bpPropertyMaster.bpmCity          = cityValue; //市Id
	bpPropertyMaster.city             = cityName;	//城市名
	bpPropertyMaster.bpmCounty        = areaValue;//区域Id
	bpPropertyMaster.areaCn           = areaName;//区域名
	bpPropertyMaster.bpmAddress       = jpAdress;//基盘地址
	bpPropertyMaster.bpmStreet        = jpRoad;//基盘街道
	
	bpPropertyRpt.bprExpectRent       = zujin;//预估租金
	bpPropertyRpt.bprExpectDaysales   = rishang;//预估日商
	
	bpPropertyRpt.bprShopArea         = mianji;//面积
	bpPropertyRpt.bprShopWidth        = dwidth;//店宽 
	bpPropertyMaster.auditResult      = 1; //审批结果  0-审批中，1-审批通过，2-审批未通过, 9-临时暂存数据
	bpPropertyRpt.bprPosition         = siteValue; //立地
	bpPropertyRpt.bprViewType         = viewValue;//视野
//	bpPropertyRpt.bprTimeQuantum      分段人流
	bpPropertyRpt.bprMarketType       = markType;//主商圈
	bpPropertyRpt.bprViceMarketType   = subType;//副商圈
	bpPropertyRpt.bprCarStop		  = carPark;//车辆停靠
	bpPropertyRpt.bprCarWay			  = txfx; //通行方向
	bpPropertyRpt.bprRoadType         = waywidth//路宽类型
	bpPropertyRpt.bprRemark           = "暂无描述";
	
	propertyDto.bpPropertyRpt         = bpPropertyRpt;
	propertyDto.bpPropertyMaster      = bpPropertyMaster;
	return propertyDto;
}
//创建基盘
function createJipan(){
	var url = base.basePath + "familymart.property.applycreate"
	var reqData = getFormData();
	$.reqPostAjaxs( url, reqData, function(data){
		console.log(data);
//		var nextPage = $(this).attr("data-page");
//		shownext( nextPage );
	} );
}

//展示下一步
/*@function*/
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
//取消弹窗
var bottomCancle = function() {
	$(".bottom_layer").removeClass("active");
	setTimeout(function() {
		$("#layer_list").html("");
		$("#layer_list").attr("option-list", "");
		$("#bottom_layer_title").html("");
		$(".layer_fixed").hide()
	}, 100)
}
//选择赋值
function choose_option(obj,t){
	var objDom = $(obj);
	var select_value = objDom.html();
	var select_data = objDom.attr("select_data");
	if(t){
		$(".areaList").attr("select-value","");
		$(".areaList").html("请选择").css("color","#e0");
		$(".areaList").attr("cityid",select_data);
	}
	var select_option = objDom.parent("ul").attr("option-list");
	var select_option_dom = objDom.parent("ul").attr("option-list-dom");
	var o;
	var u;
	var select_index = objDom.index();
	for(var i = 0; i < domLists[select_option_dom].length; i++) {
		if(i == select_index) {
			domLists[select_option_dom][i].addClass("active")
		} else {
			domLists[select_option_dom][i].removeClass("active")
		}
	}
	objDom.addClass("active");
	objDom.siblings().removeClass("active");
	bottomCancle();
	console.log(select_data +"-" +select_value);
	$("." + select_option).html(select_value).attr("select-value", select_data)
}
//--------------《《------------------《《----------弹窗枚举-----------》》--------------》》
//展示城市
function cityListShow(){
	var cityList = getCityList();//城市列表
	var cityListDom = [];
	for(var i = 1; i < cityList.length; i++) {
		var x = "<li select_data=" + cityList[i][1] + " onclick='choose_option(this,true)'>" + cityList[i][0] + "</li>";
		cityListDom.push($(x))
	}
	domLists.cityListDom = cityListDom
	$(".layer_fixed").show();
	$("#bottom_layer_title").html(cityList[0][0]);
	for(var t = 0; t < cityListDom.length; t++) {
		$("#layer_list").append(cityListDom[t])		
	}
	$("#layer_list").attr("option-list", "cityList");
	$("#layer_list").attr("option-list-dom", "cityListDom");
	$(".bottom_layer").addClass("active")
}
//展示区域
function areaListShow(){
	var cityId = $(".areaList").attr("cityid");
	if(cityId){
		var areaList = getAreaList(cityId);//区列表
	}else{
		alert("请先选择城市");
		return;
	}
	
	var areaListDom = [];
	for(var i = 1; i < areaList.length; i++) {
		var x = "<li select_data=" + areaList[i][1] + " onclick='choose_option(this)'>" + areaList[i][0] + "</li>";
		areaListDom.push($(x))
	}
	domLists.areaListDom = areaListDom
	$(".layer_fixed").show();
	$("#bottom_layer_title").html(areaList[0][0]);
	for(var t = 0; t < areaListDom.length; t++) {
		$("#layer_list").append(areaListDom[t])		
	}
	$("#layer_list").attr("option-list", "areaList");
	$("#layer_list").attr("option-list-dom", "areaListDom");
	$(".bottom_layer").addClass("active")
}
//展示基盘类型
function JPTypeListShow(){
	var w = getJPTypeList();//类型
	var JPTypeListDom = [];
	for(var i = 1; i < w.length; i++) {
		var x = "<li select_data=" + w[i][1] + " onclick='choose_option(this)'>" + w[i][0] + "</li>";
		JPTypeListDom.push($(x))
	}
	domLists.JPTypeListDom = JPTypeListDom
	$(".layer_fixed").show();
	$("#bottom_layer_title").html(w[0][0]);
	for(var t = 0; t < JPTypeListDom.length; t++) {
		$("#layer_list").append(JPTypeListDom[t])		
	}
	$("#layer_list").attr("option-list", "JPTypeList");
	$("#layer_list").attr("option-list-dom", "JPTypeListDom");
	$(".bottom_layer").addClass("active")
}
//展示立地面
function siteListShow(){
	var siteList = getSiteList();//立地面
	var siteListDom = [];
	for(var i = 1; i < siteList.length; i++) {
		var x = "<li select_data=" + siteList[i][1] + " onclick='choose_option(this)'>" + siteList[i][0] + "</li>";
		siteListDom.push($(x))
	}
	domLists.siteListDom = siteListDom
	$(".layer_fixed").show();
	$("#bottom_layer_title").html(siteList[0][0]);
	for(var t = 0; t < siteListDom.length; t++) {
		$("#layer_list").append(siteListDom[t])		
	}
	$("#layer_list").attr("option-list", "siteList");
	$("#layer_list").attr("option-list-dom", "siteListDom");
	$(".bottom_layer").addClass("active")
}
//展示视野
function viewListShow(){
	var viewList = getViewList();//视野
	var viewListDom = [];
	for(var i = 1; i < viewList.length; i++) {
		var x = "<li select_data=" + viewList[i][1] + " onclick='choose_option(this)'>" + viewList[i][0] + "</li>";
		viewListDom.push($(x))
	}
	domLists.viewListDom = viewListDom
	$(".layer_fixed").show();
	$("#bottom_layer_title").html(viewList[0][0]);
	for(var t = 0; t < viewListDom.length; t++) {
		$("#layer_list").append(viewListDom[t])		
	}
	$("#layer_list").attr("option-list", "viewList");
	$("#layer_list").attr("option-list-dom", "viewListDom");
	$(".bottom_layer").addClass("active")
}
//展示主商圈
function marketTypeListShow(){
	var marketTypeList = getMarketTypeList();//主商圈
	var marketTypeListDom = [];
	for(var i = 1; i < marketTypeList.length; i++) {
		var x = "<li select_data=" + marketTypeList[i][1] + " onclick='choose_option(this)'>" + marketTypeList[i][0] + "</li>";
		marketTypeListDom.push($(x))
	}
	domLists.marketTypeListDom = marketTypeListDom
	$(".layer_fixed").show();
	$("#bottom_layer_title").html(marketTypeList[0][0]);
	for(var t = 0; t < marketTypeListDom.length; t++) {
		$("#layer_list").append(marketTypeListDom[t])		
	}
	$("#layer_list").attr("option-list", "marketTypeList");
	$("#layer_list").attr("option-list-dom", "marketTypeListDom");
	$(".bottom_layer").addClass("active")
}
//展示副商圈
function subMarketTypeListShow(){
	var subMarketTypeList = getSubMarketTypeList();//副商圈
	var subMarketTypeListDom = [];
	for(var i = 1; i < subMarketTypeList.length; i++) {
		var x = "<li select_data=" + subMarketTypeList[i][1] + " onclick='choose_option(this)'>" + subMarketTypeList[i][0] + "</li>";
		subMarketTypeListDom.push($(x))
	}
	domLists.subMarketTypeListDom = subMarketTypeListDom
	$(".layer_fixed").show();
	$("#bottom_layer_title").html(subMarketTypeList[0][0]);
	for(var t = 0; t < subMarketTypeListDom.length; t++) {
		$("#layer_list").append(subMarketTypeListDom[t])		
	}
	$("#layer_list").attr("option-list", "subMarketTypeList");
	$("#layer_list").attr("option-list-dom", "subMarketTypeListDom");
	$(".bottom_layer").addClass("active")
}
//展示竞争店现状
function carparkListShow(){
	var carparkList = [
			["店铺现状"],
			["开店",'10'],
			["闭店",'99']
	]
	var carparkListDom = [];
	for(var i = 1; i < carparkList.length; i++) {
		var x = "<li select_data=" + carparkList[i][1] + " onclick='choose_option(this)'>" + carparkList[i][0] + "</li>";
		carparkListDom.push($(x))
	}
	domLists.carparkListDom = carparkListDom
	$(".layer_fixed").show();
	$("#bottom_layer_title").html(carparkList[0][0]);
	for(var t = 0; t < carparkListDom.length; t++) {
		$("#layer_list").append(carparkListDom[t])		
	}
	$("#layer_list").attr("option-list", "carparkList");
	$("#layer_list").attr("option-list-dom", "carparkListDom");
	$(".bottom_layer").addClass("active")
}

//展示路宽
function waywidthListShow(){
	var waywidthList = getWaywidthList();//路宽
	var waywidthListDom = [];
	for(var i = 1; i < waywidthList.length; i++) {
		var x = "<li select_data=" + waywidthList[i][1] + " onclick='choose_option(this)'>" + waywidthList[i][0] + "</li>";
		waywidthListDom.push($(x))
	}
	domLists.waywidthListDom = waywidthListDom
	$(".layer_fixed").show();
	$("#bottom_layer_title").html(waywidthList[0][0]);
	for(var t = 0; t < waywidthListDom.length; t++) {
		$("#layer_list").append(waywidthListDom[t])		
	}
	$("#layer_list").attr("option-list", "waywidthList");
	$("#layer_list").attr("option-list-dom", "waywidthListDom");
	$(".bottom_layer").addClass("active")
}
//展示通行方向
function txfxListShow(){
	var txfxList = [
			["可否卖烟"],
			["可",'Y'],
			["否",'N']
	];//通行方向
	var txfxListDom = [];
	for(var i = 1; i < txfxList.length; i++) {
		var x = "<li select_data=" + txfxList[i][1] + " onclick='choose_option(this)'>" + txfxList[i][0] + "</li>";
		txfxListDom.push($(x))
	}
	domLists.txfxListDom = txfxListDom
	$(".layer_fixed").show();
	$("#bottom_layer_title").html(txfxList[0][0]);
	for(var t = 0; t < txfxListDom.length; t++) {
		$("#layer_list").append(txfxListDom[t])		
	}
	$("#layer_list").attr("option-list", "txfxList");
	$("#layer_list").attr("option-list-dom", "txfxListDom");
	$(".bottom_layer").addClass("active")
}
//展示通行方向
function accuracyListShow(){
	var accuracyList = getAccuracyList();//确度
	var accuracyListDom = [];
	for(var i = 1; i < accuracyList.length; i++) {
		var x = "<li select_data=" + accuracyList[i][1] + " onclick='choose_option(this)'>" + accuracyList[i][0] + "</li>";
		accuracyListDom.push($(x))
	}
	domLists.accuracyListDom = accuracyListDom
	$(".layer_fixed").show();
	$("#bottom_layer_title").html(accuracyList[0][0]);
	for(var t = 0; t < accuracyListDom.length; t++) {
		$("#layer_list").append(accuracyListDom[t])		
	}
	$("#layer_list").attr("option-list", "accuracyList");
	$("#layer_list").attr("option-list-dom", "accuracyListDom");
	$(".bottom_layer").addClass("active")
}
//获取城市列表
function getCityList(){
	var typeArrays = [
					["选择市"]
				];
	var url = base.basePath + "familymart.commons.getcitylist";
	$.reqGetAjaxs( url, "", function(data){
		if(data.statusCode == "200"){
			if(data.data){
				var cityList = data.data;
				var listLength = cityList.length;
				for( var i = 0; i < listLength; i++ ){
					var typeItem = cityList[i];
					var typeArray = [ typeItem.tsmSubValue, typeItem.tsmSubId ];
					typeArrays.push(typeArray);
				}
			}
		}
	} );
	return typeArrays;
}
//获取区域类表
function getAreaList(cityId){
	var typeArrays = [
					["选择区"]
				];
	var url = base.basePath + "familymart.commons.getareaofcitylist?cityId="+cityId;
	$.reqGetAjaxs( url, "", function(data){
		if(data.statusCode == "200"){
			if(data.data){
				var araeList = data.data;
				var listLength = araeList.length;
				for( var i = 0; i < listLength; i++ ){
					var typeItem = araeList[i];
					var typeArray = [ typeItem.tsmSubName, typeItem.tsmSubId ];
					typeArrays.push(typeArray);
				}
			}
		}
	} );
	return typeArrays;
}
//获取基盘类型
function getJPTypeList(){
	var typeArrays = [
					["基盘类型"]
				];
	var url = base.basePath + "familymart.commons.getpropertysortlist";
	$.reqGetAjaxs( url, "", function(data){
		if(data.statusCode == "200"){
			if(data.data){
				var JPTypeList = data.data;
				var listLength = JPTypeList.length;
				for( var i = 0; i < listLength; i++ ){
					var typeItem = JPTypeList[i];
					var typeArray = [ typeItem.tsmSubValue, typeItem.tsmSubId ];
					typeArrays.push(typeArray);
				}
			}
		}
	} );
	return typeArrays;
}


//主商圈
function getMarketTypeList(){
	var typeArrays = [
					["主商圈"]
				];
	var url = base.basePath + "familymart.commons.getmarkettypelist";
	$.reqGetAjaxs( url, "", function(data){
		if(data.statusCode == "200"){
			if(data.data){
				var marketTypeData = data.data;
				var listLength = marketTypeData.length;
				for( var i = 0; i < listLength; i++ ){
					var typeItem = marketTypeData[i];
					var typeArray = [ typeItem.mtcDescription, typeItem.mtcId ];
					typeArrays.push(typeArray);
				}
			}
		}
	} );
	return typeArrays;
}
//副商圈
function getSubMarketTypeList(){
	var typeArrays = [
					["副商圈"]
				];
	var url = base.basePath + "familymart.commons.getmarkettypelist";
	$.reqGetAjaxs( url, "", function(data){
		if(data.statusCode == "200"){
			if(data.data){
				var marketTypeData = data.data;
				var listLength = marketTypeData.length;
				for( var i = 0; i < listLength; i++ ){
					var typeItem = marketTypeData[i];
					var typeArray = [ typeItem.mtcDescription, typeItem.mtcId ];
					typeArrays.push(typeArray);
				}
			}
		}
	} );
	return typeArrays;
}
//车辆停靠
function getCarparkList(){
	var typeArrays = [["车辆停靠"]];
	var url = base.basePath + "familymart.commons.getcarparklist";
	$.reqGetAjaxs( url, "", function(data){
		if(data.statusCode == "200"){
			if(data.data){
				var marketTypeData = data.data;
				var listLength = marketTypeData.length;
				for( var i = 0; i < listLength; i++ ){
					var typeItem = marketTypeData[i];
					var typeArray = [ typeItem.tsmSubValue, typeItem.tsmSubId ];
					typeArrays.push(typeArray);
				}
			}
		}
	} );
	return typeArrays;
}

//路宽
function getWaywidthList(){
	var typeArrays = [["路宽类型"]];
	var url = base.basePath + "familymart.commons.getwaywidthlist";
	$.reqGetAjaxs( url, "", function(data){
		if(data.statusCode == "200"){
			if(data.data){
				var waywidthData = data.data;
				var listLength = waywidthData.length;
				for( var i = 0; i < listLength; i++ ){
					var typeItem = waywidthData[i];
					var typeArray = [ typeItem.tsmSubValue, typeItem.tsmSubId ];
					typeArrays.push(typeArray);
				}
			}
		}
	} );
	return typeArrays;
}

//通行方向
function getTxfxList(){
	var typeArrays = [["通行方向"]];
	var url = base.basePath + "familymart.commons.getgothroughlist";
	$.reqGetAjaxs( url, "", function(data){
		if(data.statusCode == "200"){
			if(data.data){
				var txfxData = data.data;
				var listLength = txfxData.length;
				for( var i = 0; i < listLength; i++ ){
					var typeItem = txfxData[i];
					var typeArray = [ typeItem.tsmSubValue, typeItem.tsmSubId ];
					typeArrays.push(typeArray);
				}
			}
		}
	} );
	return typeArrays;
}
function getAccuracyList(){
	var typeArrays = [["确度"]];
	var url = base.basePath + "familymart.commons.getaccuracylist";
	$.reqGetAjaxs( url, "", function(data){
		if(data.statusCode == "200"){
			if(data.data){
				var accuracyData = data.data;
				var listLength = accuracyData.length;
				for( var i = 0; i < listLength; i++ ){
					var typeItem = accuracyData[i];
					var typeArray = [ typeItem.tsmSubValue, typeItem.tsmSubId ];
					typeArrays.push(typeArray);
				}
			}
		}
	} );
	return typeArrays;
}
//--------------《《------------------《《----------弹窗枚举-----------》》--------------》》

