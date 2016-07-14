/**
 * Controller JS
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
		// Controller Namespace
		Controller :
		{
			initState : function()
			{
				return [
					[0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0]
				];
			}
		}
}); // End of extend