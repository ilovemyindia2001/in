


$(document).ready(function() {



	var num = 16;
	
	makeGrid(num);


	
	$( "#slider" ).on( "slidechange", function( event, ui ) {
		console.log()
		num = ui.value;
		$('.col').remove();
		makeGrid(num);
	} );


	function makeGrid(num) {	

		for (i = 0; i < num * num; i++) {
		$("<div>", {class: 'col'}).appendTo($(".container"))
		};
		makeSquare();
		color = $("#colorpicker").spectrum('get')
		console.log(color)
		$(".col").hover(function() {
			$(this).css("background-color", color);
			}, function() {
			$(this).css("background-color", color);
		});

	}

	$('#colorpicker').on("change", function() {
		makeGrid();
		color = $("#colorpicker").spectrum('get');
		// console.log(color);
		$(".col").hover(function() {
			$(this).css("background-color", color);
			}, function() {
			$(this).css("background-color", color);
		});
	});

	function getInput() {
		num = prompt('Please enter a number from 1-64 to resize the grid.');
		console.log(num);
		return num;
	}
	
	function makeSquare() {
		square = 800 / num
		
		$('.col').css('height', square + 'px');
		$('.col').css('width', square + 'px');
	}
	
	$('#clear').click(function () {
		$('.col').css('background-color', 'white');	
	});
	
	$('#resize').click(function () {
		getInput();
		$('.col').remove();
		makeGrid(num);
	});
	

	
	
	

	
	
});
	


		
