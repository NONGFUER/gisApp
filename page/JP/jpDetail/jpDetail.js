var bpmId = getUrlQueryString("jpid");
$(function(){
	bpmId = getUrlQueryString("jpid");
	getJPInfo(bpmId);
	var mySwiper = new Swiper ('.swiper-container', {
	   	loop:true,
	    grabCursor: true,
	    centeredSlides: true,
	    slidesPerView: 'auto',
	    pagination: {
	       el: '.swiper-pagination',
	    },
  	})     
});

//获取
function getJPInfo(bpmId){
	var url = base.basePath + "familymart.property.app.getbp?id="+bpmId;
	$.reqPostAjaxs( url, "", function(data){
		if(data.statusCode == "200"){
			var jpData = data.data;
			handleData(jpData);
		}else{
			modelAlert(data.message,"",toIndex);	
		}		
	} );	
}

function handleData(jpData){
	var bpPropertyMaster = jpData.bpPropertyMaster;
	var bpPropertyRpt = jpData.bpPropertyRpt;
	$("#jpName").html(bpPropertyMaster.bpmPropertyName);//基盘名称
	$("#rishang").html(bpPropertyRpt.bprExpectDaysales);//预估日商
	$("#zujin").html((bpPropertyRpt.bprExpectRent/10000)+"万元");//预估租金
	$("#mianji").html(bpPropertyRpt.bprShopArea+"m²");//面积
	$(".accuracyList").html(bpPropertyMaster.bpmConfirmStatus);//确度
	$(".marketTypeList").html(DICTIONARY["bprMarketType"][bpPropertyRpt.bprMarketType]);
	$(".subMarketTypeList").html(DICTIONARY["bprMarketType"][bpPropertyRpt.bprViceMarketType]);
	$(".areaList").html(bpPropertyMaster.city+''+bpPropertyMaster.areaCn);
	$("#areaList").html(bpPropertyMaster.city+''+bpPropertyMaster.areaCn);
	$(".JPTypeList").html(DICTIONARY["bprObjectType"][bpPropertyRpt.bprObjectType]);//基盘类别
	$("#jpAdress").html(bpPropertyMaster.bpmAddress);//基盘地址
	$("#jpRoad").html(bpPropertyMaster.bpmStreet);//基盘街道	
	$("#dwidth").html(bpPropertyRpt.bprShopWidth+"m");//店宽
	//立地
	$("#siteList").html(DICTIONARY["bprPosition"][bpPropertyRpt.bprPosition]);
	//视野
	$("#viewList").html(DICTIONARY["bprViewType"][bpPropertyRpt.bprViewType]);
	//主商圈
	$("#marketTypeList").html(DICTIONARY["bprMarketType"][bpPropertyRpt.bprMarketType]);
	//副商圈
	$("#subMarketTypeList").html(DICTIONARY["bprMarketType"][bpPropertyRpt.bprViceMarketType]);
	//车辆停靠
	$("#carparkList").html(DICTIONARY["bprCarStop"][bpPropertyRpt.bprCarStop]);
	//通行方向
	$("#txfxList").html(DICTIONARY["bprCarWay"][bpPropertyRpt.bprCarWay]);
	//路宽类型
	$("#waywidthList").html(DICTIONARY["bprRoadType"][bpPropertyRpt.bprRoadType]);
	$(".house_intro_mod_cont").html(bpPropertyRpt.bprRemark);
	var img1 = $('<div class="swiper-slide" style="background-image:url('+base.static + bpPropertyMaster.img1+')"></div>');
	var img2 = $('<div class="swiper-slide" style="background-image:url('+base.static + bpPropertyMaster.img2+')"></div>');
	var img3 = $('<div class="swiper-slide" style="background-image:url('+base.static + bpPropertyMaster.img3+')"></div>');
	var img4 = $('<div class="swiper-slide" style="background-image:url('+base.static + bpPropertyMaster.img4+')"></div>');
	$(".swiper-wrapper").append(img1).append(img2).append(img3).append(img4);
	$("#complete").attr("data-id",bpPropertyMaster.bpmPropertyId);
}
//跳转到基盘添加
$(".sort_bar_add").click(function(){
	window.location.href = "../modifyJP/modifyJP.html?jpid="+bpmId;
});