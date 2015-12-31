require([
	'../bower_components/d3/d3.min',
	'line',
	'utils', 
	'radialProgress', 
	'models', 
	'views'
], function() {
	console.log('Hire Pedro: buesimples@gmail.com')

	views.renderDashboardElement('revenue','#53d02c','#f3faf0');
	views.renderDashboardElement('impressions','#16c8e5','#f3fafa');
	views.renderDashboardElement('visits','#f9c206','#fafaf0');

});