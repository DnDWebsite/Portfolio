!function(a){function c(b,c,e,h,i){function B(){p.unbind("webkitTransitionEnd transitionend otransitionend oTransitionEnd"),c&&d(c,e,h,i),i.startOrder=[],i.newOrder=[],i.origSort=[],i.checkSort=[],o.removeStyle(i.prefix+"filter, filter, "+i.prefix+"transform, transform, opacity, display").css(i.clean).removeAttr("data-checksum"),window.atob||o.css({display:"none",opacity:"0"});var a=i.resizeContainer?"height":"";p.removeStyle(i.prefix+"transition, transition, "+i.prefix+"perspective, perspective, "+i.prefix+"perspective-origin, perspective-origin, "+a),"list"==i.layoutMode?(r.css({display:i.targetDisplayList,opacity:"1"}),i.origDisplay=i.targetDisplayList):(r.css({display:i.targetDisplayGrid,opacity:"1"}),i.origDisplay=i.targetDisplayGrid),i.origLayout=i.layoutMode;setTimeout(function(){if(o.removeStyle(i.prefix+"transition, transition"),i.mixing=!1,"function"==typeof i.onMixEnd){var a=i.onMixEnd.call(this,i);i=a?a:i}})}if(clearInterval(i.failsafe),i.mixing=!0,i.filter=b,"function"==typeof i.onMixStart){var j=i.onMixStart.call(this,i);i=j?j:i}for(var k=i.transitionSpeed,l=0;l<2;l++){var m=0==l?m=i.prefix:"";i.transition[m+"transition"]="all "+k+"ms linear",i.transition[m+"transform"]=m+"translate3d(0,0,0)",i.perspective[m+"perspective"]=i.perspectiveDistance+"px",i.perspective[m+"perspective-origin"]=i.perspectiveOrigin}var n=i.targetSelector,o=h.find(n);o.each(function(){this.data={}});var p=o.parent();p.css(i.perspective),i.easingFallback="ease-in-out","smooth"==i.easing&&(i.easing="cubic-bezier(0.25, 0.46, 0.45, 0.94)"),"snap"==i.easing&&(i.easing="cubic-bezier(0.77, 0, 0.175, 1)"),"windback"==i.easing&&(i.easing="cubic-bezier(0.175, 0.885, 0.320, 1.275)",i.easingFallback="cubic-bezier(0.175, 0.885, 0.320, 1)"),"windup"==i.easing&&(i.easing="cubic-bezier(0.6, -0.28, 0.735, 0.045)",i.easingFallback="cubic-bezier(0.6, 0.28, 0.735, 0.045)");var q="list"==i.layoutMode&&null!=i.listEffects?i.listEffects:i.effects;Array.prototype.indexOf&&(i.fade=q.indexOf("fade")>-1?"0":"",i.scale=q.indexOf("scale")>-1?"scale(.01)":"",i.rotateZ=q.indexOf("rotateZ")>-1?"rotate(180deg)":"",i.rotateY=q.indexOf("rotateY")>-1?"rotateY(90deg)":"",i.rotateX=q.indexOf("rotateX")>-1?"rotateX(90deg)":"",i.blur=q.indexOf("blur")>-1?"blur(8px)":"",i.grayscale=q.indexOf("grayscale")>-1?"grayscale(100%)":"");var r=a(),s=a(),t=[],u=!1;"string"===typeof b?t=g(b):(u=!0,a.each(b,function(a){t[a]=g(this)})),"or"==i.filterLogic?(""==t[0]&&t.shift(),t.length<1?s=s.add(h.find(n+":visible")):o.each(function(){var b=a(this);if(u){var c=0;a.each(t,function(){this.length?b.is("."+this.join(", ."))&&c++:c>0&&c++}),c==t.length?r=r.add(b):s=s.add(b)}else b.is("."+t.join(", ."))?r=r.add(b):s=s.add(b)})):(r=r.add(p.find(n+"."+t.join("."))),s=s.add(p.find(n+":not(."+t.join(".")+"):visible")));var v=r.length,w=a(),x=a(),y=a();if(s.each(function(){var b=a(this);"none"!=b.css("display")&&(w=w.add(b),y=y.add(b))}),r.filter(":visible").length==v&&!w.length&&!c){if(i.origLayout==i.layoutMode)return B(),!1;if(1==r.length)return"list"==i.layoutMode?(h.addClass(i.listClass),h.removeClass(i.gridClass),y.css("display",i.targetDisplayList)):(h.addClass(i.gridClass),h.removeClass(i.listClass),y.css("display",i.targetDisplayGrid)),B(),!1}if(i.origHeight=p.height(),r.length){if(h.removeClass(i.failClass),r.each(function(){var b=a(this);"none"==b.css("display")?x=x.add(b):y=y.add(b)}),i.origLayout!=i.layoutMode&&0==i.animateGridList)return"list"==i.layoutMode?(h.addClass(i.listClass),h.removeClass(i.gridClass),y.css("display",i.targetDisplayList)):(h.addClass(i.gridClass),h.removeClass(i.listClass),y.css("display",i.targetDisplayGrid)),B(),!1;if(!window.atob)return B(),!1;if(o.css(i.clean),y.each(function(){this.data.origPos=a(this).offset()}),"list"==i.layoutMode?(h.addClass(i.listClass),h.removeClass(i.gridClass),x.css("display",i.targetDisplayList)):(h.addClass(i.gridClass),h.removeClass(i.listClass),x.css("display",i.targetDisplayGrid)),x.each(function(){this.data.showInterPos=a(this).offset()}),w.each(function(){this.data.hideInterPos=a(this).offset()}),y.each(function(){this.data.preInterPos=a(this).offset()}),"list"==i.layoutMode?y.css("display",i.targetDisplayList):y.css("display",i.targetDisplayGrid),c&&d(c,e,h,i),c&&f(i.origSort,i.checkSort))return B(),!1;w.hide(),x.each(function(){this.data.finalPos=a(this).offset()}),y.each(function(){this.data.finalPrePos=a(this).offset()}),i.newHeight=p.height(),c&&d("reset",null,h,i),x.hide(),y.css("display",i.origDisplay),"block"==i.origDisplay?(h.addClass(i.listClass),x.css("display",i.targetDisplayList)):(h.removeClass(i.listClass),x.css("display",i.targetDisplayGrid)),i.resizeContainer&&p.css("height",i.origHeight+"px");for(var z={},l=0;l<2;l++){var m=0==l?m=i.prefix:"";z[m+"transform"]=i.scale+" "+i.rotateX+" "+i.rotateY+" "+i.rotateZ,z[m+"filter"]=i.blur+" "+i.grayscale}x.css(z),y.each(function(){var b=this.data,c=a(this);c.hasClass("mix_tohide")?(b.preTX=b.origPos.left-b.hideInterPos.left,b.preTY=b.origPos.top-b.hideInterPos.top):(b.preTX=b.origPos.left-b.preInterPos.left,b.preTY=b.origPos.top-b.preInterPos.top);for(var d={},e=0;e<2;e++){var f=0==e?f=i.prefix:"";d[f+"transform"]="translate("+b.preTX+"px,"+b.preTY+"px)"}c.css(d)}),"list"==i.layoutMode?(h.addClass(i.listClass),h.removeClass(i.gridClass)):(h.addClass(i.gridClass),h.removeClass(i.listClass));{setTimeout(function(){if(i.resizeContainer){for(var b={},c=0;c<2;c++){var d=0==c?d=i.prefix:"";b[d+"transition"]="all "+k+"ms ease-in-out",b.height=i.newHeight+"px"}p.css(b)}w.css("opacity",i.fade),x.css("opacity",1),x.each(function(){var b=this.data;b.tX=b.finalPos.left-b.showInterPos.left,b.tY=b.finalPos.top-b.showInterPos.top;for(var c={},d=0;d<2;d++){var e=0==d?e=i.prefix:"";c[e+"transition-property"]=e+"transform, "+e+"filter, opacity",c[e+"transition-timing-function"]=i.easing+", linear, linear",c[e+"transition-duration"]=k+"ms",c[e+"transition-delay"]="0",c[e+"transform"]="translate("+b.tX+"px,"+b.tY+"px)",c[e+"filter"]="none"}a(this).css("-webkit-transition","all "+k+"ms "+i.easingFallback).css(c)}),y.each(function(){var b=this.data;b.tX=0!=b.finalPrePos.left?b.finalPrePos.left-b.preInterPos.left:0,b.tY=0!=b.finalPrePos.left?b.finalPrePos.top-b.preInterPos.top:0;for(var c={},d=0;d<2;d++){var e=0==d?e=i.prefix:"";c[e+"transition"]="all "+k+"ms "+i.easing,c[e+"transform"]="translate("+b.tX+"px,"+b.tY+"px)"}a(this).css("-webkit-transition","all "+k+"ms "+i.easingFallback).css(c)});for(var e={},c=0;c<2;c++){var d=0==c?d=i.prefix:"";e[d+"transition"]="all "+k+"ms "+i.easing+", "+d+"filter "+k+"ms linear, opacity "+k+"ms linear",e[d+"transform"]=i.scale+" "+i.rotateX+" "+i.rotateY+" "+i.rotateZ,e[d+"filter"]=i.blur+" "+i.grayscale,e.opacity=i.fade}w.css(e),p.bind("webkitTransitionEnd transitionend otransitionend oTransitionEnd",function(b){(b.originalEvent.propertyName.indexOf("transform")>-1||b.originalEvent.propertyName.indexOf("opacity")>-1)&&(n.indexOf(".")>-1?a(b.target).hasClass(n.replace(".",""))&&B():a(b.target).is(n)&&B())})},10)}i.failsafe=setTimeout(function(){i.mixing&&B()},k+400)}else{if(i.resizeContainer&&p.css("height",i.origHeight+"px"),!window.atob)return B(),!1;w=s;{setTimeout(function(){if(p.css(i.perspective),i.resizeContainer){for(var a={},b=0;b<2;b++){var c=0==b?c=i.prefix:"";a[c+"transition"]="height "+k+"ms ease-in-out",a.height=i.minHeight+"px"}p.css(a)}o.css(i.transition);var d=s.length;if(d){for(var e={},b=0;b<2;b++){var c=0==b?c=i.prefix:"";e[c+"transform"]=i.scale+" "+i.rotateX+" "+i.rotateY+" "+i.rotateZ,e[c+"filter"]=i.blur+" "+i.grayscale,e.opacity=i.fade}w.css(e),p.bind("webkitTransitionEnd transitionend otransitionend oTransitionEnd",function(a){(a.originalEvent.propertyName.indexOf("transform")>-1||a.originalEvent.propertyName.indexOf("opacity")>-1)&&(h.addClass(i.failClass),B())})}else i.mixing=!1},10)}}}function d(b,c,d,e){function f(a,c){var d=isNaN(1*a.attr(b))?a.attr(b).toLowerCase():1*a.attr(b),e=isNaN(1*c.attr(b))?c.attr(b).toLowerCase():1*c.attr(b);return d<e?-1:d>e?1:0}function g(a){"asc"==c?i.prepend(a).prepend(" "):i.append(a).append(" ")}function h(a){for(var b=a.slice(),c=b.length,d=c;d--;){var e=parseInt(Math.random()*c),f=b[d];b[d]=b[e],b[e]=f}return b}d.find(e.targetSelector).wrapAll('<div class="mix_sorter"/>');var i=d.find(".mix_sorter");if(e.origSort.length||i.find(e.targetSelector+":visible").each(function(){a(this).wrap("<s/>"),e.origSort.push(a(this).parent().html().replace(/\s+/g,"")),a(this).unwrap()}),i.empty(),"reset"==b)a.each(e.startOrder,function(){i.append(this).append(" ")});else if("default"==b)a.each(e.origOrder,function(){g(this)});else if("random"==b)e.newOrder.length||(e.newOrder=h(e.startOrder)),a.each(e.newOrder,function(){i.append(this).append(" ")});else if("custom"==b)a.each(c,function(){g(this)});else{if("undefined"===typeof e.origOrder[0].attr(b))return console.log("No such attribute found. Terminating"),!1;e.newOrder.length||(a.each(e.origOrder,function(){e.newOrder.push(a(this))}),e.newOrder.sort(f)),a.each(e.newOrder,function(){g(this)})}e.checkSort=[],i.find(e.targetSelector+":visible").each(function(b){var c=a(this);0==b&&c.attr("data-checksum","1"),c.wrap("<s/>"),e.checkSort.push(c.parent().html().replace(/\s+/g,"")),c.unwrap()}),d.find(e.targetSelector).unwrap()}function e(a){for(var b=["Webkit","Moz","O","ms"],c=0;c<b.length;c++)if(b[c]+"Transition"in a.style)return b[c];return"transition"in a.style?"":!1}function f(a,b){if(a.length!=b.length)return!1;for(var c=0;c<b.length;c++){if(a[c].compare&&!a[c].compare(b[c]))return!1;if(a[c]!==b[c])return!1}return!0}function g(b){b=b.replace(/\s{2,}/g," ");var c=b.split(" ");return a.each(c,function(a){"all"==this&&(c[a]="mix_all")}),""==c[0]&&c.shift(),c}var b={init:function(b){return this.each(function(){var f={targetSelector:".mix",filterSelector:".filter",sortSelector:".sort",buttonEvent:"click",effects:["fade","scale"],listEffects:null,easing:"smooth",layoutMode:"grid",targetDisplayGrid:"inline-block",targetDisplayList:"block",listClass:"",gridClass:"",transitionSpeed:600,showOnLoad:"all",sortOnLoad:!1,multiFilter:!1,filterLogic:"or",resizeContainer:!0,minHeight:0,failClass:"fail",perspectiveDistance:"3000",perspectiveOrigin:"50% 50%",animateGridList:!0,onMixLoad:null,onMixStart:null,onMixEnd:null,container:null,origOrder:[],startOrder:[],newOrder:[],origSort:[],checkSort:[],filter:"",mixing:!1,origDisplay:"",origLayout:"",origHeight:0,newHeight:0,isTouch:!1,resetDelay:0,failsafe:null,prefix:"",easingFallback:"ease-in-out",transition:{},perspective:{},clean:{},fade:"1",scale:"",rotateX:"",rotateY:"",rotateZ:"",blur:"",grayscale:""};b&&a.extend(f,b),this.config=f,a.support.touch="ontouchend"in document,a.support.touch&&(f.isTouch=!0,f.resetDelay=350),f.container=a(this);var g=f.container;if(f.prefix=e(g[0]),f.prefix=f.prefix?"-"+f.prefix.toLowerCase()+"-":"",g.find(f.targetSelector).each(function(){f.origOrder.push(a(this))}),f.sortOnLoad){var h,i;a.isArray(f.sortOnLoad)?(h=f.sortOnLoad[0],i=f.sortOnLoad[1],a(f.sortSelector+"[data-sort="+f.sortOnLoad[0]+"][data-order="+f.sortOnLoad[1]+"]").addClass("active")):(a(f.sortSelector+"[data-sort="+f.sortOnLoad+"]").addClass("active"),h=f.sortOnLoad,f.sortOnLoad="desc"),d(h,i,g,f)}for(var j=0;j<2;j++){var k=0==j?k=f.prefix:"";f.transition[k+"transition"]="all "+f.transitionSpeed+"ms ease-in-out",f.perspective[k+"perspective"]=f.perspectiveDistance+"px",f.perspective[k+"perspective-origin"]=f.perspectiveOrigin}for(var j=0;j<2;j++){var k=0==j?k=f.prefix:"";f.clean[k+"transition"]="none"}"list"==f.layoutMode?(g.addClass(f.listClass),f.origDisplay=f.targetDisplayList):(g.addClass(f.gridClass),f.origDisplay=f.targetDisplayGrid),f.origLayout=f.layoutMode;var l=f.showOnLoad.split(" ");a.each(l,function(){a(f.filterSelector+'[data-filter="'+this+'"]').addClass("active")}),g.find(f.targetSelector).addClass("mix_all"),"all"==l[0]&&(l[0]="mix_all",f.showOnLoad="mix_all");var m=a();a.each(l,function(){m=m.add(a("."+this))}),m.each(function(){var b=a(this);"list"==f.layoutMode?b.css("display",f.targetDisplayList):b.css("display",f.targetDisplayGrid),b.css(f.transition)});setTimeout(function(){f.mixing=!0,m.css("opacity","1");setTimeout(function(){if(m.removeStyle(f.prefix+"transition, transition").css("list"==f.layoutMode?{display:f.targetDisplayList,opacity:1}:{display:f.targetDisplayGrid,opacity:1}),f.mixing=!1,"function"==typeof f.onMixLoad){var a=f.onMixLoad.call(this,f);f=a?a:f}},f.transitionSpeed)},10);f.filter=f.showOnLoad,a(f.sortSelector).bind(f.buttonEvent,function(){if(!f.mixing){var b=a(this),d=b.attr("data-sort"),e=b.attr("data-order");if(b.hasClass("active")){if("random"!=d)return!1}else a(f.sortSelector).removeClass("active"),b.addClass("active");g.find(f.targetSelector).each(function(){f.startOrder.push(a(this))}),c(f.filter,d,e,g,f)}}),a(f.filterSelector).bind(f.buttonEvent,function(){if(!f.mixing){var b=a(this);if(0==f.multiFilter)a(f.filterSelector).removeClass("active"),b.addClass("active"),f.filter=b.attr("data-filter"),a(f.filterSelector+'[data-filter="'+f.filter+'"]').addClass("active");else{var d=b.attr("data-filter");if(b.hasClass("active")){b.removeClass("active");var e=new RegExp("(\\s|^)"+d);f.filter=f.filter.replace(e,"")}else b.addClass("active"),f.filter=f.filter+" "+d}c(f.filter,null,null,g,f)}})})},toGrid:function(){return this.each(function(){var b=this.config;"grid"!=b.layoutMode&&(b.layoutMode="grid",c(b.filter,null,null,a(this),b))})},toList:function(){return this.each(function(){var b=this.config;"list"!=b.layoutMode&&(b.layoutMode="list",c(b.filter,null,null,a(this),b))})},filter:function(b){return this.each(function(){var d=this.config;d.mixing||(a(d.filterSelector).removeClass("active"),a(d.filterSelector+'[data-filter="'+b+'"]').addClass("active"),c(b,null,null,a(this),d))})},sort:function(b){return this.each(function(){var d=this.config,e=a(this);if(!d.mixing){if(a(d.sortSelector).removeClass("active"),a.isArray(b)){var f=b[0],g=b[1];a(d.sortSelector+'[data-sort="'+b[0]+'"][data-order="'+b[1]+'"]').addClass("active")}else{a(d.sortSelector+'[data-sort="'+b+'"]').addClass("active");var f=b,g="desc"}e.find(d.targetSelector).each(function(){d.startOrder.push(a(this))}),c(d.filter,f,g,e,d)}})},multimix:function(b){return this.each(function(){var d=this.config,e=a(this);multiOut={filter:d.filter,sort:null,order:"desc",layoutMode:d.layoutMode},a.extend(multiOut,b),d.mixing||(a(d.filterSelector).add(d.sortSelector).removeClass("active"),a(d.filterSelector+'[data-filter="'+multiOut.filter+'"]').addClass("active"),"undefined"!==typeof multiOut.sort&&(a(d.sortSelector+'[data-sort="'+multiOut.sort+'"][data-order="'+multiOut.order+'"]').addClass("active"),e.find(d.targetSelector).each(function(){d.startOrder.push(a(this))})),d.layoutMode=multiOut.layoutMode,c(multiOut.filter,multiOut.sort,multiOut.order,e,d))})},remix:function(b){return this.each(function(){var d=this.config,e=a(this);d.origOrder=[],e.find(d.targetSelector).each(function(){var b=a(this);b.addClass("mix_all"),d.origOrder.push(b)}),d.mixing||"undefined"===typeof b||(a(d.filterSelector).removeClass("active"),a(d.filterSelector+'[data-filter="'+b+'"]').addClass("active"),c(b,null,null,e,d))})}};a.fn.mixitup=function(a){return b[a]?b[a].apply(this,Array.prototype.slice.call(arguments,1)):"object"!==typeof a&&a?void 0:b.init.apply(this,arguments)},a.fn.removeStyle=function(b){return this.each(function(){var c=a(this);b=b.replace(/\s+/g,"");var d=b.split(",");a.each(d,function(){var a=new RegExp(this.toString()+"[^;]+;?","g");c.attr("style",function(b,c){return c?c.replace(a,""):void 0})})})}}(jQuery);