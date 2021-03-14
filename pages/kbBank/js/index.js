$(function(){
    /*gnb 호버*/
    $('.gnb>li').hover(function(){
        var gnbNum = $(this).index();
        if(gnbNum == 0 || gnbNum == 1 || gnbNum == 8 || gnbNum == 9){
            $(this).addClass('on');
            $(this).find('.sub_gnb').show();
        }
    }, function(){
        $('.gnb>li').removeClass('on');
        $('.gnb>li').find('.sub_gnb').hide();
    });
    
    
    /*visual 초기값*/
    $('.visual .content li').eq(0).children('strong, span, a').css({'opacity': 1, 'marginLeft': 0});
    $('.visual .content li').eq(0).children('.bg1').css({'opacity': 1, 'bottom': '40px'});
    $('.visual .content li').eq(0).children('.bg2').css({'opacity': 1});
    $('.visual .indicator li').eq(0).addClass('on');
    
    /*visual 자동 슬라이더*/
    var visualNum = 0;
    var visualBg = ['#f1efe4', '#c9e5ff', '#f3efec', '#dbe8f9'];
    function visualSlider(){
        visualNum++;
        if(visualNum == 4){
            visualNum = 0;
        }else if(visualNum == -1){
            visualNum = 3;
        }
        $('.visual').css('backgroundColor', visualBg[visualNum]);
        $('.visual .content li').hide();
        $('.visual .content li').children('strong, span, a').css({'opacity': 0, 'marginLeft': '20px'});
        $('.visual .content li').children('.bg1').css({'opacity': 0, 'bottom': 0});
        $('.visual .content li').children('.bg2').css({'opacity': 0});
        $('.visual .content li').eq(visualNum).show();
        if($('.visual .content li').eq(visualNum).is(':visible')){
            $('.visual .content li').eq(visualNum).children('strong, span, a').css({'opacity': 1, 'marginLeft': 0});
            $('.visual .content li').eq(visualNum).children('.bg1').css({'opacity': 1, 'bottom': '40px'});
            $('.visual .content li').eq(visualNum).children('.bg2').css({'opacity': 1});
        }
        $('.visual .indicator li').removeClass('on');
        $('.visual .indicator li').eq(visualNum).addClass('on');
    }
    var autoVisual = setInterval(visualSlider, 5000);
    
    /*visual 인디케이터*/
    $('.visual .indicator li a').click(function(){
        playerNum = 1;
        $('.visual .player').addClass('stop');
        clearInterval(autoVisual);
        visualNum = $(this).parent('li').index();
        $('.visual').css('backgroundColor', visualBg[visualNum]);
        $('.visual .content li').hide();
        $('.visual .content li').children('strong, span, a').css({'opacity': 0, 'marginLeft': '20px'});
        $('.visual .content li').children('.bg1').css({'opacity': 0, 'bottom': 0});
        $('.visual .content li').children('.bg2').css({'opacity': 0});
        $('.visual .content li').eq(visualNum).show();
        if($('.visual .content li').eq(visualNum).is(':visible')){
            $('.visual .content li').eq(visualNum).children('strong, span, a').css({'opacity': 1, 'marginLeft': 0});
            $('.visual .content li').eq(visualNum).children('.bg1').css({'opacity': 1, 'bottom': '40px'});
            $('.visual .content li').eq(visualNum).children('.bg2').css({'opacity': 1});
        }
        $('.visual .indicator li').removeClass('on');
        $('.visual .indicator li').eq(visualNum).addClass('on');
    });
    
    /*visual 컨트롤러*/
    $('.visual .prev').click(function(){
        playerNum = 1;
        $('.visual .player').addClass('stop');
        clearInterval(autoVisual);
        visualNum--;
        if(visualNum == 4){
            visualNum = 0;
        }else if(visualNum == -1){
            visualNum = 3;
        }
        $('.visual').css('backgroundColor', visualBg[visualNum]);
        $('.visual .content li').hide();
        $('.visual .content li').children('strong, span, a').css({'opacity': 0, 'marginLeft': '20px'});
        $('.visual .content li').children('.bg1').css({'opacity': 0, 'bottom': 0});
        $('.visual .content li').children('.bg2').css({'opacity': 0});
        $('.visual .content li').eq(visualNum).show();
        if($('.visual .content li').eq(visualNum).is(':visible')){
            $('.visual .content li').eq(visualNum).children('strong, span, a').css({'opacity': 1, 'marginLeft': 0});
            $('.visual .content li').eq(visualNum).children('.bg1').css({'opacity': 1, 'bottom': '40px'});
            $('.visual .content li').eq(visualNum).children('.bg2').css({'opacity': 1});
        }
        $('.visual .indicator li').removeClass('on');
        $('.visual .indicator li').eq(visualNum).addClass('on');
    });
    $('.visual .next').click(function(){
        playerNum = 1;
        $('.visual .player').addClass('stop');
        clearInterval(autoVisual);
        visualNum++;
        if(visualNum == 4){
            visualNum = 0;
        }else if(visualNum == -1){
            visualNum = 3;
        }
        $('.visual').css('backgroundColor', visualBg[visualNum]);
        $('.visual .content li').hide();
        $('.visual .content li').children('strong, span, a').css({'opacity': 0, 'marginLeft': '20px'});
        $('.visual .content li').children('.bg1').css({'opacity': 0, 'bottom': 0});
        $('.visual .content li').children('.bg2').css({'opacity': 0});
        $('.visual .content li').eq(visualNum).show();
        if($('.visual .content li').eq(visualNum).is(':visible')){
            $('.visual .content li').eq(visualNum).children('strong, span, a').css({'opacity': 1, 'marginLeft': 0});
            $('.visual .content li').eq(visualNum).children('.bg1').css({'opacity': 1, 'bottom': '40px'});
            $('.visual .content li').eq(visualNum).children('.bg2').css({'opacity': 1});
        }
        $('.visual .indicator li').removeClass('on');
        $('.visual .indicator li').eq(visualNum).addClass('on');
    });
    
    /*visual 플레이어*/
    var playerNum = 0;
    $('.visual .player').click(function(){
        playerNum++;
        if(playerNum%2 == 1){
            $(this).addClass('stop');
            clearInterval(autoVisual);
        }else if(playerNum%2 == 0){
            $(this).removeClass('stop');
            autoVisual = setInterval(visualSlider, 5000);
        }
    });
    
    
    /*obj_slider 자동 슬라이더*/
    var objNum = 0;
    var lastObjNum = 0;
    var ndObjNum = 0;
    var rdObjNum = 0;
    function objSlider(){
        if(objNum == 0){
            lastObjNum = 4;
        }else{
            lastObjNum = objNum - 1;
        }
        $('.obj_slider .content li').eq(lastObjNum).hide();
        $('.obj_slider .content li').eq(lastObjNum).clearQueue().animate({'left': '1005px'}, 600, 'linear', function(){
            $(this).show();
        });
        $('.obj_slider .content li').eq(objNum).clearQueue().animate({'left': '-335px'}, 600, 'linear');
        objNum++;
        if(objNum == 5){
            objNum = 0;
        }else if(objNum == -1){
            objNum = 4;
        }
        $('.obj_slider .content li').eq(objNum).clearQueue().animate({'left': 0}, 600, 'linear');
        if(objNum == 4){
            ndObjNum = 0;
        }else{
            ndObjNum = objNum + 1;
        }
        $('.obj_slider .content li').eq(ndObjNum).clearQueue().animate({'left': '335px'}, 600, 'linear');
        if(objNum >= 3){
            rdObjNum = objNum - 3;
        }else{
            rdObjNum = objNum + 2;
        }
        $('.obj_slider .content li').eq(rdObjNum).clearQueue().animate({'left': '670px'}, 600, 'linear');
    }
    var autoObj = setInterval(objSlider, 5000);
    
    /*obj_slider 컨트롤*/
    $('.obj_slider .prev').click(function(){
        objPNum = 1;
        $('.obj_slider .player').addClass('stop');
        clearInterval(autoObj);
        objNum--;
        if(objNum == 5){
            objNum = 0;
        }else if(objNum == -1){
            objNum = 4;
        }
        $('.obj_slider .content li').eq(objNum).clearQueue().animate({'left': 0}, 600, 'linear');
        $('.obj_slider .content li').eq(objNum-1).hide();
        $('.obj_slider .content li').eq(objNum-1).clearQueue().animate({'left': '-335px'}, 600, 'linear', function(){
            $(this).show();
        });
        $('.obj_slider .content li').eq(objNum-2).clearQueue().animate({'left': '1005px'}, 600, 'linear');
        $('.obj_slider .content li').eq(objNum-3).clearQueue().animate({'left': '670px'}, 600, 'linear');
        $('.obj_slider .content li').eq(objNum-4).clearQueue().animate({'left': '335px'}, 600, 'linear');
    });
    $('.obj_slider .next').click(function(){
        objPNum = 1;
        $('.obj_slider .player').addClass('stop');
        clearInterval(autoObj);
        if(objNum == 0){
            lastObjNum = 4;
        }else{
            lastObjNum = objNum - 1;
        }
        $('.obj_slider .content li').eq(lastObjNum).hide();
        $('.obj_slider .content li').eq(lastObjNum).clearQueue().animate({'left': '1005px'}, 600, 'linear', function(){
            $(this).show();
        });
        $('.obj_slider .content li').eq(objNum).clearQueue().animate({'left': '-335px'}, 600, 'linear');
        objNum++;
        if(objNum == 5){
            objNum = 0;
        }else if(objNum == -1){
            objNum = 4;
        }
        $('.obj_slider .content li').eq(objNum).clearQueue().animate({'left': 0}, 600, 'linear');
        if(objNum == 4){
            ndObjNum = 0;
        }else{
            ndObjNum = objNum + 1;
        }
        $('.obj_slider .content li').eq(ndObjNum).clearQueue().animate({'left': '335px'}, 600, 'linear');
        if(objNum >= 3){
            rdObjNum = objNum - 3;
        }else{
            rdObjNum = objNum + 2;
        }
        $('.obj_slider .content li').eq(rdObjNum).clearQueue().animate({'left': '670px'}, 600, 'linear');
    });
    
    /*obj_slider 플레이어*/
    var objPNum = 0;
    $('.obj_slider .player').click(function(){
        objPNum++;
        if(objPNum%2 == 1){
            $(this).addClass('stop');
            clearInterval(autoObj);
        }else if(objPNum%2 == 0){
            $(this).removeClass('stop');
            autoObj = setInterval(objSlider, 5000);
        }
    });
    
    
    /*detail_list*/
    $('.btn_detail').click(function(){
        $(this).toggleClass('on');
        $('.detail_list').toggle();
    });
    
    
    /*bottom infor*/
    $('.infor li').hover(function(){
        $(this).addClass('on');
        $(this).find('.sub_infor').show();
    }, function(){
        $(this).removeClass('on');
        $(this).find('.sub_infor').hide();
    });
});