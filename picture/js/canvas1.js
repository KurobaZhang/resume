window.onload = function(){
	var oC = document.getElementById("c1");
	var oGC = oC.getContext("2d");
    oC.onmousedown = function(ev){
    	var ev = ev || window.event;
    	oGC.save();
    	oGC.beginPath();
    	oGC.moveTo(ev.clientX-oC.offsetLeft,ev.clientY-oC.offsetTop);
    	document.onmousemove = function(ev){
    		var ev = ev || window.event;
    		oGC.lineTo(ev.clientX-oC.offsetLeft,ev.clientY-oC.offsetTop);
    		oGC.stroke();
    	};
        document.onmouseup = function(){
    	   	document.onmousemove = null;
    		document.onmouseup = null;
    	};
    	oGC.restore();
    };

    $("#clear").bind("click",function(){
		oGC.clearRect(0,0,oC.width,oC.height);
    });
	$("#widthadjust").bind("click",function(){

		if ($("#widthinput").val()) {

			var d = $("#widthinput").val();
			oC.width = $("#widthinput").val();
		}else
		{
			oC.width = 600;

		};
	});

	$("#heightadjust").bind("click",function(){

		if ($("#heightinput").val()) {
			var d = $("#heightinput").val();
			oC.height = $("#heightinput").val();
		}else
		{
			oC.height = 500;
		};

	});

	$("#color").change(function(){

		if ($("#color").val() == "black") {
			oGC.strokeStyle = "black";
		}else
		{
			var r = $("#color").val();
			oGC.strokeStyle = r;
		};
	});

	$("#thickness").change(function(){
		if ($("#thickness").val() == "2") {
			oGC.lineWidth = 2;
		}else
		{
			var r = $("#thickness").val();
			oGC.lineWidth = r;
		};
	});


    //颜色选择器相关
$(function(){
    var bCanPreview = true; // can preview

    // create canvas and context objects
    var canvas = document.getElementById('picker');
    var ctx = canvas.getContext('2d');

    // drawing active image
    var image = new Image();
    image.onload = function () {
        ctx.drawImage(image, 0, 0, image.width, image.height); // draw the image on the canvas
    }

    // select desired colorwheel
    var imageSrc = 'images/colorwheel1.png';
    switch ($(canvas).attr('var')) {
        case '2':
            imageSrc = 'images/colorwheel2.png';
            break;
        case '3':
            imageSrc = 'images/colorwheel3.png';
            break;
        case '4':
            imageSrc = 'images/colorwheel4.png';
            break;
        case '5':
            imageSrc = 'images/colorwheel5.png';
            break;
    }
    image.src = imageSrc;

    $('#picker').mousemove(function(e) { // mouse move handler
        if (bCanPreview) {
            // get coordinates of current position
            var canvasOffset = $(canvas).offset();
            var canvasX = Math.floor(e.pageX - canvasOffset.left);
            var canvasY = Math.floor(e.pageY - canvasOffset.top);

            // get current pixel
            var imageData = ctx.getImageData(canvasX, canvasY, 1, 1);
            var pixel = imageData.data;

            // update preview color
            var pixelColor = "rgb("+pixel[0]+", "+pixel[1]+", "+pixel[2]+")";
            $('.preview').css('backgroundColor', pixelColor);
            oGC.strokeStyle = $("#hexVal").val();

            // update controls
            $('#rVal').val(pixel[0]);
            $('#gVal').val(pixel[1]);
            $('#bVal').val(pixel[2]);
            $('#rgbVal').val(pixel[0]+','+pixel[1]+','+pixel[2]);

            var dColor = pixel[2] + 256 * pixel[1] + 65536 * pixel[0];
            $('#hexVal').val('#' + ('0000' + dColor.toString(16)).substr(-6));
        }
    });
    $('.controls').click(function(e) { // click event handler
        bCanPreview = !bCanPreview;
        var b = $("#hexVal").val();
        if(b != "#00000")
        {
            oGC.strokeStyle = $("#hexVal").val();
        }else{
            oGC.strokeStyle = "black";
        }

    });
    $('.preview').click(function(e) { // preview click
        $('.colorpicker').fadeToggle("slow", "linear");
        bCanPreview = true;
    });


});
	 $("#eraseradjust").bind("click",function(){
        var rgb = $(".preview").css('background-color');
        if(rgb >= 0) return rgb;//如果是一个hex值则直接返回
        else{
            rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
            function hex(x) {return ("0" + parseInt(x).toString(16)).slice(-2);}
            rgb= "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
        }
        $("#eraser").change(function(){
            oGC.lineWidth =$("#eraser").val();
        });
        oGC.strokeStyle = "white";

        $("#pen").bind("click",function(){
            oGC.strokeStyle = rgb;
            var n = $("#thickness").val();
        });

    });

};



