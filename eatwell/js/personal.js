$(function(){
	$('.fancybox').fancybox();

			/*
			 *  Different effects
			 */

			// Change title type, overlay closing speed
			$(".fancybox-effects-a").fancybox({
				helpers: {
					title : {
						type : 'outside'
					},
					overlay : {
						speedOut : 0
					}
				}
			});

			// Disable opening and closing animations, change title type
			$(".fancybox-effects-b").fancybox({
				openEffect  : 'none',
				closeEffect	: 'none',

				helpers : {
					title : {
						type : 'over'
					}
				}
			});

			// Set custom style, close if clicked, change title type and overlay color
			$(".fancybox-effects-c").fancybox({
				wrapCSS    : 'fancybox-custom',
				closeClick : true,

				openEffect : 'none',

				helpers : {
					title : {
						type : 'inside'
					},
					overlay : {
						css : {
							'background' : 'rgba(238,238,238,0.85)'
						}
					}
				}
			});

			// Remove padding, set opening and closing animations, close if clicked and disable overlay
			$(".fancybox-effects-d").fancybox({
				padding: 0,

				openEffect : 'elastic',
				openSpeed  : 150,

				closeEffect : 'elastic',
				closeSpeed  : 150,

				closeClick : true,

				helpers : {
					overlay : null
				}
			});

			/*
			 *  Button helper. Disable animations, hide close button, change title type and content
			 */

			$('.fancybox-buttons').fancybox({
				openEffect  : 'none',
				closeEffect : 'none',

				prevEffect : 'none',
				nextEffect : 'none',

				closeBtn  : false,

				helpers : {
					title : {
						type : 'inside'
					},
					buttons	: {}
				},

				afterLoad : function() {
					this.title = 'Image ' + (this.index + 1) + ' of ' + this.group.length + (this.title ? ' - ' + this.title : '');
				}
			});


			/*
			 *  Thumbnail helper. Disable animations, hide close button, arrows and slide to next gallery item if clicked
			 */

			$('.fancybox-thumbs').fancybox({
				prevEffect : 'none',
				nextEffect : 'none',

				closeBtn  : false,
				arrows    : false,
				nextClick : true,

				helpers : {
					thumbs : {
						width  : 50,
						height : 50
					}
				}
			});

			/*
			 *  Media helper. Group items, disable animations, hide arrows, enable media and button helpers.
			*/
			$('.fancybox-media')
				.attr('rel', 'media-gallery')
				.fancybox({
					openEffect : 'none',
					closeEffect : 'none',
					prevEffect : 'none',
					nextEffect : 'none',

					arrows : false,
					helpers : {
						media : {},
						buttons : {}
					}
				});

			/*
			 *  Open manually
			 */

			$("#fancybox-manual-a").click(function() {
				$.fancybox.open('1_b.jpg');
			});

			$("#fancybox-manual-b").click(function() {
				$.fancybox.open({
					href : 'iframe.html',
					type : 'iframe',
					padding : 5
				});
			});

			$("#fancybox-manual-c").click(function() {
				$.fancybox.open([
					{
						href : '1_b.jpg',
						title : 'My title'
					}, {
						href : '2_b.jpg',
						title : '2nd title'
					}, {
						href : '3_b.jpg'
					}
				], {
					helpers : {
						thumbs : {
							width: 75,
							height: 50
						}
					}
				});
			});


		});



$(document).ready(function(){
	$(function () {
        $("input[name='inputcity']").click(function(){
            var temp_test=$("input[name='inputcity']:checked").val();
            if(temp_test=="other"){
            	$(".urbanarea option").remove();
                alert("目前Eatwell只在北京和上海开放。您仍然可以完成该信息注册，当我们对您所在城市开放时，我们会及时通知您");
                $("#mycity").after("<div class='control-group myothercity'><label class='control-label' for='othercity'>其他城市</label><div class='controls'><input type='text' id='inputcity' placeholder='其他城市'></div></div>");

            }else if(temp_test=="beijing"){
            	$(".myothercity").remove();
            	$(".urbanarea option").remove();
                $(".urbanarea").append("<option>东城</option><option>西城</option><option>朝阳</option><option>海淀</option><option>丰台</option><option>石景山</option><option>门头沟</option><option>房山</option><option>通州</option><option>顺义</option><option>昌平</option><option>大兴</option><option>平谷</option><option>怀柔</option><option>密云</option><option>延庆</option><option>其他</option>");
            }else if(temp_test=="shanghai")
            {
            	$(".myothercity").remove();
            	$(".urbanarea option").remove();
            	$(".urbanarea").append("<option>黄浦</option><option>徐汇</option><option>长宁</option><option>静安</option><option>普陀</option><option>闸北</option><option>虹口</option><option>杨浦</option><option>浦东新</option><option>闵行</option><option>宝山</option><option>嘉定</option><option>金山</option><option>松江</option><option>青浦</option><option>奉贤</option><option>崇明</option><option>其他</option>");
            }
        });
    });

$(function(){
	    $(".urbanarea").click(function(){
	    	var temp_option = $(".urbanarea").val();
	    	if(temp_option == "其他"){
	    		$(".myotherurbanarea").remove();
	    		$(".myurbanarea").after("<div class='control-group myotherurbanarea'><label class='control-label' for='otherurbanarea'>其他城区</label><div class='controls othercontrols'><input type='text' id='inputurbanarea' placeholder='其他城区'></div></div>");
	    	}else{
	    		$(".myotherurbanarea").remove();
	    		
	    	}
	    });
    });

$(function(){
	    $(".system").click(function(){
	    	var temp_option = $(".system").val();
	    	if(temp_option == "其他"){
	    		$(".myothersystem").remove();
	    		$(".mysystem").after("<div class='control-group myothersystem'><label class='control-label' for='othersystem'>其他系统</label><div class='controls othercontrols'><input type='text'  placeholder='其他系统'></div></div>");
	    	}else{
	    		$(".myothersystem").remove();
	    		
	    	}
	      });
	    });

$(function(){
	    $("#firstreason").click(function(){
	    	var temp_option = $("#firstreason").val();
	    	if(temp_option == "其他"){
	    		$(".myfirstreason").remove();
	    		$(".mainreason").after("<div class='control-group myfirstreason'><label class='control-label' for='myfirstreason'>其他首要原因</label><div class='controls othercontrols'><input type='text'  placeholder='原因'></div></div>");
	    	}else{
	    		$(".myfirstreason").remove();
	    		
	    	}
	      });
	    });

$(function(){
	    $("#secondreason").click(function(){
	    	var temp_option = $("#secondreason").val();
	    	if(temp_option == "其他"){
	    		$(".mysecondreason").remove();
	    		$(".minorreason").after("<div class='control-group mysecondreason'><label class='control-label' for='mysecondreason'>其他次要原因</label><div class='controls othercontrols'><input type='text'  placeholder='原因'></div></div>");
	    	}else{
	    		$(".mysecondreason").remove();
	    		
	    	}
	      });
	    });



  $(function(){
  	$("#submitform").click(function(){
  		var cookskill = $("#cookskill").val();
  		var firstreason = $("#firstreason").val();
  		var secondreason = $("#secondreason").val();
  		var system = $(".system").val();
  		var workingcondition = $("#workingcondition").val();
  		var Accommodationtypes = $("#Accommodationtypes").val();
  		var str = "";
  		var str1 = "";
  		var str2 = "";
  		var str3 = "";
  		var marrage = $("#marrage").val();
  		var education = $("#education").val();
  		var age = $("#age").val();
  		var inputname = $("#inputname").val();
  		var inputemail = $("#inputEmail").val();
  		var inputsecondname = $("#inputsecondname").val();
  		var inputcommunity = $("#inputcommunity").val();
  		$(".checkbox2:checked").each(function(){
  			str += $(this).val();
  		})
  		$('input[name="oversea"]:checked').each(function(){
  			str1 += $(this).val();
  		})
  		$('input[name="optionsRadios"]:checked').each(function(){
  			str2 += $(this).val();
  		})
  		$('input[name="inputcity"]:checked').each(function(){
  			str3 += $(this).val();
  		})
         if(cookskill == "---" || firstreason == "---" || secondreason == "---" || system == "---" || workingcondition == "---" || Accommodationtypes == "---" ||str == "" || str1 == "" || str2 == "" || str3 == ""|| marrage == "---" ||education == "---" || age == "---" ||inputname == "" || inputcommunity == "" || inputsecondname == "" || inputemail == "") 
         {
         	$("#errorrep").css("display","block");
         	return false;
         }
         else 
         {
         	 window.open('checkok.htm'); 
         }

  	})
  })
});


