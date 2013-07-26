window.onload = ->
  oC = document.getElementById("c1")
  oGC = oC.getContext("2d")

  oC.onmousedown = (ev)->
    ev = ev || window.event
    oGC.save()
    oGC.beginPath()
    oGC.moveTo(ev.clientX-oC.offsetLeft,ev.clientY-oC.offsetTop)

    document.onmousemove = (ev)->
      ev = ev || window.event
      oGC.lineTo(ev.clientX-oC.offsetLeft,ev.clientY-oC.offsetTop)
      oGC.stroke()

    document.onmouseup = (ev)->
      document.onmousemove = null
      document.onmouseup = null
    oGC.restore()

  $("#clear").bind "click", =>
    oGc.clearRect(0,0,oC.width,oC.height)

  $("#widthadjust").bind "click", ->

    if $("#widthinput").val()
      d = $("#widthinput").val()
      oC.width = $("#widthinput").val()
    else
      oC.width = 600

  $("#heightadjust").bind "click", ->

    if $("#heightinput").val()
      d = $("#heightinput").val()
      oC.height = $("#heightinput").val()
    else
      oC.height = 500

  $("#color").change ->
    if $("#color").val() is "black"
      oGC.lineWidth = "black"
    else
      r = $("#color").val()
      oGC.strokeStyle = r

  $("#thickness").change ->
    if $("#thickness").val() is "2"
      oGC.lineWidth = 2;
    else
      r = $("#thickness").val()
      oGC.lineWidth = r

  $ =>
    bCanPreview = true
    canvas = document.getElementById('picker')
    ctx = canvas.getContext('2d')
    image = new Image()
    image.onload = ->
      ctx.drawImage(image, 0, 0, image.width,image.height)
    imageSrc = 'images/colorwheel1.png'
    switch $(canvas).attr 'var'
      when '2' then imageSrc = 'images/colorwheel2.png'
      when '3' then imageSrc = 'images/colorwheel3.png'
      when '4' then imageSrc = 'images/colorwheel4.png'
      when '5' then imageSrc = 'images/colorwheel5.png'
    image.src = imageSrc
    $('#picker').mousemove (e)->
      if bCanPreview
        canvasOffset = $(canvas).offset()
        canvasX = Math.floor(e.pageX - canvasOffset.left)
        canvasY = Math.floor(e.pageY - canvasOffset.top)
        imageData = ctx.getImageData(canvasX, canvasY, 1, 1)
        pixel = imageData.data
        pixelColor = "rgb("+pixel[0]+", "+pixel[1]+", "+pixel[2]+")"
        $('.preview').css 'backgroundColor',pixelColor
        oGC.strokeStyle = $("#hexVal").val()
        $('#rVal').val(pixel[0])
        $('#gVal').val(pixel[1])
        $('#bVal').val(pixel[2])
        $('#rgbVal').val(pixel[0]+','+pixel[1]+','+pixel[2])
        dColor = pixel[2] + 256*pixel[1] + 65536*pixel[0]
        $('#hexVal').val('#' + ('0000' + dColor.toString(16)).substr(-6))
    $('.controls').click (e)->
      bCanPreview = !bCanPreview
      b = $("#hexVal").val()
      if b isnt "#00000"
        oGC.strokeStyle = $("#hexVal").val()
      else
        oGC.strokeStyle = "black"
    $('.preview').click (e)->
      $('.colorpicker').fadeToggle "slow","linear"
      bCanPreview = ture
    $("#eraseradjust").bind "click", ->
      rgb = $(".preview").css 'background-color'
      if rgb >= 0
        return rgb
      else
        rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/)
        hex = (x)-> ("0" + parseInt(x).toString(16)).slice(-2)
        rgb= "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3])
      $("#eraser").change ->
        oGC.lineWidth = $("#eraser").val()
      oGC.strokeStyle = "white"
      $("#pen").bind "click", ->
        oGC.strokeStyle = rgb
        n = $("#thickness").val()





