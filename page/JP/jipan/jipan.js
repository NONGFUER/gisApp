var count = 1;
var yflag = true;
var n = 1; //flag
var scrollTop = "";
var args = {
        "fe_root": "https:\/\/s1.ljcdn.com\/hulk-web\/static\/m\/",
        "version": "2018050318562815e",
        "nation": {
            "short": "#"
        },
        "js_ns": "m_pages_zufangSearch",
        "ajax_css_inline": [],
        "cur_city_id": 310000,
        "cur_city_name": "上海",
        "cur_city_short": "sh",
        "no_more_data": 0,
        "cur_page": 1,
        "selected": {
            "d": {
                "district_id": null,
                "district_name": null,
                "bizcircle_id": null,
                "bizcircle_name": null,
                "pinyin": null
            },
            "rp": {
                "id": null,
                "name": null
            },
            "a": {
                "id": null,
                "name": null
            },
            "l": {
                "id": null,
                "name": null
            },
            "br": {
                "id": null,
                "name": null
            },
            "f": {
                "id": null,
                "name": null
            },
            "tt": {
                "id": null,
                "name": null
            },
            "c": {
                "id": null,
                "name": null
            },
            "sch": {
                "id": null,
                "name": null
            },
            "ra": {
                "id": [],
                "name": null
            },
            "rs": {
                "query": null
            },
            "bd": {
                "id": null,
                "name": "品牌"
            }
        },
        "selected_sortFilter": [],
        "selected_checkFilter": [],
        "maxPrice": null,
        "minPrice": null,
        "total": 25302
	}
var conditions = {
	city:{
		obj:null,
		button:$("#button_area"),
		booth:$("#booth_area"),
		panel:$("#panel_area"),
	},
	confirmStatus:{
		obj:null,
		button:$("#button_degree"),
		panel:$("#panel_degree"),
		booth:$("#booth_degree"),
	}
}
var current = {
	type:null
}
$(function(){
	appendStyle();//添加下拉筛选样式
	console.log(getCanshu());
	var shuju = getCanshu();
//	filter(function(){
//		alert(1)
//	},shuju);
	getJPList(1,10,"desc","");//获取基盘列表
	Echo.init({offset: 0,throttle: 0});//图片懒加载
	tabToTop();//上拉tab-bar置顶
	$("body").on("touchmove", addStickFixed);
	//topscroll()
	
	$.each(conditions,function(key,condition){
		condition["button"].on("tap",function(){
			if(current["type"] == key){
				setTimeout(hide,0)
				return false;
			}
			hideCurrentPannel();
			showPannel(key);
		});
		
		condition["booth"].click(function(){
			show(key);
		});
	})

	$("#panel_box").on("tap", function(e){
		if(!checkTapEmpty(e.srcElement)){
			e.preventDefault();
			setTimeout(hide,0)
		}
	});
	

	//返回
	$("#header_back").click(function(){
  		window.location.href = base.url + "gisApp/page/home/home.html"
  	});
  	
  	//跳转到基盘添加
	$(".sort_bar_add").click(function(){
		window.location.href = "../addJP/addJP.html"
	});

});
function getJPList(curpage,pagesize,timesort,confirmStatus){
	var url = base.basePath + "familymart.property.app.getlistsort?curPage="+curpage+"&pageSize="+pagesize+"&timesort="+timesort+"&city=001";//"&confirmStatus="+confirmStatus+
	var reqData = {//无效参数设置
		curPage:1,
		pageSize:2
	}
	$.reqPostAjaxs(url,reqData ,function(data){		
		if( data.statusCode == "200" ){
			var sjpList = data.data;
			for( var i = 0; i < sjpList.length-1; i++ ){
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
			Echo.init({offset: 0,throttle: 0});//图片懒加载
			var loadDom = $('<li class="loading_box"><i class="loading"></i><span>加载中…</span></li>');
			$(".mod_cont").append(loadDom);
			setTimeout(function(){
				$(".loading_box").hide()
			},1500);
		}else{
			modelAlert(data.message);
		}
	} );
}

function getJPList1(curpage,pagesize,timesort,confirmStatus){
	var url = base.basePath + "familymart.property.app.getlistsort?curPage="+curpage+"&pageSize="+pagesize+"&timesort="+timesort+"&confirmStatus="+confirmStatus+"&city=001";
	var reqData = {//无效参数设置
		curPage:1,
		pageSize:2
	}
	$.reqPostAjaxs(url,reqData ,function(data){
		console.log(data);
		if( data.statusCode == "200" ){
			
			var sjpList = data.data;
			if(sjpList.length == 1 ){ yflag = false }
			for( var i = 0; i < sjpList.length-1; i++ ){
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
			Echo.init({offset: 0,throttle: 0});//图片懒加载
		}
	} );
}



//上拉置顶
function tabToTop(){	
	$(document).scroll(function() {
			addStickFixed();
			if (getScrollTop() + getClientHeight() == getScrollHeight()) { 
				$(".loading_box").show()
				if(!yflag){
						$(".loading_box").hide()
				}else{
//					setTimeout(function(){			
							getJPList1(++count,10,"desc","");//获取基盘列表
							$(".loading_box").hide()	
//					},1500)
				}				
			}
	});
}

function addStickFixed(){
	if(n) {
		var offsetObject = $("#booth").offset();
		topValue = offsetObject.top;
		var i = offsetObject.height;
		var s = $('<div class="occupy" style="display:none;height:' + i + 'px">');
		if($("#booth").next().length != 0) {
			s.insertBefore($("#booth").next())
		} else {
			s.appendTo($("#filter").parent())
		}
		n = 0
	}
	var o = topValue - (document.body.scrollTop || document.documentElement.scrollTop);
	if(o < 0) {//当该元素小于scrolltop,则添加固定
		$("#booth").addClass("stick_fixed");
		$(".occupy").css("display", "block")
	} else {
		$("#booth").removeClass("stick_fixed");
		$(".occupy").css("display", "none")
	}
}

function chooseDegree(){
	condition["confirmStatus"]["booth"].addClass("active");
	condition["confirmStatus"]["booth"].find("h2").html("1");
}
var checkTapEmpty = function(el) {
	var list = [];
	for (var k in conditions) {
		if (conditions[k]["button"] && conditions[k]["button"].length > 0) {
			list.push(conditions[k]["button"][0])
		}
		if (conditions[k]["panel"] && conditions[k]["panel"].length > 0) {
			list.push(conditions[k]["panel"][0])
		}
	}
	return $(el).isin(list)
};

function show(type){
	scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
	$("#panel_box").show();
	$(document.body).addClass("filter_show");
	showPannel(type);
}

function showPannel(type){
	current["type"] && conditions[current["type"]]["button"].removeClass("active");
	current["type"] = type;
	conditions[current["type"]]["panel"].addClass("active");
	conditions[current["type"]]["button"].addClass("active");
	//conditions[current["type"]]["obj"].show()
}

function hide(){
	setTimeout(function() {
		$("#panel_box").hide();
		hideCurrentPannel();
		$(document.body).removeClass("filter_show");
		window.scrollTo(0, scrollTop)
	}, 500)
}
function hideCurrentPannel(){
	if(current["type"]){
		conditions[current["type"]]["panel"].removeClass("active")
	}
}

$.fn.isin = function(e) {
	if(this.length === 0) return !1;
	var t = this[0];
	for(var n = 0, r = e.length; n < r; n += 1)
	if(e[n].contains(t)) return !0;
	return !1
}

var filter = function(callback,default_param){
	var degreePannelShow = function(a,b,c){
		console.log(a)
		console.log(b)
		console.log(c)
	}
	var condition = {
		confirmStatus:{
			obj:null,
			button:$("#button_degree"),
			panel:$("#panel_degree"),
			creator:degreePannelShow,
			booth:$("#booth_degree"),
			extra_param:{
				default_param:default_param,
				booth:$("#booth_degree"),
				key:"p",
				default_text:$("#button_degree").find(".tit").html()
			}
		}
	}
	var current = {
		type:null
	}
	var selectResult = {};
	var commonCallback = function(args, delete_keys) {
        delete_keys = delete_keys || [];
        for (var k in args) {
                selectResult[k] = args[k]
        }
        $.each(delete_keys, function(k, v) {
            delete selectResult[v]
        });
        callback(selectResult);
        setTimeout(hide, 60)
	};
	var checkTapEmpty = function(el) {
        var list = [];
        for (var k in condition) {
            if (condition[k]["button"] && condition[k]["button"].length > 0) {
                list.push(condition[k]["button"][0])
            }
            if (condition[k]["panel"] && condition[k]["panel"].length > 0) {
                list.push(condition[k]["panel"][0])
            }
        }
        return $(el).isin(list)
    };
	function show(type){
		scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
		$("#panel_box").show();
		$(document.body).addClass("filter_show");
		showPannel(type);
	}
	function hide(){
		setTimeout(function() {
	        $("#panel_box").hide();
	        hideCurrentPannel();
	        $(document.body).removeClass("filter_show");
	        window.scrollTo(0, scrollTop)
	    }, 500)
	}
	function hideCurrentPannel(){
		if(current["type"]){
			condition[current["type"]].removeClass("active")
		}
	}
	function showPannel(type){
		current["type"] && condition[current["type"]]["button"].removeClass("active");
		current["type"] = type;
		condition[current["type"]]["panel"].addClass("active");
	    condition[current["type"]]["button"].addClass("active");
	    condition[current["type"]]["obj"].show()
	}
	var pannelInit =  function (){
		$.each(condition,function(key,condition){
			condition["obj"] = condition["creator"](condition["panel"], commonCallback , condition["extra_param"]);
			condition["button"].on("tap",function(){
				if(current["type"] == key){
					setTimeout(hide,0)
					return false;
				}
			});
			hideCurrentPannel();
			showPannel(key);
			condition["booth"].on("tap",function(condition){
				show(key)
			});
		});
		$("#panel_box").on("tap", function(){
			if(!checkTapEmpty(e.srcElement)){
				e.preventDefault();
				setTimeout(hide,0)
			}
		});
		var selected = default_param;
		
		for(var i in selected){
			if( i == "city_id" ) continue;
			if( i == "d" || i == "li" ){
				if(!selected[i]["pinyin"])continue;
				selectResult[i] = selected[i]["pinyin"]
			}else{
				selectResult[i] = selected[i];
			}			
		}
		pannelInit = false;
	};
	//pannelInit();
	var that = {};
	that.show = show;
	that.hide = hide;
	that.getSelected = function(){
		return selectResult;
	}
	that.getAllSelect = function(){
		var allSelectResult = {};
		$.each(condition,function(i,condition){
			if(condition["obj"].getAllSelect){
				var r = condition["obj"].getAllSelect();
			}
		});
		return allSelectResult;
	}
	return that;
}

function getCanshu(){
	var default_selected = {};
    default_selected["city_id"] = args["cur_city_id"];
    if (args["selected"] && args["selected"]["d"] && args["selected"]["d"]["pinyin"]) {
        default_selected["d"] = args["selected"] && args["selected"]["d"]
    } else if (args["selected"] && args["selected"]["li"] && args["selected"]["li"]["pinyin"]) {
        default_selected["li"] = args["selected"] && args["selected"]["li"]
    } else {
        default_selected["d"] = {}
    }
    var rc = ["p", "l", "a", "f", "c"];
    $.each(rc, function(e, r) {
        default_selected[r] = args["selected"][r] && args["selected"][r]["id"] || 0
    });
    for (var i in args["selected_checkFilter"]) {
        default_selected[i] = args["selected_checkFilter"][i]
    }
    for (var i in args["selected_sortFilter"]) {
        default_selected[i] = args["selected_sortFilter"][i]
        
    }
    return default_selected;
}
