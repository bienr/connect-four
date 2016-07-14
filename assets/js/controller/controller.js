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
					[0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0]
				];
			},
			
			checkVertical : function(state)
			{
				for (r = 0; r <= 2; r++) {
					for (c = 0; c <= 6; c++) {
						if (state[r][c] != 0 &&
							state[r][c] == state[r + 1][c] &&
							state[r][c] == state[r + 2][c] &&
							state[r][c] == state[r + 3][c]) {
							return state[r][c];
						}
					}
				}
			},
			
			checkHorizontal : function(state)
			{
				for (r = 0; r <= 5; r++) {
					for (c = 0; c <= 3; c++) {
						if (state[r][c] != 0 &&
							state[r][c] == state[r][c + 1] &&
							state[r][c] == state[r][c + 2] &&
							state[r][c] == state[r][c + 3]) {
							return state[r][c];
						}
					}
				}
			},
			
			checkRightDown : function(state)
			{
				for (r = 0; r <= 2; r++) {
					for (c = 0; c <= 3; c++) {
						if (state[r][c] != 0 &&
							state[r][c] == state[r + 1][c + 1] &&
							state[r][c] == state[r + 2][c + 2] &&
							state[r][c] == state[r + 3][c + 3]) {
							return state[r][c];
						}
					}
				}
			},
			
			checkRightUp : function(state)
			{
				for (r = 3; r <= 5; r++) {
					for (c = 0; c <= 3; c++) {
						if (state[r][c] != 0 &&
							state[r][c] == state[r - 1][c + 1] &&
							state[r][c] == state[r - 2][c + 2] &&
							state[r][c] == state[r - 3][c + 3]) {
							return state[r][c];
						}
					}
				}
			}
		}
});