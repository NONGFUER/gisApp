$(function(){
	getArticleList()
});
function getArticleList(){
	var url = base.basePath + "familymart.article.getlisttitle";
	$.reqGetAjaxs(url,"" ,function(data){
		console.log(data);
		if( data.statusCode == "200" ){
			var articleLists = data.data;
			for( var i = 0; i < articleLists.length ; i++ ){				
				$(".quetions_lists").append(renderArticle(articleLists[i]));
			}
			
		}
	} );
}

function renderArticle(data){
	var str="";
	str += '<li class="question_item">'
	str += 	'<a href="" class="inner" data-href="">'
	str += 		'<div class="baike_pic"><img src="https://image1.ljcdn.com/neirong-image/neirong1513839616php7ryWIS.jpeg.150x150.jpeg" alt="" class="lazyload"></div>'
	str += 		'<div class="que twoline">'+data.title+'</div>'
	str += 		'<div class="tag_box"><span class="tag">作者：'+data.author+'</span></div>'
	str += 	'</a>'
	str += '</li>'
	return str;
}
