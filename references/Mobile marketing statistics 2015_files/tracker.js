var _wow=_wow||[],wowTracking=wowTracking||(function(){var j,g=document,v=navigator,B=window,d,q=false,x=[],h=B.encodeURIComponent,f=B.decodeURIComponent,A=unescape,w={Page:"Page",Download:"Download",Video:"Video",VCab:"VCab",Communigator:"Communigator"};function s(i){return"undefined"!==typeof i}function t(i){return typeof i==="string"||i instanceof String}function k(G){var C=G.length,F=0,D=G.charAt(C),i="/",E=G;if(D!=i){while(D!=i){D=G.charAt(C);F=C;C--}E=G.substr(F+1,G.length)}return E}function c(){var D,C,E;for(D=0;D<arguments.length;D+=1){E=arguments[D];C=E.shift();if(t(C)){d[C].apply(d,E)}else{C.apply(d,E)}}}function m(D){var i=new RegExp("^(?:(?:https?|ftp):)/*(?:[^@]+@)?([^:/#]+)"),C=i.exec(D);return C?C[1]:D}function e(){var i;if(j){do{i=new Date()}while(i.getTimeAlias()<j)}}function u(){var C;if(!q){q=true;for(C=0;C<x.length;C++){x[C]()}}return true}function b(){var C;if(g.addEventListener){a(g,"DOMContentLoaded",function i(){g.removeEventListener("DOMContentLoaded",i,false);u()})}else{if(g.attachEvent){g.attachEvent("onreadystatechange",function i(){if(g.readyState==="complete"){g.detachEvent("onreadystatechange",i);u()}});if(g.documentElement.doScroll&&B===B.top){(function i(){if(!q){try{g.documentElement.doScroll("left")}catch(D){setTimeout(i,0);return}u()}}())}}}if((new RegExp("WebKit")).test(v.userAgent)){C=setInterval(function(){if(q||/loaded|complete/.test(g.readyState)){clearInterval(C);u()}},10)}a(B,"load",u,false)}function a(i,D,C,E){if(i.addEventListener){i.addEventListener(D,C,E);return true}if(i.attachEvent){return i.attachEvent("on"+D,C)}i["on"+D]=C}function p(E){var C=g.createElement("a");C.href=E;var I=o("utm_source",C.search);if(I===""){I=l("utm_source",C.hash);if(I!==""){if(C.search.length===0){C.search+="?utm_source="+I}else{C.search+="&utm_source="+I}}}var H=o("utm_medium",C.search);if(H===""){H=l("utm_medium",C.hash);if(H!==""){if(C.search.length===0){C.search+="?utm_medium="+H}else{C.search+="&utm_medium="+H}}}var F=o("utm_campaign",C.search);if(F===""){F=l("utm_campaign",C.hash);if(F!==""){if(C.search.length===0){C.search+="?utm_campaign="+F}else{C.search+="&utm_campaign="+F}}}var J=o("utm_term",C.search);if(J===""){J=l("utm_term",C.hash);if(J!==""){if(C.search.length===0){C.search+="?utm_term="+J}else{C.search+="&utm_term="+J}}}var G=o("utm_content",C.search);if(G===""){G=l("utm_content",C.hash);if(G!==""){if(C.search.length===0){C.search+="?utm_content="+G}else{C.search+="&utm_content="+G}}}var D=o("gator_td",C.search);if(D===""){D=l("gator_td",C.hash);if(D!==""){if(C.search.length===0){C.search+="?gator_td="+D}else{C.search+="&gator_td="+D}}}var i=o("_em",C.search);if(i===""){i=l("_em",C.hash);if(i!==""){if(C.search.length===0){C.search+="?_em="+i}else{C.search+="&_em="+i}}}var K=o("wysi.bz",C.search);if(K===""){K=l("wysi.bz",C.hash);if(K!==""){if(C.search.length===0){C.search+="?wysi.bz="+K}else{C.search+="&wysi.bz="+K}}}C.hash="";return C.href}function l(C,i){C=C.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var D=new RegExp(C+"=([^&]*)");var E=D.exec(i);if(E===null){return""}else{return decodeURIComponent(E[1].replace(/\+/g," "))}}function o(C,G){var i=B.location;if(G!==void 0){i=G}C=C.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var E="[\\?&]"+C+"=([^&#]*)";var D=new RegExp(E);var F=D.exec(i);if(F===null){return""}else{return decodeURIComponent(F[1].replace(/\+/g," "))}}function n(F,i){var D="wowCallback"+n.counter++;var C="window."+D;if(F.indexOf("?")===-1){F+="?callback="+C}else{F+="&callback="+C}var E=g.createElement("script");B[D]=function(H){try{i(H)}finally{B[D]=undefined;try{delete B[D]}catch(G){}E.parentNode.removeChild(E)}};E.src=F;if(g.body!==null){g.body.appendChild(E)}else{B.setTimeout(function(){try{var G=document.getElementsByTagName("body")[0];G.appendChild(E)}catch(H){}},1000)}}n.counter=0;function y(G,Q,ao){var F=G||"",an=ao||"t.wowanalytics.co.uk",W=g.title.substr(0,50),X=ak(B.location.href),K="7z|aac|ar[cj]|as[fx]|avi|bin|csv|deb|dmg|doc|exe|flv|gz|gzip|hqx|jar|js|mp(2|3|4|e?g)|mov(ie)?|ms[ip]|od[bfgpst]|og[gv]|pdf|phps|ppt|qtm?|ra[mr]?|rpm|sea|sit|tar|t?bz2?|tgz|torrent|txt|wav|wm[av]|wpd||xls|xml|z|zip",J=[],L=[],N=500,H=Q||"wow.",V,O=63072000000,M=1200000,I,Y=false,af,ag,R=g.location.protocol==="https",S="",T="",U="",P=false;function am(ap,aw,at,au,aq,av){var ar;if(at){ar=new Date();ar.setTime(ar.getTime()+at)}g.cookie=ap+"="+h(aw)+(at?";expires="+ar.toGMTString():"")+";path="+(au||"/")+(aq?";domain="+aq:"")+(av?";secure":"")}function aa(aq){var ar=new RegExp("(^|;)[ ]*"+aq+"=([^;]*)"),ap=ar.exec(g.cookie);return ap?f(ap[2]):""}function ab(ap){return H+ap}function ak(aq){var ap=new RegExp("#.*");return aq.replace(ap,"")}function al(ar){if(ar===""){return}var aq=new Date();j=aq.getTime()+N;var ap="//"+an+"/Tracking/TrackUrlGet/"+ar;n(ap,D)}function D(au){if(au!==null&&(typeof au!=="undefined")){var ap=au.AnonymousId,av=au.SessionId,aq=au.Data,ar=au.Data2,at=au.LinkId,aw=new Date();if(!V){am(ab("anonymousId"),ap,O,R);if(aq.length){am(ab("trackingData"),aq,M,R)}if(ar.length){am(ab("data"),ar,O,R)}}else{am(ab("anonymousId"),"",-1,R)}am(ab("session"),av,M,R);am(ab("linkId"),at,M,R);am(ab("visitDate"),aw.getTimeAlias(),M,R)}}function ad(){var ar="";try{ar=B.top.document.referrer}catch(ap){if(B.parent){try{ar=B.parent.document.referrer}catch(aq){ar=""}}}if(ar===""){ar=g.referrer}return ar}function ae(aD,aq,av){var ap=aa(ab("anonymousId")),ax=aa(ab("session")),aC=aa(ab("trackingData")),aB=aq||W.substr(0,50),at=aa(ab("linkId")),aE=parseInt(aa(ab("visitDate")))||0,aA=0;if(aE>0){var az=new Date().getTime();var au=az-aE;aA=parseInt(au/1000)}var ay=av!==w.Communigator?o("gator_td"):o("gator_td",aD);if(ay!==""){aC=ay}if(aC===""){aC=aa(ab("data"))}if(V){am(ab("trackingData"),"",-1);am(ab("data"),"",-1)}if(aC===""&&P){return""}var aw=aD||p(B.location);var ar="?";if(ap!==""){ar+="anonymousId="+h(ap)+"&"}ar+="clientid="+h(F)+"&";ar+="cust1="+h(S)+"&";ar+="cust2="+h(T)+"&";ar+="cust3="+h(U)+"&";ar+="pageUrl="+h(aw)+"&";ar+="pageTitle="+h(aB.substr(0,50))+"&";ar+="referrerUrl="+h(ad())+"&";ar+="trackingdata="+h(aC)+"&";ar+="sessionId="+h(ax)+"&";ar+="pageType="+h(av)+"&";ar+="lastPage="+h(at)+"&";ar+="timeOnPage="+h(aA);return ar}function ai(ap,aq){var ar=ae(aq,ap,w.Page);al(ar)}function ah(at,ap,aq){var ar=ae(at,ap,aq);al(ar)}function Z(aq,ar){var at,ap="(^| )(wow[_-]"+ar;if(aq){for(at=0;at<aq.length;at++){ap+="|"+aq[at]}}ap+=")( |$)";return new RegExp(ap)}function ac(ap,at){var ar=Z(J,"download"),aq=new RegExp("\\.("+K+")([?&#]|$)","i");return(ar.test(ap)||aq.test(at))?"download":""}function aj(au){var ar,ax,ap;while((ar=au.parentNode)!==null&&s(ar)&&((ax=au.tagName.toUpperCase())!=="A"&&ax!=="AREA")){au=ar}if(s(au.href)){var aq=au.hostname||m(au.href),av=aq.toLowerCase(),aw=au.href.replace(aq,av),at=new RegExp("^(javascript|vbscript|jscript|mocha|livescript|ecmascript|mailto):","i");if(!at.test(aw)){ap=ac(au.className,aw);if(ap==="download"){aw=A(aw);ah(aw,k(aw),w.Download)}}}}function E(aq){var ap,ar;aq=aq||B.event;ap=aq.which||aq.button;ar=aq.target||aq.srcElement;if(aq.type==="click"){if(ar){aj(ar)}}else{if(aq.type==="mousedown"){if((ap===1||ap===2)&&ar){af=ap;ag=ar}else{af=ag=null}}else{if(aq.type==="mouseup"){if(ap===af&&ar===ag){aj(ar)}af=ag=null}}}}function i(ap,aq){if(aq){a(ap,"mouseup",E,false);a(ap,"mousedown",E,false)}else{a(ap,"click",E,false)}}function C(ap){if(!Y){Y=true;var aq,ar=Z(L,"ignore"),at=g.links;if(at){for(aq=0;aq<at.length;aq++){if(!ar.test(at[aq].className)){i(at[aq],ap)}}}}}return{SetCustomData:function(ap,aq,ar){S=ap;T=aq;U=ar},setLinkTrackingTimer:function(ap){N=ap},setClientId:function(ap){F=ap},setDownloadExtensions:function(ap){K=ap},addDownloadExtensions:function(ap){K+="|"+ap},setIgnoreClasses:function(ap){L=t(ap)?[ap]:ap},setDocumentTitle:function(ap){W=ap},setDownloadClasses:function(ap){J=t(ap)?[ap]:ap},setCookieNamePrefix:function(ap){H=ap},setSessionCookieTimeout:function(ap){M=ap*1000},disableUserTracking:function(){V=true},contactOnlyTracking:function(){P=true},setDoNotTrack:function(aq){var ap=v.doNotTrack||v.msDoNotTrack;I=aq&&(ap==="yes"||ap==="1");if(I){this.disableUserTracking()}},enableDownloadTracking:function(ap){if(q){C(ap)}else{x.push(function(){C(ap)})}},trackPageView:function(ap,aq){ai(ap,aq)},trackDownload:function(aq,ap){ah(aq,ap,w.Download)},trackVideo:function(aq,ap){ah(aq,ap,w.Video)},trackVCab:function(aq,ap){ah(aq,ap,w.VCab)},trackCommunigator:function(aq,ap){ah(aq,ap,w.Communigator)}}}function z(){return{push:c}}a(B,"beforeunload",e,false);b();Date.prototype.getTimeAlias=Date.prototype.getTime;d=new y();for(var r=0;r<_wow.length;r++){c(_wow[r])}_wow=new z();return{getTracker:function(i,C,D){return new y(i,C,D)},getAsyncTracker:function(){return d}}}());