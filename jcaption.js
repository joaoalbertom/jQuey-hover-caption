/*
 * jQuery hover caption
 * @author contato@joaodesign.com.br - http://www.joaodesign.com.br
 * @version 0.0.1
 * @date March 21, 2013
 * @category jQuery plugin
 * @copyright (c) 2013 contato@joaodesign (joaodesign.com.br)
 * @license CC Attribution-Share Alike 3.0 - http://creativecommons.org/licenses/by-sa/3.0/
 */

; (function($) {
    $.fn.jcaption = function(options) {
        /* DEFAULTS */
        var defaults = {
            randomColor : false,
            Color: 'rgb(30,100,200)',
            animationHeight: '100%',
            opacity: 1,
            animationSpeed: 700
        }
        
        var setings = $.extend( {}, defaults, options);
        
        return this.each (function() {
            var tagName = $(this).children().prop("tagName").toLowerCase();
            var imgAttrTitle = $(this).children().attr('title');
            
            if( tagName == "img" && imgAttrTitle != "") {
                $(this).children().wrap("<div class='center-caption'></div>").after("<div class='caption' >"+ imgAttrTitle +"</div>").attr("title", '');    
			} /* fim do if */
            
            var obj = $('img.caption-receive');
			$('.center-caption').width( $(obj).width() + parseInt($(obj).css('padding-left')) + parseInt($(obj).css('padding-right')) + parseInt($(obj).css('borderLeftWidth')) + parseInt($(obj).css('borderRightWidth'))).css('float', $(obj).css('float'));
            
            $('.center-caption').css({'position' : 'relative'});
            $('.caption').css({ 'position' : 'absolute' , 'bottom' : '0' , 'left' : '0'});
            $(obj).css('position','relative');
            
            $('.center-caption').css({ 'margin' : $(obj).css('margin-top') + ' ' + $(obj).css('margin-right') + ' ' + $(obj).css('margin-bottom') + ' ' + $(obj).css('margin-left')});
            $(obj).css('margin', '0');
            
        }); /* fim do return this */
    }; /* fim do jcaption */
}) ( jQuery );
