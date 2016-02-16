/* Asociamos función canvasApp a carga de página */
window.addEventListener('load', canvasApp, false);	

function canvasApp(){  
    /* Inicializamos el canvas */
	var theCanvas = document.getElementById('canvas');
	var context = theCanvas.getContext('2d');

    /* Inicializamos el valor del color */
	var colorChosen = document.getElementById("color_chosen");
	var brushChosen = document.getElementById("brush_chosen");

	/*Tamaño de brocha*/
    var global_brush = 7;

    /* Tomamos los botones de colores por su id */
	var redButton = document.getElementById("Red");
	var greenButton = document.getElementById("Green");
	var blueButton = document.getElementById("Blue");
	var blackButton = document.getElementById("Black");
	var whiteButton = document.getElementById("White");
	
	var brocha1Button = document.getElementById("Brocha1");
	var brocha2Button = document.getElementById("Brocha2");
	var brocha3Button = document.getElementById("Brocha3");
	var brocha4Button = document.getElementById("Brocha4");
    /* Asociamos función colorPressed a pulsación de botón */
    redButton.addEventListener('click', colorPressed, false);
    greenButton.addEventListener('click', colorPressed, false);
    blueButton.addEventListener('click', colorPressed, false);
    blackButton.addEventListener('click', colorPressed, false);
    whiteButton.addEventListener('click', colorPressed, false);
	brocha1Button.addEventListener('click', brushPressed, false);
    brocha2Button.addEventListener('click', brushPressed, false);
    brocha3Button.addEventListener('click', brushPressed, false);
    brocha4Button.addEventListener('click', brushPressed, false);

    function colorPressed(e) {
	  var color_button_selected = e.target;
	  var color_id = color_button_selected.getAttribute('id');
	  colorChosen.innerHTML = color_id;
    }

	function brushPressed(e) {
	  var brush_button_selected = e.target;
	  var brush_id = brush_button_selected.getAttribute('id');
	  switch(brush_id){
	    case("Brocha1"):
	      global_brush="1";
          break; 
	    case("Brocha2"):
	      global_brush="7"; 
      	  break;
        case("Brocha3"):
	      global_brush="14";
          break; 
        case("Brocha4"):
	      global_brush="23";
          break; 
      }
	  console.log(brush_id);

	  brushChosen.innerHTML = brush_id;
    }

    /* Botón de reseteo */
	var resetButton = document.getElementById("reset_image");
    resetButton.addEventListener('click', resetPressed, false);

    /* Asociamos función colorPressed a pulsación de botón */
    function resetPressed(e) {
      theCanvas.width = theCanvas.width; // Borramos canvas
      drawScreen();
    }

    // For the mouse_moved event handler.
    var begin_drawing = false;

 	drawScreen();

    function drawScreen() {
	  theCanvas.addEventListener('mousedown', mouse_pressed_down, false);
	  theCanvas.addEventListener('mousemove', mouse_moved, false);
	  theCanvas.addEventListener('mouseup', mouse_released, false);
    }

    function mouse_pressed_down(ev) {
  	  begin_drawing = true;
	  context.fillStyle = colorChosen.innerHTML;
    }

    function mouse_released(ev) {
	  begin_drawing = false;
    }

    function mouse_moved(ev) {
	  var x, y;	
	  // Get the mouse position in the canvas
	  x = ev.pageX;
	  y = ev.pageY;
	
	  var brush = document.getElementById('brush_chosen');
	  if (begin_drawing) {
	    context.beginPath();
		console.log(global_brush);
	    context.arc(x, y, global_brush, (Math.PI/180)*0, (Math.PI/180)*360, false);
	    context.fill();
        context.closePath();
	  }
    }
}
