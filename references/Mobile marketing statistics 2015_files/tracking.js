//-- MoonRay Tracking Module

// Settings
var _mri="",_mrq="",_mrsess_="",_mr_cid="";
var _mrd=document,_mrl=_mrd.location.host + _mrd.location.pathname,_mrct=new Date();
var _mr_ex="expires=Sun, 18 Jan 2038 00:00:00 GMT";
var _linktrack = "/trackThrough.php";
var _mr_title = document.title;

function mrtracking(){
	var _mrq='mid=' + _mri + "&llc=" + _escapeT(document.location.href);
	var _mrlv = gC('lastvisit');
	var _mrref = gC('ref_');
	var _mrafft_ = gC('afft_');
	var _mraff_ = gC('aff_');
	var _mrsess_ = gC('sess_');
	var _mr_gets = parseGetVars();
	var _mr_ctime = (_mrct.getTime()-_mrct.getMilliseconds())/1000;
	
	if (!_mrsess_){
		_mrsess_ = genmrSess(20);
		_mrd.cookie = 'sess_=' + _mrsess_ + ';' + _mr_ex + ';' + "path=/";
	}
	
	if (_mr_gets['mr_aff']){
		_mrd.cookie = 'aff_' + '=' + _mr_gets['mr_aff'] + ';' + _mr_ex + ';' + "path=/";
		_mrq = _mrq + "&aff=" + _mr_gets['mr_aff'];
	} else if (_mr_gets['ref']){
		_mrd.cookie = 'aff_' + '=' + _mr_gets['ref'] + ';' + _mr_ex + ';' + "path=/";
		_mrq = _mrq + "&aff=" + _mr_gets['ref'];
	} else if (_mr_gets['orid']){
		_mrd.cookie = 'aff_' + '=' + _mr_gets['orid'] + ';' + _mr_ex + ';' + "path=/";
		_mrq = _mrq + "&aff=" + _mr_gets['orid'];
	}
	
	if (_mr_gets['opid']){
		_mrd.cookie = 'opid' + '=' + _mr_gets['opid'] + ';' + _mr_ex + ';' + "path=/";
		_mrq = _mrq + "&opid=" + _mr_gets['opid'];
	}
	
	if (_mr_gets['sid']){
		_mrd.cookie = 'sid' + '=' + _mr_gets['sid'] + ';' + _mr_ex + ';' + "path=/";
		_mrq = _mrq + "&sid=" + _escapeT(_mr_gets['sid']);
	}
		
	_mrq = _mrq + "&s=" + _mrsess_ + "&l=" + _mrl + "&ti="  +  _mr_title;	
	
	if (_mrref && !_mr_gets['sig']){
		if ((_mrlv + 3600) < _mr_ctime){
			_mrq = _mrq + "&" + "t=" + _mrref;
		} else {
			_mrq = _mrq + "&" + "r=1&t=" + _mrref;
		}
	}
	
	if (_mr_cid = gC('contact_id')){
		_mrq = _mrq + "&c=" + _mr_cid;
		_mrd.cookie = 'contact_id' + '=' + _mr_cid + ';' + _mr_ex + ';' + "path=/";
	}
	
	if ((parseInt(_mrlv) + 3600) > _mr_ctime){
		_mr_vid = gC('vid');
		if (_mr_vid){
			_mrq = _mrq + "&vid=" + _mr_vid;
		}
	} else {
		_mrd.cookie = 'vid'+'='+ "" + ';' + _mr_ex + ';' + "path=/";
	}
	
	if (_mr_gets['sig']){
		_mrd.cookie = 'ref_' + '=' + _mr_gets['sig'] + ';' + _mr_ex + ';' + "path=/";
		if (_mrlv){
			if ((parseInt(_mrlv) + 3600) < _mr_ctime){
				_mrq = _mrq + "&" + "t=" + _mr_gets['sig'];
			} else {
				_mrq = _mrq + "&" + "t=" + _mr_gets['sig'] + "&r=1";
			}
		} else {
			_mrq = _mrq + "&" + "t=" + _mr_gets['sig'];
		}
	}
	
	var mrHost = (("https:" == document.location.protocol) ? "https://" : "http://");
	
	var sc=document.createElement('script');
	if (("https:" == document.location.protocol)){
		sc.src= 'https://tracking.moon-ray.com/track.php?' + encodeURI(_mrq);
	} else {
		sc.src= 'http://tracking.moon-ray.com/track.php?' + encodeURI(_mrq);
	}
	
	
	
	if (window.addEventListener) {
		window.addEventListener("load",function(){document.getElementsByTagName('head')[0].appendChild(sc);},true);
 	} else {
		window.attachEvent("onload",function(){document.getElementsByTagName('head')[0].appendChild(sc);});
	}
	//Set cookie for lastvisit to the current time
	_mrd.cookie = 'lastvisit'+'='+ _mr_ctime + ';' + _mr_ex + ';' + "path=/";
}

function gC( c_name ) {
	var i,x,y,ARRcookies=document.cookie.split(";");
    for (i=0;i<ARRcookies.length;i++)
    {
		x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
		y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
		x=x.replace(/^\s+|\s+$/g,"");
		if (x==c_name)
		{
		    return unescape(y);
		}
    }
}

function parseGetVars()
{
var qString = unescape(top.location.search.substring(1));
var mr_dv = new Array();
var pairs = qString.split(/\&/);
var array_length = pairs.length;
if (array_length > 0){
	for(i =0;i < array_length;i++){
		if (pairs[i]){
			var nameVal = pairs[i].split(/\=/);
			mr_dv[nameVal[0]] = nameVal[1];
		}
	}
}

return mr_dv;
}

function genmrSess(length){
	session = '';
	
	possible = '0123456789bcdfghjkmnpqrstvwxyz';
	i = 0;
	
	while (i < length){
		mychar = possible.substr(Math.random() * (possible.length -1),1);    
	    session += mychar;i++;
	}
	
	return session;
	
}
function _escapeT(str) {
			return escape(str).replace(/\+/g,"%2B");
	}
function _mrGetLinkTo(Item) {
		if (Item.href != null) 
			return Item.href
		else if(Item.getAttribute("type") == "submit")  
			return (Item.form.action.indexOf("form_processor.php")!=-1)?"moonrayform:" + Item.form.uid.value:Item.form.action;
		else 
			return Item.attributes.getNamedItem("onclick").value;
}
function _sanitizeMrLink(link)
{
	if(link.substr(0,7).toLowerCase() == "http://")
		link = link.substr(7);
	if(link.substr(0,8).toLowerCase() == "https://")
		link = link.substr(8);
	if(link.substr(0,4).toLowerCase() == "www.")
		link = link.substr(4);
	return link;
}

function _mrScanLinks() {
	var Items = document.getElementsByTagName("*");
	var LinkId,LinkAlias;
	var linkCount=0;
	for (var i = 0; i < Items.length; i++) {
		if ((Items[i].href == null || Items[i].getAttribute("href",2) == "") && Items[i].onclick == null  && Items[i].type !="submit")
				continue;
		linkCount++;
		LinkId = -1;
		LinkAlias = "";
		
		if (Items[i].getAttribute("mtrack",2))
		{
			LinkAlias = Items[i].getAttribute("mtrack",2);
		}
		else if (_mrTrackLinks[linkCount] != null) 
		{	
			if (_sanitizeMrLink(_mrGetLinkTo(Items[i])) == _sanitizeMrLink(_mrTrackLinks[linkCount].link))
				LinkId = _mrTrackLinks[linkCount].id;
        }
		if (LinkId != -1 || LinkAlias != "") {
				if (Items[i].addEventListener) {
					Items[i].addEventListener("click",_mrTrackLink,false);
				} else {
					Items[i].attachEvent("onclick",_mrTrackLink);
				}
				Items[i].linkTrackId = (LinkId != -1)?LinkId:"";
		}
	}
}
function _mrTrackLink(event) {
	if (event.target) {
			var SrcObj = event.target;
		} else {
			var SrcObj = event.srcElement;
		}
		while (SrcObj.linkTrackId == null && !SrcObj.getAttribute("mtrack",2))
			SrcObj = SrcObj.parentNode;
		
		var clickTrack = _linktrack+
										"?lid=" + _escapeT(SrcObj.linkTrackId) +
										"&contact_id=" + _mr_cid +
										"&session_id=" + _mrsess_ +
										"&mri="+ _mri +
										((SrcObj.getAttribute("mtrack",2))?"&mtrack=" + _escapeT(SrcObj.getAttribute("mtrack",2)) + "&uri=" + _escapeT(document.location.href):"");
		var Ajaxor = _mrReturnXmlHttpObject();
		Ajaxor.open("GET",clickTrack,true);
		Ajaxor.send(null);
}
function _mrReturnXmlHttpObject() {
				var xmlhttp=false;
				/*@cc_on @*/
				/*@if (@_jscript_version >= 5)
				try {
					xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
				} catch (e) {
				try	 {
					xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
				} catch (E) {
				xmlhttp = false;
				}
				}
				@end @*/
				if (!xmlhttp && typeof XMLHttpRequest!='undefined') {
					try {
						xmlhttp = new XMLHttpRequest();
					}	 catch (e) {
						xmlhttp=false;
					}
				}
				if (!xmlhttp && window.createRequest) {
					try {
						xmlhttp = window.createRequest();
					} catch (e) {
						xmlhttp=false;
					}
				}
				if (!xmlhttp) {
				}
				return xmlhttp;
			}