console.log('hey');

var getprogressbar = document.getElementById('progress-bar');

window.onscroll = function(){
	scrollpoint()
};

function scrollpoint(){
	console.log('hay i am working!');

	// scrollpoint
	// projectheight
	// currentheight

	// scrollpoint * 100 / projectheight-currentheight 

	var getscrollpoint = document.documentElement.scrollTop;
	// console.log(getscrollpoint);
	var getscrollheight = document.documentElement.scrollHeight;
	// console.log(getscrollheight);
	var getclientheight = document.documentElement.clientHeight;

	var calcheight = getscrollheight - getclientheight;

	// var getfinalheight = Math.round((getscrollpoint * 100) / calcheight);
	var getfinalheight = Math.round((getscrollpoint/calcheight) * 100);
	// console.log(getfinalheight);

	getprogressbar.style.width = `${getfinalheight}%`;

};

function printme(){
	window.print();
}