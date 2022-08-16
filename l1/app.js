console.log('hay');

var getacctitles = document.getElementsByClassName('acc-title');
var getacccontents = document.querySelectorAll('.acc-content');

console.log(getacctitles); // HTML Collection *cant looping! with for each
console.log(getacccontents); // Node List

for(let i = 0; i < getacctitles.length; i++){
	// console.log(getacctitles[i]);

	getacctitles[i].addEventListener('click',function(e){
		// console.log(e.target);
		// console.log(this);

		this.classList.toggle('active');
		var getcontent = this.nextElementSibling;
		// console.log(getcontent);

		if(getcontent.style.height){
			getcontent.style.height = null;
		}else{
			// getcontent.style.height = 'auto';
			getcontent.style.height = getcontent.scrollHeight + 'px';
		};

	});

	// getacccontents[0].style.height = getacccontents[0].scrollHeight + 'px';

	if(getacctitles[i].classList.contains('active')){
		getacccontents[i].style.height = getacccontents[i].scrollHeight + 'px';
	};

	

};
