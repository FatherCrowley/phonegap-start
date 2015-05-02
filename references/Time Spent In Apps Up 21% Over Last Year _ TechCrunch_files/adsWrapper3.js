if (!window.ATW3_AdObj){
try {
if (parent.window.ATW3_AdObj)var ATW3_AdObj=parent.window.ATW3_AdObj;
else {
var ATW3_AdObj=new Object();
parent.window.ATW3_AdObj=ATW3_AdObj;
}}
catch (e){
var ATW3_AdObj=new Object();
}}
function html3AdWH(m,w,h){
var u='',pg='',d=document,s,wi=window,pr=location.protocol,sec=(pr=='https:')?1:0,ugc='',dt=new Date();
if (wi.atwMOAT=='1'&&!ATW3_AdObj.moat){
	ATW3_AdObj.moat=1;
	var sc=d.createElement("script"),hd=d.getElementsByTagName("head")[0],sr;
	sr='http://o.aolcdn.com/os/moat/prod/moatuac.js';
	sc.src=sr;
	hd.appendChild(sc);
}
if (m)m=m.toString()
else return 0;
if (!pr||pr.indexOf('http')<0)pr='http:';
try {
u=top.location.href
if (!u||u=="undefined"){u=d.referrer}
else {
pg=top.location.href.substr(7).toLowerCase();
pg=pg.replace(/www\./,'');
pg=pg.replace(/\.com/,'');
pg=pg.replace(/[?#].*$/,'')
var l=pg.length;
if (l>65)l=65;
pg="kvpg="+escape(pg.substr(0,l))+";";
pg=pg.replace(/\/;$/,';');
pg=pg.replace(/\//g,'%2F');
}
}
catch (e){u=d.referrer}
u=u||""
var uac=u.search(/atw3UAC=/i),debug=u.search(/adcallqa/i),n,n1,src;
if ((uac>0||debug>0)&&!ATW3_AdObj.uac){
 if (debug>0){
  n1='adsWrapperInfo3.js';
  src='http://browsertest.web.aol.com/ads/';
 }
 else {
  n=u.substring(uac+8,u.length).replace(/&.*$/,'').split(/\||;/);
  if (n[1]&&n[1]=='c')src='http://cdn.atwola.com/_media/uac/'   
  else src='http://browsertest.web.aol.com/ads/'
  n1=n[0];
 }
 if(/^[0-9A-Za-z/.]+$/.test(unescape(n1)))d.write('<script type="text/javascript" src="'+src+n1+'"></scr','ipt>')
 ATW3_AdObj.uac=1
}
else{
var ipU=u.search(/atw3IP=/i),ip='',mn,crU=u.search(/atw3CrPr=/i),cr,cr1='',exU=u.search(/atw3Exc=/i),exc='',ln=u.length;
if (ipU>0)ip='ip='+u.substring(ipU+7,ln).replace(/&.*$/,'')+';';
if (!(/^[a-z0-9\.=;]+$/.test(unescape(ip))))ip='';
if (exU>0)exc=u.substring(exU+8,ln).replace(/&.*$/,'');
var ht='',nt='5113.1',pl='221794',sr='',wm='',ot='',tar='_blank',imgOnly='artexc=art_flash,art_rrflash;',
tp='J',cl='',nv=navigator,ua=nv.userAgent.toLowerCase(),ie=(nv.appName=="Microsoft Internet Explorer"),dyn='',inc='',chn='',msp='1',
dev=(typeof wi.onorientationchange!='undefined')?'1':'2';
if ((ua.indexOf('mobile')>-1)||(/android|iphone|ipad|playbook|hp-tablet|kindle|silk|webos|blackberry|opera mini/i).test(navigator.appVersion))dev='1';
if (!dev)dev='2';
if (wi.s_265&&wi.s_265.channel)chn='kvoch='+escape(wi.s_265.channel)+';'
if (!wi.ATW3_AdObj.scr){
 ATW3_AdObj.scr=dt.getTime()%0x3b9aca00;
 ATW3_AdObj.tile=1;
}
else ATW3_AdObj.tile++;
var scr=ATW3_AdObj.scr,tile=ATW3_AdObj.tile;
mn=(/(\?|&)atw3[Mm][Nn]=(.*?)(&|$)/.test(u))?(RegExp.$2).split(/\||;/):'';
if (!(/^[0-9A-Za-z,-]+$/.test(unescape(mn))))mn='';
if (mn){
var mL=mn.length,wxh=w+'x'+h,num,all=0;
for (var i=0;i<mL;i=i+2){
num=mn[i+1];
if (num.indexOf('a')>0){
 num=num.replace('a','');
 all=1;
}
else {
 all=0;
}
if (num.indexOf('only')>-1){
 num=num.replace('only','');
 only=1;
}  
else {
 only =0; 
}
if ((ATW3_AdObj.tile==num)||(wxh==num)){
m=mn[i];
if (!all)mn[i+1]='';
if (only)mn[i+1]='only';
}
else if (only){m='0';}
}}
if (m=='0'){ATW3_AdObj.tile++;return 0}
if (wi.atwHtNmAT){
v=atwHtNmAT;
ht=(/^https?/i.test(v))?v:((/^\/\//.test(v))?pr+v:pr+'//'+v);
if (ht.charAt(ht.length-1)=='/')ht=ht.substring(0,ht.length-1);
}
if (wi.atwMSP){msp=escape(atwMSP)}
if (wi.atwTar){tar=escape(atwTar)}
if (wi.atwWM){wm='kvwm='+escape(atwWM)+ ";" }
if (wi.atwSearch){v=atwSearch
if (v){v=v.replace(/ /g,'+')
v=(wi.encodeURIComponent)?encodeURIComponent(v):escape(v)
sr="KEY="+v+";"
}}
if (wi.atwType==''){tp='J'}else if (wi.atwType){tp=atwType.toUpperCase()}
if (wi.atwClick){cl=';rdclick='+atwClick}
kv=(/(\?|&)atw3[Kk][Vv]=(.*?)(&|$)/.test(u))?escape(RegExp.$2):'';
if (!(/^[0-9A-Za-z,;=]+$/.test(unescape(kv))))kv='';
if (kv&&kv[kv.length-1]!=';')kv+=';'
if (wi.atwOthAT){
 v=atwOthAT;
 if (v.charAt(v.length-1)!=';')v+=';'
 var x=v.split(';'),l=x.length,y;
 for (i=0;i<l-1;i++){
  if (x[i].charAt(x[i].length-1)!='='){
   y=x[i].split('=');
   ot+=escape(y[0])+"="+escape(y[1])+';';  
  }
 }
}
else if (ATW3_AdObj&&ATW3_AdObj.adsATOth)ot=ATW3_AdObj.adsATOth;
ot+=kv;
if (ot.indexOf('kvugc')==-1){
 try { 
  if (parent.window.adSetUGC)ugc=parent.window.adSetUGC
  else if (window.adSetUGC)ugc=window.adSetUGC;
 }
 catch (e){if (window.adSetUGC){ugc=window.adSetUGC;}}
 if (!ugc){
  if (ot.indexOf('cmsid')==-1)ugc='0'
  else ugc='1'
 }
 ot+='kvugc='+ugc+';';
}
if (wi.atwNetId){nt=atwNetId}
var nt1=u.search(/atwNt=/i);
if (nt1>0)nt=u.substring(nt1+6,ln).replace(/&.*$/,'');
if (wi.atwPlId){pl=atwPlId}
if (w=='RR'||w=='rr'){
dyn='r';
w='300';
h='250';
}
else if (w=='LB'||w=='lb'){
atwSizes='728x90,948x250,970x66,970x90,950x252,970x250,940x230';
tp='J';
}
if (ua.indexOf('ipad')!=-1)inc=imgOnly
if (exc=='blank')inc='artexc=all;'
if (!ATW3_AdObj.sniff){
if (!inc&&tp!='IMAGE'){
 var dF='',a,d1;
 if (ie&&(ua.indexOf('win')!=-1)){
  try {a=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
  if (a){d1=a.GetVariable("$version").split(" ")[1].split(",");
  if (d1[0]>=10)dF=d1[0]
  }}catch(e){}
 }
 else{
  var p=nv.plugins
  if (p){var l=p.length
   if (l>1){var mt=nv.mimeTypes,fl=mt['application/x-shockwave-flash']
    if (mt&&((fl&&fl.enabledPlugin&&(fl.suffixes.indexOf('swf')!=-1)))){
     var ds,f="Flash ",fS
     for (var i=0;i<l;i++){
      ds=p[i].description
      fS=ds.indexOf(f)
      if (fS!=-1){
        if (ds.substring(fS+6,fS+8)>=10){dF=ds.substring(fS+6,fS+8)}
      }
     }
    }
    if (fl==null)dF=''
   }
  }
 }
 if (!dF)inc=imgOnly;
 ATW3_AdObj.inc=inc;
 ATW3_AdObj.sniff=1;
}
}
else inc=ATW3_AdObj.inc;
var s1='',s2='';
if (wi.atwSizes){
 tp='J';
 s2+="allowedSizes="+atwSizes+";";
}
else if (dyn!='r'||tp!='J')s2+="size="+w+"x"+h+";";
s1=ot.toLowerCase()+ip+sr+wm+pg+'kvmn='+m+';kv3puac=1;kvgrp='+scr+';kvismob='+dev+';'+chn+'extmirroring=0;kvtile='+tile+';aduho='+(-1*dt.getTimezoneOffset())+';';
s2+='noperf=1;alias='+m+';noaddonpl=y;'+s1+inc+'grp='+scr+cl;
if ((m.indexOf('-')>-1)&&(/^[0-9a-fm\-]+$/i.test(m))){
 if (m.substring(0,1).toLowerCase()=='m')m=m.substring(1,m.length);
 if (ht)s=ht
 else {
  s=pr+'//mads';
  if ((wi.atwCo&&wi.atwCo.toLowerCase()!='us')||(wi.atwNetId&&wi.atwNetId!='5113.1'))s+='uk'
  s+='.at.atwola.com';
 }
 var kf='kvmflash=',swh='',inI=false,inSD=true,pU,sd='';
 if (dF)kf+='true;'
 else kf+='false;';
 if (wi.screen&&wi.screen.width&&wi.screen.height)swh='swh='+wi.screen.width+'x'+wi.screen.height+';screenwidth='+wi.screen.width+';screenheight='+wi.screen.height+';';
 if (wi.devicePixelRatio)sd='screendensity='+wi.devicePixelRatio+';';
 try {
  if (wi.top!==wi.self)inI=true;
  pU=wi.top.location.href.toString();
 } 
 catch (e){}
 if (!pU||pU==="undefined"){
  inI=true;
  inSD=false;
 }
 var f1="f="+(inI?(inSD?"1":"2"):"0")+";",f2="fv="+(dF?dF:"0")+";"; 
 s+='/adcall?mpid='+m+';rettype=js;width='+w+';height='+h+';'   
 s+=s1+kf+swh+sd+f1+f2+'optn=1;grp='+scr+';random='+scr;
}
else {
if (dev=='1'&&msp=='1'&&tp!='IMAGE'){
 var sm='grp='+scr+';random='+scr+';sizeId=-1;'
 sm+=s2;
 s=pr+'//';
 if (tp=='J'){
  s+='mads';
  if ((wi.atwCo&&wi.atwCo.toLowerCase()!='us')||(wi.atwNetId&&wi.atwNetId!='5113.1'))s+='uk'
  s+='.at.atwola.com/adcall?mpid=114-d-d-e;rettype=js;callProtocol=3.0;networkId='+nt+';placementid='+pl+';'+sm;
 }
 else if (tp=='I'){
  var co='';
  if (wi.atwCo&&wi.atwCo.toLowerCase()!='us')co=wi.atwCo
  sm+='|'+nt+'|'+pl+'|'+co;
  sm=unescape(sm);
  if (sec)s+='s';
  else s+='o';
  s+='.aolcdn.com/ads/mobileIframe.html?s='+escape(sm);
 }
}
else {
if (ht)s=ht
else {
 s=pr+'//';
 if (wi.atwCo&&wi.atwCo.toLowerCase()!='us')s+='uk.';
 s+='at.atwola.com';
}
s+="/addyn/3.0/"+nt+"/"+pl+"/0/-1/";
s+=s2;
}
if (crU>0){
 cr=u.substring(crU+9,ln).replace(/&.*$/,'').split(/\||;/);
 cr1=cr[0];
 if ((/http[s]{0,1}:\/\/[^\/]*?aol.com(:[0-9]*?){0,1}\//.test(cr1))&&(/^[0-9A-Za-z/.:]+$/.test(unescape(cr1)))){
  if ((dyn=='r'&&(cr[1]==300&&(cr[2]==250||cr[2]==600||cr[2]==1050)))||
      (cr[1]==w&&cr[2]==h)||(cr[3]==tile)){
    if (tp!='J')s=cr1+'.html'
    else s=cr1+'.js'
  }
 }
}
}
if (m!='0'){
if (tp!='IMAGE'){
 if (tp=='J')d.write("<script type='text/javascript' src='"+s+"'></script>")
 else{
  s=s.replace(/addyn/,'adiframe')
  d.write("<iframe src='"+s+"' width="+w+" height="+h+" scrolling=no frameborder=0 marginheight=0 marginwidth=0></iframe>")
 }
}
else{
 d.write("<a href='"+s.replace(/addyn/,"adlink")+"' target="+tar+"><img src='"+s.replace(/addyn/,"adserv")+"' width="+w+" height="+h+" border=0 alt='advertisement'></a>")
}
}
atwHtNmAT='';atwTar='';atwWM='';atwSearch='';atwType='';atwClick='';atwOthAT='';atwNetId='';atwPlId='',atwSizes='';
ATW3_AdObj.uac=0
}}
(function(w) {
var c=w['mraid']||w['ormma'];
if (c)w['open']=c['open'];
})(window);
if (!window.atwWidth)atwWidth='300'
if (!window.atwHeight)atwHeight='250'
html3AdWH(atwMN,atwWidth,atwHeight)