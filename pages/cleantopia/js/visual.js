$(function(){
    /*초기값*/
    $('.indicator li').eq(0).addClass('on')
    $('.player').addClass('stop')
    
    var visualNum = 0
    var playNum = 0
    var animate = false
    
    function prev(){
        animate = true
        
        visualNum--
        
        if(visualNum == 2){
            visualNum = 0;
        }else if(visualNum == -1){
            visualNum = 1;
        }
        
        $('.slider li').eq(visualNum).css({'left': '-100%'})
        if(visualNum + 1 == 2){
            $('.slider li').eq(0).clearQueue().animate({'left': '100%'}, 400)
        }else{
            $('.slider li').eq(visualNum + 1).clearQueue().animate({'left': '100%'}, 400)
        }
        $('.slider li').eq(visualNum).clearQueue().animate({'left': 0}, 400, function(){
            animate = false
        })
        
        $('.indicator li').removeClass('on')
        $('.indicator li').eq(visualNum).addClass('on')
    }
    
    function next(){
        animate = true
        
        visualNum++
        
        if(visualNum == 2){
            visualNum = 0;
        }else if(visualNum == -1){
            visualNum = 1;
        }
        
        $('.slider li').eq(visualNum).css({'left': '100%'})
        $('.slider li').eq(visualNum-1).clearQueue().animate({'left': '-100%'}, 400)
        $('.slider li').eq(visualNum).clearQueue().animate({'left': 0}, 400, function(){
            animate = false
        })
        
        $('.indicator li').removeClass('on')
        $('.indicator li').eq(visualNum).addClass('on')
    }
    
    /*자동 슬라이드*/
    var visualSpeed = 6000
    var autoVisual = setInterval(next, visualSpeed)
    
    /*control*/
    $('.prev').click(function(){
        if(animate){
            return
        }else{
            clearInterval(autoVisual)
            prev()
            autoVisual = setInterval(next, visualSpeed)
        }
    })
    $('.next').click(function(){
        if(animate){
            return
        }else{
            clearInterval(autoVisual)
            next()
            autoVisual = setInterval(next, visualSpeed)
        }
    })
    
    /*indicator*/
    $('.indicator li').click(function(){
        var indiNum = $(this).index()
        if(indiNum == visualNum){
            return
        }else if(indiNum == 0){
            clearInterval(autoVisual)
            prev()
            autoVisual = setInterval(next, visualSpeed)
        }else if(indiNum == 1){
            clearInterval(autoVisual)
            next()
            autoVisual = setInterval(next, visualSpeed)
        }
    })
    
    $('.player').click(function(){
        playNum++
        if(playNum % 2 == 1){
            $(this).removeClass('stop')
            $(this).addClass('play')
            clearInterval(autoVisual)
        }else{
            $(this).removeClass('play')
            $(this).addClass('stop')
            autoVisual = setInterval(next, visualSpeed)
        }
    })
})