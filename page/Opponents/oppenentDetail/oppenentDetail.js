var bpmId = getUrlQueryString("jzid");
$(function(){
	bpmId = getUrlQueryString("jzid");
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

function handleData(jzData){
	$("#jzName").html(jzData.compName);						//竞争店名称//compName
	$("#rishang").html(jzData.expectDaysales);				//日商//expectDaysales日商
	$("#zujin").html(jzData.expectRent+"元");				//租金//expectRent 租金
	$("#keliu").html(jzData.customerFlow);					//客流//customerFlow
	$(".marketTypeList").html(jzData.marketType);			//marketType
	$(".subMarketTypeList").html(jzData.viceMarketType);	//viceMarketType副商圈
	$(".areaList").html();
	//address
	//area
	//brand
	//cigaretteFlag
	//city
	//closingDate
	
	//createDate
	//createUserId
	
	//email
	
	
	//firstLease
	//firstSignupDate
	//gsItemCode
	//gsItemDescription
	//gsType
	
	//openingDate
	//orgName
	//phone
	//profileImg证件照
	//province
	//status
	//storeFcType
	//street
	//tuEmail
	//tuName
	//undertake
	//updateDate
	//updateUserId
	
	var img1 = $('<div class="swiper-slide" style="background-image:url('+base.static + jzData.img1+')"></div>');
	var img2 = $('<div class="swiper-slide" style="background-image:url('+base.static + jzData.img2+')"></div>');
	var img3 = $('<div class="swiper-slide" style="background-image:url('+base.static + jzData.img3+')"></div>');
	var img4 = $('<div class="swiper-slide" style="background-image:url('+base.static + jzData.img4+')"></div>');		
	var img5 = $('<div class="swiper-slide" style="background-image:url('+base.static + jzData.profileImg+')"></div>');//证件照
	$(".swiper-wrapper").append(img1).append(img2).append(img3).append(img4).append(img5);
}
//跳转到基盘添加
$(".sort_bar_add").click(function(){
	window.location.href = "../modifyOpponent/modifyOpponent.html?jzid="+bpmId;
});