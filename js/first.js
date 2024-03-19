$(document).ready(function(){

	$('.nav-button').click(function(){
		$('.nav-button').toggleClass('change');
	});

	$('.nav-link[href="#home"]').addClass('nav-active');

	$(window).scroll(function(){
		let position=$(this).scrollTop();
		console.log(position);
		if(position >= 200)
		{
			$('.nav-menu').addClass('custom-navbar');
		}else
		{
			$('.nav-menu').removeClass('custom-navbar');
		}
	})
})

