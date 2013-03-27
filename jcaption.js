/*
 * jQuery hover caption
 * @author contato@joaodesign.com.br - http://www.joaodesign.com.br
 * @version 0.0.1
 * @date March 21, 2013
 * @category jQuery plugin
 * @copyright (c) 2013 contato@joaodesign.com.br (joaodesign.com.br)
 */
; (function($) {
    $.fn.jcaption = function(options) {
        /* DEFAULTS */
        var defaults = {
            randomColor : true,
            bgColor: "rgb(0,15,22)",
            fontColor: "rgb(34,34,34)",
            animateShow: 'easeOutBounce',
            animateHide : 'easeOutBounce',
            animationSpeed : 700,
            opacity : 0,
            fontSize : '14px',
        }
        var setings = $.extend( {}, defaults, options);
        return this.each (function() {
            var obj = $(this);
            var caption = $(obj).attr('title');
            $(obj).wrap("<div class='container-caption'></div>").before("<div class='caption'>" + caption + " </div> ").attr('title', "");
            $(obj).parents('div.container-caption').css('width', $(obj).width() + parseInt($(obj).css('padding-left')) + parseInt($(obj).css('padding-right')) + parseInt($(obj).css('borderLeftWidth')) + parseInt($(obj).css('borderRightWidth'))).css('float', $(obj).css('float'));
            $('.container-caption').css('position' , 'relative');
            $('.caption').css({ 'position' : 'absolute'});
            $('.caption').css({ 'top' : '5%', 'left' : '5%' });
            var marginLeft = '-0%';
            var marginTop = '-0%';
            $('.caption').css({'margin-left' : marginLeft, 'margin-top' : marginTop });
            $('.caption').css({'color': setings.fontColor, 'opacity' : '0.0' });
            var finalWidth = (($(obj).width()/10)*9);
            var finalHeight = (($(obj).height()/10)*9);
            /* ---------------- random color true ---------------- */
            if(setings.randomColor == true) {
                var r, g, b;
                r = Math.floor(Math.random()*255)-70;
                g = Math.floor(Math.random()*255)-70;
                b = Math.floor(Math.random()*255)-70;
                setings.bgColor = 'rgb(' + r + ',' + g + ',' + b + ')';
            }
                /* ---------------- aqui a magica acontece ---------------- */
                $(obj).bind('mouseover', function(){
                    /* ---------------- random color true ---------------- */
                    if(setings.randomColor == true) {
                        var r, g, b;
                        r = Math.floor(Math.random()*255)-70;
                        g = Math.floor(Math.random()*255)-70;
                        b = Math.floor(Math.random()*255)-70;
                        setings.bgColor = 'rgb(' + r + ',' + g + ',' + b + ')';
                    }
                    $('.caption').css({ 'background' : setings.bgColor, 'color' : setings.fontColor });
                    $(obj).prev().stop().animate({
                        width: finalWidth,
                        opacity : 0.7
                    }, setings.animationSpeed, setings.animateShow ,function() {
                        $(obj).prev().stop().animate({
                            height: finalHeight,
                            opacity: 0.8
                        }, setings.animationSpeed , setings.animateShow)
                    });   
                });
                $(obj).bind('mouseout', function(){
                    $(obj).prev().stop().animate({
                        width : 10,
                        opacity: 0.4
                    }, setings.animationSpeed, setings.animateHide,function(){
                        $(obj).prev().stop().animate({
                            height: 10,
                            opacity: 0.0
                        }, setings.animationSpeed, setings.animateHide)
                    });
                });
        }); /* fim do return this */
    }; /* fim do jcaption */
}) ( jQuery );
