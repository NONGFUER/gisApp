var domLists = {};
var bmpId = getUrlQueryString("jpid");
localStorage.setItem('$jpid',bmpId);
$(function(){	
	getImages(bmpId);
	getJPInfo(bmpId)
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
	$(".cancle,.layer_fixed").click(function(){
		bottomCancle();
	});
	$(".msgwriter-txt").unbind("input").bind("input",function(){
		$(".num").text($(this).val().length)
	});
	$("#backpre,#backjipan,#finish").click(function(){
		window.location.href = base.url + "gisApp/page/JP/jpDetail/jpDetail.html?jpid="+bmpId;
	});
	$("#jpAdress").click(function(){
		window.location.href = base.url + "gisApp/page/search/ssjpm.html"
	});
	
});
//获取
function getJPInfo(bpmId){
	var url = base.basePath + "familymart.property.app.getbp?id="+bpmId;
	$.reqPostAjaxs( url, "", function(data){
		//console.log(data);
		if(data.statusCode = "200"){
			var jpData = data.data;
			handleData(jpData)
		}else{
			
		}
		
	} );
//	var jpData = {"statusCode":200,"message":"执行成功","dataFlag":0,"data":{"bpPropertyMaster":{"bpmPropertyId":"SH18410137","bpmCity":"001","bpmCounty":"003","bpmZipcode":null,"bpmAddress":"萨达哈","bpmStatus":"01","bpmCheckDate":null,"bpmCheckUser":null,"bpmOwnerId":"000005","bpmDevelopValue":null,"bpmDevelopCoincidenceRate":null,"bpmMarketValue":null,"bpmVieValue":null,"bpmHolidayCustomerValue":null,"bpmWorkdayCustomerValue":null,"bpmRemark":null,"bpmRsvStatus":null,"bpmRsvDatetime":null,"bpmCreateUserId":"000005","bpmCreateDate":1524629173000,"bpmUpdateUserId":"000005","bpmUpdateDate":1524629173000,"bpmShopPosition":null,"bpmCheckFlag":"0","bpmFirstSignupDate":null,"bpmFirstLease":null,"bpmNewshopOpenCheck":"0","bpmDlpPressFlag":"0","bpmDeptMgrPressFlag":"0","bpmSubMgrPressFlag":"0","bpmRptFlag":"0","bpmFirstLeaseMonth":null,"bpmRecordStatus":"10","bpmDeleteReason":null,"bpmDeleteCheck":"0","bpmDeleteCheckman":null,"bpmDeleteRpt":"0","bpmStreet":"萨达哈","bpmConfirmStatus":"01","bpmStoreFcType":"01","bpmInvestmentCost":null,"bpmPrintStatus":null,"bpmPrintUserId":null,"bpmPrintDate":null,"lng":null,"lat":null,"city":"上海市","area":"003","auditResult":0,"bpmPropertyName":"哈哈哈","img1":"upload/2018年04月25日/5.jpg","img2":"upload/2018年04月25日/c.jpg","img3":"upload/2018年04月25日/5.jpg","img4":"upload/2018年04月25日/d.jpg","undertake":"000005","areaCn":"卢湾区"},"bpPropertyRpt":{"bprPropertyId":"SH18410137","bprExpectDaysales":1111,"bprExpectRent":11,"bprMarketType":"03","bprViceMarketType":"02","bprObjectType":"03","bprMarketClass":"01","bprPosition":"01","bprShopArea":11,"bprShopWidth":1111,"bprRoadType":"02","bprCustomerFlow":666,"bprViewType":"01","bprCarStop":"01","bprCarWay":"01","bprRemark":"暂无描述","bprRsvStatus":null,"bprRsvDatetime":1524629173000,"bprCreateUserId":"000005","bprCreateDate":1524629173000,"bprUpdateUserId":"000005","bprUpdateDate":1524629173000,"bprRank":null,"bprScore":null,"bprClosemarketType":null,"bprClosemarketRemark":null,"bprTimeQuantum":null},"bpHouseOwnerInfo":null,"bpMarketInfo":null,"bpCustomerInfo":null,"bpPropertySettingList":null,"tuId":null,"tuName":"测试账号","orgName":"昆山课","tuEmail":null,"tuMp":null}}
	
}
//获取图片
function getImages(bpmId){
	var url = base.basePath + "familymart.get.uploader?bpmId="+bpmId;;
	var reqData = "";
	$.reqGetAjaxs( url, reqData, function(data){
		if( data.statusCode == "200"  ){
			var  jpLists = data.data;
			for(var i = 0; i < jpLists.length; i++){
				$("#f"+(i+1)).attr("src" ,base.static + jpLists[i]);
				$(".filePicker"+(i+1)).attr("data-img",jpLists[i]);
			}
			
		}else{
			alert(data.message);
		}
	} );
}
//处理数据
function handleData(jpData){
	//$("").html();
	//$("").attr("select_data",)
	var bpPropertyMaster = jpData.bpPropertyMaster;
	var bpPropertyRpt = jpData.bpPropertyRpt;
	$("#jpName").val(bpPropertyMaster.bpmPropertyName);//基盘名称
	$(".accuracyList").html(bpPropertyMaster.bpmConfirmStatus);//确度
	$(".JPTypeList").attr("select-value",bpPropertyRpt.bprObjectType);//基盘类别
	$(".JPTypeList").html(DICTIONARY["bprObjectType"][bpPropertyRpt.bprObjectType]);//基盘类别
	$(".cityList").html(bpPropertyMaster.city);//基盘所在市
	$(".cityList").attr("select-value",bpPropertyMaster.bpmCity);//基盘所在市
	$(".areaList").html(bpPropertyMaster.areaCn);//基盘所在区
	$(".areaList").attr("select-value",bpPropertyMaster.bpmCounty);//基盘所在区
	var addressName = localStorage.getItem("addressName_jpm");
	if(addressName){
		$("#jpAdress").val(addressName);
	 }else{
		$("#jpAdress").val(bpPropertyMaster.bpmAddress);//基盘地址
		$("#jpAdress").attr("data-lng",bpPropertyMaster.lng)
		$("#jpAdress").attr("data-lat",bpPropertyMaster.lat)
	}
	
	$("#jpRoad").val(bpPropertyMaster.bpmStreet);//基盘街道
	$("#question_content").val(bpPropertyRpt.bprRemark);
	if(bpPropertyRpt.bprRemark){
		$(".num").text(bpPropertyRpt.bprRemark.length)
	}
	$("#rishang").val(bpPropertyRpt.bprExpectDaysales);//预估日商
	$("#zujin").val(bpPropertyRpt.bprExpectRent);//预估租金
	$("#mianji").val(bpPropertyRpt.bprShopArea);//面积
	$("#dwidth").val(bpPropertyRpt.bprShopWidth);//店宽
	//立地
	$(".siteList").html(DICTIONARY["bprPosition"][bpPropertyRpt.bprPosition]);
	$(".siteList").attr("select-value",bpPropertyRpt.bprPosition)
	//视野
	$(".viewList").html(DICTIONARY["bprViewType"][bpPropertyRpt.bprViewType]);
	$(".viewList").attr("select-value",bpPropertyRpt.bprViewType)
	//主商圈
	$(".marketTypeList").html(DICTIONARY["bprMarketType"][bpPropertyRpt.bprMarketType]);
	$(".marketTypeList").attr("select-value",bpPropertyRpt.bprMarketType)
	//副商圈
	$(".subMarketTypeList").html(DICTIONARY["bprMarketType"][bpPropertyRpt.bprViceMarketType]);
	$(".subMarketTypeList").attr("select_data",bpPropertyRpt.bprViceMarketType)
	//车辆停靠
	$(".carparkList").html(DICTIONARY["bprCarStop"][bpPropertyRpt.bprCarStop]);
	$(".carparkList").attr("select-value",bpPropertyRpt.bprCarStop)
	//通行方向
	$(".txfxList").html(DICTIONARY["bprCarWay"][bpPropertyRpt.bprCarWay]);
	$(".txfxList").attr("select-value",bpPropertyRpt.bprCarWay)
	//路宽类型
	$(".waywidthList").html(DICTIONARY["bprRoadType"][bpPropertyRpt.bprRoadType]);
	$(".waywidthList").attr("select-value",bpPropertyRpt.bprRoadType)
	$("#complete").attr("data-id",bpPropertyMaster.bpmPropertyId);
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
	var jpRemark  = $("#question_content").val(); //基盘描述
	
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
	
	var img1      = $(".filePicker1").attr("data-img");
	if($.isNull(img1)){modelAlert("请先上传二楼正面全景照！");return false;}
	var img2      = $(".filePicker2").attr("data-img");
	if($.isNull(img2)){modelAlert("请先上传店铺对面照！");return false;}
	var img3      = $(".filePicker3").attr("data-img");
	if($.isNull(img3)){modelAlert("请先上传顺向50米照！");return false;}
	var img4      = $(".filePicker4").attr("data-img");
	if($.isNull(img4)){modelAlert("请先上传逆向50米照！");return false;}
	
	var propertyDto = {}
	var bpPropertyRpt    = {};
	var bpPropertyMaster = {};
	bpPropertyMaster.bpmPropertyId = $("#complete").attr("data-id")
	bpPropertyRpt.bprPropertyId	   = $("#complete").attr("data-id")
	bpPropertyMaster.bpmPropertyName  = jpName;//基盘名称
	bpPropertyMaster.bpmConfirmStatus = accuracy;//确度
	bpPropertyRpt.bprObjectType      = jpType;//基盘类型	
	bpPropertyMaster.bpmCity          = cityValue; //市Id
	bpPropertyMaster.city             = cityName;	//城市名
	bpPropertyMaster.bpmCounty        = areaValue;//区域Id
	bpPropertyMaster.areaCn           = areaName;//区域名
	bpPropertyMaster.bpmAddress       = jpAdress;//基盘地址
	bpPropertyMaster.bpmStreet        = jpRoad;//基盘街道
	var addressX = localStorage.getItem("addressX_jpm");
	if(!addressX){ addressX =  $("#jpAdress").attr("data-lng")  }
	var addressY = localStorage.getItem("addressY_jpm");
	if(!addressY){ addressY =   $("#jpAdress").attr("data-lat") }
	bpPropertyMaster.lng = addressX;
	bpPropertyMaster.lat = addressY;

	bpPropertyRpt.bprRemark           = jpRemark;//基盘描述
	
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
	//bpPropertyRpt.bprRemark           = "暂无描述";
	
	bpPropertyMaster.img1 = img1;
	bpPropertyMaster.img2 = img2;
	bpPropertyMaster.img3 = img3;
	bpPropertyMaster.img4 = img4;
	
	propertyDto.bpPropertyRpt         = bpPropertyRpt;
	propertyDto.bpPropertyMaster      = bpPropertyMaster;
	return propertyDto;
}
//修改基盘
function createJipan(){
	var url = base.basePath + "familymart.property.appupdate"
	var reqData = getFormData();
	if(!reqData){return false;}
	$.reqPostAjaxs( url, reqData, function(data){
		console.log(data);
		if(data.statusCode == "200"){
			shownext("step4");
			localStorage.removeItem("addressX_jpm");
        	localStorage.removeItem("addressY_jpm");
        	localStorage.removeItem("addressName_jpm");
		}else{
			modelAlert(data.message);
			localStorage.removeItem("addressX_jpm");
        	localStorage.removeItem("addressY_jpm");
        	localStorage.removeItem("addressName_jpm");
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
var showpre = function(e) {
	var wrapper = $(".page_yezhu").find(".yezhu-wrapper");
	var stepon = wrapper.find(".stepon"),
		dpDom = $(".page_yezhu").find("[data-page=" + e + "]");
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
function choose_option(obj){
	var objDom = $(obj);
	var select_value = objDom.html();
	var select_data = objDom.attr("select_data");
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
//	f.one(i).find(".chooose").html(select_data).attr("select-value", select_value);
//	f.one(i).find(".chooose").css("color", "#394043")
}

//--------------《《------------------《《----------弹窗枚举-----------》》--------------》》
//展示城市
function cityListShow(){
	var cityList = getCityList();//城市列表
	var cityListDom = [];
	for(var i = 1; i < cityList.length; i++) {
		var x = "<li select_data=" + cityList[i][1] + " onclick='choose_option(this)'>" + cityList[i][0] + "</li>";
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
	var areaList = getAreaList();//区列表
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
	var siteList = getSiteList();
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
	var viewList = getViewList();
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
//展示车辆停靠
function carparkListShow(){
	var carparkList = getCarparkList();
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
	var waywidthList = getWaywidthList();
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
	var txfxList = getTxfxList();
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
	var accuracyList = getAccuracyList();
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
function getAreaList(){
	var typeArrays = [
					["选择区"]
				];
	var url = base.basePath + "familymart.commons.getareaofcitylist?cityId=001";
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
//获取立地面
function getSiteList(){
	var typeArrays = [
					["立地面"]
				];
	var url = base.basePath + "familymart.commons.getsitelist";
	$.reqGetAjaxs( url, "", function(data){
		if(data.statusCode == "200"){
			if(data.data){
				var siteListData = data.data;
				var listLength = siteListData.length;
				for( var i = 0; i < listLength; i++ ){
					var typeItem = siteListData[i];
					var typeArray = [ typeItem.tsmSubValue, typeItem.tsmSubId ];
					typeArrays.push(typeArray);
				}
			}
		}
	} );
	return typeArrays;
}
//获取视野
function getViewList(){
	var typeArrays = [
					["视野"]
				];
	var url = base.basePath + "familymart.commons.getviewlist";
	$.reqGetAjaxs( url, "", function(data){
		if(data.statusCode == "200"){
			if(data.data){
				var viewListData = data.data;
				var listLength = viewListData.length;
				for( var i = 0; i < listLength; i++ ){
					var typeItem = viewListData[i];
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

