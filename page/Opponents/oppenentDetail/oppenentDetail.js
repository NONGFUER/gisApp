var bpmId = getUrlQueryString("jzid");
$(function(){
	bpmId = getUrlQueryString("jzid");
	getJPInfo(bpmId);
	
  	$("#header_back").click(function(){
  		window.location.href = base.url + "gisApp/page/Opponents/opponent/opponent.html"
  	});
});

//获取
function getJPInfo(bpmId){
	var url = base.basePath + "familymart.competitorshop.get?id="+bpmId;
	$.reqGetAjaxs( url, "", function(data){
		if(data.statusCode == "200"){
			var jzData = data.data;
			handleData(jzData);
		}else{
			var defaultStr = "--";
			modelAlert(data.message);	//,"",toIndex
			$("#jzName").html(defaultStr);
			$("#rishang").html(defaultStr);
			$("#zujin").html(defaultStr);
			$("#keliu").html(defaultStr);
		}		
	} );	
}

function handleData(jzdata){
	$("#jzName").html(jzdata.compName);						//竞争店名称//compName
	$("#rishang").html(jzdata.expectDaysales);				//日商//expectDaysales日商
	$("#zujin").html(jzdata.expectRent+"元");				//租金//expectRent 租金
	$("#keliu").html(jzdata.customerFlow);					//客流//customerFlow
	$(".marketTypeList").html(DICTIONARY["bprMarketType"][jzdata.marketType]);			//marketType
	$(".subMarketTypeList").html(DICTIONARY["bprMarketType"][jzdata.viceMarketType]);	//viceMarketType副商圈
	$(".areaList").html(jzdata.brand);
	$(".accuracyList").html(jzdata.province+""+jzdata.area);
	$("#brand").html(jzdata.brand);
	$("#jpAdress").html(jzdata.address);//地址
	$("#jpRoad").html(jzdata.street);//街道
	$("#jzms").html(jzdata.gsItemDescription ? jzdata.gsItemDescription : "暂无描述");
	$("#location").attr("src","//api.map.baidu.com/staticimage?center="+jzdata.lng+","+jzdata.lat+"&width=375&height=253&markers="+jzdata.lng+","+jzdata.lat+"|"+jzdata.lng+","+jzdata.lat+"&zoom=15")
	$("#signDate").html(timeFormatDate(jzdata.firstSignupDate,"yyyy-MM-dd"));//签约日期
	$("#openingDate").html(timeFormatDate(jzdata.openingDate,"yyyy-MM-dd"));//开店日期
	$("#closingDate").html(timeFormatDate(jzdata.closingDate,"yyyy-MM-dd"));//闭店日期	
	$("#status").html(jzdata.status == "10" ? "开店":"闭店")
	$("#cigarette").html(jzdata.cigaretteFlag == "Y" ? "可" : "否")
	
	$("#marketTypeList").html(DICTIONARY["bprMarketType"][jzdata.marketType])

	$("#subMarketTypeList").html(DICTIONARY["bprMarketType"][jzdata.viceMarketType])
	$("#province").html(jzdata.province)
	$("#area").html(jzdata.area)

	var img1 = $('<div class="swiper-slide" style="background-image:url('+base.basePath + jzdata.img1+')"></div>');
	var img2 = $('<div class="swiper-slide" style="background-image:url('+base.basePath + jzdata.img2+')"></div>');
	var img3 = $('<div class="swiper-slide" style="background-image:url('+base.basePath + jzdata.img3+')"></div>');
	var img4 = $('<div class="swiper-slide" style="background-image:url('+base.basePath + jzdata.img4+')"></div>');		
	var img5 = $('<div class="swiper-slide" style="background-image:url('+base.basePath + jzdata.profileImg+')"></div>');//证件照
	$(".swiper-wrapper").append(img1).append(img2).append(img3).append(img4).append(img5);
		var mySwiper = new Swiper ('.swiper-container', {
			loop:true,
		grabCursor: true,
		centeredSlides: true,
		slidesPerView: 'auto',
		pagination: {
			el: '.swiper-pagination',
		},
	})     
}
//跳转到基盘添加
$(".sort_bar_add").click(function(){
	window.location.href = "../modifyOpponent/modifyOpponent.html?jzid="+bpmId;
});