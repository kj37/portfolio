$(function(){
    /*상세 정보*/
    $('.fa-plus').click(function(){
        var trackNum = $(this).parents('tr').index()+1;
        $('#track_'+trackNum).show();
    });
    
    /*CLOSE*/
    $('.track_close').click(function(){
        $(this).parents('article[id^="track"]').css('display', 'none');
    });
});