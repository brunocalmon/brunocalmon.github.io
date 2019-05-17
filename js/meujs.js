$(document).ready(
		function() {

			var ctx = $("#myChart");

			var myChart = new Chart(ctx, {

				type : 'doughnut',
				data : {
					labels : [ "Estudando", "Programando Muito",
							"Tomando Cafe", "Academia",
							"Lendo", "Dormindo" ],
					datasets : [
							{
								label : "Primeira Dimensao",
								backgroundColor : [ 'rgba(0, 0, 225, 0.2)',
										'rgba(255, 0, 0, 0.2)',
										'rgba(255, 255, 0, 0.2)',
										'rgba(240, 173, 75, 0.2)',
										'rgba(255, 0, 255, 0.2)',
										'rgba(0, 255, 255, 0.2)',
										'rgba(92, 184, 94, 0.2)' ],
								strokeColor : "rgba(0, 114, 225, 1)",
								pointColor : "rgba(0, 114, 225, 1)",
								pointStrokeColor : "#fff",
								pointHighlightFill : "#fff",
								pointHighlightStroke : "rgba(0, 114, 225, 1)",

								data : [ 5, 8, 8, 3, 5, 6 ]
							},
							{
								label : "Segunda Dimensao",
								backgroundColor : [ 'rgba(0, 0, 225, 0.5)',
										'rgba(255, 0, 0, 0.5)',
										'rgba(255, 255, 0, 0.5)',
										'rgba(240, 173, 75, 0.5)',
										'rgba(255, 0, 255, 0.5)',
										'rgba(0, 255, 255, 0.5)',
										'rgba(92, 184, 94, 0.5)' ],
								strokeColor : "rgba(151,187,205,1)",
								pointColor : "rgba(151,187,205,1)",
								pointStrokeColor : "#fff",
								pointHighlightFill : "#fff",
								pointHighlightStroke : "rgba(151,187,205,1)",
								data : [ 10, 16, 18, 7, 10, 12 ]
							} ]
				},
				options : {
					legend : {
// display : false
					}
				}
			});
			
		});