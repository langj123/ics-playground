window.addEventListener('load', function(){
	var canvas = document.getElementById('shapes'),
		win = window,
		wH = win.innerHeight,
		wW = win.innerWidth,
		ctx = canvas.getContext('2d'),
		inMemCan = document.createElement('canvas'), // used to redraw the canvas on resize
		inMemCtx = inMemCan.getContext('2d'),
		imgs = ['_img/shape-arrow.svg', '_img/shape-triangle.svg'],
		newImgs = [],
		empty = {x:0, y:0, scale: 1};


		for(var i = 0, length1 = imgs.length; i < length1; i++){
			var base_image = new Image();
			base_image.xpos = 0;
			base_image.ypos = 0;
			base_image.src = imgs[i];
			base_image.onload = function() {
				var img = this;
				TweenLite.to(empty, .5, {x: 200, y: 200, scale: 3});
				TweenLite.ticker.addEventListener('tick', function(){
					animate(img, ctx, wW, wH, empty);
				});
				animate(img, ctx, this.width, this.height, empty);
			}

		}

		canvas.height = wH;
		canvas.width = wW;
	// needed for resizing of canvas
	window.addEventListener('resize', function(){

		wH = win.innerHeight;
		wW = win.innerWidth;

		inMemCan.width = canvas.width;
		inMemCan.height = canvas.height;
    	inMemCtx.drawImage(canvas, 0, 0);

    	// resize the canvas accordingly
		canvas.height = wH;
		canvas.width = wW;
    	ctx.drawImage(inMemCan, 0, 0);

	});
});

function animate(img, ctx, w, h, empty) {
		ctx.clearRect(0, 0, w, h);
		ctx.drawImage(img, empty.x, empty.y, img.width, img.height);
}