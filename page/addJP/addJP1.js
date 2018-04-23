var w = getJPTypeList();//类型
var accuracyList = getAccuracyList();//确度
var siteList = getSiteList();//立地面
var viewList = getViewList();//视野
var marketTypeList = getMarketTypeList();//主商圈
var subMarketTypeList = getSubMarketTypeList();//副商圈
var carparkList = getCarparkList();//车辆停靠
var waywidthList = getWaywidthList();//路宽
var txfxList = getTxfxList();//通行方向
var domLists = {};
$(function(){
	imageHandle()
	$(".changeStep").click(function(){
		var nextPage = $(this).attr("data-page");
		shownext( nextPage );
	});
	$(".next").click(function(){
		var nextPage = $(this).attr("data-page");
		shownext( nextPage );
	});
	$(".cancle").click(function(){
		bottomCancle();
	});

});
function imageHandle(){
		var uploader = WebUploader.create({
	    	// 选完文件后，是否自动上传。
	    	auto: true,
	    	// swf文件路径
//	    	swf: BASE_URL + '/js/Uploader.swf',
	    	// 文件接收服务端。
	    	server: base.basePath + 'familymart.uploader?id=1',
	   		// 选择文件的按钮。可选。
	    	// 内部根据当前运行是创建，可能是input元素，也可能是flash.
	    	pick: '#filePicker',
		    // 只允许选择图片文件。
		    accept: {
		        title: 'Images',
		        extensions: 'gif,jpg,jpeg,bmp,png',
		        mimeTypes: 'image/*'
		    }
		});
		// 当有文件添加进来的时候
		uploader.on( 'fileQueued', function( file ) {
			console.log(file.id);
			console.log(file.name);
		    var $li = $(
		            '<div id="' + file.id + '" class="file-item thumbnail">' +
		                '<img>' +
		                '<div class="info">' + file.name + '</div>' +
		            '</div>'
		            ),
		        $img = $li.find('img');		
		    // $list为容器jQuery实例
		    $(".uploader-list").append( $li );
		    // 创建缩略图
		    // 如果为非图片文件，可以不用调用此方法。
		    // thumbnailWidth x thumbnailHeight 为 100 x 100
		    uploader.makeThumb( file, function( error, src ) {
		        if ( error ) {
		            $img.replaceWith('<span>不能预览</span>');
		            return;
		        }		
		        $img.attr( 'src', src );
		    }, 100, 100 );
		});
		// 文件上传过程中创建进度条实时显示。
		uploader.on( 'uploadProgress', function( file, percentage ) {
		    var $li = $( '#'+file.id ),
		        $percent = $li.find('.progress span');
		
		    // 避免重复创建
		    if ( !$percent.length ) {
		        $percent = $('<p class="progress"><span></span></p>')
		                .appendTo( $li )
		                .find('span');
		    }
		
		    $percent.css( 'width', percentage * 100 + '%' );
		});
		// 文件上传成功，给item添加成功class, 用样式标记上传成功。
		uploader.on( 'uploadSuccess', function( file ) {
		    $( '#'+file.id ).addClass('upload-state-done');
		});		
		// 文件上传失败，显示上传出错。
		uploader.on( 'uploadError', function( file ) {
		    var $li = $( '#'+file.id ),
		        $error = $li.find('div.error');
		
		    // 避免重复创建
		    if ( !$error.length ) {
		        $error = $('<div class="error"></div>').appendTo( $li );
		    }
		
		    $error.text('上传失败');
		});	
		// 完成上传完了，成功或者失败，先删除进度条。
		uploader.on( 'uploadComplete', function( file ) {
		    $( '#'+file.id ).find('.progress').remove();
		});
}
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
//展示基盘类型
function JPTypeListShow(){
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

