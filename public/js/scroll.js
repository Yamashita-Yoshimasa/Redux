// JavaScript Document
$(function(){
	var timer = null;
	$(window).on('scroll',function() {
		clearTimeout( timer );
		timer = setTimeout(function() {
			var obj_t_pos = jQuery('.p-about__container').offset().top;
			var scr_count = jQuery(document).scrollTop() + (window.innerHeight/1.2); // ディスプレイの半分の高さを追加
			if(scr_count > obj_t_pos){
				jQuery('.p-about__container').addClass('is-active--about');}
		}, 50 );
	});
});




var scrollAnimationElm = document.querySelectorAll('.sa');
var scrollAnimationFunc = function() {
  for(var i = 0; i < scrollAnimationElm.length; i++) {
    var triggerMargin = 300;
    if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
      scrollAnimationElm[i].classList.add('show');
    }
  }
}
window.addEventListener('load', scrollAnimationFunc);
window.addEventListener('scroll', scrollAnimationFunc);

