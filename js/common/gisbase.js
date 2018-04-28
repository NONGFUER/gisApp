var base = {
		url : window.location.protocol+"//"+window.location.host+"//",
		basePath:"http://172.16.0.83:8090/fmgis/v1.0/",
		imagePath : window.location.protocol+"//"+window.location.host+"/gisApp/img/common/", // 图片路径
		static:"http://172.16.0.83:8090/fmgis/v1.0/"
};
//判断是否为空
$.isNull = function(str) {
	if (str == null || typeof (str) == "undefined" || str == "null"
			|| str == "" || str == "请选择") {
		return true;
	}
	return false;
};

//get请求
$.reqGetAjaxs = function(url, requestData, callBack) {
	var requestJson = !$.isNull(requestData) ? JSON.stringify(requestData) : '';
	$.ajax({
		type: "GET",
		contentType: "application/json",
		url: url,
		headers: {
			"token": ""
		},
		dataType: "json",	
		data : requestJson,		
		timeout : 60000,
		success : function(data) {
			$(".ajax_prevent_channel").remove();
			if (!$.isNull(callBack)) {
				callBack(data);
			}
		},
		error : function(data) {
			$(".ajax_prevent_channel").remove();
			
		},
		beforeSend : function(xhr) {
			$.ajaxPreventChannel();
		},
		async : false
	});
};
//post请求
$.reqPostAjaxs = function(url, requestData, callBack){
	var requestJson = !$.isNull(requestData) ? JSON.stringify(requestData) : '';
	$.ajax({
		type: "POST",
		contentType: "application/json",
		url: url,
		headers: {
			"token": localStorage.getItem('$auth_token')//token
		},
		dataType: "json",	
		data : requestJson,		
		timeout : 30000,
		success : function(data) {
			$(".ajax_prevent_channel").remove();
			if (!$.isNull(callBack)) {
				callBack(data);
			}
		},
		error : function(data) {
			
		},
		beforeSend : function(xhr) {
			$(".ajax_prevent_channel").remove();
			$.ajaxPreventChannel();
		},
		async : false
	});
}

//post请求
$.reqDeleteAjaxs = function(url, requestData, callBack){
	var requestJson = !$.isNull(requestData) ? JSON.stringify(requestData) : '';
	$.ajax({
		type: "DELETE",
		contentType: "application/json",
		url: url,
		headers: {
			"token": ""//token
		},
		dataType: "json",	
		data : requestJson,		
		timeout : 30000,
		success : function(data) {
			$(".ajax_prevent_channel").remove();
			if (!$.isNull(callBack)) {
				callBack(data);
			}
		},
		error : function(data) {
			$(".ajax_prevent_channel").remove();
		},
		beforeSend : function(xhr) {
			$.ajaxPreventChannel();
		},
		async : false
	});
}

$.ajaxPreventChannel = function() {
	// 创建遮罩
	var ajaxPrevent = "";
	ajaxPrevent += "<div class='ajax_prevent_channel' style='position: fixed;width: 100%;height: 100%;top: 0;"
			+ "left: 0;z-index: 1000;background:rgba(0,0,0,0.75)'>";
	ajaxPrevent += "<div class='ajax_prevent_a' style='width: 30%;margin-top: 55%;"
			+ "margin-left: 35%;text-align: center;background-clip: padding-box;"
			+ "color: #585858;'>";
	ajaxPrevent += "<img style=' width: 64px;height: 64px;' src='./image/common/ajaxLoading.gif' ></div></div>";
	$("body").append(ajaxPrevent);
	$(".ajax_prevent_a").css("margin-top",(window.innerHeight/2));
};

function modelAlert(){
	var str = "";
		str += '<div id="myModal3" class="modal  fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel3" aria-hidden="true" style="display: none;">'
		str += 	'<div class="modal-header">'
		str += 		'<button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>'
		str += 		'<h3 id="myModalLabel3">Confirm Header</h3>'
		str += 	'</div>'
		str += 	'<div class="modal-body"><p>Body goes here...</p></div>	'
		str += 	'<div class="modal-footer">'
		str += 		'<button class="btn" data-dismiss="modal" aria-hidden="true">Close</button>'
		str += 		'<button data-dismiss="modal" class="btn blue">Confirm</button>'
		str += 	'</div>'
		str += '</div>'
		$("body").append(str);
		
}
function logingis(userId,password){
	var password1 = toBase64(password);
	var data = {
		userId: userId,
		password: password1,
		cityId:"001"
	}
	var url = base.basePath + '/familymart.user.login'
	$.ajax({
		type: "POST",
		contentType: "application/json",
		url: url,
		dataType: "json",	
		data : JSON.stringify(data),		
		timeout : 60000,
		success : function(data) {
			$(".ajax_prevent_channel").remove();
			if(data.statusCode == 200) {
				localStorage.setItem('$user_data', JSON.stringify(data.data));
				localStorage.setItem('$auth_key',data.data.key);
				localStorage.setItem('$auth_token',data.data.token);
				}
			if(data.statusCode == 500) {
				alert(data.message);
					
			}
		},
		error : function(data) {
			
		},
		beforeSend : function(xhr) {
			$(".ajax_prevent_channel").remove();
			$.ajaxPreventChannel();
		},
		async : true
	});
}

var getState = function() {
		var stateText = localStorage.getItem('$state') || "{}";
		return JSON.parse(stateText);
};
var createState = function(name, callback) {
		var state = getState();
		state.account = name;
		state.token = localStorage.getItem('$auth_token');
		 setState(state);
		return callback();
};
var setState = function(state) {
		state = state || {};
		localStorage.setItem('$state', JSON.stringify(state));
		var settings =  getSettings();
		settings.gestures = '';
		 setSettings(settings);
	};
var getSettings = function() {
		var settingsText = localStorage.getItem('$settings') || "{}";
		return JSON.parse(settingsText);
}
var toBase64 = function(data) {
	var toBase64Table = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
	var base64Pad = '=';
	var result = '';
	var length = data.length;
	var i;
	// Convert every three bytes to 4 ascii characters.
	for(i = 0; i < (length - 2); i += 3) {
		result += toBase64Table[data.charCodeAt(i) >> 2];
		result += toBase64Table[((data.charCodeAt(i) & 0x03) << 4) + (data.charCodeAt(i + 1) >> 4)];
		result += toBase64Table[((data.charCodeAt(i + 1) & 0x0f) << 2) + (data.charCodeAt(i + 2) >> 6)];
		result += toBase64Table[data.charCodeAt(i + 2) & 0x3f];
	}

	// Convert the remaining 1 or 2 bytes, pad out to 4 characters.

	if(length % 3) {
		i = length - (length % 3);
		result += toBase64Table[data.charCodeAt(i) >> 2];
		if((length % 3) == 2) {
			result += toBase64Table[((data.charCodeAt(i) & 0x03) << 4) + (data.charCodeAt(i + 1) >> 4)];
			result += toBase64Table[(data.charCodeAt(i + 1) & 0x0f) << 2];
			result += base64Pad;
		} else {
			result += toBase64Table[(data.charCodeAt(i) & 0x03) << 4];
			result += base64Pad + base64Pad;
		}
	}
	return result;
}

function appendStyle() {
	var e = "lj__common_cell_filters_filter_css";
	if(document.getElementById(e)) return;
	var t = document.createElement("style");
	t.id = e;
	t.innerHTML = ".lists_model .model_list,.lists_price .price_list{-webkit-box-sizing:border-box;-moz-box-sizing:border-box}.filter_box .filter_item .cont li,.filter_box .filter_item .guide li,.filter_box .tab_bar,.lists_price .price_list li{border-bottom:1px solid #e5e5e5}body.filter_show{overflow:hidden;position:absolute;top:0;bottom:0;left:0;right:0}.filter_box .tab_bar{position:relative;z-index:10}.filter_box .filter_item{position:absolute;background:#fff;top:0;left:0;right:0;-webkit-transition:-webkit-transform .5s ease;-moz-transition:transform .5s ease,-moz-transform .5s ease;-o-transition:transform .5s ease,-o-transform .5s ease;transition:transform .5s ease;transition:transform .5s ease,-webkit-transform .5s ease,-moz-transform .5s ease,-o-transform .5s ease;-webkit-transform:translate3d(0,-100%,0);-moz-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0);opacity:0;z-index:1}.filter_box .area_list,.filter_box .model_list,.filter_box .more_list,.filter_box .price_list{width:100%;max-height:25.625rem;background:#fff;overflow:auto}.filter_box .more_list{max-height:20rem;max-height:calc(100vh - 16.0625rem)}.filter_box .area_list{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex}.filter_box .filter_item.active{-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);transform:translate3d(0,0,0);opacity:1;z-index:2}.filter_box .filter_item .cont,.filter_box .filter_item .guide,.filter_box .filter_item .nav{overflow:auto}.filter_box .lists_area.active{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex}.filter_box .filter_item li{line-height:2.5rem}.filter_box .filter_item li.active a{color:#00ae66;-webkit-tap-highlight-color:rgab(0,0,0,0)}.filter_box .filter_item li.active .btn{color:#fff;-webkit-tap-highlight-color:rgab(0,0,0,0)}.filter_box .filter_item .guide,.filter_box .filter_item .nav{-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;padding-left:1.1875rem;border-right:1px solid #e5e5e5}.filter_box .filter_item .nav{background:#f0f0f0;padding-left:0}.filter_box .filter_item .nav li{padding-left:1.875rem}.filter_box .filter_item .nav li.active{background:#fff;margin-right:-1px;border-top:1px solid #e5e5e5;border-bottom:1px solid #e5e5e5}.filter_box .filter_item .nav li:first-child{border-top:0}.filter_box .filter_item .cont{-webkit-box-flex:2;-webkit-flex:2;-moz-box-flex:2;-ms-flex:2;flex:2;padding-left:1.1875rem}.filter_box .filter_item .cont li.active,.filter_box .filter_item .guide li.active{color:#00ae66}.filter_box .filter_item .level2.active,.filter_box .filter_item .level3.active{display:block}.lists_price .price_list{width:100%;padding-left:1.25rem;box-sizing:border-box}.lists_price .price_list li{height:3.125rem;line-height:3.125rem;font-size:1rem}.lists_price .price_list li:last-child{border-bottom:0}.lists_price li>*{vertical-align:middle}.lists_price li>span{margin-right:.9375rem}.lists_price .input{width:2.1875rem;height:1.125rem;line-height:1.125rem;padding:0 .125rem;font-size:.6875rem;border:0;background:#f5f5f5;-webkit-border-radius:.125rem;-moz-border-radius:.125rem;border-radius:.125rem;text-align:center}.lists_price .connect{padding:0 .3125rem;color:#c5c5c5}.lists_model .btn,.lists_price .btn{background-color:#00ae66;color:#fff}.lists_price .btn{display:inline-block;width:2.0625rem;height:1rem;line-height:1rem;margin-left:.625rem;font-size:.625rem;-webkit-border-radius:.125rem;-moz-border-radius:.125rem;border-radius:.125rem}.lists_model .model_list{width:100%;padding-left:1.25rem;box-sizing:border-box}.lists_model .model_list li{height:2.5rem;line-height:2.5rem;border-bottom:1px solid #e5e5e5}.lists_model .model_list li:last-child{border-bottom:0}.lists_model .model_list li label{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex}.lists_model .model_list .model{display:block;-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1}.lists_model .model_list input[type=checkbox]{margin-top:.8125rem;margin-right:1.25rem}.lists_model .btn_link{background:0 0;color:#00ae66}.lists_more .item{padding:1.25rem;border-bottom:1px solid #e5e5e5}.lists_more .item:last-child{border-bottom:0}.lists_more .item_tit{font-size:.875rem;font-weight:600}.lists_more .item_desc{color:#9c9fa1;font-size:.6875rem;margin-top:.9375rem}.lists_more .item_cont .value_lists{overflow:hidden;padding-bottom:.125rem}.lists_more .item_cont .val{float:left;width:25%;height:1.5625rem;line-height:1.5625rem;margin:.75rem 0 0;padding-right:.75rem;font-size:.6875rem;text-align:center;color:#999;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.lists_more .item_cont .val a{display:block;border:1px solid #e5e5e5;color:#999;-webkit-border-radius:.125rem;-moz-border-radius:.125rem;border-radius:.125rem;overflow:hidden;white-space:nowrap}.lists_more .item_cont .val.active a{border-color:#00ae66}.lists_model .opt_box,.lists_more .opt_box,.opt_box+.lists_model .model_list{border-top:1px solid #e5e5e5}.lists_model .model_list li,.lists_price .price_list li{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAQAAACROWYpAAAAUklEQVR4Ae3VOQEAQQgDwEhACk4XgyESFgX3Obi/IqkHOoCMI2euFzs5ZGDkeq8MsHKV42Lkx3YcM3Ajh2vcuHHj/3Hj+0ef9ezdyBisy7AYsg2cbp3yKncnfQAAAABJRU5ErkJggg==) 92% center no-repeat;-moz-background-size:.9375rem .9375rem;-o-background-size:.9375rem .9375rem;background-size:.9375rem .9375rem}.lists_model .model_list li.active,.lists_price .price_list li.active{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAAPFBMVEUAAAAAr2AArmYAr2UArWYArWUArmUArmUArmUArWYArWUArmYArmUAr2gArWYAr2QArWYArmUArWUArmbHRGgfAAAAE3RSTlMAEKAw8GDPkO+Pn9CwIIBAcMDgP/MWjgAAAIJJREFUeF7N0zkWxDAIBNHGSJY861L3v+sERHgentSV/oSAlm2TormZBnUMNVxFzhSoDM7Hdsi2XixzVlgLDqVn9r7TxJ3pim6hia8w49wlNPO9wWqhPLRnPYFL6KJfVgdeSRNrAZJm1ju0YvuEFixvoQXLT/VMxzNo/0Zko1XYhn0BNtYUGVhIZlYAAAAASUVORK5CYII=) 92% center no-repeat;-moz-background-size:.9375rem .9375rem;-o-background-size:.9375rem .9375rem;background-size:.9375rem .9375rem}.lists_price .price_list li,.lists_price .price_list li.active{background:0 0}";
	document.head.appendChild(t)
}