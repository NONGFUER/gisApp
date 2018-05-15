$(function(){
 
  	var mySwiper = new Swiper ('.swiper-container', {
	   	effect: 'coverflow',
	   	loop:true,
	    grabCursor: true,
	    centeredSlides: true,
	    slidesPerView: 'auto',
	    coverflowEffect: {
	       rotate: 50,
	       stretch: 0,
	       depth: 100,
	       modifier: 1,
	       slideShadows : true,
	    },
	    pagination: {
	       el: '.swiper-pagination',
	    },
  	})        
	getSjpList();
	Echo.init({offset: 0,throttle: 0});
	//跳转
	$("#devStore").unbind("tap").bind("tap",function(){
		window.location.href = base.url + 'gisApp/page/JP/jipan/jipan.html'
	});
	$("#opponents").unbind("tap").bind("tap",function(){
		window.location.href = base.url + "gisApp/page/Opponents/opponent/opponent.html"
		
	});
	$("#stores").unbind("tap").bind("tap",function(){
		//modelAlert("敬请期待");
		window.location.href = base.url + "gisApp/page/Stores/store/store.html"
	});
	$("#agreements").unbind("tap").bind("tap",function(){
		modelAlert("敬请期待");
	});
	$("#excels").unbind("tap").bind("tap",function(){
		modelAlert("敬请期待");
	});
	$("#map").unbind("tap").bind("tap",function(){
		modelAlert("敬请期待");
	});
	$("#deal").unbind("tap").bind("tap",function(){
		modelAlert("敬请期待");
	});
	$("#devWiki").unbind("tap").bind("tap",function(){
		//window.location.href = base.url + 'gisApp/page/devWiki/devWiki.html'
		modelAlert("敬请期待");
	});
	$("#search").click(function(){
		window.location.href = base.url + 'gisApp/page/search/search.html'
	});
});
//获取基盘
function getSjpList(){
	var url = base.basePath + "familymart.property.appbys";
	$.reqGetAjaxs(url,"" ,function(data){
		//console.log(data);
		if( data.statusCode == "200" ){
			var sjpList = data.data;
			for( var i = 0; i < sjpList.length; i++ ){
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
		}
	} );
}

function strMoudle(data){
	var str = '';
	str += '<li class="pictext">'
	str += 	'<a href="'+(base.url)+ 'gisApp/page/JP/jpDetail/jpDetail.html?jpid='+data.jpid+'" class="a_mask"></a>'
	str += 	'<div class="flexbox">'
	str += 		'<div class="mod_media">'
	str += 			'<div class="media_main"><img src="'+base.imagePath+'loading1.gif" alt="" onerror="errorImg(this)" class="lazyload" data-echo="'+base.static+data.imgpath+'"></div>'
	str += 		'</div>'
	str += 		'<div class="item_list">'
	str += 			'<div class="item_main">' + (data.dtoName ? data.dtoName : '--' )+ '</div>'
	str += 			'<div class="item_other text_cut" title="">'+data.bprShopArea+'m²/店宽'+data.bprShopWidth+'m/人流'+data.bprCustomerFlow+'/日商'+data.bprExpectDaysales+'</div>'
	str += 			'<div class="item_minor"><span class="price_total"><em>'+data.bprExpectRent+'</em><span class="unit">元/月</span></span><span class="unit_price"></span></div>'
	str += 			'<div class="tag_box">'
	str += 				'<span class="tag" style="color:rgb(51,190,133);background-color:rgba(51,190,133,0.15);" title="">'+data.bpmConfirmStatus+'</span>'
	str += 				'<span class="tag" style="color:rgb(89,171,253);background-color:rgba(89,171,253,0.15);" title="">'+data.bprMarketType+'</span>'
	str += 				'<span class="tag" style="color:rgb(242,161,47);background-color:rgba(242,161,47,0.15);" title="">'+data.bprViceMarketType+'</span>'
	str += 				'<span class="tag" style="color:rgb(123,189,255);background-color:rgba(123,189,255,0.15);" title="">'+data.areaName+'</span>'
	str += 			'</div>'
	str += 		'</div>'
	str += 	'</div>'											
	str += '</li>'
	return str;
}
