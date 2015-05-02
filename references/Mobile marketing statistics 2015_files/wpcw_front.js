var $j=jQuery.noConflict();jQuery(document).ready(function($j)
{$j('.wpcw_fe_progress_box_mark a').click(function(){var courseid=$j(this).attr('id');var data={action:'wpcw_handle_unit_track_progress',id:courseid,progress_nonce:wpcw_js_consts_fe.progress_nonce};$j(this).hide();$j(this).parent().find('.wpcw_loader').show();$j.post(wpcw_js_consts_fe.ajaxurl,data,function(response){$j('#wpcw_fe_'+ courseid).hide().html(response).fadeIn();});return false;});$j('#wpcw_fe_outer_wrap').on('click','.wpcw_fe_quiz_retake a.fe_btn',function(e)
{e.preventDefault();$j(this).closest('.wpcw_fe_quiz_retake').find('.wpcw_loader').show();$j(this).hide();var wpcw_quizid=$j(this).attr('data-wpcw_quiz');var wpcw_unitid=$j(this).attr('data-wpcw_unit');var data={action:'wpcw_handle_unit_quiz_retake_request',quizid:wpcw_quizid,unitid:wpcw_unitid,progress_nonce:wpcw_js_consts_fe.progress_nonce};jQuery.post(wpcw_js_consts_fe.ajaxurl,data,function(response)
{$j('#wpcw_fe_outer_wrap').html(response);quizHandler_setup();});});$j('#wpcw_fe_outer_wrap').on('click','#wpcw_fe_quiz_begin_quiz',function(e)
{e.preventDefault();$j(this).closest('.wpcw_fe_quiz_begin_quiz').find('.wpcw_loader').show();$j(this).hide();var wpcw_quizid=$j(this).attr('data-wpcw_quiz');var wpcw_unitid=$j(this).attr('data-wpcw_unit');var data={action:'wpcw_handle_unit_quiz_timer_begin',quizid:wpcw_quizid,unitid:wpcw_unitid,progress_nonce:wpcw_js_consts_fe.progress_nonce};jQuery.post(wpcw_js_consts_fe.ajaxurl,data,function(response)
{$j('#wpcw_fe_outer_wrap').html(response);quizHandler_setup();});});$j('#wpcw_fe_outer_wrap').on('click','.wpcw_fe_quiz_q_upload_change_file',function(e)
{e.preventDefault();var changeWrap=$j(this).closest('.wpcw_fe_quiz_q_upload_change_file_wrap');var wpcw_fieldid=$j(this).attr('data-fieldid');$j(this).hide();changeWrap.find('.wpcw_fe_quiz_q_upload_change_file_cancel').show();changeWrap.find('.wpcw_fe_quiz_q_upload_change_holder').html('<div class="wpcw_fe_quiz_q_upload_wrapper" id="'+ wpcw_fieldid+'"><input type="file" name="'+ wpcw_fieldid+'" ></div>');});$j('#wpcw_fe_outer_wrap').on('click','.wpcw_fe_quiz_q_upload_change_file_cancel',function(e)
{e.preventDefault();var changeWrap=$j(this).closest('.wpcw_fe_quiz_q_upload_change_file_wrap');$j(this).hide();changeWrap.find('.wpcw_fe_quiz_q_upload_change_file').show();changeWrap.find('.wpcw_fe_quiz_q_upload_change_holder').html('');});$j('#wpcw_fe_outer_wrap').on('click','#fe_btn_quiz_previous',function(e)
{e.preventDefault();quizHandler_navigateQuestion('previous');});$j('#wpcw_fe_outer_wrap').on('click','#wpcw_fe_quiz_answer_later',function(e)
{e.preventDefault();quizHandler_navigateQuestion('next');});function timerHandler_expiry()
{var quizForm=$j('.wpcw_fe_quiz_box_wrap form');quizForm.attr('data-wpcw_expired','expired');quizForm.submit();}
function timerHandler_setup()
{var timerHolder=$j('#wpcw_fe_timer_countdown');if(timerHolder.length>0)
{var sLeft=parseInt(timerHolder.attr('data-time_left'));$j('#wpcw_fe_timer_countdown').countdown({labels:['y','m','w','d',wpcw_js_consts_fe.timer_units_hrs,wpcw_js_consts_fe.timer_units_mins,wpcw_js_consts_fe.timer_units_secs],labels1:['y','m','w','d',wpcw_js_consts_fe.timer_units_hrs,wpcw_js_consts_fe.timer_units_mins,wpcw_js_consts_fe.timer_units_secs],padZeroes:true,until:'+'+ sLeft+'s',format:'MS',onExpiry:timerHandler_expiry});}}
function timerHandler_cleanup()
{$j('#wpcw_fe_timer_countdown').hide().countdown('destroy');}
function quizHandler_navigateQuestion(direction)
{var quizForm=$j('.wpcw_fe_quiz_box_wrap form');quizForm.find('.wpcw_loader').show();quizForm.find('.wpcw_fe_quiz_submit input, a.fe_btn').hide();var wpcw_quizid=quizForm.attr('data-wpcw_quiz');var wpcw_unitid=quizForm.attr('data-wpcw_unit');var data={action:'wpcw_handle_unit_quiz_jump_question',quizid:wpcw_quizid,unitid:wpcw_unitid,qu_direction:direction,progress_nonce:wpcw_js_consts_fe.progress_nonce};timerHandler_cleanup();jQuery.post(wpcw_js_consts_fe.ajaxurl,data,function(response)
{$j('#wpcw_fe_outer_wrap').html(response);quizHandler_setup();});}
function quizHandler_setup()
{var quizForm=$j('.wpcw_fe_quiz_box_wrap form');if(quizForm.length>0)
{var quizid=quizForm.attr('id');var bar=quizForm.find('.wpcw_fe_upload_progress .wpcw_progress_bar');var percent=quizForm.find('.wpcw_fe_upload_progress .wpcw_progress_percent');var configdata={action:'wpcw_handle_unit_quiz_response',id:quizid,timerexpired:quizForm.attr('data-wpcw_expired'),progress_nonce:wpcw_js_consts_fe.progress_nonce};var options={target:'.wpcw_fe_quiz_box_wrap#wpcw_fe_'+ quizid,replaceTarget:true,url:wpcw_js_consts_fe.ajaxurl,data:configdata,type:'POST',beforeSubmit:function(formData,jqForm,options)
{$j('.wpcw_fe_quiz_q_single').removeClass('wpcw_fe_quiz_q_error');var hasTimerExpired='expired'==quizForm.attr('data-wpcw_expired');if(!hasTimerExpired)
{var missingData=false;for(var i=0;i<formData.length;i++)
{if(!formData[i].value)
{$j('#wpcw_fe_wrap_'+ formData[i].name).addClass('wpcw_fe_quiz_q_error');missingData=true;}}
$j('#'+ quizid+' .wpcw_fe_quiz_q_multi, #'+ quizid+' .wpcw_fe_quiz_q_truefalse').each(function()
{if($j(this).find('input:checked').length==0){$j(this).addClass('wpcw_fe_quiz_q_error');missingData=true;}});if(missingData)
{var quizFormParent=quizForm.closest('.wpcw_fe_quiz_box_wrap');var msgArea=$j('.wpcw_fe_progress_box_wrap .wpcw_fe_progress_box_error');if(msgArea.length==0)
{$j('<div class="wpcw_fe_progress_box_wrap"><div class="wpcw_fe_progress_box wpcw_fe_progress_box_error">'+
wpcw_js_consts_fe.str_quiz_all_fields+'</div></div>').insertBefore(quizFormParent);}
else{msgArea.text(wpcw_js_consts_fe.str_quiz_all_fields);}
$j('html, body').animate({scrollTop:$j('.wpcw_fe_quiz_box_wrap').offset().top- 100},200);return false;}}
quizForm.find('.wpcw_fe_quiz_submit input').hide();quizForm.find('.wpcw_loader').show();$j('.wpcw_fe_progress_box_wrap .wpcw_fe_progress_box_error').remove();var percentVal='0%';bar.width(percentVal);percent.html(percentVal);timerHandler_cleanup();if(quizForm.find('.wpcw_fe_quiz_q_upload_wrapper').length>0){$j('.wpcw_fe_upload_progress').show();}},uploadProgress:function(event,position,total,percentComplete)
{var percentVal=percentComplete+'%';bar.width(percentVal);percent.text(wpcw_js_consts_fe.str_uploading+' '+ percentVal);},success:function()
{var percentVal='100%';bar.width(percentVal);percent.text(wpcw_js_consts_fe.str_uploading+' '+ percentVal);$j('html, body').animate({scrollTop:$j('.wpcw_fe_quiz_box_wrap').offset().top- 100},200);quizHandler_setup();}};$j('.wpcw_fe_quiz_box_wrap form').ajaxForm(options);timerHandler_setup();}}
quizHandler_setup();$j('.wpcw_widget_progress .wpcw_fe_module').click(function(e)
{e.preventDefault();var moduleID=$j(this).attr('id');if($j(this).hasClass('wpcw_fe_module_toggle_hide')){$j(this).find('.wpcw_fe_toggle').text('-');$j(this).addClass('wpcw_fe_module_toggle_show').removeClass('wpcw_fe_module_toggle_hide');$j(this).closest('.wpcw_widget_progress').find('.'+ moduleID).show();}
else{$j(this).find('.wpcw_fe_toggle').text('+');$j(this).addClass('wpcw_fe_module_toggle_hide').removeClass('wpcw_fe_module_toggle_show');$j(this).closest('.wpcw_widget_progress').find('.'+ moduleID).hide();}});$j('.wpcw_fe_course_progress_course a').click(function(e)
{e.preventDefault();var detailRowID=$j(this).data('toggle');if($j(this).parent().hasClass('active')){$j(this).parent().removeClass('active');$j(this).closest('.wpcw_fe_summary_course_progress').find('#'+ detailRowID).fadeOut('fast');}
else{$j(this).parent().addClass('active');$j(this).closest('.wpcw_fe_summary_course_progress').find('#'+ detailRowID).fadeIn('fast');}});$j('.wpcw_widget_progress .wpcw_fe_module_toggle_hide').each(function(){var moduleID=$j(this).attr('id');$j(this).closest('.wpcw_widget_progress').find('.'+ moduleID).hide();});$j('a.fe_btn_navigation_disabled').click(function(e){e.preventDefault();});});