window.onload = function (){
	var oPrev = document.getElementById('prev');
	var oNext = document.getElementById('next');
	var oPic1 = document.getElementById('pic1');
	
	var arrUrl = ["img/banner1.png","img/banner2.png","img/banner3.png",];
	
	var num = 0;	
	
	oPic1.src = arrUrl[num]
	
	oPrev.onclick = function (){
		num --;
		if ( num == -1 ){
			num = 2;
		}
		updatePic(num);
	};
	
	oNext.onclick = function (){
		next();
	};

	function next() {
		num ++;
		if ( num == 3 ){
			num = 0;
		}
		updatePic(num);
	}

	function updatePic(idx) {
		oPic1.src = arrUrl[num]
	}
	
	function autoPlay(){
	    play=setInterval(function(){
		    next();
	    },3000)
    }
  
    autoPlay();
	
	
	
	
};