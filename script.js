//your JS code here. If required.
document.addEventListener('DOMContentLoaded' , function(){
	const squares = document.querySelectorAll('.square');

	squares.forEach(square => {
		square.addEventListener('mouseover', function(){
			square.style.backgroundColor = '#e74c3c';
		});

		 square.addEventListener('mouseout', function() {
      setTimeout(() => {
        square.style.backgroundColor = '#3498db';
      }, 1000);
			 
		 });
			 
	});
});