$(function(){
	getArticleContent("asdad")
});
function getArticleContent(arId){
	var url = base.basePath + "familymart.article.getcontent?arId=" + arId;
	$.reqGetAjaxs(url,"" ,function(data){
		console.log(data);
		if( data.statusCode == "200" ){
			var articleLists = data.data;
		}
	} );
}
