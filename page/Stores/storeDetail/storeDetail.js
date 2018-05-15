var bpmId = getUrlQueryString("mdid");
$(function(){
	bpmId = getUrlQueryString("mdid");
	getJPInfo(bpmId);
	// var mySwiper = new Swiper ('.swiper-container', {
	//    	loop:true,
	//     grabCursor: true,
	//     centeredSlides: true,
	//     slidesPerView: 'auto',
	//     pagination: {
	//        el: '.swiper-pagination',
	//     },
  	// })     
  	$("#header_back").click(function(){
  		window.location.href = base.url + "gisApp/page/Stores/store/store.html"
  	});
});

//获取
function getJPInfo(bpmId){
	var url = base.basePath + "familymart.mastore.app.get?spStoreId="+bpmId;
	$.reqGetAjaxs( url, "", function(data){
		if(data.statusCode == "200"){
			var jpData = data.data;
			handleData(jpData);
		}else{
			modelAlert(data.message);	
		}		
	} );	
}

function handleData(storeData){	
	$("#storeName").html(storeData.spStoreName);//基盘名称
	$(".citytag").html(storeData.city+""+storeData.area);
	$("#keliu").html(storeData.tcAvg);
	$("#rishang").html(storeData.daily_Prfm_Amt_Avg);
	$("#storeCity").html(storeData.city);
	$("#storeArea").html(storeData.area);
	$("#storeAdress").html(storeData.spAddr);
	$("#storePhone").html(storeData.spPhone);
	$("#tel").attr("href","tel:"+storeData.spPhone);
	$("#location").attr("src","//api.map.baidu.com/staticimage?center="+storeData.lng+","+storeData.lat+"&width=375&height=253&markers="+storeData.lng+","+storeData.lat+"|"+storeData.lng+","+storeData.lat+"&zoom=15")
}
var json = {
	area: "徐汇",
	city: "上海市",
	cityName: null,
	closingDate: null,
	daily_Prfm_Amt_Avg: null,//日商
	lat: 31.188758970326788,
	lng: 121.43276095450896,
	openingDate: null,
	orgName: null,
	profileImg: null,
	spAccountant: "NM",
	spAddr: "中山西路2006号110室-1",
	spBangerFlag: "1",
	spBusinessFirstDate: null,
	spBusinessLastDate: null,
	spCompanyId: "1100",
	spCreateDate: 1415175935000,
	spCreateUserId: "0510013",
	spCurrentDeveloper: "0906037",
	spCurrentDeveloperName: null,
	spEndDate: 1415721600000,
	spForeignCigaretteFlag: "1",
	spHqEffectiveDate: 1415721600000,
	spHqPoFlag: "1",
	spInchargeDept: "1S5000",
	spInchargeDistrict: "001",
	spInchargeRegion: "10",
	spInchargeSector: "1S5005",
	spIsHeadOffice: null,
	spLevel: null,
	spLocalCigaretteFlag: "1",
	spMarketType: "04",
	spMedicineFlag: "1",
	spObjectType: null,
	spOriginDeveloper: null,
	spOriginStartDate: 1285430400000,
	spPhone: "34281226",
	spPhoneRegion: null,
	spRackQty: null,
	spRsvDatetime1: null,
	spRsvDatetime2: null,
	spRsvStatus1: null,
	spRsvStatus2: "0",
	spScale: "0",
	spStartDate: 1302969600000,
	spStatus: null,
	spStoreEffectiveDate: 1415721600000,
	spStoreId: "20148801",
	spStoreId4: null,
	spStoreName: "中山西路二店",
	spStoreStatus: "99",
	spType: "23",
	spUpdateDate: 1522728000000,
	spUpdateUserId: "0510013",
	spViceMarketType: null,
	spZipcode: null,
	tcAvg: null,
	tuEmail: null,
	tuMp: null,
	tuName: null,
	undertake: "15120015"
}