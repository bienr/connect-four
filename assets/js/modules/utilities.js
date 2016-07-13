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
			}
		}
}); // End of extend