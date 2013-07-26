$ =>
  $('#container').masonry itemSelector: '.item'
  Arrow_Point = ->
    s = $("#container").find ".item"
    $.each s, (i,obj)->
      posLeft = $(obj).css "left"
      if posLeft == "0px"
        html = "<span class='rightCorner'></span>"
        $(obj).prepend(html)
      else
        html = "<span class='leftCorner'></span>"
        $(obj).prepend(html)
  Arrow_Point()
  $(".flybox").fancybox 'transitionIn': 'elastic','transitionOut': 'elastic','titlePosition' : 'inside'
  $("a[rel=group]").fancybox 'titlePosition': 'over','cyclic': true,'titleFormat':(title,currentArray,currenttitle, currentIndex, currentOpts)=>"<span id='fancybox-title-over'> #{(currentIndex + 1)}/#{currentArray.length} (#{title.length} ?&nbsp;#{title}:)</span>"
  $("#showdiv").fancybox 'centerOnScroll':400
  $("#iframe").fancybox 'width':'75%', 'height':'75%','autoScale':false
  $("#swf").fancybox 'autoScale':false
  $("#modal").fancybox 'modal':false,'overlayShow':true,'hideOnOverlayClick':false,'hideOnContentClick':false,'enableEscapeButton':false,'showCloseButton':false,'centerOnScroll':true,'autoScale':false,'width':540,'height':360

