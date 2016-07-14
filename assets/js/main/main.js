/**
 * Connect Four main JS
 *
 * @package     connect-four
 * @version     1.0
 * @copyright   (c) 2016, Bien Angelo Relucano
 * @author      bienr <bien.angelo.relucano@gmail.com>
 * @created     14 July 2016
 * @modified    14 July 2016
 */
 
 ;$(document).ready(function(){
 
	var turn = "yellow";
    
    $("#board td").click(function() {
		
		$.Utilities.indicateTurn(turn);
		
		var state = $.Controller.initState();
		// console.log(state);
	
		// Get column
		var col = $(this).data("id").split("-")[1];
		var board = $("#board");
		
		console.log(col);
		
		// check if bottom cell has no class
		for (i = 5; i >= 0; i-- ) {
			console.log(i);
			var id = i + "-" + col;
			var td = board.find("td[data-id='" + id + "']");
			
			if (!td.attr("class")) {
				td.addClass("chips-" + turn);
				break;
			}
		}
		
		turn = $.Utilities.alternateTurn(turn);
		
	});
    
	function alternateTurn() {
		number = number == 1 ? 2 : 1;
	}
});