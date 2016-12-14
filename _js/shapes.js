window.addEventListener('load', function(){
	var winHeight = window.innerHeight,
		winWidth = window.innerWidth,
		winTop = window.pageYOffset,
		section = document.getElementsByTagName('section'),
		sect2 = document.getElementsByClassName('section-2'),
		sect3 = document.getElementsByClassName('section-3'),
		sect4 = document.getElementsByClassName('section-4'),
		sect2T = sect2[0].offsetTop,
		sect3T = sect3[0].offsetTop,
		sect4T = sect4[0].offsetTop,
		sect3H = sect3[0].offsetHeight,
		sect4H = sect4[0].offsetHeight,
		spins = document.getElementsByClassName('spin'),
		huge = document.getElementsByClassName('huge'),
		rotate = 0,
		bgMatch = /(url\()[\"a-zA-Z-_:\/.?=]+(\))/g,
		bgImg3 = window.getComputedStyle(sect3[0]).backgroundImage,
		bgImg3 = bgImg3.match(bgMatch),
		bgImg3 = bgImg3.join(),
		startScroll = ((sect3T + sect3H) - (winHeight));

    // randomly position elements in section
 	for(var i = 0, length1 = section.length; i < length1; i++){
 		if (section[i].className.indexOf("section-") != -1) {
 			var sImgs = section[i].getElementsByTagName('img'),
 				s = section[i],
 				sWidth = s.offsetWidth,
 				sHeight = s.offsetHeight;

 			for(var x = 0, length2 = sImgs.length; x < length2; x++){
 				if (sImgs[x].className.indexOf("shapes") != -1) {
 				var iHeight = sImgs[x].height,
 					iWidth = sImgs[x].width,
 					rY = (Math.random() * sHeight) > iHeight ? (Math.random() * sHeight) : (Math.random() * sHeight) - iHeight,
					rX = (Math.random() * sWidth) > iWidth ? (Math.random() * sWidth) : (Math.random() * sWidth) - iWidth;

 					TweenLite.to(sImgs[x], .3,{left: rX, top: rY, opacity: 1 });
					Draggable.create(sImgs[x], {type:"top,left", edgeResistance:0.5, bounds: s, throwProps:true});
				}
 			}
 		}
 	}
	// click and expand elements
	for(var i = 0, length1 = huge.length; i < length1; i++){
		huge[i].addEventListener('click', function() {
			var object = this;
			TweenMax.fromTo(object, .4, {scale: "1", opacity: "1"}, {scale: "50", onComplete: function(){
				TweenMax.set(object, {display: "none", opacity: "0"});
			}});
		});

	}
	// random spins
	if (spins.length > 0) {
		var timer = setInterval(function(){
			for(var i = 0, length1 = spins.length; i < length1; i++){
				TweenLite.to(spins[i], 15, {rotation:rotate, transformOrigin:"50% 50%", ease:Linear.easeNone});
			}
			rotate++;
		}, 20);
	}
	// random circles
	// for (var z = 0; z < 100; z++) {
	// 	var c = document.createElement('div');
	// 	c.setAttribute("class", "circle");
	// 	sect4[0].appendChild(c);



	// }

	// scroll effects for sections
	window.addEventListener('scroll', function(){
			winTop = window.pageYOffset;

			var p = ((sect3T + sect3H) - (winHeight + winTop)) / sect3H <= 1 ? ((sect3T + sect3H) - (winHeight + winTop)) / sect3H : 1,
				per100 = p/10 * 100;
			// if section is in middle of screen scroll up and do animations
			if ((winTop + winHeight) >= sect3T) {
				sect3[0].style.backgroundImage = "linear-gradient(#AF2024 " + (per100 * 2) + "%, transparent " +  (per100 * 2) + "%, transparent 20%, #af2024 20% , #af2024 " + ((per100 * 2) + 20) + "%, transparent " + ((per100 * 2) + 20) + "%, transparent 40%, #af2024 40%, #af2024 " + ((per100 * 2) + 40) + "%, transparent " + ((per100 * 2) + 40) + "%, transparent 60%, #af2024 60%, #af2024 " + ((per100 * 2) + 60) + "%, transparent " + ((per100 * 2) + 60) + "%, transparent 80%, #af2024 80%, #af2024 " + ((per100 * 2) + 80) + "%, transparent " + ((per100 * 2) + 80) + "%), " + bgImg3;
			}
			if ((winTop + winHeight/3.75) >= sect4T) {
				var hImg = sect4[0].getElementsByClassName('header-image')[0];

				TweenLite.to(hImg, .3, {width: "65vw", height: "65vw", opacity: 1, onStart: function() { var cAdd = hImg.className.indexOf('beginAnimate') == -1 ? hImg.className += " beginAnimate" : ""; }, onComplete:  function(){ var cAdd = hImg.className.indexOf('animated') == -1 ? hImg.className += " animated" : ""; }});
			}

	});
});







