var t = 2000

// var Interval = setInterval(function(){
// 	// colorChange()
// }, t);

colorChange();

$(".colourful").click(function(){

	// clearInterval(Interval)	
	// t= t/2

	var self = $(this);

	setInterval(function() {
		var b = Math.floor(Math.random()*100)+155

		bgColor = "rgb(50, 50, "+ b +")"

		self.css({
			"background": bgColor,
		});
	}, t);

	var a = (Math.random()*140)+80

	var b = (Math.random()*80)+50

	var c = (Math.random()*150)+100

	var d = (Math.random()*80)+50

	var p = $(this).position();
		// console.log(p)

	var y = (Math.random()* 100) + (p.top-50); 

	var x = (Math.random()* 100) + (p.left-50);

	$(this)
		.clone(true, true)
		.appendTo("body")
		.css({top:y, left:x, "border-radius" : a + "px " + b + "px " + c + "px " + d + "px ", "opacity" : (Math.random())});

});

function colorChange (){ 
	var b = Math.floor(Math.random()*100)+155

	bgColor = "rgb(50, 50, "+ b +")"

	$(".colourful").css({
		"background": bgColor,
	});
}





	