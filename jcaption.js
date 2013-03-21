/*
 * jQuery hover caption
 * @author contato@joaodesign.com.br - http://www.joaodesign.com.br
 * @version 0.0.1
 * @date March 21, 2013
 * @category jQuery plugin
 * @copyright (c) 2013 contato@joaodesign (joaodesign.com.br)
 * @license CC Attribution-Share Alike 3.0 - http://creativecommons.org/licenses/by-sa/3.0/
 */

(function($) {
    $.fn.jcaption = function(options) {
        /* DEFAULTS */
        var defaults = {
            randomColor : false,    		/* Boolean */
            showBorder : true,    			/* Boolean */
            lengthBorder : 2,   			/* String  */
            borderStyle : 'solid',			/* String  */
            borderColor : 'rgb(34,34,34)',	/* String  */
           	defaultColor: 'rgb(30,100,200)'
        }
        var setings = $.extend( {}, defaults, options);
        return this.each (function() {
            
            var tagName, imgAttrTitle;
            tagName = $(this).children().prop("tagName").toLowerCase(); /* procura os elementos que são img*/
            imgAttrTitle = $(this).children().attr('title'); /* pega o valor do atributo title da imagem */
            
            if( tagName == "img" && imgAttrTitle != "") { /* Testa se o elemento é uma img e se o attr title esta setado */
                /* Se o if for verdadeiro engloba a imagem em uma div e adiciona um elemento span com o valor do title da imagem */
                $(this).children().wrap("<div class='center-caption'></div>").before("<span class='caption'>"+ imgAttrTitle +"</span>");
            } /* fim do if */
        }); /* fim do return this */
    }; /* fim do jcaption */
}) ( jQuery );
