console.log('hello world');


var getprogressbar = document.querySelector('.progress-bar');
var getdownloadbtn = document.querySelector('.btn');
var geturl = 'https://linkedin.com';

getdownloadbtn.addEventListener('click',function(){
	getdownloadbtn.setAttribute('disabled',true);
	var setwidth = 0;

	let setinv = setInterval(progress,100);

	function progress(){
		if(setwidth >= 100){
			clearInterval(setinv);
			setwidth = 0;
			window.location.href = geturl;
		}else{
			setwidth++;
			getprogressbar.style.width = setwidth + '%';
			getprogressbar.setAttribute('data-inc',`${setwidth}%`);
		};
	};

});

// 10PG