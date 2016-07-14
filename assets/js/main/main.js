/**
 * Connect Four main JS
 *
 * @package     connect-four
 * @version     1.0
 * @copyright   (c) 2016, Bien Angelo Relucano
 * @author      bienr <bien.angelo.relucano@gmail.com>
 * @created     14 July 2016
 * @modified    15 July 2016
 */
 
 ;$(document).ready(function() {
 
	var state = $.Controller.initState();
	var turn = "yellow", ctr = 0;
	
	$.Utilities.initDetails();
	$(".player-name").html(localStorage.getItem("player1"));
    
    $("#board td").click(function(e) {
		$.Utilities.lockDetails();
		$.Utilities.indicateTurn(turn);
		
		var col = $(this).data("id").split("-")[1];
		var board = $("#board");
		
		for (i = 5; i >= 0; i-- ) {
			
			var id = i + "-" + col;
			var td = board.find("td[data-id='" + id + "']");
		
			// Check if bottom cell has no chip yet	
			if (!td.attr("class")) {
				// Indicate dropping of chip
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
						e.stopPropagation();
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
	
	$("#player-1").on("keyup", function() {
		$(".player-name").html(this.value);
		localStorage.setItem("player1", this.value);
	});
	
	$("#player-2").on("keyup", function() {
		localStorage.setItem("player2", this.value);
	});
	
	$(".new-game").click(function() {
		window.location.reload();
	});
});