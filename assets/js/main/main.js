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
 
 ;$(document).ready(function() {
 
	var state = $.Controller.initState();
	var turn = "yellow";
    
    $("#board td").click(function() {
		
		$.Utilities.indicateTurn(turn);
		
		var col = $(this).data("id").split("-")[1];
		var board = $("#board");
		
		//console.log(col);
		
		// Check if bottom cell has no chip
		for (i = 5; i >= 0; i-- ) {
			//console.log(i);
			var id = i + "-" + col;
			var td = board.find("td[data-id='" + id + "']");
			
			if (!td.attr("class")) {
				td.addClass("chips-" + turn);
				
				// Update state
				var r = id.split("-")[0], c = id.split("-")[1];
				state[r][c] = turn == "yellow" ? 1 : 2;
				break;
			}
		}
		
		turn = $.Utilities.alternateTurn(turn);
		
	});
});