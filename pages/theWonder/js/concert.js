$(function(){
    /*탭 메뉴*/
    $('label').click(function(){
        var tabNum = $(this).index();
        $('label').removeClass('on');
        $(this).addClass('on');
        $('div[class^=concert]').css('display', 'none');
        $('.concert_'+tabNum).css('display', 'block');
    });
});