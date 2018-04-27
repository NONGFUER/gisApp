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
});
//获取基盘
function getSjpList(){
	var url = base.basePath + "familymart.property.appbys";
	$.reqGetAjaxs(url,"" ,function(data){
		console.log(data);
		if( data.statusCode == "200" ){
			var sjpList = data.data;
			for( var i = 0; i < sjpList.length; i++ ){
				var preData = {
					"dtoName":sjpList[i].dtoName,
					"imgpath":sjpList[i].img1,
					"bprExpectRent":sjpList[i].bprExpectRent,
					"bprShopArea":sjpList[i].bprShopArea,
					"bprShopWidth":sjpList[i].bprShopWidth
				}
				$(".lists").append(strMoudle(preData));
			}
		}
	} );
}

function strMoudle(data){
	var str = '';
	str += '<li class="pictext">'
	str += 	'<a href="" class="a_mask"></a>'
	str += 	'<div class="flexbox">'
	str += 		'<div class="mod_media">'
	str += 			'<div class="media_main"><img src="'+base.imagePath+'loading1.gif" alt="" onerror="errorImg(this)" class="lazyload" data-echo="'+base.static+data.imgpath+'"></div>'
	str += 		'</div>'
	str += 		'<div class="item_list">'
	str += 			'<div class="item_main">' + data.dtoName + '</div>'
	str += 			'<div class="item_other text_cut" title="">90.89m²/90.89m²/南/张江</div>'
	str += 			'<div class="item_minor"><span class="price_total"><em>720</em><span class="unit">万</span></span><span class="unit_price">79217元/平</span></div>'
	str += 			'<div class="tag_box">'
	str += 				'<span class="tag" style="color:rgb(89,171,253);background-color:rgba(89,171,253,0.15);" title="地铁二手房">地铁</span>'
	str += 				'<span class="tag" style="color:rgb(242,161,47);background-color:rgba(242,161,47,0.15);" title="满五年二手房">满五年</span>'
	str += 				'<span class="tag" style="color:rgb(51,190,133);background-color:rgba(51,190,133,0.15);" title="随时看房二手房">随时看房</span>'
	str += 				'<span class="tag" style="color:rgb(123,189,255);background-color:rgba(123,189,255,0.15);" title="有电梯二手房">有电梯</span>'
	str += 			'</div>'
	str += 		'</div>'
	str += 	'</div>'											
	str += '</li>'
	return str;
}
// 实现预加载图片，传入的参数是数组，数组的每一项为该图片的地址
function preloadimages(arr) {
  var newimages = [];
  var arr = (typeof arr != "object") ? [arr] : arr; // 确保参数总是数组
  for (var i = 0,len = arr.length; i < len; i++) {
    newimages[i] = new Image();
    newimages[i].src = arr[i];
  }
}
function errorImg(obj){
	    $(obj).attr("src",base.imagePath + "error.png");
		return false;
}
 