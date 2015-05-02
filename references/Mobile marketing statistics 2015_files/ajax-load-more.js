(function($){"use strict";$.ajaxloadmore=function(el){var AjaxLoadMore={},page=0,speed=300,proceed=false,$init=true,$loading=true,$finished=false,$window=$(window),$button_label='',$data,$el=el,$content=$('.alm-listing',$el),$scroll=true,$prefix='alm-',$repeater=$content.data('repeater'),$max_pages=$content.data('max-pages'),$pause=$content.data('pause'),$offset=$content.data('offset'),$transition=$content.data('transition'),$posts_per_page=$content.data('posts-per-page'),$meta_key=$content.data('meta_key'),$cat=$content.data('cat'),$member_level=$content.data('member_level'),$role=$content.data('role'),$search_prod_title=$content.data('search_prod_title');$(window).scrollTop(0);if($pause===undefined){$pause=false;}
if($repeater===undefined){$repeater='default';}
if($max_pages===undefined){$max_pages=5;}
if($max_pages==='none'){$max_pages=100000;}
if($transition===undefined){$transition='slide';}else if($transition==="fade"){$transition='fade';}else{$transition='slide';}
if($content.data('offset')===undefined){$offset=0;}else{$offset=$content.data('offset');}
if($content.data('button-label')===undefined){$button_label='Older Posts';}else{$button_label=$content.data('button-label');}
if($content.data('scroll')===undefined){$scroll=true;}else if($content.data('scroll')===false){$scroll=false;}else{$scroll=true;}
$el.append('<div class="'+$prefix+'btn-wrap"><p class="ajax_resource"></p><button id="load-more" class="'+$prefix+'load-more-btn more btn green-btn dark">SHOW MORE RESOURCES</button></div>');var $button=$('.alm-load-more-btn',$el);var $post_type=$content.data('post-type');$post_type=$post_type.split(",");AjaxLoadMore.loadPosts=function(){$button.addClass('loading');$loading=true;$.ajax({type:"GET",url:alm_localize.ajaxurl,data:{action:'ajax_load_more_init',nonce:alm_localize.alm_nonce,postType:$post_type,repeater:$repeater,category:$content.data('category'),author:$content.data('author'),taxonomy:$content.data('taxonomy'),taxonomy_terms:$content.data('taxonomy-terms'),taxonomy_operator:$content.data('taxonomy-operator'),tag:$content.data('tag'),order:$content.data('order'),orderby:$content.data('orderby'),search:$content.data('search'),exclude:$content.data('exclude'),numPosts:$content.data('posts-per-page'),pageNumber:page,offset:$offset,search_prod_title:$content.data('search_prod_title'),meta_key:$meta_key,cat:$cat,member_level:$member_level,role:$role},dataType:"html",beforeSend:function(){if(page!=1){$button.addClass('loading');}},success:function(data){$data=$(data);if($init){$button.text($button_label);$init=false;}
if($data.length>0){var $el=$('<div class="'+ $prefix+'reveal"/>');$el.append($data);$el.hide();$content.append($el);if($transition==='fade'){$el.fadeIn(speed,'alm_easeInOutQuad',function(){$loading=false;$button.delay(speed).removeClass('loading');if($data.length<$posts_per_page){$finished=true;$button.addClass('done');}});}else{$el.slideDown(speed,'alm_easeInOutQuad',function(){$loading=false;$button.delay(speed).removeClass('loading');if($data.length<$posts_per_page){$finished=true;$button.addClass('done');}});}
if($(window).width()>768){var articleBox=$('#grid .article-box');articleBox.each(function(){var articleBoxHeight=$(this).height();if(articleBoxHeight>$("#box_height").val()){$("#box_height").val(articleBoxHeight);}});if($("#box_height").val()>0){$('#grid .article-box').css('height',$("#box_height").val());}}
if($(".resource-matching").html()!=''){$(".ajax_resource").html($(".resource-matching").html());$(".resource-matching").remove();}}else{$button.delay(speed).removeClass('loading').addClass('done');$loading=false;$finished=true;}},error:function(jqXHR,textStatus,errorThrown){$loading=false;$button.removeClass('loading');}});};$button.click(function(){if($pause===true){$pause=false;AjaxLoadMore.loadPosts();}
if(!$loading&&!$finished&&!$(this).hasClass('done')){$loading=true;page++;AjaxLoadMore.loadPosts();}});AjaxLoadMore.isVisible=function(){var visible=false;if($el.is(":visible")){visible=true;}
return visible;}
if($scroll){$window.scroll(function(){if(AjaxLoadMore.isVisible()){var content_offset=$button.offset();if(!$loading&&!$finished&&$window.scrollTop()>=Math.round(content_offset.top-($window.height()- 150))&&page<($max_pages- 1)&&proceed){$loading=true;page++;AjaxLoadMore.loadPosts();}}});}
if($pause===true){$button.text($button_label);$loading=false;}else{AjaxLoadMore.loadPosts();}
setTimeout(function(){proceed=true;},1000);$.easing.alm_easeInOutQuad=function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t+ b;return-c/2*((--t)*(t- 2)- 1)+ b;};};$.fn.ajaxloadmore=function(){return this.each(function(){new $.ajaxloadmore($(this));});}
if($(".ajax-load-more-wrap").length)
$(".ajax-load-more-wrap").ajaxloadmore();})(jQuery);