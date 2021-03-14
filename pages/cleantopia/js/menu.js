$(function(){
    $('.gnb>li').hover(function(){
        $(this).children('.sub-depth').stop().slideDown(100)
        $('.sub-bg').stop().slideDown(100)
    }, function(){
        $(this).children('.sub-depth').stop().slideUp(100)
        $('.sub-bg').stop().slideUp(100)
    })
})