/**
 * AI JS
 *
 * @package     connect-four
 * @version     1.0
 * @copyright   (c) 2016, Bien Angelo Relucano
 * @author      bienr <bien.angelo.relucano@gmail.com>
 * @created     18 July 2016
 * @modified    18 July 2016
 */
$.extend(
	{
		// AI Namespace
		AI :
		{
			move : function(state) 
			{
				// if bottom row has no 2 yet
					// pick random place to start
					// drop chip
				// else
					// check if opponent has two alongside 1
						// iterate from bottom up
							// iterate from left to right
								// attempt block horizontal
								// if opchip [r + 1] == 1
									// if r + 2 <= 6 && [r + 2] == 0 && r + 3 <= 6 && [r + 3] == 0
										// drop chip at [r + 1]
								// if opchip [c + 1] == 1
									// if c + 2 <= 5 && [c + 2] == 0 && c + 3 <= 5 && [c + 3] == 0
										// drop chip at c
							// 
							// 
					// else build own
						// iterate from bottom up
							// iterate from left to right
								// start with first chip
								// if above chip is 0
									// attempt vertical
									// drop chip
								// else if beside left chip is 0 && below left chip != 0
									// check if left chips + 2 are 0
									// attempt horizontal on left
									// drop chip on left
								// else if beside right chip is 0 && below right chip != 0
									// check if right chips + 2 are 0
									// attempt horizontal on right
									// drop chip on right
								// else (diagonal)
									// if left upper chip is 0
										// check if upper left chips + 2 are 0
										// attempt diagonal on upper left
										// drop chip on left
									// if right upper chip is 0
										// check if upper right chips + 2 are 0
										// attempt diagonal on upper right
										// drop chip on right
			},
			
			pickRandom : function (array)
			{
				// pick random c from array
				// if array[c] == 1
				// recursive 
				// return array[c] != 1
			}
		}
});