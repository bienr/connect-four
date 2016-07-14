/**
 * Utilities JS
 *
 * @package     connect-four
 * @version     1.0
 * @copyright   (c) 2016, Bien Angelo Relucano
 * @author      bienr <bien.angelo.relucano@gmail.com>
 * @created     14 July 2016
 * @modified    14 July 2016
 */
$.extend(
	{
		// Utilities Namespace
		Utilities :
		{
			alternateTurn : function(turn)
			{
				turn = turn == "yellow" ? "red" : "yellow";
				return turn;
			},
			
			indicateTurn : function(turn)
			{
				turn = $.Utilities.alternateTurn(turn);
				$("#indno").html(turn == "yellow" ? 1 : 2);
				$("#indicator").removeClass().addClass("chips-" + turn).html(turn.toString().toUpperCase());
			},
			
			declareWinner : function(w)
			{
				 console.log("Winner is: " + (w == 1 ? "Player 1 (Yellow)" : "Player 2 (Red)"));
				 $("#board-overlay").removeClass();
				 $("#board").css("marginTop", "-575px");
				 $("#modal-winner").modal();
			},
			
			delay : function(ms)
			{
				var cur_d = new Date();
				var cur_ticks = cur_d.getTime();
				var ms_passed = 0;
				while(ms_passed < ms) {
					var d = new Date();
					var ticks = d.getTime();
					ms_passed = ticks - cur_ticks;
					d = null;
				}
			},
			
			animateColumn : function(id, turn)
			{
				var row = id.split("-")[0], col = id.split("-")[1];
				
				// Remove the floating chip
				var hoverTd = $("#hover-board").find("td")[col];
				$(hoverTd).removeClass();
				
				// Add effect to upper cells
				for ( r = 0; r < row; r++ ) {
					var upperCell = $("#board").find("td[data-id='" + r + "-" + col + "']");
					upperCell.addClass("chips-" + turn);
					$.Utilities.delay(50);
					upperCell.removeClass();
				}
			}
		}
}); // End of extend