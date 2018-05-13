$(function(){
    $("#submit").click(function(){

        var userId = $("#user_id").val();
        var password = $("#password").val();
        if($.isNull(userId)){ return false }
        if($.isNull(userId)){ return false }
        logingis(userId,password);
    });
});