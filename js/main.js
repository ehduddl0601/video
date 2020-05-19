$(function(){
    $(function(){
    $('#gnb .gnb_li').hover(function() { 
        $(this).children('#sub_gnb').stop().fadeIn(); 
        },
        function() { 
        $(this).children('#sub_gnb').stop().fadeOut();
    });
    });
});