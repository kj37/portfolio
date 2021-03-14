$(function(){
    $('label').click(function(){
        var num=$(this).index()+1;
        $('.label_box').hide();
        $('.mv_box').show();
        $('.mv_'+num).show();
    });
});