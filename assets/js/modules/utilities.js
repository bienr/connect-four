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
			}
		}
}); // End of extend