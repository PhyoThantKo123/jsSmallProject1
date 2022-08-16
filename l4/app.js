console.log('hello');

var slides = document.getElementsByClassName('carousel-item');
console.log(slides);

var dots = document.querySelectorAll('.dot');
console.log(dots);

var currslide = 1;

// previous icon
document.getElementById('prev').addEventListener('click',function(){
	carousel(currslide -= 1);
});

document.getElementById('next').addEventListener('click',function(){
	carousel(currslide += 1);
});

for(let i = 0; i < dots.length; i++){
	dots[i].addEventListener('click',function(){
		currslide = this.getAttribute('data-bs-slide-to');
		carousel(currslide);
	});

};



setInterval(function(){

	++currslide;

	if(currslide > slides.length){
		currslide = 1;
	};
	carousel(currslide);

},3000);

carousel(currslide);


function carousel(slidenum){

	let x;
	for(x = 0; x < slides.length; x++){
		slides[x].style.display = 'none';
	}

	let j;
	for(j = 0; j < dots.length; j++){
		// dots[j].classList.remove('.active');
		// dots[j].className = 'dot';
		dots[j].className = dots[j].className.replace('active','');
	}

	if(slidenum > slides.length){
		currslide = 1;
	}else if(slidenum < 1){
		currslide = slides.length;
	}

	// console.log(currslide);

	slides[currslide-1].style.display = 'block';
	// dots[currslide-1].className = 'dot active';
	// dots[currslide - 1].classList.add('active');
	dots[currslide - 1].className += ' active';

};

