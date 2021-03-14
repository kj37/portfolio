$(function(){
    //메뉴 열고 닫기
    $('.btn_menu').click(function(){
        $('nav').toggle();
        $('.lnb .sub_menu').slideUp();
    });
    
    //아코디언 패널
    $('.lnb>li>a').click(function(){
        $('.sub_lnb').slideUp();
        if(!$(this).next().is(':visible')){
            $(this).next().slideDown();
        };
    });
})