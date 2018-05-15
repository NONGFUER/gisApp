$(function(){
    if(localStorage.getItem("$auth_token")){
        if(window.location.pathname == "/gisApp/page/login/login.html"){
            logingis(localStorage.getItem('$user_id'),localStorage.getItem('$user_password'));
        }
    	
        getUserInfo();
    }
   
    $("#submit").click(function(){

        var userId = $("#user_id").val();
        var password = $("#password").val();
        if($.isNull(userId)){ return false }
        if($.isNull(userId)){ return false }
        logingis(userId,password);
    });
    $("#logout").click(function(){
        localStorage.removeItem("$auth_token")
        localStorage.removeItem('$user_id')
        localStorage.removeItem('$user_password')
        window.location.href = base.url + "gisApp/page/login/login.html"
    });
});

function getUserInfo(){
	var reqUrl = base.basePath + "/familymart.user.info.get";//http://172.16.0.80:8090/fmgis/v1.0
	$.reqGetAjaxs( reqUrl, "", getUserInfoCallback);
}

function getUserInfoCallback(data){
	if(data.statusCode == "200"){
        var tuname = data.data.tuName;
        var city = data.data.cityName;
        var parentId = data.data.parentId;
        var position = data.data.position;
        var orgName = data.data.orgName;
        if(!parentId){$(".icon_pull").hide()}
    //    var josn = {
    //         cityId:"001",
    //         cityName:"上海市",
    //         gisPreference: null,
    //         gisRole: "20",
    //             orgId: 102,
    //             orgName :"五部开发一课",
    //             parentId:"1102120",
    //             parentOrgId : 89,
    //             polygonList: null,
    //             position: "开发担当",
    //             role  :"10",
    //             status : "10",
    //             tuEmail : null,
    //             tuId :"000005",
    //             tuMp : null,
    //             tuName:"测试账号"
    //         }
		if(tuname){
			$("#tuname").text("欢迎你,"+tuname);
		}else{
			$("#tuname").text("***");
        }
        parentId && city && $("#city").text(city)
	    position && orgName && $("#jigou").text(position +" | "+ orgName);
	}
}
