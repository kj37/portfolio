// 테마 체인지
let themaNum = 0
function themaChange(){
  themaNum++
  if(themaNum % 2 == 1){
    $(':root').css({'--primaryColor': '#1a1a1a', '--secondaryColor': '#fff'})
    $('.tools').addClass('dark')
    $('.tools>li:nth-child(1)>span.graph>span').css({'--bgc': '#31a8ff'})
    $('.tools>li:nth-child(2)>span.graph>span').css({'--bgc': '#ff9a00'})
    $('.tools>li:nth-child(3)>span.graph>span').css({'--bgc': '#9999ff'})
    $('.specList>li>ul>li>span.graph').css({'backgroundColor': '#333'})
  }else{
    $(':root').css({'--primaryColor': '#fff', '--secondaryColor': '#1a1a1a'})
    $('.tools').removeClass('dark')
    $('.tools>li:nth-child(1)>span.graph>span').css({'--bgc': '#001e36'})
    $('.tools>li:nth-child(2)>span.graph>span').css({'--bgc': '#330000'})
    $('.tools>li:nth-child(3)>span.graph>span').css({'--bgc': '#00005b'})
    $('.specList>li>ul>li>span.graph').css({'backgroundColor': '#eaeaea'})
  }
}

$(function(){
  /*스크롤 관련 함수*/
  const $scroll = $('html, body');
  const $wrap = $('.wrap');
  let resetST = $(window).scrollTop();
  let windowHeight = $(window).height();
  let menuNum = 0;

  if(resetST < windowHeight){
    $('.menu li').eq(0).addClass('on')
    menuNum = 0;
  }else if(resetST < windowHeight*2){
    $('.menu li').eq(1).addClass('on')
    menuNum = 1;
  }else if(resetST < windowHeight*3){
    $('.menu li').eq(2).addClass('on')
    menuNum = 2;
  }else{
    $('.menu li').eq(3).addClass('on')
    menuNum = 3;
  }

  $('.menu li a').click(function(){
    const link = $(this).attr('href');
    let posTop = $(link).offset().top;
    menuNum = $(this).parent('li').index();
    $('.menu li').each(function(){
      if($(this).hasClass('on')){
        $(this).removeClass('on')
      }
    });
    $('.menu li').eq(menuNum).addClass('on');
    $scroll.clearQueue().animate({'scrollTop': posTop}, 1000, 'easeInOutExpo');
    return false;
  });

  /*스크롤 이동*/
  $(window).on('mousewheel DOMMouseScroll', function(event){
    if($scroll.filter(':animated').length > 0){
      return;
    }
    if(event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0){
      if(menuNum > 0){
        $('.menu li a').eq(menuNum-1).triggerHandler('click');
      }
    }else{
      if(menuNum < $wrap.length){
        $('.menu li a').eq(menuNum+1).triggerHandler('click');
      }
    }
  });

  new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    direction: 'horizontal',
    slidesPerView: 1,//개수조정가능
    paginationClickable: true,
    spaceBetween: 0,
    mousewheelControl: false
  });
})