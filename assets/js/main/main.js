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
	var turn = "yellow", ctr = 0;
	
	var player1 = $("#player-1").val(), 
	    player2 = $("#player-2").val();
		
	$("#player-name").html(player1);
    
    $("#board td").click(function() {
		
		$.Utilities.indicateTurn(turn, player1, player2);
		
		var col = $(this).data("id").split("-")[1];
		var board = $("#board");
		
		for (i = 5; i >= 0; i-- ) {
			//console.log(i);
			var id = i + "-" + col;
			var td = board.find("td[data-id='" + id + "']");
		
			// Check if bottom cell has no chip yet	
			if (!td.attr("class")) {
				
				// Remove the floating chip
				var hoverTd = $("#hover-board").find("td")[col];
				$(hoverTd).removeClass();
				
				td.addClass("chips-" + turn);
				
				// Update state
				var r = id.split("-")[0], c = id.split("-")[1];
				state[r][c] = turn == "yellow" ? 1 : 2;
				
				// Begin checking if chips are 6 or more
				if (ctr > 5) {
					var winner = $.Controller.checkVertical(state) || $.Controller.checkHorizontal(state)
							  || $.Controller.checkRightDown(state) || $.Controller.checkRightUp(state);
					if (winner != undefined) {
						$.Utilities.declareWinner(winner);
					}
				}
				break;
			}
		}
		
		turn = $.Utilities.alternateTurn(turn);
		ctr++;
	}).hover(function() {
		var col = $(this).data("id").split("-")[1];
		$("#hover-board td").removeClass();
		var cRow = $("#hover-board").find("td")[col];
		$(cRow).addClass("chips-" + turn);
	});
	
	$("#board-area").mouseout(function() {
		$("#hover-board td").removeClass();
	});
});