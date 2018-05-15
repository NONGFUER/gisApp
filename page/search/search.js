var yflag = true;
var count = 1;
$(function(){
    tabToTop();
    $("#search_type").click(function(){
        $("#dropdown_city_panel").hide();
       $("#dropdown_panel").show(); 
    })
    $("#search_city").click(function(){
        $("#dropdown_city_panel").show(); 
        $("#dropdown_panel").hide(); 
     })
    //
    $("#action_search").click(function(){
        search(1)
    });
    $(".type").click(function(){
       var text =  $(this).text();
       var value = $(this).attr("data-type");
       $("#dropdown_panel").hide(); 
       $("#search_type").text(text);
       $("#search_type").attr("data-type",value);
    });
    $(".city").click(function(){
        var text =  $(this).text();
       var value = $(this).attr("data-city");
       $("#dropdown_city_panel").hide(); 
       $("#search_city").text(text);
       $("#search_city").attr("data-city",value);
    });
    $("#search_input").click(function(){
        $("#dropdown_city_panel").hide(); 
        $("#dropdown_panel").hide(); 
    })
});
function search(num){
    $(".list").html("");
    var cityType = $("#search_city").attr("data-city");
    var type = $("#search_type").attr("data-type");
    var keyword = $("#search_input").val();
    if(!keyword){
        return false;
    }
    searchGis(num,10,cityType,keyword,type);
}
function search1(num){   
    var cityType = $("#search_city").attr("data-city");
    var type = $("#search_type").attr("data-type");
    var keyword = $("#search_input").val();
    if(!keyword){
        return false;
    }
    searchGis(num,10,cityType,keyword,type);
}
function searchGis(curpage,pagesize,city,keyword,type){
   var url = base.basePath + "familymart.index.app.getsearchresult?curPage="+curpage+"&pageSize="+pagesize+"&cityId="+city+"&search="+keyword+"&type="+type;
    $.reqPostAjaxs(url,"" ,function(data){
       // strMoudle(data.data.masterList)
       if( $("#search_type").attr("data-type") == "jipan" ){
            jipanlist(data.data.masterList)
       }else{
           console.log(data.data.gcomList)
            opponentList(data.data.gcomList);
       }
      
    });
}

function jipanlist(sjpList){
   // var sjpList = data.data;
        if(sjpList && sjpList.length != 0 ){
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
            Echo.init({offset: 0,throttle: 0});//图片懒加载
           
			var loadDom = $('<li class="loading_box"><i class="loading"></i><span>加载中…</span></li>');
			$(".mod_cont").append(loadDom);
			setTimeout(function(){
				$(".loading_box").hide()
            },1500);
        }else{
            yflag = false 
        }
}
function opponentList(sjpList){
        if(sjpList && sjpList.length != 0){
			for( var i = 0; i < sjpList.length; i++ ){
				var areaName = (sjpList[i].province ? sjpList[i].province : '') +''+(sjpList[i].area ? sjpList[i].area : '') ;
				var preData = {
					"dtoName":sjpList[i].compName,
					"imgpath":sjpList[i].img1,
					"bprShopArea":sjpList[i].bprShopArea,
					"bprShopWidth":sjpList[i].bprShopWidth,
					"areaName":areaName,
					"bprExpectRent":(sjpList[i].expectRent == 0 ? "不详" : sjpList[i].expectRent ),
					"bprMarketType":DICTIONARY["bprMarketType"][sjpList[i].marketType],
					"bprViceMarketType":DICTIONARY["bprMarketType"][sjpList[i].viceMarketType],
					"bpmConfirmStatus":sjpList[i].bpmConfirmStatus,
					"bprCustomerFlow":sjpList[i].customerFlow ?sjpList[i].customerFlow :"" ,
					"bprExpectDaysales":sjpList[i].expectDaysales ? sjpList[i].expectDaysales : "",
					"jpid":sjpList[i].id,
					"brand":sjpList[i].brand,
					"cigaretteFlag":sjpList[i].cigaretteFlag,
					"tuName":sjpList[i].tuName,
				}
				$(".lists").append(strMoudleJZ(preData));
			}
			Echo.init({offset: 0,throttle: 0});//图片懒加载
			var loadDom = $('<li class="loading_box"><i class="loading"></i><span>加载中…</span></li>');
			$(".mod_cont").append(loadDom);
			setTimeout(function(){
				$(".loading_box").hide()
            },1500);
        }else{
            yflag = false
        }
}

//上拉置顶
function tabToTop(){	
	$(document).scroll(function() {
			//addStickFixed();
			if (getScrollTop() + getClientHeight() == getScrollHeight()) { 
				$(".loading_box").show()
				if(!yflag){
						$(".loading_box").hide()
				}else{
//					setTimeout(function(){			
                    search1(++count);//获取基盘列表
					$(".loading_box").hide()	
//					},1500)
				}				
			}
	});
}