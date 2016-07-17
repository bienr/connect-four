/**
 * Utilities JS
 *
 * @package     connect-four
 * @version     1.0
 * @copyright   (c) 2016, Bien Angelo Relucano
 * @author      bienr <bien.angelo.relucano@gmail.com>
 * @created     14 July 2016
 * @modified    17 July 2016
 */
$.extend(
	{
		// Utilities Namespace
		Utilities :
		{
			initDetails : function() {
				if (typeof(Storage) !== "undefined") {
					localStorage.setItem("player1", $("#player-1").val());
					localStorage.setItem("player2", $("#player-2").val());
				}
			},
			
			lockDetails : function() {
				$("#player-1, #player-2").attr("readonly", "readonly");
			},
			
			alternateTurn : function(turn)
			{
				turn = turn == "yellow" ? "red" : "yellow";
				return turn;
			},
			
			indicateTurn : function(turn)
			{
				turn = $.Utilities.alternateTurn(turn);
				$("#indicator").removeClass().addClass("chips-" + turn).html(turn.toString().toUpperCase());
				$(".player-name").html(turn == "yellow" ? localStorage.getItem("player1") : localStorage.getItem("player2"));
			},
			
			hoverChip : function(obj, turn)
			{
				var col = $(obj).data("id").split("-")[1];
				$("#hover-board td").removeClass();
				var cRow = $("#hover-board").find("td")[col];
				$(cRow).addClass("chips-" + turn);
			},
			
			declareWinner : function(w)
			{
				$(".player-winner").html(w == 1 ? localStorage.getItem("player1") : localStorage.getItem("player2"));
				$("#indicator").removeClass().addClass("chips-" + (w == 1 ? "yellow" : "red")).html((w == 1 ? "yellow" : "red").toString().toUpperCase());
				$("#h-turn").addClass("d-none");
				$("#h-winner").removeClass("d-none");
				this.modalOverlay();
			},
			
			declareTie : function()
			{
				$("#winner-Label").html("We have to play again!");
				$(".player-1").html(localStorage.getItem("player1"));
				$(".player-2").html(localStorage.getItem("player2"));
				$(".winner-trophy, #cap-winner, #h-turn, #h-winner").addClass("d-none");
				$(".winner-tie, #cap-tie, #h-tie").removeClass("d-none");
				$("#indicator").removeClass().addClass("chips-none").html("TIE!");
				$(".new-game").html("Play Again");
				this.modalOverlay();
			},
			
			modalOverlay : function()
			{
				$("#board-overlay").removeClass();
				$("#board").css("marginTop", "-580px");
				setTimeout(function() {
					$("#modal-winner").modal();
				}, 800);
			},
			
			markPattern : function(p1, p2, p3, p4)
			{
				$("[data-id='" + p1 + "'], [data-id='" + p2 + "'], [data-id='" + p3 + "'], [data-id='" + p4 + "']").html("<span class='chips-ztar'></span>");
				setInterval(function() {
					$('.chips-ztar').fadeOut(350).fadeIn(350);
				}, 700);
			}
			
		}
});