/*!
	jQuery Autosize v1.16.12
	(c) 2013 Jack Moore - jacklmoore.com
	updated: 2013-05-31
	license: http://www.opensource.org/licenses/mit-license.php
*/
(function(e){var t,o={className:"autosizejs",append:"",callback:!1},n="hidden",i="border-box",a="lineHeight",s='<textarea tabindex="-1" style="position:absolute; top:-999px; left:0; right:auto; bottom:auto; border:0; -moz-box-sizing:content-box; -webkit-box-sizing:content-box; box-sizing:content-box; word-wrap:break-word; height:0 !important; min-height:0 !important; overflow:hidden;"/>',r=["fontFamily","fontSize","fontWeight","fontStyle","letterSpacing","textTransform","wordSpacing","textIndent"],l="oninput",c="onpropertychange",p=e(s).data("autosize",!0)[0];p.style.lineHeight="99px","99px"===e(p).css(a)&&r.push(a),p.style.lineHeight="",e.fn.autosize=function(a){return a=e.extend({},o,a||{}),p.parentNode!==document.body&&e(document.body).append(p),this.each(function(){function o(){if(t=b,p.className=a.className,u=parseInt(f.css("maxHeight"),10),e.each(r,function(e,t){p.style[t]=f.css(t)}),l in b){var o=b.value;b.value="",b.value=o}}function s(){var e,i,s;t!==b&&o(),p.value=b.value+a.append,p.style.overflowY=b.style.overflowY,s=parseInt(b.style.height,10),p.style.width=Math.max(f.width(),0)+"px",p.scrollTop=0,p.scrollTop=9e4,e=p.scrollTop,u&&e>u?(e=u,i="scroll"):h>e&&(e=h),e+=g,b.style.overflowY=i||n,s!==e&&(b.style.height=e+"px",x&&a.callback.call(b,b))}var h,u,d,b=this,f=e(b),g=0,x=e.isFunction(a.callback);f.data("autosize")||((f.css("box-sizing")===i||f.css("-moz-box-sizing")===i||f.css("-webkit-box-sizing")===i)&&(g=f.outerHeight()-f.height()),h=Math.max(parseInt(f.css("minHeight"),10)-g||0,f.height()),d="none"===f.css("resize")||"vertical"===f.css("resize")?"none":"horizontal",f.css({overflow:n,overflowY:n,wordWrap:"break-word",resize:d}).data("autosize",!0),c in b?l in b?b[l]=b.onkeyup=s:b[c]=function(){"value"===event.propertyName&&s()}:b[l]=s,e(window).on("resize",function(){active=!1,s()}),f.on("autosize",function(){active=!1,s()}),s())})}})(window.jQuery||window.Zepto);