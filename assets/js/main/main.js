/**
 * Connect Four main JS
 *
 * @package     connect-four
 * @version     1.0
 * @copyright   (c) 2016, Bien Angelo Relucano
 * @author      bienr <bien.angelo.relucano@gmail.com>
 * @created     14 July 2016
 * @modified    17 July 2016
 */
 
 ;$(document).ready(function() {
 
	var state = $.Controller.initState();
	var turn = "yellow", ctr = 0, no = 0;
	
	$.Utilities.initDetails();
	$(".player-name").html(localStorage.getItem("player1"));
    
    $("#board td").click(function(e) {
		$.Utilities.lockDetails();
		
		var col = $(this).data("id").split("-")[1];
		var board = $("#board");
		var topChip = board.find("td[data-id='" + 0 + "-" + col + "']").attr("class");
		
		// Check if top already has a chip
		if (topChip === undefined) {
			$.Utilities.indicateTurn(turn);
			
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
					
					if (ctr > 5) {
						var winner = $.Controller.checkVertical(state) || $.Controller.checkHorizontal(state)
								  || $.Controller.checkRightDown(state) || $.Controller.checkRightUp(state);
						if (winner !== undefined) {
							$.Utilities.declareWinner(winner);
							e.stopPropagation();
						}
					}
					break;
				}
			}
			
			if (ctr == 41) {
				$.Utilities.declareTie();
			}
			
			turn = $.Utilities.alternateTurn(turn);
			ctr++;
		}
		
	}).hover(function() {
		$.Utilities.hoverChip(this, turn);
	}).on("mouseup", function() {
		$.Utilities.hoverChip(this, turn);
	});
	
	$("#board-area").mouseout(function() {
		$("#hover-board td").removeClass();
	});
	
	$(".player-text").click(function() {
		no = this.id.split("-")[1];
		localStorage.setItem("temp" + no, this.value);
		if (this.value != "") {
			$(".error").addClass("d-none");
		}
	}).on("keyup", function(e) {
		var code = e.keyCode || e.which
		no = this.id.split("-")[1];
		$(".error").addClass("d-none");
		if (this.value == "") {
			$(".error").removeClass("d-none");
			$("#h-turn").addClass("d-none");
		} else {
			$("#h-turn").removeClass("d-none");
		}
		if (no == 1) {
			$(".player-name").html(this.value);
		}
		if (code != 9) {
			localStorage.setItem("player" + no, this.value);
		}
		if (!$("#h-winner").hasClass("d-none")) {
			$("#h-turn").addClass("d-none");
		}
	}).on("blur", function() {
		if (this.value == "") {
			$(this).val(localStorage.getItem("temp" + no));
		}
		if (no == 1) {
			$(".player-name").html(this.value);
		}
	}).on("change", function() {
		if (no == 1) {
			$(".player-name").html(this.value);
		}
		localStorage.setItem("player" + no, this.value);
	});
	
	$(".new-game").click(function() {
		window.location.reload();
	});
});