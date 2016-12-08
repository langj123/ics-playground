window.addEventListener('load', function(){
	var imgs = document.querySelectorAll('.wrapper img'),
		wrapper = document.getElementsByClassName('wrapper'),
		wWidth = wrapper[0].offsetWidth,
		wHeight = wrapper[0].offsetHeight,
		spins = document.getElementsByClassName('spin'),
		huge = document.getElementsByClassName('huge'),
		rotate = 0;

	for(var i = 0, length1 = imgs.length; i < length1; i++){
		var iHeight = imgs[i].height,
			iWidth = imgs[i].width,
			rY = (Math.random() * wHeight) > iHeight ? (Math.random() * wHeight) : (Math.random() * wHeight) - iHeight,
			rX = (Math.random() * wWidth) > iWidth ? (Math.random() * wWidth) : (Math.random() * wWidth) - iWidth;

			console.log(rY);
			console.log(rX);
		TweenLite.to(imgs[i], .3,{ y: rY, x: rX, left: 0, top: 0, opacity: 1 });
		Draggable.create(imgs[i], {type:"x,y", edgeResistance:0.65, bounds:".wrapper", throwProps:true});
	}

	for(var i = 0, length1 = huge.length; i < length1; i++){
		huge[i].addEventListener('click', function() {
			var object = this;
			TweenMax.fromTo(object, .4, {scale: "1", opacity: "1"}, {scale: "50", onComplete: function(){
				TweenMax.set(object, {display: "none", opacity: "0"});
			}});
		});

	}

	window.addEventListener('scroll', function(){
		var sPos = window.scrollY,
			winHeight = window.innerHeight,
			wHeight = wrapper[0].offsetHeight,
			per = (sPos)/(wHeight - winHeight);

		TweenLite.to(wrapper[0], .1, { backgroundColor: "rbga(255, 255, 255, " + per + ")"});
		for(var i = 0, length1 = spins.length; i < length1; i++){
			var ranInt = Math.random() * .1;
			TweenLite.to(spins[i], ranInt, {rotation:rotate, transformOrigin:"50% 50%", ease:Linear.easeNone});
		}
		rotate++;
	});
});