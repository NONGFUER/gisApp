var w = getJPTypeList();//类型
var cityList = getCityList();//城市列表
var areaList = getAreaList();//区列表
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
	logingis("000005","000005");
	getImages("SH18410137");
	getJPInfo("SH18410137")
//	imageHandle();
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
//获取
function getJPInfo(bpmId){
//	var url = base.basePath + "familymart.property.app.getbp?id="+bpmId;
//	var reqData = {
//		id:bpmId
//	};
//	$.reqPostAjaxs( url, reqData, function(data){
//		console.log(data);
//	} );
	var jpData = {"statusCode":200,"message":"执行成功","dataFlag":0,"data":{"bpPropertyMaster":{"bpmPropertyId":"SH18410137","bpmCity":"001","bpmCounty":"003","bpmZipcode":null,"bpmAddress":"萨达哈","bpmStatus":"01","bpmCheckDate":null,"bpmCheckUser":null,"bpmOwnerId":"000005","bpmDevelopValue":null,"bpmDevelopCoincidenceRate":null,"bpmMarketValue":null,"bpmVieValue":null,"bpmHolidayCustomerValue":null,"bpmWorkdayCustomerValue":null,"bpmRemark":null,"bpmRsvStatus":null,"bpmRsvDatetime":null,"bpmCreateUserId":"000005","bpmCreateDate":1524629173000,"bpmUpdateUserId":"000005","bpmUpdateDate":1524629173000,"bpmShopPosition":null,"bpmCheckFlag":"0","bpmFirstSignupDate":null,"bpmFirstLease":null,"bpmNewshopOpenCheck":"0","bpmDlpPressFlag":"0","bpmDeptMgrPressFlag":"0","bpmSubMgrPressFlag":"0","bpmRptFlag":"0","bpmFirstLeaseMonth":null,"bpmRecordStatus":"10","bpmDeleteReason":null,"bpmDeleteCheck":"0","bpmDeleteCheckman":null,"bpmDeleteRpt":"0","bpmStreet":"萨达哈","bpmConfirmStatus":"01","bpmStoreFcType":"01","bpmInvestmentCost":null,"bpmPrintStatus":null,"bpmPrintUserId":null,"bpmPrintDate":null,"lng":null,"lat":null,"city":"上海市","area":"003","auditResult":0,"bpmPropertyName":"哈哈哈","img1":"upload/2018年04月25日/5.jpg","img2":"upload/2018年04月25日/c.jpg","img3":"upload/2018年04月25日/5.jpg","img4":"upload/2018年04月25日/d.jpg","undertake":"000005","areaCn":"卢湾区"},"bpPropertyRpt":{"bprPropertyId":"SH18410137","bprExpectDaysales":1111,"bprExpectRent":11,"bprMarketType":"03","bprViceMarketType":"02","bprObjectType":"03","bprMarketClass":"01","bprPosition":"01","bprShopArea":11,"bprShopWidth":1111,"bprRoadType":"02","bprCustomerFlow":666,"bprViewType":"01","bprCarStop":"01","bprCarWay":"01","bprRemark":"暂无描述","bprRsvStatus":null,"bprRsvDatetime":1524629173000,"bprCreateUserId":"000005","bprCreateDate":1524629173000,"bprUpdateUserId":"000005","bprUpdateDate":1524629173000,"bprRank":null,"bprScore":null,"bprClosemarketType":null,"bprClosemarketRemark":null,"bprTimeQuantum":null},"bpHouseOwnerInfo":null,"bpMarketInfo":null,"bpCustomerInfo":null,"bpPropertySettingList":null,"tuId":null,"tuName":"测试账号","orgName":"昆山课","tuEmail":null,"tuMp":null}}
	handleData(jpData)
}
//获取图片
function getImages(bpmId){
	var url = base.basePath + "familymart.get.uploader";
	var reqData = "";
	$.reqGetAjaxs( url, reqData, function(data){
		console.log(data);
	} );
}
//处理数据
function handleData(jpData){
	var bpPropertyMaster = jpData.data.bpPropertyMaster;
	$("#jpName").val(bpPropertyMaster.bpmPropertyName);//基盘名称
	$(".accuracyList").attr("select-value",bpPropertyMaster.bpmConfirmStatus);//基盘类别
	$(".accuracyList").html(bpPropertyMaster.bpmConfirmStatus);
	//确度
	//
}
/*获取表单信息*/
function getFormData(){
	var jpName    = $("#jpName").val();//基盘名称 
	if($.isNull(jpName)){alert("基盘名称为空 ！")};
	var accuracy  = $(".accuracyList").attr("select-value");//确度
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
	bpPropertyRpt.bprMarketClass      = jpType;//基盘类型	
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
//图片处理
function imageHandle(){
		var uploader = WebUploader.create({
	    	// 选完文件后，是否自动上传。
	    	auto: true,
	    	// swf文件路径
//	    	swf: BASE_URL + '/js/Uploader.swf',
	    	// 文件接收服务端。
	    	server: base.basePath + 'familymart.edit.uploader?id=1&bpmId=SH18395945',
	   		//server:"http://127.0.0.1:8020/gisApp/page/addJP/addJP.html?__hbt=1524530676151",
	   		// 选择文件的按钮。可选。
	    	// 内部根据当前运行是创建，可能是input元素，也可能是flash.
	    	pick: '#filePicker',
		    // 只允许选择图片文件。
		    accept: {
		        title: 'Images',
		        extensions: 'gif,jpg,jpeg,bmp,png',
		        mimeTypes: 'image/*'
		    },
		    formData: {  
                id: '1',
                bpmId:'SH18395945'
            }, 
		});
		// 当有文件添加进来的时候
		uploader.on( 'fileQueued', function( file ) {
			console.log(file)
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

