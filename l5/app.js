// console.log('hello');

var getmodal = document.getElementById('signupmodal');
var getbtnsignup = document.getElementById('btn-signup');
var getspanclose = document.querySelector('.span-close');
var getbtnclose = document.getElementById('btn-close');
var getbtnopen = document.getElementById('btn-open');
console.log(getspanclose);


getbtnsignup.addEventListener('click',function(){
	getmodal.style.display = 'block';
});

getspanclose.addEventListener('click',function(){
	getmodal.style.display = 'none';
});

window.onclick = function(e){
	if(e.target == getmodal){
		getmodal.style.display = 'none';
	};
};

var getde = document.documentElement;
// console.log(getde);

getbtnopen.addEventListener('click',function(){
	if(getde.requestFullscreen){
		getde.requestFullscreen();
	}else if(getde.msRequestFullscreen){
		getde.msRequestFullscreen();
	}else if(getde.webkitRequestFullScreen){
		getde.webkitRequestFullScreen();
	};

	getbtnclose.style.display= 'inline-block';

});


getbtnclose.addEventListener('click',function(){
	if(document.exitFullscreen){
		document.exitFullscreen();
	}else if(document.msExitFullscreen){
		document.msExitFullscreen();
	}else if(document.webkitExitFullScreen){
		document.webkitExitFullScreen();
	};

	getbtnclose.style.display ='none';

});


