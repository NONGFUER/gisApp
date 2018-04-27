$(function(){
	getArticleList()
});
function getArticleList(){
	var url = base.basePath + "familymart.article.getlisttitle";
	$.reqGetAjaxs(url,"" ,function(data){
		console.log(data);
		if( data.statusCode == "200" ){
			var articleLists = data.data;
		}
	} );
}
