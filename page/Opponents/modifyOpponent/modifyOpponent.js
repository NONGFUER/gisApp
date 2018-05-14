var domLists = {};
var jzId = getUrlQueryString("jzid");
localStorage.setItem('$jzid',jzId);
$(function(){	
//	getImages("SH18438526");
//	imageHandle();
	getJPInfo(jzId);
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
		modifyJipan()
		
	});
	$(".cancle").click(function(){
		bottomCancle();
	});
	$("#jpAdress").click(function(){
		window.location.href = base.url + "gisApp/page/search/ssjzm.html"
	});
	var now = new Date();
	var year = now.getFullYear();
	var month = now.getMonth() +1;
	var day = now.getDate();
	$.selectDate(".signDate", {
		start: 1994,
		end: 2118,
		select: [year, month, day],
		title: '选择签约日期'
	}, function(data) {
		console.log(data);
		$(".signDate").attr("data-value",data.year + "-" + data.month + "-" + data.day);
	});
	
	$.selectDate(".closingDate", {
		start: 1994,
		end: 2118,
		select: [year, month, day],
		title: '选择闭店日期'
	}, function(data) {
		console.log(data);
		$(".closingDate").attr("data-value",data.year + "-" + data.month + "-" + data.day);
	});
	
	$.selectDate(".openingDate", {
		start: 1994,
		end: 2118,
		select: [year, month, day],
		title: '选择开店日期'
	}, function(data) {
		console.log(data);
		$(".openingDate").attr("data-value",data.year + "-" + data.month + "-" + data.day);
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

function getJPInfo(jzId){
	var url = base.basePath + "familymart.competitorshop.get?id="+jzId;
	$.reqGetAjaxs( url, "", function(data){
		if(data.statusCode == "200"){
			var jzData = data.data;
			handleData(jzData);
		}else{
			modelAlert(data.message);	//,"",toIndex
		}		
	} );	
}

function handleData(jzdata){
	$("#jzName").val(jzdata.compName);//竞争店名称
	$(".brandList").html(jzdata.brand);//竞争品牌
	$(".cityList").html(jzdata.province)//竞争店所在城市
	$(".cityList").attr("select-value",jzdata.city)//竞争店所在城市
	$(".areaList").html(jzdata.area)//竞争店所在区
	
	var addressName = localStorage.getItem("addressName_jzm");
	if(addressName){ 
		$("#jpAdress").val(addressName);
	}else{
		$("#jpAdress").val(jzdata.address);//地址
		$("#jpAdress").attr("data-lng",jzdata.lng)
		$("#jpAdress").attr("data-lat",jzdata.lat)
	}
	
	$("#jpRoad").val(jzdata.street);//街道
	$(".msgwriter-txt").val(jzdata.gsItemDescription);//竞争店描述

	$("#rishang").val(jzdata.expectDaysales);//"expectDaysales": 20000, 日商
	$("#zujin").val(jzdata.expectRent);//"expectRent": 30000, 租金
	$("#keliu").val(jzdata.customerFlow);//"customerFlow": 100, 客流

	$(".signDate").html(timeFormatDate(jzdata.firstSignupDate,"yyyy-MM-dd"));//签约日期
	$(".openingDate").html(timeFormatDate(jzdata.openingDate,"yyyy-MM-dd"));//开店日期
	$(".closingDate").html(timeFormatDate(jzdata.closingDate,"yyyy-MM-dd"));//闭店日期	
	$(".signDate").attr("data-value",timeFormatDate(jzdata.firstSignupDate,"yyyy-MM-dd"));//签约日期
	$(".openingDate").attr("data-value",timeFormatDate(jzdata.openingDate,"yyyy-MM-dd"));//开店日期
	$(".closingDate").attr("data-value",timeFormatDate(jzdata.closingDate,"yyyy-MM-dd"));//闭店日期
	$(".carparkList").attr("select-value",jzdata.status)//店铺现状
	$(".carparkList").html(jzdata.status == "10" ? "开店":"闭店")
	$(".txfxList").attr("select-value",jzdata.cigaretteFlag)//可否买烟
	$(".txfxList").html(jzdata.cigaretteFlag == "Y" ? "可" : "否")
	$(".marketTypeList").attr("select-value",jzdata.marketType)//主商圈
	$(".marketTypeList").html(DICTIONARY["bprMarketType"][jzdata.marketType])
	$(".subMarketTypeList").attr("select-value",jzdata.viceMarketType)//副商圈
	$(".subMarketTypeList").html(DICTIONARY["bprMarketType"][jzdata.viceMarketType])
	
	$("#f1").attr("src",base.basePath + jzdata.img1);
	$(".filePicker1").attr("data-img",jzdata.img1)
	$("#f2").attr("src",base.basePath + jzdata.img2);
	$(".filePicker2").attr("data-img",jzdata.img2)
	$("#f3").attr("src",base.basePath + jzdata.img3);
	$(".filePicker3").attr("data-img",jzdata.img3)
	$("#f4").attr("src",base.basePath + jzdata.img4);
	$(".filePicker4").attr("data-img",jzdata.img4)
	$("#f5").attr("src",base.basePath + jzdata.profileImg);
	$(".filePicker5").attr("data-img",jzdata.profileImg)
	var json = 
	{"statusCode": 200, 
    "message": "执行成功", 
    "dataFlag": 0, 
    "data": {
        "id": 523, 
        //"province": "上海市", 
        //"city": "001", 
        //"area": "嘉定区", 
        //"street": "申霞路", 
        "email": null, 
        "phone": null, 
        //"address": "上海市嘉定区申霞路369号", 
        //"compName": "考考", 
        //"brand": "喜士多", 
        "lng": 121.28244383921754, 
        "lat": 31.37423969656414, 
        //"status": 10, 
        //"img1": "/images/237a4253-4884-41e5-9d35-908394dbb623.jpg", 
       // "img2": "/images/56837817-01f6-4a6e-bb4a-505433fb1fe1.jpg", 
        //"img3": "/images/d46a4bd6-fc10-403b-95c9-096ab80fa834.jpg", 
       // "img4": "/images/aaa71e45-0bbd-45ec-822c-1c114acb9b9c.jpg", 
        "auditResult": 1, 
        "createUserId": "000005", 
        "createDate": 1526230117000, 
        "updateUserId": null, 
        "updateDate": null, 
        //"firstSignupDate": 1491350400000, 
        "firstLease": null, 
        "storeFcType": null, 
        "gsType": null, 
        "gsItemCode": null, 
        "gsItemDescription": null, 
        "tuName": "测试账号", 
        "orgName": "五部开发一课", 
        "tuEmail": null, 
        "tuMp": null, 
        //"marketType": "03", 
       // "viceMarketType": "03", 
        //"expectDaysales": 20000, 
       // "expectRent": 30000, 
       // "customerFlow": 100, 
       // "cigaretteFlag": "Y", 
        "undertake": "000005", 
        //"openingDate": 1491350400000, 
        //"closingDate": 1522886400000, 
        //"profileImg": "/images/fbf2caea-f49e-4859-95be-6840803f2db0.jpg"
    	}
	}
}

/*获取表单信息*/
function getFormData(){
	var jzName    = $("#jzName").val();//竞争店名称 
	if($.isNull(jzName)){modleAlert("竞争店名称为空 ！");return false;};	
	var brandType    = $(".brandList").html();//竞争店品牌类型
	if($.isNull(brandType)){modleAlert("请选择品牌 ！");return false;};	
	var cityValue = $(".cityList").attr("select-value");//城市
	if($.isNull(cityValue)){modleAlert("请选择城市 ！");return false;};	
	//var areaValue = $(".areaList").attr("select-value");			//区
	//if($.isNull(areaValue)){modelAlert("请选择区域 ！");return false;};	
	var cityName  = $(".cityList").html();//城市
	var areaName  = $(".areaList").html();			//区
	var jpAdress  = $("#jpAdress").val();//竞争店地址
	if($.isNull(jpAdress)){modelAlert("请填写竞争店地址 ！");return false;};	
	var jpRoad    = $("#jpRoad").val();  //竞争店街道
	if($.isNull(jpRoad)){modelAlert("请填写竞争店街道 ！");return false;}
	var jzRemark  = $(".msgwriter-txt").val(); //竞争店描述
	if($.isNull(jzRemark)){modelAlert("请填写竞争店描述 ！");return false;}
	var rishang   = $("#rishang").val()//预估日商
	var zujin     = $("#zujin").val()//预估租金
	var keliu     = $("#keliu").val();//预估客流
	if($.isNull(rishang)){modelAlert("请填写预估日商 ！");return false;}
	if($.isNull(zujin)){modelAlert("请填写预估租金！");return false;}
	if($.isNull(keliu)){modelAlert("请填写预估客流！");return false;}
	var signDate    = $(".signDate").attr("data-value");
	var openingDate =  $(".openingDate").attr("data-value");
	var closingDate =  $(".closingDate").attr("data-value");
	var carPark   = $(".carparkList").attr("select-value");//店铺现状
	var txfx      = $(".txfxList").attr("select-value");//可否卖烟
	var markType  = $(".marketTypeList").attr("select-value");//主商圈
	var subType   = $(".subMarketTypeList").attr("select-value");//副商圈	
	if($.isNull(signDate)){modelAlert("请选择签约日期！");return false;}
	if($.isNull(openingDate)){modelAlert("请选择开店日期！");return false;}
	if($.isNull(closingDate)){modelAlert("请选择闭店日期 ！");return false;}
	if($.isNull(carPark)){modelAlert("请选择店铺现状！");return false;}
	if($.isNull(txfx)){modelAlert("请选择可否卖烟！");return false;}
	if($.isNull(markType)){modelAlert("请选择主商圈 ！");return false;}
	if($.isNull(subType)){modelAlert("请选择副商圈！");return false;}
	
	var img1      = $(".filePicker1").attr("data-img");
	if($.isNull(img1)){modelAlert("请先上传二楼正面全景照！");return false;}
	var img2      = $(".filePicker2").attr("data-img");
	if($.isNull(img2)){modelAlert("请先上传店铺对面照！");return false;}
	var img3      = $(".filePicker3").attr("data-img");
	if($.isNull(img3)){modelAlert("请先上传顺向50米照！");return false;}
	var img4      = $(".filePicker4").attr("data-img");
	if($.isNull(img4)){modelAlert("请先上传逆向50米照！");return false;}
	var img5      = $(".filePicker5").attr("data-img");
	if($.isNull(img5)){modelAlert("请先上传食品安全证照！");return false;}
	
	var gisCompetitor = {};
	gisCompetitor.auditResult     = 1;
	gisCompetitor.city            = cityValue;
	gisCompetitor.province        = cityName;
	gisCompetitor.area            = areaName;
	gisCompetitor.compName        = jzName;//名称
	gisCompetitor.status          = carPark;//店铺现状
	gisCompetitor.brand           = brandType;//品牌
	gisCompetitor.address         = jpAdress;
	var addressX = localStorage.getItem("addressX_jzm");
	if(!addressX){ addressX =  $("#jpAdress").attr("data-lng")  }
	var addressY = localStorage.getItem("addressY_jzm");
	if(!addressY){ addressY =   $("#jpAdress").attr("data-lat") }
	gisCompetitor.lng = addressX;
	gisCompetitor.lat = addressY;

	gisCompetitor.street          = jpRoad;
	gisCompetitor.gsItemDescription      = jzRemark;//竞争店描述
	gisCompetitor.cigaretteFlag   = txfx;//可否买烟
	gisCompetitor.marketType      = markType;//主商圈
	gisCompetitor.viceMarketType  = subType;//副商圈
	gisCompetitor.expectDaysales  = rishang;//日商
	gisCompetitor.customerFlow    = keliu;//客流
	gisCompetitor.expectRent      = zujin;//租金
	gisCompetitor.firstSignupDate = signDate//firstSignupDate;//签约日期
	gisCompetitor.openingDate     = openingDate//openingDate;
	gisCompetitor.closingDate     = closingDate//closingDate;
	
	gisCompetitor.img1 			  = img1;
	gisCompetitor.img2            = img2;
	gisCompetitor.img3            = img3;
	gisCompetitor.img4            = img4;
	gisCompetitor.profileImg	  = img5;
	gisCompetitor.undertake       = localStorage.getItem('$user_id');
	gisCompetitor.id = jzId;
	return gisCompetitor;
}
//创建基盘
function modifyJipan(){
	var url = base.basePath + "familymart.competitorshop.newapplyupdate"
	var reqData = getFormData();
	if(!reqData){return false;}
	$.reqPostAjaxs( url, reqData, function(data){
		if(data.statusCode == "200"){
			shownext("step4");
			localStorage.removeItem("addressX_jzm");
        	localStorage.removeItem("addressY_jzm");
        	localStorage.removeItem("addressName_jzm");
		}else{
			modelAlert(data.message)
		}
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
//展示品牌
function JZBrandListShow(){
	var brandList = getBrandList();
	var brandListDom = [];
	for(var i = 1; i < brandList.length; i++) {
		var x = "<li select_data=" + brandList[i][1] + " onclick='choose_option(this)'>" + brandList[i][0] + "</li>";
		brandListDom.push($(x))
	}
	domLists.brandListDom = brandListDom
	$(".layer_fixed").show();
	$("#bottom_layer_title").html(brandList[0][0]);
	for(var t = 0; t < brandListDom.length; t++) {
		$("#layer_list").append(brandListDom[t])		
	}
	$("#layer_list").attr("option-list", "brandList");
	$("#layer_list").attr("option-list-dom", "brandListDom");
	$(".bottom_layer").addClass("active")
}
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
		modelAlert("请先选择城市!");
		return false;
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
function getBrandList(){
	var typeArrays = [
					["选择品牌"]
				];
	var url = base.basePath + "familymart.competitorshop.getnamelist";
	$.reqGetAjaxs( url, "", function(data){
		if(data.statusCode == "200"){
			if(data.data){
				var cityList = data.data;
				var listLength = cityList.length;
				for( var i = 0; i < listLength; i++ ){
					var typeItem = cityList[i];
					var typeArray = [ typeItem.competitorCn, typeItem.competitorName ];
					typeArrays.push(typeArray);
				}
			}
		}
	} );
	return typeArrays;
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

