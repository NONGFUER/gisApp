var base = {
		url : window.location.protocol+"//"+window.location.host+"//",
		basePath:"http://172.16.0.83:8090/fmgis/v1.0/",
		imagePath : "../../../image/", // 图片路径
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
		async : true
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
		password: password1
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