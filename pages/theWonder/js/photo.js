$(function(){
    /*변수 지정*/
    var $main = $('.img_box img');
    var $thumb = $('.thumb_BG img');
    var $prev = $('.fa-chevron-left');
    var $next = $('.fa-chevron-right');
    var num = 1;
    var timerNum = 2000;

    /*썸네일 크기*/
    $thumb.each(function(){
        if($(this).width() < $(this).height()){
            $(this).addClass('long');
        }
    });

    /*왼쪽 버튼을 눌렀을 때*/
    $prev.click(function(){
        clearInterval(timer);

        num--;

        if(num <= 1){
            num = 1;
            $prev.removeClass('moving');
        }else{
            $('.move_box .fas').addClass('moving');
        }

        $main.attr('src', 'img/picture/photo_'+num+'.jpg');

        $thumb.removeClass('choose');
        $thumb.eq(num-1).addClass('choose');

        $('.thumbnail').stop().animate({'scrollLeft': 168*(num-6)+'px'}, 200);

        timer = setInterval(auto, timerNum);
    });

    /*오른쪽 버튼을 눌렀을 때*/
    $next.click(function(){
        clearInterval(timer);

        num++;

        if(num >= 40){
            num = 40;
            $next.removeClass('moving');
        }else{
            $('.move_box .fas').addClass('moving');
        };

        $main.attr('src', 'img/picture/photo_'+num+'.jpg');

        $thumb.removeClass('choose');
        $thumb.eq(num-1).addClass('choose');

        $('.thumbnail').stop().animate({'scrollLeft': 168*(num-6)+'px'}, 200);

        timer = setInterval(auto, timerNum);
    });

    /*썸네일을 클릭했을 때*/
    $('.thumb_BG').click(function(){
        clearInterval(timer);

        var thumNum = $(this).index()+1;
        num = thumNum;

        $main.attr('src', 'img/picture/photo_'+thumNum+'.jpg');

        $thumb.each(function(){
            if($(this).hasClass('choose')){
                $(this).removeClass('choose');
            }
        });
        $(this).find('img').addClass('choose');

        timer = setInterval(auto, timerNum);
    });

    /*스크롤 이동시*/
    $('.thumbnail').scroll(function(){
        clearInterval(timer);

        timer = setInterval(auto, timerNum);
    });

    /*자동화*/
    var timer = setInterval(auto, timerNum);

    function auto(){
        num++;
        if(num >= 41){
            num=1
        };

        $main.attr('src', 'img/picture/photo_'+num+'.jpg');

        $thumb.each(function(){
            if($(this).hasClass('choose')){
                $(this).removeClass('choose');
            }
        })
        $thumb.eq(num-1).addClass('choose');

        $('.thumbnail').stop().animate({'scrollLeft': 168*(num-6)+'px'}, 200);
    }
});