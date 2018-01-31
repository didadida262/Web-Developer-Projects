$(function(){
	var $li = $('.slide li');
	var len = $li.length;

	var $prev = $('.prev');
	var $next = $('.next');
	var timer=null;

	//即将展示的图片 
	var nowli = 0;
	// 当前图片，也就是即将消失的图片
	var prevli = 0;

	$li.not(':first').css({left:400});

	$li.each(function(index){

		var $sli = $('<li>');
		if(index == 0){
			$sli.addClass('active');
		}
			
		$sli.appendTo('.points');
	})

	$points = $('.points li');

	$points.click(function() {
		nowli = $(this).index();
		if(nowli==prevli){
			return;
		}
		move();
		$(this).addClass('active').siblings().removeClass('active');

	});

	$prev.click(function() {
		nowli--;
		move();
		$points.eq(nowli).addClass('active').siblings().removeClass('active');

	});
	
	$next.click(function() {
		nowli++;
		move();
		$points.eq(nowli).addClass('active').siblings().removeClass('active');

	});

	timer = setInterval(autoPlay,4000);
	function autoPlay(){
		nowli++;
		move();
		$points.eq(nowli).addClass('active').siblings().removeClass('active');

	}
	
	$('.slide').mouseenter(function() {
		clearInterval(timer);
	});

	$('.slide').mouseout(function() {
		timer = setInterval(autoPlay,4000);
	});

	function move(){
		if(nowli<0){
			nowli = len-1;
			prevli = 0;

			$li.eq(nowli).css({left:-400});
			$li.eq(prevli).stop().animate({left:400});
			$li.eq(nowli).stop().animate({left:0});
			prevli=nowli;
			return;
		}

		if(nowli>len-1){
			nowli = 0;
			prevli = len-1;

			$li.eq(nowli).css({left:400});
			$li.eq(prevli).stop().animate({left:-400});
			$li.eq(nowli).stop().animate({left:0});
			prevli=nowli;
			return;
		}

		if(nowli>prevli){
			$li.eq(nowli).css({left:400});
			$li.eq(prevli).stop().animate({left:-400});
			$li.eq(nowli).stop().animate({left:0});
		}

		else{
			$li.eq(nowli).css({left:-400});
			$li.eq(prevli).stop().animate({left:400});
			$li.eq(nowli).stop().animate({left:0});

		}
				prevli = nowli;

	}

})